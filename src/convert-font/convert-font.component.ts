import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { convert } from 'coptic-font-converter';
import { FontType } from 'coptic-font-converter';
import { pairwise, startWith } from 'rxjs';

@Component({
  selector: 'app-convert-font',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './convert-font.component.html',
  styleUrl: './convert-font.component.scss',
})
export class ConvertFontComponent implements OnInit {
  inputFont: FontType = FontType.CS_NEW_ATHANASIUS;
  outputFont: FontType = FontType.UNICODE;
  inputText = '';
  outputText = '';
  fonts = Object.entries(FontType).map(([key, value]) => ({ key, value }));
  inputFontControl = new FormControl<FontType>(FontType.CS_NEW_ATHANASIUS);
  outputFontControl = new FormControl<FontType>(FontType.UNICODE);
  ngOnInit(): void {
    this.inputFontControl.valueChanges
      .pipe(startWith(this.inputFontControl.value), pairwise())
      .subscribe(([old, value]) => {
        this.inputFont = value ?? this.inputFont;
        if (value === this.outputFontControl.value) {
          this.outputFontControl.setValue(old);
          this.outputFont = old ?? this.outputFont;
        }
      });
    this.outputFontControl.valueChanges
      .pipe(startWith(this.outputFontControl.value), pairwise())
      .subscribe(([old, value]) => {
        this.outputFont = value ?? this.outputFont;
        if (value === this.inputFontControl.value) {
          this.inputFontControl.setValue(old);
          this.inputFont = old ?? this.inputFont;
        }
      });
  }
  onConvert() {
    this.outputText = convert(this.inputText, this.inputFont, this.outputFont);
  }
}
