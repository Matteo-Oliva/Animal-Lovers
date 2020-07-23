import { Observable,  } from 'rxjs';
import { AnimalService } from './../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/shared/model/mock-files/animal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  animals$ :  Observable<Array<IAnimal>>;

  constructor(private animalService:AnimalService) { }

  ngOnInit(): void {
    this.getTopRated();
  }
  getTopRated():Observable<Array<IAnimal>> {
    return this.animals$ = this.animalService.getHighRated(0,4);
    
        
  }

}
