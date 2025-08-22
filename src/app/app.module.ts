import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './feature/parent/parent.component';
import { PersonalComponent } from './feature/personal/personal.component';
import { AddressComponent } from './feature/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './feature/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PersonalComponent,
    AddressComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
