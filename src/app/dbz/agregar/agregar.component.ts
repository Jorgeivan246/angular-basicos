import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface Personaje{

  nombre:string;
  poder:number;


}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {



  constructor() { }

  @Input() nuevo: Personaje={
    nombre:'',
    poder:0
  }

  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter<Personaje>();


  agregar(){
      if(this.nuevo.nombre.trim().length==0)
      {
        return;
      }

      this.onNuevoPersonaje.emit(this.nuevo)

      // this.nuevo={
      //   nombre: '',
      //   poder: 0
      // }

      // console.log(this.nuevo)
  }

}
