import { NgModule } from '@angular/core';

//PrimeNg modules: es recomendable acomodarlos en orden alfabetico, tanto en import como en exports.
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset'
import { MenubarModule } from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
