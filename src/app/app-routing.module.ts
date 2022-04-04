import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';
import { CharacterListComponent } from './views/character-list/character-list.component';

import { HomeComponent } from './views/home/home.component';
import { LocationComponent } from './views/location/location.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path: 'character-list', component: CharacterListComponent},
  { path: 'character-details/:id', component: CharacterDetailsComponent},
  { path: 'location', component: LocationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
