import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastAvatarComponent } from './podcast-avatar/podcast-avatar.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { PodcastCardComponent } from './podcast-card/podcast-card.component';

@NgModule({
  declarations: [PodcastAvatarComponent, PodcastCardComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [PodcastAvatarComponent, PodcastCardComponent],
})
export class ComponentsModule {}
