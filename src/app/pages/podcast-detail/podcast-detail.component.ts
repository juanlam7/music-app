import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPodcastDetail } from 'src/app/shared/types';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss'],
})
export class PodcastDetailComponent implements OnInit {
  podcastItem?: Observable<IPodcastDetail[]>;

  podcasteItemDescription: string = '';

  constructor(
    private route: ActivatedRoute,
    private podcastService: PodcastService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const podcastId = params.get('id');
      if (podcastId) {
        this.podcastItem = this.podcastService.getPodcastById(podcastId);

        this.podcasteItemDescription = history.state['podcastSumary'].label;

        this.podcastItem.subscribe((resp: IPodcastDetail | any) => {
          this.podcastService
            .getEpisodes(resp[0].collectionViewUrl)
            .subscribe(data => {
              console.log(data);
            });
        });
      }
    });
  }
}
