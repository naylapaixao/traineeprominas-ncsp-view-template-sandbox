import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, [Validators.required]],
      profile : [null, Validators.required]
    });
  }

  addUser(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postUser(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/user']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
