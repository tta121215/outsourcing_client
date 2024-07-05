import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionProfileComponent } from './condition-profile/condition-profile.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  {path:'condition-profile',component:ConditionProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
