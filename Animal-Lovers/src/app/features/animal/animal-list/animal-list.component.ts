import {debounceTime, distinctUntilChanged, map} from 'rxjs/internal/operators';
import { IAnimal,  } from 'src/app/shared/model/mock-files/animal';
import { AnimalService } from './../../services/animal.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  
  animals$ :Observable<Array<IAnimal>>;  
  filtered$:Observable<Array<IAnimal>>
  @Input()cardTitle:string;

  constructor(private animalService:AnimalService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routePath = this.route.snapshot.url[0].path;

		if ( routePath === 'dashboard' ) {
			this.animals$ = this.animalService.topRated(4);
			this.cardTitle = 'I piu votati';
		} else {
			this.animals$ = this.animalService.getAnimals();
			this.cardTitle = 'I nostri animali';
		}
		this.filtered$ = this.animals$;
  }
  
	animalSearch( searchEvent: KeyboardEvent ): void {
		of( searchEvent )
      .pipe(debounceTime( 300 ),distinctUntilChanged(),
       map((event) => (event.target as HTMLInputElement ).value )
			)
			.subscribe( searchTerm => {this.filtered$ = this.animals$.pipe(
            map(animals =>animals.filter( animal => animal.name.toUpperCase().includes(searchTerm.toUpperCase())
						)));
			});
	}

  }

  

