import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgFor, NgStyle} from '@angular/common';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
@Input() patients: any[] = [];
@Output() openFormEvent = new EventEmitter<number>();

 blueShades: string[] = [
  'rgba(255,39,169, 0.1) ',  // Base blue color
  'rgba(95,39,255, 0.1) ',  // Darker shade of blue
  'rgba(255,39,39, 0.1)',  // Even darker shade of blue
  'rgba(44,39,255, 0.1)',  // Darker shade of blue
  'rgba(57,255,39, 0.1)'   // Darkest shade of blue
];

//Get random color
applyColor = () => {
  const index: number = Math.floor(Math.random() * this.blueShades.length);
  return this.blueShades[index];
}

//Delete Record
deleteRecord = (index:number) => {
  this.patients.splice(index,1);
}

showForm = (i:number) => {
  this.openFormEvent.emit(i);
}

/*

modifyRecord = (index:number, data:any) =>{
  this.patients[index] = {
    name: data.name,
    lastName: data.lastName,
    age: data.age,
    weight: data.weight,
    height: data.height,
    diagnosis: data.diagnosis
  }

  
}
*/

}
