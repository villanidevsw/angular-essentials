import  {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'app-user',
    template:`
        <input type="text" (input)="onUserInput($event)" [value]="name">
        <p>Olá {{name}}</p>
        <p>Eu sou o componente do usuario</p>
        <app-user-detail></app-user-detail>
    `
})
// [(ngModel)]="name" faz a mesma coisa que as expressoes abaixo
// é uma directive e ela faz o two way binding
//(input)="onUserInput($event)" value={{name}}
//(input)="onUserInput($event)" [value]="name"
export class UserComponent{
    //faz o atributo ser acessado de fora
    //e deixa possivel ele ser alterado
    @Input() name;
    @Output() nameChanged = new EventEmitter<string>();

    onUserInput(event){
        //this.name = event.target.value;
        this.nameChanged.emit(event.target.value);

    }
}
