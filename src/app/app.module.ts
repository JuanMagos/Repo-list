import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { RepositoriesService } from './services/repositories/repositories.service';
import { ProfileService } from './services/profile/profile.service';


@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'repos',
        component: RepositoriesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ])
  ],
  providers: [RepositoriesService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
