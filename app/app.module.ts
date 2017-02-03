import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CourseDetailComponent } from './course/course-detail.component';
import { CourseListComponent } from './course/course-list.component';

// Fake Web API service.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService } from './data/mock-data';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MockDataService)
  ],
  declarations: [
    AppComponent,
    CourseDetailComponent,
    CourseListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
