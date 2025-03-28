import { products } from "./productData";
import { assets } from "../assets";

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
