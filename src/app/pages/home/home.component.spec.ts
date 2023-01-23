import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PodcastService } from '../../services/podcast.service';
import { HomeComponent } from './home.component';
import { AppModule } from '../../app.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: PodcastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: PodcastService,
        },
      ],
      imports: [HttpClientTestingModule, AppModule],
    }).compileComponents();

    service = TestBed.inject(PodcastService);

  });

  it('should create', waitForAsync(async () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  }));
});
