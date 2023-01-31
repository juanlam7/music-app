import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { PodcastAvatarComponent } from './podcast-avatar/podcast-avatar.component';
import { PodcastCardComponent } from './podcast-card/podcast-card.component';
import { EpisodesTableComponent } from './episodes-table/episodes-table.component';
import { Mp3Component } from './mp3/mp3.component';

@NgModule({
  declarations: [PodcastAvatarComponent, PodcastCardComponent, EpisodesTableComponent, Mp3Component],
  imports: [CommonModule, AngularMaterialModule],
  exports: [PodcastAvatarComponent, PodcastCardComponent, EpisodesTableComponent, Mp3Component],
})
export class ComponentsModule {}
