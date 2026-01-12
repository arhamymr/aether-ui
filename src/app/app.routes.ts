import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent, UsersComponent, SettingsComponent } from './features';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' }
];
