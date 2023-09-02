import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { RouterModule } from '@angular/router';
import { weatherInterceptors } from './pages/interceptors/weather.interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NavbarComponent,
    SearchComponent,
    WeatherComponent,
    HttpClientModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS, useClass:weatherInterceptors, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
