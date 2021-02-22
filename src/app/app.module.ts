import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ComponentContainerComponent } from './component-container/component-container.component';
import { ItemComponentContainerComponent } from './item-component-container/item-component-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ComponentContainerComponent,
    ItemComponentContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
