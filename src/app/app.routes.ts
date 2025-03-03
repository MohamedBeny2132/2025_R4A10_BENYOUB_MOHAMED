import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageMakeComponent } from './page-make/page-make.component';
import { PageDetailComponent } from './page-detail/page-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'make', component:PageMakeComponent },
  { path: 'trip/:id', component: PageDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];
