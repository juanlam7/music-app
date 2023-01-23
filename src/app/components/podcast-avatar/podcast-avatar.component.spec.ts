import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastAvatarComponent } from './podcast-avatar.component';

describe('PodcastAvatarComponent', () => {
  let component: PodcastAvatarComponent;
  let fixture: ComponentFixture<PodcastAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
