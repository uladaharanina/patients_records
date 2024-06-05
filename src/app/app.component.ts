import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    ... <app-header></app-header>
  `,
})
export class AppComponent {
  title = 'Patients data';  
  patients: Object[] = [
    { 
      name: 'John',
      lastName: 'Doe',
      age: 35,
      weight: 70,
      height: 175,
      diagnosis: 'Hypertension'
    },
    { 
      name: 'Jane',
      lastName: 'Smith',
      age: 45,
      weight: 65,
      height: 160,
      diagnosis: 'Diabetes'
    },
    { 
      name: 'Alice',
      lastName: 'Johnson',
      age: 50,
      weight: 80,
      height: 168,
      diagnosis: 'Asthma'
    },
    { 
      name: 'Bob',
      lastName: 'Williams',
      age: 60,
      weight: 75,
      height: 180,
      diagnosis: 'Arthritis'
    },
    { 
      name: 'Emily',
      lastName: 'Brown',
      age: 25,
      weight: 55,
      height: 165,
      diagnosis: 'Anemia'
    }
  ];
  

}
