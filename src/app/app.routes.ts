import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Menu } from './components/menu/menu';
import { VegBiryani } from './components/veg/veg-biryani/veg-biryani';
import { NonvegBiryani } from './components/non-veg/nonveg-biryani/nonveg-biryani';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  {path:'menu', component:Menu},
  {path: 'veg-biryani', component:VegBiryani},
  {path: 'nonveg-biryani', component: NonvegBiryani}
];
