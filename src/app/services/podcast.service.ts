import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { IGetEpisodesRes, IPodcastDetail, ITopPoscast } from '../shared/types';

import { handleError } from '../utils/errorHandling';
import { handleGetEpisodeBigStrg } from '../utils/bigStrgRes';
import { checkLocalStorageData } from '../utils/saveLocalStorage';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  apiURL = 'https://itunes.apple.com';

  constructor(private http: HttpClient) {}

  getPodcast(): Observable<ITopPoscast> {
    const lsGetPodcastData = 'AllPodcast';
    const lsGetPodcastDate = 'AllPodcastDATE';

    const validLocalST = checkLocalStorageData(
      lsGetPodcastData,
      lsGetPodcastDate
    );

    if (validLocalST) {
      return of(validLocalST);
    } else {
      return this.http
        .get<ITopPoscast>(
          `${this.apiURL}/us/rss/toppodcasts/limit=100/genre=1310/json`
        )
        .pipe(
          retry(1),
          map(x => {
            localStorage.setItem(lsGetPodcastData, JSON.stringify(x));
            localStorage.setItem(lsGetPodcastDate, JSON.stringify(new Date()));
            return x;
          }),
          catchError(handleError)
        );
    }
  }

  getPodcastById(podcastId: string): Observable<IPodcastDetail[]> {
    const lsGetPodcastByIdData = `getPodcastById=${podcastId}`;
    const lsGetPodcastByIdDate = `getPodcastByIdDATE=${podcastId}`;
    const validLocalST = checkLocalStorageData(
      lsGetPodcastByIdData,
      lsGetPodcastByIdDate
    );

    if (validLocalST) {
      return of(validLocalST);
    } else {
      return this.http
        .get<any>(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `${this.apiURL}/lookup?id=${podcastId}`
          )}`
        )
        .pipe(
          retry(1),
          map(x => JSON.parse(x.contents).results),
          map(x => {
            localStorage.setItem(lsGetPodcastByIdData, JSON.stringify(x));
            localStorage.setItem(
              lsGetPodcastByIdDate,
              JSON.stringify(new Date())
            );
            return x;
          }),
          catchError(handleError)
        );
    }
  }

  getEpisodes(urlContent: string): Observable<IGetEpisodesRes | undefined> {
    const lsGetEpisodesData = `getEpisodes=${urlContent}`;
    const lsGetEpisodesDate = `getEpisodesDATE=${urlContent}`;
    const validLocalST = checkLocalStorageData(
      lsGetEpisodesData,
      lsGetEpisodesDate
    );

    if (validLocalST) {
      return of(validLocalST);
    } else {
      return this.http
        .get<any>(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `${urlContent}`
          )}`
        )
        .pipe(
          retry(1),
          map(x => handleGetEpisodeBigStrg(x)),
          map(x => {
            localStorage.setItem(lsGetEpisodesData, JSON.stringify(x));
            localStorage.setItem(lsGetEpisodesDate, JSON.stringify(new Date()));
            return x;
          }),
          catchError(handleError)
        );
    }
  }
}
