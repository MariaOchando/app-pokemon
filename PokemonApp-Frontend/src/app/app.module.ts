import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { TypesComponent } from './components/types/types.component';
import { PokemonsDetailsComponent } from './components/pokemons/pokemons-details.component';
import { AbilitiesDetailsComponent } from './components/abilities/abilities-details.component';
import { TypesDetailsComponent } from './components/types/types-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    TypesComponent,
    AbilitiesComponent,
    PokemonsDetailsComponent,
    AbilitiesDetailsComponent,
    TypesDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
