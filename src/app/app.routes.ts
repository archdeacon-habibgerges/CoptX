import { Routes } from '@angular/router';
import { ConvertFontComponent } from '../convert-font/convert-font.component';
import { TransliterateComponent } from '../transliterate/transliterate.component';

export const routes: Routes = [
  {
    path: 'convert-font',
    component: ConvertFontComponent,
  },
  {
    path: 'transliterate',
    component: TransliterateComponent,
  },
];
