import { NgModule } from '@angular/core';

//PrimeNg modules: es recomendable acomodarlos en orden alfabetico, tanto en import como en exports.
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset'
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
