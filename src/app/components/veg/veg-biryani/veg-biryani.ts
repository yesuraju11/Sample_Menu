import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-veg-biryani',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './veg-biryani.html',
  styleUrl: './veg-biryani.css'
})
export class VegBiryani {
  // Default category is 'biryani'
  activeCategory: 'biryani' | 'starters' | 'friedrice' = 'biryani';

  biryaniItems = [
    { name: 'Hyderabadi Veg Dum Biryani', price: '₹280', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500&auto=format&fit=crop', desc: 'Aromatic basmati rice cooked with fresh veggies and spices.' },
    { name: 'Paneer Tikka Biryani', price: '₹320', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=500&auto=format&fit=crop', desc: 'Marinated paneer cubes layered with spicy biryani rice.' },
    { name: 'Mushroom Biryani', price: '₹300', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=500&auto=format&fit=crop', desc: 'Earthy mushrooms cooked to perfection in traditional spices.' },
    { name: 'Kaju Biryani', price: '₹350', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500&auto=format&fit=crop', desc: 'Rich cashew nut biryani for a royal feast.' }
  ];

  starterItems = [
    { name: 'Paneer 65', price: '₹240', image: 'https://images.unsplash.com/photo-1567188040754-81d8803b951f?q=80&w=500&auto=format&fit=crop', desc: 'Crispy fried paneer tossed in spicy yogurt sauce.' },
    { name: 'Veg Manchurian', price: '₹200', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&auto=format&fit=crop', desc: 'Indo-Chinese favorite veggie balls in tangy sauce.' },
    { name: 'Gobi Manchurian', price: '₹190', image: 'https://images.unsplash.com/photo-1625398471602-60f8bf68f312?q=80&w=500&auto=format&fit=crop', desc: 'Cauliflower florets fried and tossed in spicy sauce.' },
    { name: 'Crispy Corn', price: '₹180', image: 'https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=500&auto=format&fit=crop', desc: 'Sweet corn kernels fried to a golden crisp.' }
  ];

  friedRiceItems = [
    { name: 'Veg Fried Rice', price: '₹180', image: 'https://images.unsplash.com/photo-1603133872878-684f571d70f2?q=80&w=500&auto=format&fit=crop', desc: 'Classic stir-fried rice with fresh vegetables and soy sauce.' },
    { name: 'Schezwan Fried Rice', price: '₹200', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&auto=format&fit=crop', desc: 'Spicy fried rice tossed in homemade schezwan sauce.' },
    { name: 'Paneer Fried Rice', price: '₹220', image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=500&auto=format&fit=crop', desc: 'Fried rice loaded with soft paneer cubes and veggies.' },
    { name: 'Burnt Garlic Fried Rice', price: '₹190', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=500&auto=format&fit=crop', desc: 'Aromatic rice tossed with crispy burnt garlic bits.' }
  ];

  // Helper to get the list based on selection
  get currentItems() {
    if (this.activeCategory === 'biryani') return this.biryaniItems;
    if (this.activeCategory === 'starters') return this.starterItems;
    return this.friedRiceItems;
  }

  setCategory(category: 'biryani' | 'starters' | 'friedrice') {
    this.activeCategory = category;
  }
}
