import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PodcastService } from './podcast.service';

describe('PodcastService', () => {
  let httpTestingController: HttpTestingController;
  let service: PodcastService;

  const urlEpisodes = 'https://podcasts.apple.com/us/podcast/frosted-tips-with-lance-bass/id1661154206?uo=4';

  const urlGetPodcast = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
  const urlGetPodcastById = `https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=1000597174806`
  )}`;
  const urlGetEpisodes = `https://api.allorigins.win/get?url=${encodeURIComponent(
    `${urlEpisodes}`
  )}`;

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

    const testRequest = httpTestingController.expectOne(`${urlGetPodcast}`);

    expect(testRequest.request.method).toEqual('GET');
  });

  it('getPodcastById should use GET to retrieve data', () => {
    service.getPodcastById('1000597174806').subscribe();

    const testRequest = httpTestingController.expectOne(`${urlGetPodcastById}`);

    expect(testRequest.request.method).toEqual('GET');
  });

  it('getEpisodes should use GET to retrieve data', () => {
    service.getEpisodes(urlEpisodes).subscribe();

    const testRequest = httpTestingController.expectOne(`${urlGetEpisodes}`);

    expect(testRequest.request.method).toEqual('GET');
  });
});
