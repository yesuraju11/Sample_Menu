import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodDataService } from '../../services/food-data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  foodItems: any[] = [];
  filteredFoodItems: any[] = [];

  constructor(private foodDataService: FoodDataService) {}

  ngOnInit() {
    this.foodItems = this.foodDataService.getFoodItems();
    this.filteredFoodItems = this.foodItems;
  }

  searchItems(searchTerm: string) {
    this.filteredFoodItems = this.foodDataService.searchFoodItems(searchTerm);
  }
}
