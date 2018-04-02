import { Component,OnInit } from '@angular/core';

import {CharactersService} from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    service : CharactersService;

    constructor(service:CharactersService){
        this.service = service;
    }

  ngOnInit(){
    this.service.fetchCharacters();
  }
}
