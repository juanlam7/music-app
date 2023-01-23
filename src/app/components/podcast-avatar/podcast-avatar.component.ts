import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-podcast-avatar',
  templateUrl: './podcast-avatar.component.html',
  styleUrls: ['./podcast-avatar.component.scss'],
})
export class PodcastAvatarComponent implements OnInit {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';

  constructor() {}

  ngOnInit(): void {}
}
