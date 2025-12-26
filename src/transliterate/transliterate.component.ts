import { Component } from '@angular/core';
import { transliterate } from 'coptic-transliterator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transliterate',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './transliterate.component.html',
  styleUrl: './transliterate.component.scss',
})
export class TransliterateComponent {
  copticText = '';
  arabicText = '';
  value = 'clear me';
  onCopticInput() {
    this.arabicText = transliterate(this.copticText);
  }
}
