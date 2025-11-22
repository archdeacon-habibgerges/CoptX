import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertFontComponent } from './convert-font.component';

describe('ConvertFontComponent', () => {
  let component: ConvertFontComponent;
  let fixture: ComponentFixture<ConvertFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertFontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
