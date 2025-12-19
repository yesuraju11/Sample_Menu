import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VegBiryani } from '../veg/veg-biryani/veg-biryani';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, VegBiryani],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
