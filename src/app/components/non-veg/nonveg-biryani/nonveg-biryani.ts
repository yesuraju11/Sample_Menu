import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nonveg-biryani',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nonveg-biryani.html',
  styleUrl: './nonveg-biryani.css'
})
export class NonvegBiryani {
  activeCategory: 'biryani' | 'starters' | 'maincourse' = 'biryani';

  biryaniItems = [
    { name: 'Hyderabadi Chicken Dum Biryani', price: '₹340', image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?q=80&w=500&auto=format&fit=crop', desc: 'The king of all biryanis, slow-cooked with marinated chicken.' },
    { name: 'Mutton Biryani', price: '₹420', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=500&auto=format&fit=crop', desc: 'Tender mutton pieces layered with fragrant biryani rice.' },
    { name: 'Fish Biryani', price: '₹380', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=500&auto=format&fit=crop', desc: 'A coastal delight with flavorful fish and aromatic rice.' },
    { name: 'Prawns Biryani', price: '₹400', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500&auto=format&fit=crop', desc: 'Juicy prawns cooked with spices and layered with rice.' }
  ];

  starterItems = [
    { name: 'Chicken 65', price: '₹280', image: 'https://images.unsplash.com/photo-1567188040754-81d8803b951f?q=80&w=500&auto=format&fit=crop', desc: 'Spicy, deep-fried chicken bites tossed in a tangy sauce.' },
    { name: 'Apollo Fish', price: '₹320', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&auto=format&fit=crop', desc: 'A Hyderabadi special, boneless fish marinated and fried.' },
    { name: 'Mutton Fry', price: '₹350', image: 'https://images.unsplash.com/photo-1625398471602-60f8bf68f312?q=80&w=500&auto=format&fit=crop', desc: 'Dry mutton preparation with a blend of Indian spices.' },
    { name: 'Chilli Chicken', price: '₹290', image: 'https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=500&auto=format&fit=crop', desc: 'An Indo-Chinese classic with crispy chicken in a spicy sauce.' }
  ];

  maincourseItems = [
    { name: 'Butter Chicken', price: '₹350', image: 'https://images.unsplash.com/photo-1603133872878-684f571d70f2?q=80&w=500&auto=format&fit=crop', desc: 'Creamy and rich tomato-based chicken curry.' },
    { name: 'Mutton Rogan Josh', price: '₹450', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&auto=format&fit=crop', desc: 'Aromatic lamb dish of Persian origin, which is one of the signature recipes of Kashmiri cuisine.'},
    { name: 'Goan Fish Curry', price: '₹400', image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=500&auto=format&fit=crop', desc: 'A tangy and spicy fish curry from the coastal regions of Goa.' },
    { name: 'Chicken Tikka Masala', price: '₹360', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=500&auto=format&fit=crop', desc: 'Roasted marinated chicken chunks in a spiced curry sauce.' }
  ];

  get currentItems() {
    if (this.activeCategory === 'biryani') return this.biryaniItems;
    if (this.activeCategory === 'starters') return this.starterItems;
    return this.maincourseItems;
  }

  setCategory(category: 'biryani' | 'starters' | 'maincourse') {
    this.activeCategory = category;
  }
}