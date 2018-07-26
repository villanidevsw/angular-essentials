import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../characters.service';
import { CharacterOption } from './character-options';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides: CharacterOption[] = [];
  selectedChar: string;

  service: CharactersService;
  constructor(service: CharactersService) {
    this.service = service;
  }

  ngOnInit() {
    const option1: CharacterOption = {
      display: 'None',
      value: ''
    };

    const option2: CharacterOption = {
      display: 'Light',
      value: 'light'
    };

    const option3: CharacterOption = {
      display: 'Dark',
      value: 'dark'
    };

    this.availableSides.push(option1, option2, option3);
    this.selectedChar = 'dark';
  }

  onSubmit(submittedForm) {
    // pega os valores que estao no name
    // do form
    console.log(submittedForm.value);
    if (submittedForm.invalid) {
        return;
    }
    this.service.addCharacter(submittedForm.value.name, submittedForm.value.side);
    submittedForm.reset();
  }

  onSelectSide (opt: string) {
    // event:any (change)="onSelectSide($event)"
    // dessa maneira recebe o evento inteiro
    // console.log(event.target.value);
    console.log('selecionado');
    console.log(opt);
  }
}
