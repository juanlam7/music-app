import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.scss'],
})
export class PodcastCardComponent implements OnInit {
  @Input() podName: string = '';
  @Input() podDescription: string = '';
  @Input() podImageSrc: string = '';
  @Input() podSumary: string = '';

  constructor() {}

  ngOnInit(): void {}
}
