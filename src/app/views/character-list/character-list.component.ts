import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Character } from 'src/app/models/character.interface';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
 characters: any;
// characters!: Character

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.getApi()
    this.getCharacter()
  }

  // getApi(){
  //   this.api.getApi().subscribe((data: any )=>{
  //     console.log('esta es la data de api', data);
  //     this.characters = data
  //   })
  // }

  getCharacter(){
    this.api.getCharacter().subscribe((data: any )=>{
      console.log('esta es la data', data.results);
      this.characters = data.results
    })
  }
  
}
