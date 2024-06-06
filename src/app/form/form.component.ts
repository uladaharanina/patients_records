import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() visibility!: boolean;
  @Input() selectedPatient: any;
  @Output() closeFormEvent = new EventEmitter<void>();

  closeForm = () => {
    this.closeFormEvent.emit();
  }

}
