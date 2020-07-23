import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './features/animal/animal-list/animal-list.component';


const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	 { path: 'animals', component: AnimalListComponent },
	 { path: 'dashboard', component: DashboardComponent },
	// { path: 'login', component: LoginComponent, },
	// { path: '**', component: DashBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
