import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CharactersService } from './characters.service';
import { LogService } from './log.service';
import { HeaderComponent } from './header/header.component';
import {AppRouterModule} from './app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [CharactersService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
