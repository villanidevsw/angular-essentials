import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import  'rxjs/add/operator/map';

import { LogService } from './log.service';

@Injectable()
export class CharactersService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];
  charactersChanged = new Subject<void>();
  private log: LogService;
  http: Http;

  constructor(log: LogService, http: Http) {
    this.log = log;
    this.http = http;
  }

  fetchCharacters() {
      //o http do angular utiliza o modelo de subscribe
    this.http.get('https://swapi.co/api/people/')
    .map((response : Response) =>{
        const data = response.json();
        const results = data.results;
        //esse map aqui é do javascript...
        const characters = results.map((character) =>{
            return {name:character.name,side:''};
        });
        return characters;
    })
    .subscribe((data) => {
      this.log.writeLog(data);
      this.characters = data;
      //após o retorno
      // preciso emitir o valor (notificar)
      // para quem esta como subscriber
      this.charactersChanged.next();
    })
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((selectedCharacter) => {
      return selectedCharacter.side === chosenList;
    })
  }

  onSideChosen(characterInfo) {
    const position = this.characters.findIndex((character) => {
      return character.name === characterInfo.name;
    })

    this.characters[position].side = characterInfo.side;
    //após a mudança do character
    // preciso emitir o valor (notificar)
    // para quem esta como subscriber
    this.charactersChanged.next();
    this.log.writeLog(`trocou o lado de ${characterInfo.name}, novo lado: ${characterInfo.side}`);
  }

  addCharacter(name, side) {
    const position = this.characters.findIndex((character) => {
      return character.name === name;
    })
    if (position !== -1) {
      return;
    }
    const newCharacter = { name: name, side: side };
    this.characters.push(newCharacter);
  }
}
