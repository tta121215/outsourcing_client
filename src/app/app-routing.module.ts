import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssemblyComponent } from './assembly/assembly.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'assembly', component: AssemblyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
