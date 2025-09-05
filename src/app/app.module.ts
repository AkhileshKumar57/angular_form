import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './feature/parent/parent.component';
import { PersonalComponent } from './feature/personal/personal.component';
import { AddressComponent } from './feature/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './feature/experience/experience.component';
import { HighlightColorDirective } from './core/directive/custom-directive';
import { HomeComponent } from './home/home.component';
import { camelCase } from './core/pipe/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PersonalComponent,
    AddressComponent,
    ExperienceComponent,
    HighlightColorDirective,
    HomeComponent,
    camelCase
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
