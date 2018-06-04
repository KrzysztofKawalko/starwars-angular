// angular components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app components
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';
import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home.component';
import { LinksComponent } from './links.component';
import { MoreComponent } from './more.component';
import { TrailersComponent } from './trailers.component';
import { PageNotFoundComponent } from './pageNotFound.component';

// bootstrap components
import {
  CollapseModule,
  BsDropdownModule,
  CarouselModule,
  AccordionModule
} from 'ngx-bootstrap';

// other components
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';

// routing
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: 'galeria',
    component: GalleryComponent
  },
  {
    path: 'wiecej',
    component: MoreComponent
  },
  {
    path: 'trailers',
    component: TrailersComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBx9sxRzvMBd-eXs6g0qbFihHUeYxUgiqU'
    }),
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    GalleryComponent,
    HomeComponent,
    LinksComponent,
    MoreComponent,
    TrailersComponent,
    PageNotFoundComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
