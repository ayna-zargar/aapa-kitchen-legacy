export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  comment: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima Khan',
    handle: '@fatima.k',
    avatar: '/placeholder.svg',
    comment: 'This takes me straight back to my nani\'s kitchen in Srinagar. The Haakh-e-Anchaar is absolutely authentic! 🏔️❤️',
    date: '2 days ago',
  },
  {
    id: '2',
    name: 'Arjun Sharma',
    handle: '@arjun_eats',
    avatar: '/placeholder.svg',
    comment: 'Finally, a pickle brand that understands what homemade actually means. No preservatives, just pure love. Ordering the combo again!',
    date: '1 week ago',
  },
  {
    id: '3',
    name: 'Zara Ahmed',
    handle: '@zarafoodie',
    avatar: '/placeholder.svg',
    comment: 'Watched Aapa\'s podcast and had to try this. The Mixed Anchaar is now a permanent fixture on our dining table. Thank you for sharing this treasure! ✨',
    date: '3 days ago',
  },
  {
    id: '4',
    name: 'Rishi Kapoor',
    handle: '@rishi.tastes',
    avatar: '/placeholder.svg',
    comment: 'The packaging, the taste, the story behind it — everything feels so carefully crafted. This is what artisanal food should be.',
    date: '5 days ago',
  },
];
