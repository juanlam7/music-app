import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mp3',
  templateUrl: './mp3.component.html',
  styleUrls: ['./mp3.component.scss']
})
export class Mp3Component implements OnInit {
  
  @Input() epiName: string = '';
  @Input() epiDescription: string = '';
  @Input() epiAudio: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
