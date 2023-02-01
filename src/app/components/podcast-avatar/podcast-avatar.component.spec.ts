import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../shared/angular-material.module';

import { PodcastAvatarComponent } from './podcast-avatar.component';

describe('PodcastAvatarComponent', () => {
  let component: PodcastAvatarComponent;
  let fixture: ComponentFixture<PodcastAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastAvatarComponent],
      imports: [AngularMaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastAvatarComponent);
    component = fixture.componentInstance;

    component.name = 'name';
    component.description = 'description';
    component.imageSrc = 'imageSrc';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
