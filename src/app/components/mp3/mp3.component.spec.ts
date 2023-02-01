import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../shared/angular-material.module';

import { Mp3Component } from './mp3.component';

describe('Mp3Component', () => {
  let component: Mp3Component;
  let fixture: ComponentFixture<Mp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mp3Component],
      imports: [AngularMaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Mp3Component);
    component = fixture.componentInstance;

    component.epiName = 'epiName';
    component.epiDescription = 'epiDescription';
    component.epiAudio = 'epiAudio';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
