import { Component, Input } from '@angular/core';
import { Course } from './course';

@Component({
  moduleId: module.id,
  selector: 'course-detail',
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent {
  @Input()
  course: Course;
}
