import { NgModule } from '@angular/core';

//PrimeNg modules: es recomendable acomodarlos en orden alfabetico, tanto en import como en exports.
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
