import { Component, OnInit } from '@angular/core';


interface Personaje{

  nombre:string;
  poder:number;


}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[]=[

    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 14000
    }


  ]

  nuevo: Personaje={

    nombre:'',
    poder: 0
  }

  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);


  }




}
