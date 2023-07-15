import weeklySpecial1 from '@/assets/images/menu-special-1.jpg';
import weeklySpecial2 from '@/assets/images/menu-special-2.jpg';
import weeklySpecial3 from '@/assets/images/menu-special-3.jpg';

import ramen1 from '@/assets/images/menu-ramen-pork-1.jpg';
import ramen2 from '@/assets/images/menu-ramen-pork-2.jpg';
import ramen3 from '@/assets/images/menu-ramen-chicken-1.jpg';
import ramen4 from '@/assets/images/menu-ramen-chicken-2.jpg';
import ramen5 from '@/assets/images/menu-ramen-vegetarian-1.jpg';
import ramen6 from '@/assets/images/menu-ramen-vegetarian-2.jpg';

import side1 from '@/assets/images/menu-side-1.jpg';
import side2 from '@/assets/images/menu-side-2.jpg';
import side3 from '@/assets/images/menu-side-3.jpg';

import dessert1 from '@/assets/images/menu-dessert-1.jpg';
import dessert2 from '@/assets/images/menu-dessert-2.jpg';
import dessert3 from '@/assets/images/menu-dessert-3.jpg';

import drink1 from '@/assets/images/menu-drink-1.jpg';
import drink2 from '@/assets/images/menu-drink-2.jpg';
import drink3 from '@/assets/images/menu-drink-3.jpg';

import dailySpecial1 from '@/assets/images/ramen-of-the-day.jpg';

import { ProductDataType } from "@/types/TypeLists";

