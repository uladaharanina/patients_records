import { Component } from '@angular/core';
import { RecordComponent } from '../record/record.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecordComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  patients: any[] = [
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

  visibility: boolean = false;
  selectedPatient = null; // for modification

  //Display form
  openForm = (i:number) =>{
    this.visibility = true;
    this.selectedPatient = this.patients[i];
  }
  hideForm = () =>{
    this.visibility = false;
  }
  
}
