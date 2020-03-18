import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from './components/users/login/login.component';
import {RegisterComponent} from './components/users/register/register.component';
import {FormsModule} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component';
import {AngularFireStorage} from '@angular/fire/storage';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
  ],
  providers: [AngularFireAuth, AngularFirestore, AngularFireStorage],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
