import { Component, OnInit, Input, Output, EventEmitter,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  // @Input() characters;
  // usando services nao precisa mais desse metodo
  // @Output() sideAssigned = new EventEmitter<{name:string,side:string}>();

  characters = [];
  activedRoute: ActivatedRoute;
  service: CharactersService;
  loadedSide = 'all';
  subscription: Subscription;

  constructor(activedRoute: ActivatedRoute, service: CharactersService) {
    this.activedRoute = activedRoute;
    this.service = service;

  }

  ngOnInit() {
     // eh executado sempre que o angular inicia um componente
    // aqui iremos ficar escutando as trocas de rotas
    // padrao observer
    this.activedRoute.params.subscribe((params) => {
      //aqui recupera os parametros da rotas
      // e a variavel virá igual foi definido nas rotas
      //(app.module => no vetor routes)
      //esse trecho é assincrono
      console.log(params);
      this.characters = this.service.getCharacters(params.side);
      this.loadedSide = params.side;
    });

    //aqui eu reajo ao evento da mudanca de
    //character como subscriber
    this.subscription = this.service.charactersChanged.subscribe(() => {
      this.characters = this.service.getCharacters(this.loadedSide);

    });


  }

  ngOnDestroy() {
    //o angular executa esse método sempre que o angular
    //vai destruir um componente
    //aqui nós saimos da subscription
    //assim que o componente é destruido
    // assim evita vazamento de memoria
    this.subscription.unsubscribe();
  }
  //usando services nao precisa mais desse metodo
  /*onSideAssigned(characterInfo){
      //mais uma vez tem que implementar o evento no componente
      //onde ele é usado, no caso tabs.component.html
    this.sideAssigned.emit(characterInfo);
    }*/
}
