import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },

  {
    path: 'overview',
    loadComponent: () =>
      import('./@feature/overview/overview.component').then(
        (x) => x.OverviewComponent
      ),
  },
  {
    path: 'periodic-table',
    loadComponent: () =>
      import('./@feature/periodic-table/periodic-table.component').then(
        (x) => x.PeriodicTableComponent
      ),
  },
  {
    path: 'about-periodic-table',
    loadComponent: () =>
      import('./@feature/about-periodic-table/about-periodic-table.component').then(
        (x) => x.AboutPeriodicTableComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./@feature/profile/profile.component').then(
        (x) => x.ProfileComponent
      ),
  },

    {
      path: '**',
      loadComponent: () =>
        import('./@feature/page-not-found/page-not-found.component').then(
          (x) => x.PageNotFoundComponent
        ),
    },
];
