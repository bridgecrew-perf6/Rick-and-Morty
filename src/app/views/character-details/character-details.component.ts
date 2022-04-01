import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.pipe(
      take(1),
      tap(params=> console.log("estos son los parametros",params))
    ).subscribe()
  }
  
  ngOnInit(): void {
  }

}
