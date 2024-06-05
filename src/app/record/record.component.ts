import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
@Input() patients: any
}
