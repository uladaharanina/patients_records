import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
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
}
