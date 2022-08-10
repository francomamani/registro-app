import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroTableComponent } from './registro-table/registro-table.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroTableComponent,
    RegistroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
