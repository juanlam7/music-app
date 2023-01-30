import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { IPodcastDetail, ITopPoscast } from '../shared/types';

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
        // map(x => JSON.parse(x)),
        catchError(this.handleError)
      );
  }

  getEpisodes(urlContent: string): Observable<any> {
    return this.http
      .get<any>(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `${urlContent}`
        )}`
      )
      .pipe(
        retry(1),
        map(x => {
          if (x.contents.includes('{".v1.catalog.us.podcasts.') &&  x.contents.includes('".v1.catalog.us.charts.types')) {
            const firstItem =
              x.contents.search('{".v1.catalog.us.podcasts.') + 1;
            const secondItem =
              x.contents.search('".v1.catalog.us.charts.types') - 1;
            const result = x.contents.slice(firstItem, secondItem);

            const thirdItem = result.search('5bepisodes.5d.6":');
            const finalResult = result.slice(thirdItem + 17, result.length);

            const parsedResult = JSON.parse(JSON.parse(finalResult)).d[0].relationships.episodes;

            return parsedResult;
          }
          return;
        }),
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
}
