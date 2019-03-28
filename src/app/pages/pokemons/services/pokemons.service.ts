import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment';

import { Pokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private URL_POKEMONS = `${environment.url}/pokemons`
  private URL_POKEMON = `${environment.url}/pokemon/name/`

  public pokemonName: string = ''
  public filtro = new BehaviorSubject(this.pokemonName);
  public filtroAtual = this.filtro.asObservable();

  constructor(
    private http: HttpClient
  ) { }


  setFiltro(filtro:string) {  
    filtro = filtro.toLocaleLowerCase();
    this.filtro.next(filtro);  
  }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.URL_POKEMONS).pipe(map((data:any) => data.result.filter((element:Pokemon)=>{
      return element != null
    })));
  }

  getFilterPokemons(name:string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.URL_POKEMON}${name}`).pipe(map((data:any) => data.result.filter((element:Pokemon)=>{
      return element != null
    })));
  }

}
