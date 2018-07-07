import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  people: any[] = [
    {
      "name": "Douglas Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod Mueller",
      "country": 'USA'
    },
    {
      "name": "Day Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    }
  ];
}
