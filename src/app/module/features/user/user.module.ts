import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [UserContainerComponent, UserListComponent, UserDetailComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
