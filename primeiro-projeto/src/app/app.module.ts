import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import {CursosModule} from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
