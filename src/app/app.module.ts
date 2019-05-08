import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import {environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from './todo-service.service';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    FilterPipe,
    SearchPipe,
    NavbarComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule,
    RouterModule.forRoot([
        {path: '', component: LoginComponent}
    ])
  ],
  
  providers: [
    TodoServiceService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
