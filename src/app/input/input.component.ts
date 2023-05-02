import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputId: string | undefined;
  @Input() inputName: string = '';

  @Input() inputSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() inputStatus: 'default' | 'success' | 'danger' = 'default';

  @Input() inputType: 'text' | 'number' | undefined;

  inputValue: string | undefined;

  @Input() inputMinLength: string | number | null = null;
  @Input() inputMaxLength: string | number | null = null;

  @Input() inputPlaceholder: string | undefined;

  @Input() inputRequiredField: boolean = false;
  @Input() inputFormControlName: string = '';

  @Input() inputIsDisabled: boolean = false;
  @Input() tabIndex: number | undefined;
}
