import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template:`
  <input #inputSearch class="form-control me-2" 
  type="search" 
  placeholder="Search..."
  aria-label="Search"
  (keyup)="onSearch(inputSearch.value)"
  >
  `,
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value:string){
    console.log("Search",value)
    if(value && value.length >3){
      this.router.navigate(['character-list'], {
        queryParams:{q:value},
      })
    }
  }
  
}
