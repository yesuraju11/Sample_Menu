import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VegBiryani } from './components/veg/veg-biryani/veg-biryani';
import { HomePage } from './components/home-page/home-page';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // HomePage,
    // VegBiryani,
    // Menu
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sample_menu');
}
