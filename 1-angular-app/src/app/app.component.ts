import { Component } from '@angular/core';
import  {random} from 'lodash';

//declare var _:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Villani';

  onNameChanged(newName){
      this.rootName = newName;
      console.log(random(1,10));
  }


}
