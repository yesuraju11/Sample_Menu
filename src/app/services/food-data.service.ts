import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  private foodItems = [
    { 
      name: 'Hyderabadi Veg Biryani', 
      price: '₹280', 
      image: 'https://raw.githubusercontent.com/yesuraju11/foodItemsImages/refs/heads/main/Chicken_Dhum_Biriyani.jpeg', 
      type: 'Veg' 
    },
    { 
      name: 'Chicken Dum Biryani', 
      price: '₹350', 
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500&auto=format&fit=crop', 
      type: 'Non-Veg' 
    },
    { 
      name: 'Paneer Butter Masala', 
      price: '₹220', 
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=500&auto=format&fit=crop', 
      type: 'Veg' 
    },
    { 
      name: 'Grilled Salmon', 
      price: '₹450', 
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=500&auto=format&fit=crop', 
      type: 'Non-Veg' 
    },
    { 
      name: 'Veg Supreme Pizza', 
      price: '₹299', 
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop', 
      type: 'Veg' 
    },
    { 
      name: 'Mutton Rogan Josh', 
      price: '₹400', 
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=500&auto=format&fit=crop', 
      type: 'Non-Veg' 
    }
  ];

  constructor() { }

  getFoodItems() {
    return this.foodItems;
  }

  searchFoodItems(searchTerm: string) {
    if (!searchTerm) {
      return this.getFoodItems();
    }
    return this.foodItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
