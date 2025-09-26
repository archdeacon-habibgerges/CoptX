import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { tranliterate } from '../../.yalc/coptic-arabic-transliterate';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  copticText = '';
  arabicText = '';
  value = 'clear me';
  onCopticInput() {
    this.arabicText = tranliterate(this.copticText);
  }
}
