import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[];
  nrborrado: number = 0;
  heroeBorrado: string = '';
  constructor() { 
    this.heroes = ['Spiderman','Ironman','Hulk','Thor'];
  }

  ngOnInit(): void {
  }
  borrarHeroe():void{
     this.nrborrado = this.nrborrado+1;
     this.heroeBorrado = this.heroes.pop() || '';
  }
}
