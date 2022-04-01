import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';
import { CharacterListComponent } from './views/character-list/character-list.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path: 'character-list', component: CharacterListComponent},
  { path: 'character-details', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
