import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPodcast, ITopPoscast } from 'src/app/shared/types';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  value: string = '';

  podcastList: IPodcast[] = [];

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    this.loadPodcast();
  }

  loadPodcast(): void {
    this.podcastService.getPodcast().subscribe((data: ITopPoscast) => {
      this.podcastList = data.feed.entry;
    });
  }

  clearSearchField() {
    this.value = '';
  }

  ngOnDestroy(): void {}
}
