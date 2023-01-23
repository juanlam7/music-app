import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastAvatarComponent } from './podcast-avatar/podcast-avatar.component';
import { AngularMaterialModule } from '../shared/angular-material.module';



@NgModule({
  declarations: [PodcastAvatarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    PodcastAvatarComponent
  ],
})
export class ComponentsModule { }
