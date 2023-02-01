import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PodcastService } from '../../services/podcast.service';
import { HomeComponent } from './home.component';
import { AppModule } from '../../app.module';
import { DATA_TEST_GETPODCAST } from '../../utils/data_mocks';
import { of } from 'rxjs';
import { ComponentsModule } from '../../components/components.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: PodcastService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: PodcastService,
          useValue: {
            getPodcast() {
              return of(DATA_TEST_GETPODCAST);
            },
          },
        },
      ],
      imports: [HttpClientTestingModule, AppModule, ComponentsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PodcastService);
    compiled = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', waitForAsync(async () => {

    expect(component).toBeTruthy();
  }));

  it('should set property value to a empty string', () => {
    component.value = 'heart'
    fixture.detectChanges();
    const spanBtn = compiled.querySelectorAll('button');
    expect(spanBtn).toBeTruthy();

    spanBtn[0]?.dispatchEvent(new Event('click'));

    expect(component.value).toBe('');
  });
});
