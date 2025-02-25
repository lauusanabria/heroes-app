import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';

// base path: heroes
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'create',
        component: NewHeroPageComponent,
      },
      {
        path: 'edit/:id',
        component: NewHeroPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: 'search',
        component: SearchPageComponent,
      },
      {
        path: ':id', // must be the last route defined
        component: HeroPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
