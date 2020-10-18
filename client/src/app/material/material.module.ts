import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports : [materialModules]
})
export class MaterialModule { }
