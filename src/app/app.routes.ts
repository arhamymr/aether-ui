import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent, UsersComponent, SettingsComponent, AuthComponent, DocsComponent } from './features';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'auth/login', component: AuthComponent },
  { path: 'auth/register', component: AuthComponent },
  { path: 'docs', component: DocsComponent },
  { 
    path: 'components', 
    loadComponent: () => import('./features/components-showcase/components-showcase.component').then(m => m.ComponentsShowcaseComponent),
    loadChildren: () => import('./features/components-showcase/components-showcase.routes').then(m => m.COMPONENTS_SHOWCASE_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
