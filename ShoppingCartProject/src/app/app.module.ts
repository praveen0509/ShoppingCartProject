import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { MenWatchesComponent } from './men-watches/men-watches.component';
import { AllMobilesDisplayPageComponent } from './mobileFiles/all-mobiles-display-page/all-mobiles-display-page.component';
import { DisplayCompleteDetailsComponent } from './display-complete-details/display-complete-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SlideShowComponent,
    MenWatchesComponent,
    AllMobilesDisplayPageComponent,
    DisplayCompleteDetailsComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'loginPage', component: LoginPageComponent },
      { path: 'registrationPage', component: RegistrationPageComponent },
      { path: 'mobiles', component: SlideShowComponent },
      { path: 'menWatches', component: MenWatchesComponent },
      { path: 'allMobilesDisplay', component: AllMobilesDisplayPageComponent },
      { path: 'allMobilesDisplay/:', component: AllMobilesDisplayPageComponent },
      { path: 'displayCompleteDetails', component: DisplayCompleteDetailsComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
