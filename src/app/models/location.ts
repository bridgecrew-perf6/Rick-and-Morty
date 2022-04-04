export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
  }
  export interface ILocations {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
    results: [ILocation];
  }