import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { ITopPoscast } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  apiURL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json';

  constructor(private http: HttpClient) {}

  getPodcast(): Observable<ITopPoscast> {
    return this.http.get<ITopPoscast>(this.apiURL).pipe(retry(1), catchError(this.handleError));
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
