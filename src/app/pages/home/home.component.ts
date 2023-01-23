import { Component, OnInit, OnDestroy } from '@angular/core';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  podcastList: string[] = [];

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    this.loadPodcast();
  }

  loadPodcast() {
    return this.podcastService.getPodcast().subscribe((data) => {
    });
  }

  ngOnDestroy(): void {}
}
