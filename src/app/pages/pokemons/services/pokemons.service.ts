import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment';

import { Pokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private URL_POKEMON = `${environment.url}/pokemons`

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.URL_POKEMON).pipe(map((data:any) => data.result.filter((element:Pokemon)=>{
      return element != null
    })));
  }

}
