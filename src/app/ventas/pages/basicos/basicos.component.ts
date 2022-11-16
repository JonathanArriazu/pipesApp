import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = "jonathan";
  nombreUpper: string = "JONATHAN";
  nombreCompleto: string = "JoNaThAN";

  fecha: Date = new Date(); //fecha actualizada al dia de hoy

}
