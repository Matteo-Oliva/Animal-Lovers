import { LogGuardGuard } from './features/services/guards/log-guard.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AnimalListComponent } from './features/animal/animal-list/animal-list.component';
import { LoginComponent } from './features/login/login.component';


const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	 { path: 'animals', component: AnimalListComponent, canActivate:[LogGuardGuard] },
	 { path: 'dashboard', component: DashboardComponent },
	 { path: 'login', component: LoginComponent, },
	 { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
