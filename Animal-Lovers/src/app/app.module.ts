import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AnimalcardComponent } from './features/animal/animal-card/animalcard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './features/animal/animal-list/animal-list.component';
import { MenuComponent } from './features/menu/menu.component';
import { LoginComponent } from './features/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,       
    AnimalListComponent,
    AnimalcardComponent,
    DashboardComponent,
    MenuComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
