import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ICharacter} from 'src/app/models/character.interface';



@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
//  characters!: ICharacter;
character?: ICharacter
  

  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute, 
    ) {
   
    }
  
  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.getAll('id')
    this.apiService.getCharacter(id)
      .subscribe(character => this.character = character)

  }

}
