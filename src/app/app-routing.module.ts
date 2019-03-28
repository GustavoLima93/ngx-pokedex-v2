import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: './pages/pokemons/pokemons.module#PokemonsModule'
  },
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
