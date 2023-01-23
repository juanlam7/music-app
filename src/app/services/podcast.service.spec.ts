import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PodcastService } from './podcast.service';

describe('PodcastService', () => {
  let httpTestingController: HttpTestingController;
  let service: PodcastService;
  const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(PodcastService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPodcast should use GET to retrieve data', () => {
    service.getPodcast().subscribe();

    const testRequest = httpTestingController.expectOne(`${url}`);

    expect(testRequest.request.method).toEqual('GET');
  });
});
