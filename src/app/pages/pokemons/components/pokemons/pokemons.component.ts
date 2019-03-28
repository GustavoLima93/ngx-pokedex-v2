import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


import { PokemonsService } from './../../services/pokemons.service';

import { Pokemon } from './../../../../models/pokemon.model';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<BsModalRef>;

  public pokemons: Pokemon[];
  public pokemon: Pokemon;
  public modalRef: BsModalRef;

  public configModal = {
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  constructor(
    private pokemonsService: PokemonsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getPokemons()
  }

  getPokemons() {
    return this.pokemonsService.getAllPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    })
  }

  detailsPokemon(event: Pokemon) {
    this.pokemon = event;
    return this.openModal(this.modal);
  }

  openModal(template: TemplateRef<BsModalRef>) {

    this.modalRef = this.modalService.show(template, this.configModal);

  }

}
