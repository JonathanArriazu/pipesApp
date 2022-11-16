import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = "";
  genero: string = "masculino";

  invitacionMapa= {
    "masculino" : "invitarlo",
    "femenino" : "invitarla"
  }

  //i18nPlural
  clientes:string[] = ["Maria", "Pedro", "Juan", "Educardo", "Fernanda"];

  clientesMapa= {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos 1 cliente esperando.",
    "other": "tenemos # clientes esperando"    
  }

  
  cambiarCliente() {
    this.nombre = "Melisa",
    this.genero = "femenino"
    
  }

  borrarCliente() {
    this.clientes.pop()
  }

  //JsonPipe

  heroes= [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    }
  ]

  //KeyValuePipe
  persona = {
    nombre: "Jonathan",
    edad: 28,
    direccion: "Tucumán, Argentina"
  }

  //AsyncPipe
  miObservable = interval(1000); //Observable que va a estar emitiendo valores numericos hasta 1000

  valorPromesa = new Promise( (resolve, reject) =>{

    setTimeout(() => {
      resolve("Tenemos data de promesa");
    }, 3500);

  } )
}
