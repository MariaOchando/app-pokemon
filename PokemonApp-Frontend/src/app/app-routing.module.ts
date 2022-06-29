import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { TypesComponent } from './components/types/types.component';
import {  AbilitiesComponent } from './components/abilities/abilities.component';
import { PokemonsDetailsComponent } from './components/pokemons/pokemons-details.component';
import { AbilitiesDetailsComponent } from './components/abilities/abilities-details.component';
import { TypesDetailsComponent } from './components/types/types-details.component';
import { SearchFilterComponent } from './components/searchFilter/searchFilter.component';

const routes: Routes = [
  //{path: " ", component: HomeComponent},
  {path: "pokemons", component: PokemonsComponent},
  {path: "types", component: TypesComponent},
  {path: "abilities", component:  AbilitiesComponent},
  {path: "pokemon/:pokemon", component: PokemonsDetailsComponent},
  {path: "ability/:ability", component:AbilitiesDetailsComponent},
  {path: "type/:type", component: TypesDetailsComponent},
  {path: "search", component: SearchFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
