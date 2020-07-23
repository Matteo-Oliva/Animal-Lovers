import { IAnimal,  } from 'src/app/shared/model/mock-files/animal';
import { AnimalService } from './../../services/animal.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals$ :  Observable<Array<IAnimal>>;

  constructor(private animalService:AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
  }
getAnimals():Observable<Array<IAnimal>> {
  return this.animals$ = this.animalService.getAnimals();
}
  
}
