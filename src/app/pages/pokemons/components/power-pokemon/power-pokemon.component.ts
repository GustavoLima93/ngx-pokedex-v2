import { Component, OnInit, Input } from '@angular/core';
import { Statu } from 'src/app/models/statu.model';



@Component({
  selector: 'app-power-pokemon',
  templateUrl: './power-pokemon.component.html',
  styleUrls: ['./power-pokemon.component.scss']
})
export class PowerPokemonComponent implements OnInit {

  @Input() public single: Statu[] = [];

  /** options grafico */

  public showYAxis = true; 
  public showYAxisLabel = true;
  public colorScheme = {
    domain: ['#FF1493', '#00FA9A', '#00BFFF', '#FFD700', '#FFA500', '#FF0000']
  };
  public view: Number[] = [300, 200]; 

  /** fim options grafico */


  constructor() { }

  ngOnInit() {
  }

}
