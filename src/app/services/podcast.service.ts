import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { IGetEpisodesRes, IPodcastDetail, ITopPoscast } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  apiURL = 'https://itunes.apple.com';

  constructor(private http: HttpClient) {}

  getPodcast(): Observable<ITopPoscast> {
    return this.http
      .get<ITopPoscast>(
        `${this.apiURL}/us/rss/toppodcasts/limit=10/genre=1310/json`
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getPodcastById(podcastId: string): Observable<IPodcastDetail[]> {
    return this.http
      .get<any>(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `${this.apiURL}/lookup?id=${podcastId}`
        )}`
      )
      .pipe(
        retry(1),
        map(x => JSON.parse(x.contents).results),
        catchError(this.handleError)
      );
  }

  getEpisodes(urlContent: string): Observable<IGetEpisodesRes | undefined> {
    return this.http
      .get<any>(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `${urlContent}`
        )}`
      )
      .pipe(
        retry(1),
        map(x => this.handleGetEpisodeBigStrg(x)),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  handleGetEpisodeBigStrg(bigStrg: any) {
    if (
      bigStrg.contents.includes('{".v1.catalog.us.podcasts.') &&
      bigStrg.contents.includes('".v1.catalog.us.charts.types')
    ) {
      const firstItem =
        bigStrg.contents.search('{".v1.catalog.us.podcasts.') + 1;
      const secondItem =
        bigStrg.contents.search('".v1.catalog.us.charts.types') - 1;
      const result = bigStrg.contents.slice(firstItem, secondItem);

      const thirdItem = result.search('5bepisodes.5d.6":');

      const checkString = result.includes('.v1.catalog.us.artists')
        ? result.search('".v1.catalog.us.artists') - 1
        : result.length;

      const finalResult = result.slice(thirdItem + 17, checkString);

      const parsedResult = JSON.parse(JSON.parse(finalResult)).d[0]
        .relationships.episodes;

      return parsedResult;
    }
    return;
  }
}
