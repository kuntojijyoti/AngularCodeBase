import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { GetAllComponent } from './get-all/get-all.component';
import { RemoveComponent } from './remove/remove.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    GetAllComponent,
    RemoveComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
