import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './course';

@Injectable()
export class CourseService {
  private _url: string = 'api/courses';

  constructor(private _http: Http) { }

  getCourses(): Promise<Course[]> {
    return this._http.get(this._url)
      .toPromise()
      .then(response => response.json().data as Course[])
      .catch(this.errorHandler);
  }

  errorHandler(error: any) {
    console.error('Oops något har inträffat', error);
    return Promise.reject(error.Message || error);
  }
}
