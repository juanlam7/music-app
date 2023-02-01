import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AngularMaterialModule } from './shared/angular-material.module';
import { ComponentsModule } from './components/components.module';

import { FilterPipe } from './shared/filter.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PodcastDetailComponent } from './pages/podcast-detail/podcast-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    PodcastDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularMaterialModule,
    ComponentsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
