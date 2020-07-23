import { IAnimal } from './../../../shared/model/mock-files/animal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animalcard',
  templateUrl: './animalcard.component.html',
  styleUrls: ['./animalcard.component.css']
})
export class AnimalcardComponent implements OnInit {

  @Input() animal : IAnimal;

  constructor() { }

  ngOnInit(): void {
  }

}
