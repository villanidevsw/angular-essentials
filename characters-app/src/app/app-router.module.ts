import {NgModule} from '@angular/core'
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CharactersService } from './characters.service';

const routes = [
  {
    path: 'characters',component: TabsComponent,
    children: [
        {path:'',redirectTo:'all',pathMatch:'full'},
      { path: ':side', component: ListComponent }
    ]
  },
  { path: 'newCharacter', loadChildren:'./create-character/create-character.module#CreateCharacterModule' },
  {path:'**',redirectTo:'/characters'}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class AppRouterModule{}
