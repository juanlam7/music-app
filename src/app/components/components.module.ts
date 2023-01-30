import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastAvatarComponent } from './podcast-avatar/podcast-avatar.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { PodcastCardComponent } from './podcast-card/podcast-card.component';
import { EpisodesTableComponent } from './episodes-table/episodes-table.component';

@NgModule({
  declarations: [PodcastAvatarComponent, PodcastCardComponent, EpisodesTableComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [PodcastAvatarComponent, PodcastCardComponent, EpisodesTableComponent],
})
export class ComponentsModule {}
