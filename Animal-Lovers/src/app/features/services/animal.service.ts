
import { MOCK_ANIMALS } from './../../shared/model/mock-files/mock-file';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAnimal } from 'src/app/shared/model/mock-files/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animals = MOCK_ANIMALS;

  constructor() { }

  getAnimals():Observable<Array<IAnimal>> {
		return of(this.animals );
  }

  topRated(numOfElements:number):Observable<Array<IAnimal>>{
		return of([...this.animals].sort(( a, b )=> b.rate - a.rate).slice( 0, numOfElements ));
	}
  
}
