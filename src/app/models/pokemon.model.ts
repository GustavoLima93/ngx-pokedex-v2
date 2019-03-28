import { Evolution } from './evolution.model';
import { Tipo } from './tipo.model';
import { Statu } from './statu.model';
import { Habilidade } from './habilidade.model';

export interface Pokemon {
    
    numeroDex: number;
    nome: string;
    img: string; 
    status: Statu[];    
    tipo: Tipo[];
    sprites: string[];
    descricao: string;    
    habilidades: Habilidade[];     
    gif: string;
    altura:string;
    peso:string;
    genero:string;
    evolutions?: Evolution[];
    
}