import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILocation, ILocations } from 'src/app/models/location';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: ILocation[] = []


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getLocations()
  }

  getLocations(): void {
    this.apiService.getLocations().subscribe(locations =>
      this.locations = locations.results)
  }

  // getLocation(): void {
  //   const id = +this.route.snapshot.paramMap.getAll('id')
  //   this.apiService.getLocation(id)
  //   .subscribe(location => this.location = location)
  // }
}
