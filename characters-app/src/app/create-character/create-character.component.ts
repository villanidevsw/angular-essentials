import { Component, OnInit } from '@angular/core';

import { CharactersService } from "../characters.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ]
  service: CharactersService;
  constructor(service: CharactersService) {
    this.service = service;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    //pega os valores que estao no name
    // do form
    console.log(submittedForm.value);
    if (submittedForm.invalid) {
        return;
    }
    this.service.addCharacter(submittedForm.value.name,submittedForm.value.side);
    submittedForm.reset();
  }
}
