import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { RequestComponent } from './components/request/request.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { OutputComponent } from './components/output/output.component';
import { DataService } from './services/data.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TableComponent,
    RequestComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    DataService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
