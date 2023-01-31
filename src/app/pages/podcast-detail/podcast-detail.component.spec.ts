import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import {
  ActivatedRoute,
  convertToParamMap,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { PodcastService } from '../../services/podcast.service';

import { ComponentsModule } from '../../components/components.module';

import { PodcastDetailComponent } from './podcast-detail.component';
import {
  DATA_TEST_GETEPISODES,
  DATA_TEST_GETPODCASTBYID,
} from '../../utils/data_mocks';
import { EpisodesTableComponent } from '../../components/episodes-table/episodes-table.component';

const activatedRouteMock = {
  paramMap: of(
    convertToParamMap({
      id: '46455465',
    })
  ),
};

const routerMock = {
  events: Observable.create((observer: Observer<any>) => {
    observer.next(new NavigationEnd(0, '/', '/epise/'));
    return observer;
  }),
  navigate: jest.fn(),
};

describe('PodcastDetailComponent', () => {
  let component: PodcastDetailComponent;
  let fixture: ComponentFixture<PodcastDetailComponent>;
  let service: PodcastService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastDetailComponent, EpisodesTableComponent],
      imports: [
        HttpClientTestingModule,
        ComponentsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
        {
          provide: PodcastService,
          useValue: {
            getPodcastById() {
              return of(DATA_TEST_GETPODCASTBYID);
            },
            getEpisodes() {
              return of(DATA_TEST_GETEPISODES);
            },
          },
        },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PodcastService);
    compiled = fixture.nativeElement;

    const originalLocation = window.history;

    jest.spyOn(window, 'history', 'get').mockImplementation(() => ({
      ...originalLocation,
      state: {
        podcastSumary: {
          label: 'AAAAAAAAAA',
        },
      },
    }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call component from son EpisodesTableComponent', () => {
    const sonDebugElement = fixture.debugElement.query(
      By.directive(EpisodesTableComponent)
    );
    const sonComponent: EpisodesTableComponent =
      sonDebugElement.componentInstance;

    sonComponent.emitIdToParent.emit('1000597174806');
    expect(component.selectedEpisode).toStrictEqual(
      DATA_TEST_GETEPISODES.data[0]
    );
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should call router navigate with the expected argument', () => {
    fixture.detectChanges();
    const spanBtn = compiled.querySelector('.podcast-detail-card');
    expect(spanBtn).toBeTruthy();

    spanBtn?.dispatchEvent(new Event('click'));

    expect(routerMock.navigate).toHaveBeenCalledWith(['podcast', '46455465']);
  });
});

const otherRouterMock = {
  events: Observable.create((observer: Observer<any>) => {
    observer.next(new NavigationEnd(0, '/', '/episode/'));
    return observer;
  }),
  navigate: jest.fn(),
};

describe('PodcastDetailComponent ohter', () => {
  let component: PodcastDetailComponent;
  let fixture: ComponentFixture<PodcastDetailComponent>;
  let service: PodcastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastDetailComponent, EpisodesTableComponent],
      imports: [
        HttpClientTestingModule,
        ComponentsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
        {
          provide: PodcastService,
          useValue: {
            getPodcastById() {
              return of(DATA_TEST_GETPODCASTBYID);
            },
            getEpisodes() {
              return of(DATA_TEST_GETEPISODES);
            },
          },
        },
        { provide: Router, useValue: otherRouterMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PodcastService);

    const originalLocation = window.history;

    jest.spyOn(window, 'history', 'get').mockImplementation(() => ({
      ...originalLocation,
      state: {
        podcastSumary: null,
      },
    }));
  });

  it('should call navigate with a enpty route', () => {
    fixture.detectChanges();
    expect(otherRouterMock.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should set showMP3orTable property as false after init', () => {
    expect(component.showMP3orTable).toBeTruthy();
    fixture.detectChanges();
    expect(component.showMP3orTable).toBeFalsy();
  });
});
