import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  characters:any;
  

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { 

  }
  
  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter(){
    this.api.getCharacter().subscribe((data: any )=>{
      this.characters = data.results
    })
  }

}
