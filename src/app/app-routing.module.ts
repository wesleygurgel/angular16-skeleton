import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [guestGuard],
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [authGuard],
    children: [{ path: 'todo', component: TodoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
