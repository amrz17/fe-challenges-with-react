import {
  product1,
  product2,
  product3,
  product4,
  thumbnailProduct1,
  thumbnailProduct2,
  thumbnailProduct3,
  thumbnailProduct4,
} from "../assets/images";

export const navLink = [
  { href: "#collection", label: "Collections" },
  { href: "#men", label: "Men" },
  { href: "#women", label: "Women" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const products = [
  {
    thumbnail: thumbnailProduct1,
    bigProduct: product1,
  },
  {
    thumbnail: thumbnailProduct2,
    bigProduct: product2,
  },
  {
    thumbnail: thumbnailProduct3,
    bigProduct: product3,
  },
  {
    thumbnail: thumbnailProduct4,
    bigProduct: product4,
  },
];

export const carousel = [
  {
    product: product1,
    id: "slide1",
    hrefLeft: "#slide4",
    hrefRight: "#slide2",
  },

  {
    product: product2,
    id: "slide2",
    hrefLeft: "#slide1",
    hrefRight: "#slide3",
  },

  {
    product: product3,
    id: "slide3",
    hrefLeft: "#slide2",
    hrefRight: "#slide4",
  },

  {
    product: product4,
    id: "slide4",
    hrefLeft: "#slide3",
    hrefRight: "#slide1",
  },
];
