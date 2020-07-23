import { AnimalcardComponent } from './features/animal/animal-card/animalcard.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnimalListComponent } from './features/animal/animal-list/animal-list.component';
import { DashboardComponent } from './features/features/dashboard/dashboard.component';
import { MenuComponent } from './features/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
       
    AnimalListComponent,
    AnimalcardComponent,
    DashboardComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
