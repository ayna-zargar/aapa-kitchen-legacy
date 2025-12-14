import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: 'haakh-anchaar',
    name: 'Haakh-e-Anchaar',
    price: 200,
    weight: '350g',
    description: 'A unique Kashmiri delicacy made from traditional collard greens, slow-cooked with aromatic spices passed down through generations.',
    image: '/placeholder.svg',
    ingredients: ['Haakh (Collard Greens)', 'Mustard Oil', 'Kashmiri Red Chillies', 'Fennel Seeds', 'Asafoetida', 'Rock Salt'],
    tastingNotes: 'Earthy, tangy with a gentle warmth that lingers — perfect with steamed rice.',
  },
  {
    id: 'mixed-anchaar',
    name: 'Mixed Anchaar',
    price: 200,
    weight: '350g',
    description: 'A vibrant medley of seasonal vegetables preserved in time-honored Kashmiri traditions, each bite a celebration of heritage.',
    image: '/placeholder.svg',
    ingredients: ['Carrots', 'Turnips', 'Cauliflower', 'Green Chillies', 'Mustard Oil', 'Traditional Spice Blend'],
    tastingNotes: 'Bold, crunchy, and deeply spiced — a versatile companion for any meal.',
  },
];

export const comboPrice = 380;
export const comboSavings = (products[0].price + products[1].price) - comboPrice;
