import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PodcastDetailComponent } from './pages/podcast-detail/podcast-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'podcast/:id',
    component: PodcastDetailComponent,
    children: [
      {
        path: 'episode/:id',
        component: PodcastDetailComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
