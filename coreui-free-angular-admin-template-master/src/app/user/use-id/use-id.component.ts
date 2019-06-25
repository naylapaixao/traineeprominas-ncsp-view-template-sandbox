import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-use-id',
  templateUrl: './use-id.component.html',
  styleUrls: ['./use-id.component.scss']
})
export class UseIdComponent implements OnInit {

  user: User = { id: null, name: '', lastName: '', profile: ''};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id) {
    this.api.getUser(id)
      .subscribe(data => {
        this.user = data;
        console.log(this.user);
        this.isLoadingResults = false;
      });
  }

  deleteUser(id) {
    this.isLoadingResults = true;
    this.api.deleteUser(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/user']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
