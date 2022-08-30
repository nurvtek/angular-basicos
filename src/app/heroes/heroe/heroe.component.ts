import { Component } from "@angular/core";



@Component({
        selector: 'app-heroe',
        templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
   
      nombre: string = 'Ironman';
      edad: number  = 45;

      get nombreCapitalizado(): string {
           return this.nombre.toUpperCase();
      }

      obtenerNombre(): string {
          return `${this.nombre} - ${this.edad}`
      }

      cambiarNombre():void {
        
        this.nombre = (this.nombre == 'Ironman')? 'Spiderman': 'Ironman';
      }

      cambiarEdad(): void {
         this.edad = (this.edad == 45)? 25: 45;
      }

}