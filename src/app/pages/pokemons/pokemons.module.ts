import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {ScrollDispatchModule} from '@angular/cdk/scrolling'
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ModalModule } from 'ngx-bootstrap';

import { PokemonsRoutingModule } from './pokemons-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

import { PokemonsDetailsComponent } from './components/pokemons-details/pokemons-details.component';
import { PowerPokemonComponent } from './components/power-pokemon/power-pokemon.component';


@NgModule({
  declarations: [
    PokemonsComponent, 
    PokemonsListComponent, PokemonsDetailsComponent, PowerPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    ScrollDispatchModule,
    ModalModule.forRoot(),
    NgxChartsModule,
    SharedModule
  ]
})
export class PokemonsModule { }
