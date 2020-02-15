import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Materialize components imports
import { MzCardModule } from 'ngx-materialize';



import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
