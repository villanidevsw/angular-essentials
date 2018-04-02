import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import  {CharactersService} from '../characters.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    @Input() character;
    //ao usar services nao precisa mais usar EventEmitter
    //@Output() sideAssigned = new EventEmitter<{name:string,side:string}>();
    service : CharactersService;
  constructor(service : CharactersService) {
      this.service = service;
   }

  ngOnInit() {
  }

  onAssign(selectedSide){
      //1 - nao fazer desta maneira... usar EventEmitter
      //para passar paramentros entre componentes
    //this.character.side =  selectedSide;

    //2 - desta maneira o list.component.html ira ouvir este evento
    //pois ele que usa o app-item
    //mas tbm nao eh uma boa pratica...usar services
    //this.sideAssigned.emit({name:this.character.name,side:selectedSide});

    //3-usando services
    this.service.onSideChosen({name:this.character.name,side:selectedSide});
  }



}
