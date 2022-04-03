import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { HomeComponent } from './views/home/home.component';
import { CharacterListComponent } from './views/character-list/character-list.component';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';

import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './views/location/location.component';
import { EpisodeComponent } from './views/episode/episode.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormSearchComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    LocationComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
