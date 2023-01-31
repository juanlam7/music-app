import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IGetEpiData,
  IGetEpisodesRes,
  IPodcastDetail,
} from 'src/app/shared/types';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss'],
})
export class PodcastDetailComponent implements OnInit {
  podcastItem?: Observable<IPodcastDetail[]>;

  podcasteItemDescription: string = '';
  podcastId: string | null = '';

  isLoadingEpisodes: boolean = false;
  showMP3orTable: boolean = true;

  episodesList: IGetEpiData[] = [];

  selectedEpisode!: IGetEpiData;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private podcastService: PodcastService
  ) {}

  ngOnInit(): void {
    this.validateHistoryState();
    this.checkRouteOnInit();

    this.route.paramMap.subscribe(params => {
      this.podcastId = params.get('id');
      if (this.podcastId) {
        this.podcastItem = this.podcastService.getPodcastById(this.podcastId);

        this.getEpisodesList();
      }
    });
  }

  getEpisodesList(): void {
    this.isLoadingEpisodes = true;
    if (this.podcastItem) {
      this.podcastItem.subscribe((resp: IPodcastDetail | any) => {
        this.podcastService
          .getEpisodes(resp[0].collectionViewUrl)
          .subscribe((res: IGetEpisodesRes | undefined) => {
            if (res) {
              this.episodesList = res.data;
              this.isLoadingEpisodes = false;
            }
          });
      });
    }
  }

  checkRouteOnInit(): void {
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('/episode/'))
          this.showMP3orTable = false;
      }
    });
  }

  changeRouteEpisode(event: string): void {
    const searchEpisode = this.episodesList.find(
      element => element.id === event
    );
    if (searchEpisode) {
      this.selectedEpisode = searchEpisode;
    }

    this._router.navigate(['episode', event], { relativeTo: this.route });
  }

  onBackPodcastList(): void {
    if (this.podcastId) {
      this._router.navigate(['podcast', this.podcastId]);
      this.showMP3orTable = true;
    }
  }

  validateHistoryState(): void {
    if (history.state['podcastSumary']) {
      this.podcasteItemDescription = history.state['podcastSumary'].label;
    } else {
      this._router.navigate(['/']);
    }
  }
}
