import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Composant1Component } from './composant1/composant1.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { ModuleComponent } from './module/module.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [AppareilService],
  declarations: [
    AppComponent,
    HelloComponent,
    Composant1Component,
    AppareilComponent,
    ModuleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
