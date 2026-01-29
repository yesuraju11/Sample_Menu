import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VegBiryani } from '../veg/veg-biryani/veg-biryani';
import { RouterLink } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule,RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