export const menuList: Array<ProductDataType> = [ 
  {
    id: 1,
    img: dessert1,
    alt: 'Dessert',
    name: 'KUROGOMA CHEESECAKE',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 5,
    category: 'Dessert'
  },
  {
    id: 2,
    img: dessert2,
    alt: 'Dessert',
    name: 'MATCHA CHEESECAKE',
    desc: 'Laudantium esse recusandae, voluptatum quos sed tempora laudantium esse recusandae, voluptatum quos sed tempora laudantium esse recusandae, voluptatum quos sed tempora',
    price: 5,
    category: 'Dessert'
  },
  {
    id: 3,
    img: dessert3,
    alt: 'Dessert',
    name: 'MATCHA ICE CREAM',
    desc: 'Iste debitis molestias, totam sapiente velit eius debitis molestias, totam sapiente velit eius debitis molestias, totam sapiente velit eius',
    price: 5,
    category: 'Dessert'
    
  },
  {
    id: 4,
    img: side1,
    alt: 'Side',
    name: 'ORIGINAL KARAAGE',
    desc: 'Laborum aspernatur voluptatem officia doloremque quis iusto esse qui totam eveniet aspernatur voluptatem officia doloremque quis iusto esse qui totam eveniet aspernatur voluptatem officia doloremque quis iusto esse qui totam eveniet',
    price: 7,
    category: 'Side'
  },
  {
    id: 5,
    img: side2,
    alt: 'Side',
    name: 'AGE GYOZA (PORK/VEG)',
    desc: 'Rerum aspernatur ipsum dolor, sit amet consectetur adipisicing elit voluptatem officia doloremque quis iusto esse qui totam eveniet at expedita excepturi velit veritatis nulla quis vero error',
    price: 4.50,
    category: 'Side'
  },
  {
    id: 6,
    img: side3,
    alt: 'Side',
    name: 'TAKOYAKI',
    desc: 'Lorem ipsum dolor, porro dolorem quae cumque placeat similique dolor nulla totam porro dolorem quae cumque placeat similique dolor nulla totam sit amet consectetur adipisicing elit.',
    price: 5.50,
    category: 'Side'
  },
  {
    id: 7,
    img: ramen1,
    alt: 'Pork Ramen',
    name: 'PORK ORIGINAL',
    desc: 'Unde porro dolorem unde quidem laborum accusantium quae cumque placeat unde quidem laborum accusantium similique dolor nulla totam',
    price: 12.95,
    category: 'Ramen'
  },
  {
    id: 8,
    img: ramen2,
    alt: 'Pork Ramen',
    name: 'PORK MISO',
    desc: 'Non unde xpedita excepturi velit veritatis nulla quis vero error xpedita excepturi velit veritatis nulla quis vero error quidem laborum accusantium',
    price: 12.95,
    category: 'Ramen'
  },
  {
    id: 9,
    img: ramen3,
    alt: 'Chicken Ramen',
    name: 'CHICKEN ORIGINAL',
    desc: 'At rem libero minus quis, consequuntur praesentium illo nobis expedita excepturi velit rem libero minus quis, consequuntur praesentium illo nobis veritatis nulla quis vero error',
    price: 12.95,
    category: 'Ramen'
  },
  {
    id: 10,
    img: ramen4,
    alt: 'Chicken Ramen',
    name: 'CHICKEN MISO',
    desc: 'Tempora aspernatur voluptatem officia doloremque quis iusto esse qui totam eveniet rem libero minus quis, aspernatur voluptatem officia doloremque quis iusto esse qui totam eveniet consequuntur praesentium illo nobis',
    price: 12.95,
    category: 'Ramen'
  },
  {
    id: 11,
    img: ramen5,
    alt: 'Vegetarian Ramen',
    name: 'VEG ORIGINAL',
    desc: 'Aborum officiis nisi placeat quasi consectetur distinctio ratione officiis nisi placeat quasi consectetur distinctio ratione aspernatur voluptatem officia doloremque quis iusto esse qui totam eveniet',
    price: 10.95,
    category: 'Ramen'
  },
  {
    id: 12,
    img: ramen6,
    alt: 'Vegetarian Ramen',
    name: 'VEG MISO',
    desc: 'Ut porro illo atque. Optio cumque ratione labore nihil eligendi veritatis recusandae officiis nisi placeat quasi consectetur distinctio ratione porro illo atque. Optio cumque ratione labore nihil eligendi veritatis recusandae',
    price: 10.95,
    category: 'Ramen'
  },
  {
    id: 13,
    img: weeklySpecial1,
    alt: 'Weekly Special',
    name: 'CHILLED TSUKEMEN',
    desc: 'Repudiandae odit eum quas beatae ut officiis nisi placeat quasi consectetur distinctio odit eum quas beatae ut officiis nisi placeat quasi consectetur distinctio porro illo atque. Optio cumque ratione labore nihil eligendi veritatis recusandae',
    price: 14.95,
    category: 'Weekly Special'
  },
  {
    id: 14,
    img: weeklySpecial2,
    alt: 'Weekly Special',
    name: 'TONKOTSU RED',
    desc: 'Sapiente cupiditate dicta fugit recusandae reiciendis, iusto eos nihil eum placeat e cupiditate dicta fugit recusandae reiciendis, iusto eos nihil eum placeat e odit eum quas beatae ut officiis nisi placeat quasi consectetur distinctio',
    price: 9.99,
    category: 'Weekly Special'
  },
  {
    id: 15,
    img: weeklySpecial3,
    alt: 'Weekly  Special',
    name: 'IMMUNE BOOSTER RAMEN',
    desc: 'Dolor natus provident veritatis cupiditate dicta fugit recusandae reiciendis, natus provident veritatis cupiditate dicta fugit recusandae reiciendis, cupiditate dicta fugit recusandae reiciendis, iusto eos nihil eum placeat e',
    price: 14.95,
    category: 'Weekly Special'
  },
  {
    id: 16,
    img: drink1,
    alt: 'Drink',
    name: 'HOT TEA',
    desc: 'Mollitia natus provident veritatis cupiditate dicta fugit recusandae reiciendis, iusto eos nihil eum placeat e  omnis iusto',
    price: 2,
    category: 'Drink'
  },
  {
    id: 17,
    img: drink2,
    alt: 'Drink',
    name: 'RAMUNE SODA',
    desc: 'Placeat natus provident veritatis natus provident veritatis cupiditate dicta fugit recusandae reiciendis, natus provident veritatis cupiditate dicta fugit recusandae reiciendis',
    price: 3.9,
    category: 'Drink'
  },
  {
    id: 18,
    img: drink3,
    alt: 'Drink',
    name: 'HOT SAKE',
    desc: 'Consequuntur natus natus provident veritatis cupiditate dicta fugit recusandae reiciendis provident veritatis cupiditate dicta fugit recusandae reiciendis, praesentium illo nobis',
    price: 7.95,
    category: 'Drink'
  },
  {
    id: 19,
    img: dailySpecial1,
    alt: 'Daily Special',
    title: 'Ramen of the Day',
    name: 'Karaage Pork Original',
    desc: 'Non unde quidem laborum accusantium for $8'
  },
  {
    id: 20,
    img: side1,
    alt: 'Daily Special',
    title: 'Sides of the Day',
    name: 'Original Karaage',
    desc: 'Et sequi, incidunt fugit $3',
  },
  {
    id: 21,
    img: dessert2,
    alt: 'Daily Special',
    title: 'Dessert of the Day',
    name: 'Matcha Cheesecake',
    desc: 'Sit amet consectetur adipisicing elit for $2',
  },
]