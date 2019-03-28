import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { PokemonsRoutingModule } from './pokemons-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

import {ScrollDispatchModule} from '@angular/cdk/scrolling'
import { ModalModule } from 'ngx-bootstrap';
import { PokemonsDetailsComponent } from './components/pokemons-details/pokemons-details.component';


@NgModule({
  declarations: [
    PokemonsComponent, 
    PokemonsListComponent, PokemonsDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    ScrollDispatchModule,
    ModalModule.forRoot(),
    //SharedModule
  ]
})
export class PokemonsModule { }
