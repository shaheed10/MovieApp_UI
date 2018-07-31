import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms';
import { ServiceService } from './service.service';
import { OmdbComponent } from './omdb/omdb.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { OmdbService } from './omdb/omdb.service';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,routingComponents, OmdbComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule,FormsModule,NoopAnimationsModule,
    MatButtonModule,MatCheckboxModule,MatListModule,MatInputModule, MatFormFieldModule,MatGridListModule,MatCardModule,MatToolbarModule
  ],
  providers: [ServiceService,OmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
