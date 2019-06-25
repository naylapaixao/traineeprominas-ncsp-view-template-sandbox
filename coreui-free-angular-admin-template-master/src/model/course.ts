import { Teacher } from './teacher';

export class Course {
    id: number;
    name: string;
    city: string;
    period: number;
    teachers: Teacher[] = [];
}