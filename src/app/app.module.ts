import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './module/features/user/user-container/user-container.component';
import { UserListComponent } from './module/features/user/user-list/user-list.component';
import { UserDetailComponent } from './module/features/user/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UserContainerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
