import { products } from "./productData";
import { assets } from "../assets";

export const categoriesData = [
  {
    label: "MEN",
    category: "Men's clothing",
    image:
      "https://img.freepik.com/free-photo/portrait-man-going-out-shopping-various-consumer-goods_23-2151669766.jpg?t=st=1741668300~exp=1741671900~hmac=ebbfbf58b335eaa3f7c34205ef29dc85d217870ff31ae462d7e44c4d1ffd9049&w=740",
  },
  {
    label: "WOMEN",
    category: "Women's clothing",
    image: `${assets.images.Shop7Img}`,
  },
  {
    label: "JEWELLERY",
    category: "Jewellery",
    image:
      "https://img.freepik.com/free-photo/portrait-short-hair-brunette-woman-with-chain-neck-accessories-green-lace-lingerie-outside-villa_343596-397.jpg?t=st=1741668034~exp=1741671634~hmac=bb62ece7b388819ac6c93b239cbd57365d48e9b3dba8e726cd61c083a8b52a77&w=1380",
  },
  {
    label: "KIDS",
    category: "Kid's clothing",
    image:
      "https://images.unsplash.com/photo-1586738730873-bdd59a596a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const adData = [
  {
    id: 45,
    imageUrl: `${assets.images.AdBg1}`,
    collection: `${products[45].title}`,
    tagline: `${products[45].shortDescription}`,
    price: `${products[45].salePrice}`,
    buttonText: "ADD TO CART",
    path: "/cart",
  },
  {
    id: 87,
    imageUrl: `${assets.images.AdBg2}`,
    collection: `${products[87].title}`,
    tagline: `${products[87].shortDescription}`,
    price: `${products[87].salePrice}`,
    buttonText: "ADD TO CART",
    path: "/cart",
  },
];

export const companies = [
  `${assets.images.Company1Img}`,
  `${assets.images.Company2Img}`,
  `${assets.images.Company3Img}`,
  `${assets.images.Company4Img}`,
  `${assets.images.Company5Img}`,
  `${assets.images.Company6Img}`,
];

export const posts = [
  {
    id: 1,
    image: `${assets.images.Post1Img}`,
    tag: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: `${assets.images.Post2Img}`,
    tag: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: `${assets.images.Post3Img}`,
    tag: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

export const categories = [
  "All Categories",
  "Men's clothing",
  "Women's clothing",
  "Kid's clothing",
  "Footwear",
  "Watches",
  "Electronics",
  "Jewellery",
  "Hand bags",
];

export const footerLinks = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

export const heroCarouselData = [
  {
    id: 1,
    imageUrl: `${assets.images.HeroBg1}`,
    collection: `${products[66].title}`,
    tagline: `${products[66].shortDescription}`,
    price: "",
    buttonText: "SHOP NOW",
    path: "/product/67",
  },
  {
    id: 2,
    imageUrl: `${assets.images.HeroBg2}`,
    collection: `${products[15].title}`,
    tagline: `${products[15].shortDescription}`,
    price: "",
    buttonText: "SHOP NOW",
    path: "/product/16",
  },
];

export const team = [
  {
    imageUrl: `${assets.images.Team1Img}`,
    username: "John Doe",
    profession: "Project Manager",
  },
  {
    imageUrl: `${assets.images.Team2Img}`,
    username: "Karen Page",
    profession: "Senior Software Developer",
  },
  {
    imageUrl: `${assets.images.Team3Img}`,
    username: "Jessica Jones",
    profession: "Software Developer",
  },
];

export const singleProductData = {
  imageUrl: products[35].imageUrls[0],
  title: products[35].title,
  desc: products[35].shortDescription,
};

export const usersInfo = [
  { number: "15K", tag: "Happy Customers" },
  { number: "150K", tag: "Monthly Visitors" },
  { number: "15", tag: "Countries Worldwide" },
  { number: "100+", tag: "Top Partners" },
];

export const shopCardItems = [
  {
    id: 1,
    image: `${assets.images.Shop3Img}`,
    category: "Men's clothing",
  },
  {
    id: 2,
    image: `${assets.images.Shop6Img}`,
    category: "Women's clothing",
  },
  {
    id: 3,
    image: `${assets.images.Shop2Img}`,
    category: "Kid's clothing",
  },
  {
    id: 4,
    image: `${assets.images.NikeImg}`,
    category: "Footwear",
  },
  {
    id: 5,
    image: `${assets.images.RolexImg}`,
    category: "Watches",
  },
  {
    id: 6,
    image: `${assets.images.AppleImg}`,
    category: "Electronics",
  },
  {
    id: 7,
    image: `${assets.images.NecklaceImg}`,
    category: "Jewellery",
  },
  {
    id: 8,
    image: `${assets.images.Shop5Img}`,
    category: "Hand bags",
  },
];

export const shopCarouselResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 5,
    slidesToSlide: 1,
  },
  laptop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const contactFormData = [
  { label: "Your Name", field: "name" },
  { label: "Email Address", field: "email" },
  { label: "Phone Number", field: "phone" },
  { label: "Subject", field: "subject" },
];

export const registerFormFields = [{ id: "name" }, { id: "email" }];

export const navLinks = ["HOME", "SHOP", "ABOUT", "CONTACT"];
