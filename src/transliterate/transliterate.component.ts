import { Component } from '@angular/core';
import { transliterate, __VERSION__ } from 'coptic-transliterator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transliterate',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, CommonModule],
  templateUrl: './transliterate.component.html',
  styleUrl: './transliterate.component.scss',
})
export class TransliterateComponent {
  copticText = '';
  arabicText = '';
  value = 'clear me';
  version = __VERSION__;
  onCopticInput() {
    this.arabicText = transliterate(this.copticText);
  }
}
