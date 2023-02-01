import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../shared/angular-material.module';

import { PodcastCardComponent } from './podcast-card.component';

describe('PodcastCardComponent', () => {
  let component: PodcastCardComponent;
  let fixture: ComponentFixture<PodcastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastCardComponent ],
      imports: [AngularMaterialModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastCardComponent);
    component = fixture.componentInstance;

    component.podName = 'podName';
    component.podDescription = 'podDescription';
    component.podImageSrc = 'podImageSrc';
    component.podSumary = 'podSumary';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
