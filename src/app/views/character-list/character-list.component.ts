import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICharacter,} from 'src/app/models/character.interface';
import { ApiService } from 'src/app/services/api/api.service';




@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: ICharacter[] = []
  page?: number =0
 
  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute, 
    private router: Router) {

   }

  ngOnInit(): void {
    this.getCharacters()
   
  }

  // getApi(){
  //   this.api.getApi().subscribe((data: any )=>{
  //     console.log('esta es la data de api', data);
  //     this.characters = data
  //   })
  // }

  getCharacters(): void {
    this.apiService.getCharacters().subscribe(characters =>      
      this.characters = characters.results)
  }

  // getLocations(): void {
  //   this.apiService.getLocations().subscribe(location =>
  //     this.locations = locations.results)
  // }
  


}
