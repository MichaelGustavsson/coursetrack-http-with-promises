import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  providers: [CourseService]
})
export class CourseListComponent implements OnInit{
  courses: Course[];
  course: Course;

  constructor(private service: CourseService) { }

  getCourses(): void{
    this.service.getCourses().then(courses => this.courses = courses);
  }

  ngOnInit() {
    this.getCourses();
  }

  onSelect(course: Course): void {
    this.course = course;
  }
}
