// import { Product } from './types';

import { Product } from "./types";

// export const products: Product[] = [
//   {
//     id: 1,
//     title: "Premium Leather Laptop Bag",
//     type: "Accessory",
//     category: "Hand Bags",
//     brand: "Hidesign",
//     originalPrice: 4999,
//     salePrice: 3999,
//     rating: 8.7,
//     reviewCount: 342,
//     shortDescription: "Elegant genuine leather laptop bag with multiple compartments",
//     detailDescription: "Crafted from premium full-grain leather, this laptop bag features a padded compartment that fits laptops up to 15.6 inches. The bag includes multiple pockets for accessories, documents, and personal items. The adjustable shoulder strap and sturdy handles provide comfortable carrying options. The bag's interior is lined with durable fabric to protect your devices from scratches.",
//     additionalInformation: "Dimensions: 40cm x 30cm x 10cm | Weight: 1.2kg | Warranty: 1 year manufacturer warranty",
//     colors: ["#3E2723", "#A52A2A", "#000000"],
//     reviews: [
//       { username: "Rahul M.", rating: 9, comment: "Excellent quality leather and craftsmanship. Worth every rupee." },
//       { username: "Priya S.", rating: 8, comment: "Beautiful bag with plenty of space. The leather smell is divine!" },
//       { username: "Amit K.", rating: 9, comment: "Using it for 6 months now, and it's aging beautifully." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 2,
//     title: "Wireless Noise Cancelling Headphones",
//     type: "Audio",
//     category: "Electronics",
//     brand: "Sony",
//     originalPrice: 24990,
//     salePrice: 19990,
//     rating: 9.2,
//     reviewCount: 1256,
//     shortDescription: "Premium wireless headphones with industry-leading noise cancellation",
//     detailDescription: "Experience the next level of silence with industry-leading noise cancellation technology. These headphones feature 40mm liquid crystal polymer drivers for exceptional audio quality. With up to 30 hours of battery life and quick charging capability, you can enjoy uninterrupted music all day. The touch controls allow easy management of your music, calls, and voice assistant. The headphones automatically adjust the ambient sound based on your activity for an optimal listening experience.",
//     additionalInformation: "Bluetooth 5.0 | Battery Life: Up to 30 hours | Quick Charge: 10 min charge for 5 hours playback | Weight: 254g | Warranty: 2 years",
//     colors: ["#000000", "#7B7B7B", "#C0C0C0"],
//     reviews: [
//       { username: "Vikram T.", rating: 10, comment: "The noise cancellation is unbelievable. Perfect for flights and office." },
//       { username: "Neha G.", rating: 9, comment: "Sound quality is exceptional. Battery life is impressive too." },
//       { username: "Karan S.", rating: 8, comment: "Comfortable for long listening sessions. Worth the investment." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 3,
//     title: "Men's Slim Fit Formal Shirt",
//     type: "Clothing",
//     category: "Men's Clothing",
//     brand: "Allen Solly",
//     originalPrice: 2499,
//     salePrice: 1799,
//     rating: 8.5,
//     reviewCount: 789,
//     shortDescription: "Premium cotton formal shirt with wrinkle-resistant technology",
//     detailDescription: "This slim-fit formal shirt is crafted from 100% premium cotton with wrinkle-resistant technology, making it perfect for long workdays. The shirt features a classic collar, button cuffs, and a chest pocket. The breathable fabric ensures comfort throughout the day. The tailored fit provides a modern silhouette without being too tight. This versatile shirt pairs well with formal trousers for office wear or with chinos for a smart-casual look.",
//     additionalInformation: "Material: 100% Cotton | Care: Machine wash cold, Tumble dry low | Sizes available: 38-44 | Fit: Slim fit",
//     colors: ["#FFFFFF", "#87CEEB", "#FFB6C1", "#000000"],
//     reviews: [
//       { username: "Rajesh K.", rating: 9, comment: "Perfect fit and excellent fabric quality. Minimal ironing needed." },
//       { username: "Suresh P.", rating: 8, comment: "Comfortable for all-day wear. The wrinkle-resistant feature actually works." },
//       { username: "Mahesh T.", rating: 8, comment: "Great value for money. I've bought three more in different colors." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 4,
//     title: "Smart LED TV 55-inch 4K",
//     type: "Television",
//     category: "Electronics",
//     brand: "Samsung",
//     originalPrice: 59990,
//     salePrice: 49990,
//     rating: 9.0,
//     reviewCount: 2345,
//     shortDescription: "55-inch 4K Ultra HD Smart LED TV with HDR and voice control",
//     detailDescription: "Experience stunning clarity with this 55-inch 4K Ultra HD Smart LED TV. The Quantum Processor 4K upscales content to 4K resolution for enhanced detail. HDR technology brings out the detail and contrast in dark scenes. The TV features multiple voice assistants for hands-free control. With built-in apps and screen mirroring, you can enjoy a variety of content from different sources. The slim design with minimal bezels provides an immersive viewing experience.",
//     additionalInformation: "Resolution: 3840 x 2160 | Refresh Rate: 120Hz | Connectivity: 3 HDMI ports, 2 USB ports, Wi-Fi, Bluetooth | Sound: 20W output with Dolby Digital Plus | Warranty: 1 year comprehensive + 1 year on panel",
//     colors: ["#000000"],
//     reviews: [
//       { username: "Deepak S.", rating: 9, comment: "Picture quality is exceptional. Smart features work smoothly." },
//       { username: "Anita R.", rating: 10, comment: "The 4K resolution is mind-blowing. Worth every penny." },
//       { username: "Vivek M.", rating: 8, comment: "Great TV, but the sound could be better. I added a soundbar." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 5,
//     title: "Stainless Steel Water Bottle",
//     type: "Kitchen",
//     category: "Furniture",
//     brand: "Milton",
//     originalPrice: 1299,
//     salePrice: 999,
//     rating: 8.8,
//     reviewCount: 1876,
//     shortDescription: "Double-walled vacuum insulated stainless steel water bottle",
//     detailDescription: "This premium stainless steel water bottle features double-walled vacuum insulation that keeps beverages cold for 24 hours or hot for 12 hours. The bottle is made from high-quality 18/8 food-grade stainless steel that's BPA-free and doesn't transfer flavors. The leak-proof cap ensures no spills in your bag. The wide mouth makes it easy to fill with ice cubes and clean. The durable powder coating provides a slip-free grip and prevents condensation on the exterior.",
//     additionalInformation: "Capacity: 750ml | Material: 18/8 Stainless Steel | Dimensions: 27cm x 7.5cm | Weight: 330g | Warranty: 5 years",
//     colors: ["#000000", "#1E90FF", "#FF4500", "#228B22"],
//     reviews: [
//       { username: "Arjun N.", rating: 9, comment: "Keeps water cold all day even in hot summer. Excellent quality." },
//       { username: "Divya M.", rating: 8, comment: "No leaks, easy to clean, and looks stylish. Great purchase." },
//       { username: "Ravi S.", rating: 9, comment: "Using it for 6 months daily. Still looks and works like new." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1610847499832-918a1c3c6811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 6,
//     title: "Smartphone with 108MP Camera",
//     type: "Mobile Phones",
//     category: "Electronics",
//     brand: "Xiaomi",
//     originalPrice: 29999,
//     salePrice: 24999,
//     rating: 8.9,
//     reviewCount: 3421,
//     shortDescription: "Feature-packed smartphone with 108MP camera and 5G connectivity",
//     detailDescription: "This powerful smartphone features a 108MP main camera with 8K video recording capability. The 6.67-inch AMOLED display offers a 120Hz refresh rate for smooth scrolling and gaming. Powered by the latest Snapdragon processor with 8GB RAM, it handles multitasking with ease. The 5000mAh battery supports 67W fast charging, giving you a full day's power in just 30 minutes. With 5G connectivity, you're future-proofed for the next generation of mobile networks. The phone runs on the latest Android version with minimal bloatware.",
//     additionalInformation: "Display: 6.67-inch AMOLED, 120Hz | Processor: Snapdragon 8 Gen 1 | RAM: 8GB LPDDR5 | Storage: 128GB UFS 3.1 | Battery: 5000mAh | Charging: 67W wired | OS: Android 12 | Warranty: 1 year",
//     colors: ["#000000", "#0000FF", "#FFFFFF"],
//     reviews: [
//       { username: "Rohit K.", rating: 9, comment: "Camera quality is exceptional. Battery life is impressive too." },
//       { username: "Sneha T.", rating: 9, comment: "Fast performance and the display is gorgeous. Great value for money." },
//       { username: "Prakash J.", rating: 8, comment: "5G works well in supported areas. Overall a solid phone." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 7,
//     title: "Ergonomic Office Chair",
//     type: "Office",
//     category: "Furniture",
//     brand: "Featherlite",
//     originalPrice: 15999,
//     salePrice: 12999,
//     rating: 8.6,
//     reviewCount: 742,
//     shortDescription: "High-back ergonomic office chair with adjustable lumbar support",
//     detailDescription: "This ergonomic office chair is designed for all-day comfort with adjustable lumbar support that conforms to your spine. The breathable mesh backrest provides ventilation to keep you cool during long work sessions. The chair features multiple adjustment points including seat height, armrest height and angle, tilt tension, and recline lock. The high-density foam cushion distributes weight evenly to reduce pressure points. The sturdy nylon base with smooth-rolling casters allows for easy movement on various floor surfaces.",
//     additionalInformation: "Weight Capacity: 120kg | Seat Height: 45-55cm adjustable | Material: Mesh back, fabric seat | Assembly: Required, tools included | Warranty: 3 years",
//     colors: ["#000000", "#808080", "#0000FF"],
//     reviews: [
//       { username: "Sanjay R.", rating: 9, comment: "Best investment for work from home. My back pain has significantly reduced." },
//       { username: "Anjali P.", rating: 8, comment: "Very comfortable for long hours. Assembly was straightforward." },
//       { username: "Mohan K.", rating: 9, comment: "The adjustability options are excellent. Quality construction." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 8,
//     title: "Handcrafted Leather Wallet",
//     type: "Accessory",
//     category: "Men's Clothing",
//     brand: "Woodland",
//     originalPrice: 1999,
//     salePrice: 1499,
//     rating: 8.7,
//     reviewCount: 956,
//     shortDescription: "Genuine leather bifold wallet with RFID protection",
//     detailDescription: "This handcrafted wallet is made from full-grain genuine leather that develops a beautiful patina over time. The wallet features RFID blocking technology to protect your credit cards from unauthorized scanning. With 8 card slots, 2 currency compartments, and an ID window, it offers ample storage while maintaining a slim profile. The precision stitching ensures durability for years of use. Each wallet is unique with natural variations in the leather grain and color.",
//     additionalInformation: "Material: Full-grain leather | Dimensions: 11.5cm x 9cm x 1.5cm | RFID Protection: Yes | Warranty: 1 year against manufacturing defects",
//     colors: ["#8B4513", "#000000", "#A52A2A"],
//     reviews: [
//       { username: "Nikhil S.", rating: 9, comment: "Excellent quality leather. Slim design fits perfectly in pocket." },
//       { username: "Arun T.", rating: 8, comment: "The RFID protection works well. Leather feels premium." },
//       { username: "Dinesh R.", rating: 9, comment: "Using it for a year now and it's aging beautifully." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1559694097-9180d94bb882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 9,
//     title: "Fitness Smartwatch",
//     type: "Wearables",
//     category: "Electronics",
//     brand: "Fitbit",
//     originalPrice: 14999,
//     salePrice: 11999,
//     rating: 8.9,
//     reviewCount: 2134,
//     shortDescription: "Advanced fitness tracker with heart rate monitoring and GPS",
//     detailDescription: "This advanced fitness smartwatch tracks your heart rate 24/7 and monitors sleep stages to provide insights into your health. The built-in GPS tracks your outdoor activities with precise route mapping. With over 20 goal-based exercise modes, you can get real-time stats during your workouts. The watch is water-resistant up to 50 meters, making it suitable for swimming. The always-on display is protected by Corning Gorilla Glass. The battery lasts up to 7 days on a single charge, depending on usage. The watch also supports notifications, music control, and contactless payments.",
//     additionalInformation: "Display: 1.58-inch AMOLED | Water Resistance: 5 ATM | Battery Life: Up to 7 days | Sensors: Heart rate, SpO2, accelerometer, gyroscope, altimeter | Connectivity: Bluetooth 5.0, Wi-Fi | Compatibility: iOS 12.2+, Android 7.0+ | Warranty: 1 year",
//     colors: ["#000000", "#1E90FF", "#FF69B4"],
//     reviews: [
//       { username: "Pradeep M.", rating: 9, comment: "Accurate fitness tracking and the battery life is impressive." },
//       { username: "Kavita S.", rating: 9, comment: "Sleep tracking has helped me improve my sleep habits. Worth the investment." },
//       { username: "Rajiv D.", rating: 8, comment: "GPS works well for running. The app is intuitive and provides good insights." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 10,
//     title: "Handmade Ceramic Dinner Set",
//     type: "Home",
//     category: "Dining",
//     brand: "Ellementry",
//     originalPrice: 8999,
//     salePrice: 6999,
//     rating: 9.1,
//     reviewCount: 487,
//     shortDescription: "Artisanal 24-piece ceramic dinner set with hand-painted designs",
//     detailDescription: "This exquisite dinner set is handcrafted by skilled artisans using traditional techniques. Each piece is made from high-quality ceramic and hand-painted with food-safe glazes. The set includes 6 dinner plates, 6 side plates, 6 bowls, and 6 mugs, perfect for a family of six. The unique hand-painted designs ensure that no two pieces are exactly alike. The ceramic material retains heat well, keeping your food warm longer. The set is microwave, dishwasher, and oven safe, making it both beautiful and practical for everyday use.",
//     additionalInformation: "Material: Ceramic | Pieces: 24 (6 dinner plates, 6 side plates, 6 bowls, 6 mugs) | Dishwasher Safe: Yes | Microwave Safe: Yes | Oven Safe: Up to 180°C | Care: Avoid sudden temperature changes",
//     colors: ["#F5F5DC", "#87CEEB", "#E6E6FA"],
//     reviews: [
//       { username: "Rekha J.", rating: 10, comment: "Absolutely beautiful craftsmanship. Each piece is a work of art." },
//       { username: "Sunil P.", rating: 9, comment: "The quality is excellent. We use it for special occasions and everyday meals." },
//       { username: "Meera K.", rating: 8, comment: "Beautiful set that has held up well to daily use. The colors are vibrant." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 11,
//     title: "Women's Running Shoes",
//     type: "Sports",
//     category: "Footwear",
//     brand: "Nike",
//     originalPrice: 7999,
//     salePrice: 5999,
//     rating: 8.8,
//     reviewCount: 1543,
//     shortDescription: "Lightweight running shoes with responsive cushioning",
//     detailDescription: "These premium running shoes feature responsive cushioning that returns energy with every step. The engineered mesh upper provides targeted breathability and support where you need it most. The lightweight foam midsole delivers a smooth, stable ride. The rubber outsole offers durable traction on various surfaces. The shoes have a heel pull tab for easy on and off. The padded collar and tongue provide additional comfort during long runs. The reflective elements enhance visibility in low-light conditions.",
//     additionalInformation: "Weight: 255g (women's size 7) | Drop: 10mm | Arch Support: Neutral | Terrain: Road | Pronation: Neutral | Warranty: 2 years",
//     colors: ["#FF69B4", "#000000", "#4169E1", "#FFFFFF"],
//     reviews: [
//       { username: "Pooja S.", rating: 9, comment: "Extremely comfortable for long runs. Great cushioning and support." },
//       { username: "Nisha R.", rating: 9, comment: "Perfect fit and very lightweight. My go-to running shoes now." },
//       { username: "Tanya M.", rating: 8, comment: "Good grip on wet surfaces. Breathable even during summer runs." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 12,
//     title: "Professional DSLR Camera",
//     type: "Electronics",
//     category: "Photography",
//     brand: "Canon",
//     originalPrice: 89990,
//     salePrice: 79990,
//     rating: 9.3,
//     reviewCount: 876,
//     shortDescription: "Full-frame DSLR camera with 4K video recording",
//     detailDescription: "This professional-grade DSLR camera features a 30.4 megapixel full-frame CMOS sensor that delivers stunning image quality with remarkable detail. The camera offers 4K video recording at 30fps and Full HD at 60fps. The 61-point autofocus system with 41 cross-points ensures precise focusing even in challenging conditions. The camera has a native ISO range of 100-32000, expandable to 50-102400, for excellent low-light performance. The weather-sealed body protects against dust and moisture. The 3.2-inch touchscreen LCD allows for intuitive operation. The camera is compatible with a wide range of EF lenses.",
//     additionalInformation: "Sensor: 30.4MP Full-Frame CMOS | Processor: DIGIC 6+ | Autofocus: 61-point AF system | ISO Range: 100-32000 (expandable to 50-102400) | Continuous Shooting: 7fps | Storage: Dual card slots (CF and SD) | Battery Life: Approx. 900 shots | Warranty: 2 years",
//     colors: ["#000000"],
//     reviews: [
//       { username: "Aditya P.", rating: 10, comment: "Exceptional image quality and autofocus performance. Worth every rupee for professionals." },
//       { username: "Neelam K.", rating: 9, comment: "The low light performance is outstanding. Build quality is top-notch." },
//       { username: "Sameer R.", rating: 9, comment: "4K video quality is excellent. The weather sealing has been reliable in various conditions." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 13,
//     title: "Organic Ayurvedic Skincare Set",
//     type: "Beauty",
//     category: "Skincare",
//     brand: "Forest Essentials",
//     originalPrice: 4999,
//     salePrice: 3999,
//     rating: 8.9,
//     reviewCount: 723,
//     shortDescription: "Luxury Ayurvedic skincare set with natural ingredients",
//     detailDescription: "This premium Ayurvedic skincare set is formulated with natural ingredients sourced from sustainable farms across India. The set includes a facial cleanser, toner, moisturizer, face mask, and facial oil, all designed to work together for radiant skin. The products are free from parabens, sulfates, and synthetic fragrances. The formulations are based on traditional Ayurvedic recipes enhanced with modern skincare science. All ingredients are ethically sourced and the packaging is eco-friendly. The products are suitable for all skin types and are dermatologically tested.",
//     additionalInformation: "Contents: Facial Cleanser (100ml), Facial Toner (100ml), Facial Moisturizer (50ml), Face Mask (50g), Facial Oil (30ml) | Shelf Life: 12 months | Skin Type: All skin types | Free from: Parabens, sulfates, synthetic fragrances | Cruelty-free: Yes",
//     colors: ["#F5F5DC"],
//     reviews: [
//       { username: "Ananya S.", rating: 9, comment: "My skin feels rejuvenated and glowing. The natural fragrance is divine." },
//       { username: "Ritu P.", rating: 9, comment: "The facial oil is exceptional for dry skin. All products work well together." },
//       { username: "Jyoti M.", rating: 8, comment: "Gentle yet effective. Has helped with my sensitive skin issues." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },
//   {
//     id: 14,
//     title: "Smart Home Security System",
//     type: "Electronics",
//     category: "Home Security",
//     brand: "Godrej",
//     originalPrice: 19999,
//     salePrice: 16999,
//     rating: 8.7,
//     reviewCount: 542,
//     shortDescription: "Comprehensive smart home security system with mobile app control",
//     detailDescription: "This comprehensive smart home security system includes a central hub, 2 indoor cameras, 1 outdoor camera, 4 door/window sensors, and a motion detector. The system connects to your home Wi-Fi and can be controlled via the mobile app from anywhere. The cameras feature 1080p HD video, night vision, and two-way audio. The system supports AI-powered person detection to reduce false alerts. The door/window sensors notify you immediately when entry points are breached. The system works with voice assistants for hands-free control. The mobile app allows you to arm/disarm the system, view live camera feeds, and receive real-time alerts.",
//     additionalInformation: "Camera Resolution: 1080p HD | Night Vision: Up to 30 feet | Storage: Cloud (7-day free, subscription for longer) and local microSD | Power: Wired with battery backup | Connectivity: Wi-Fi 2.4GHz | Compatibility: Android 5.0+, iOS 10.0+ | Warranty: 2 years",
//     colors: ["#FFFFFF"],
//     reviews: [
//       { username: "Vinod K.", rating: 9, comment: "Easy to install and the app is intuitive. Provides peace of mind when away from home." },
//       { username: "Sheetal R.", rating: 8, comment: "The motion detection works well and the camera quality is excellent." },
//       { username: "Ramesh S.", rating: 9, comment: "Integration with voice assistants is seamless. The notifications are prompt." }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1563459802257-2a97df940f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "https://images.unsplash.com/photo-1595750383596-b625f5c1a5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//     ]
//   },{
  //   id: 15,
  //   title: "Premium Cotton Slim Fit Shirt",
  //   type: "Clothing",
  //   category: "Men's Clothing",
  //   brand: "Allen Solly",
  //   originalPrice: 2499,
  //   salePrice: 1799,
  //   rating: 8.7,
  //   reviewCount: 342,
  //   shortDescription: "Premium cotton slim fit formal shirt with button-down collar",
  //   detailDescription: "This premium cotton slim fit shirt from Allen Solly is crafted from 100% Egyptian cotton for superior comfort and durability. Features include a button-down collar, single-button cuffs, and a chest pocket. The slim fit design offers a modern silhouette while maintaining comfort throughout the day. Perfect for formal occasions or office wear.",
  //   additionalInformation: "Material: 100% Egyptian Cotton | Care: Machine wash cold, tumble dry low | Fit: Slim Fit | Collar: Button-down | Cuffs: Single-button",
  //   reviews: [
  //     {
  //       username: "Rajesh Kumar",
  //       rating: 9,
  //       comment: "Excellent quality shirt. The fabric feels premium and the fit is perfect for my build. Will definitely buy more colors.",
  //     },
  //     {
  //       username: "Amit Singh",
  //       rating: 8,
  //       comment: "Good shirt for office wear. The cotton is breathable and comfortable even in hot weather.",
  //     },
  //     {
  //       username: "Vikram Mehta",
  //       rating: 9,
  //       comment: "The slim fit is perfect - not too tight, not too loose. Excellent craftsmanship.",
  //     }
  //   ],
  //   imageUrls: [
  //     "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  //     "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  //     "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
  //   ],
  //   colors: ["#FFFFFF", "#87CEEB", "#FFC0CB", "#000000"]
  // },
//   {
//     id: 16,
//     title: "Floral Print Maxi Dress",
//     type: "Clothing",
//     category: "Women's Clothing",
//     brand: "Biba",
//     originalPrice: 3999,
//     salePrice: 2799,
//     rating: 9.2,
//     reviewCount: 278,
//     shortDescription: "Elegant floral print maxi dress with V-neck and flared design",
//     detailDescription: "This stunning floral print maxi dress from Biba features a flattering V-neckline and a flared design that creates an elegant silhouette. Made from premium rayon fabric, it offers exceptional comfort and breathability. The vibrant floral pattern adds a touch of femininity, making it perfect for summer outings, casual gatherings, or festive occasions. The dress includes convenient side pockets and a concealed back zipper for easy wear.",
//     additionalInformation: "Material: 100% Rayon | Care: Hand wash cold, line dry | Length: Maxi | Neckline: V-neck | Sleeves: Three-quarter | Closure: Back zipper",
//     reviews: [
//       {
//           username: "Priya Sharma",
//         rating: 10,
//         comment: "Absolutely love this dress! The fit is perfect and the floral print is gorgeous. Received many compliments when I wore it to a family function.",
//       },
//       {
//           username: "Neha Gupta",
//         rating: 9,
//         comment: "Beautiful dress with great quality fabric. The pockets are a nice bonus!",
//         },
//       {
//           username: "Anjali Patel",
//         rating: 8,
//         comment: "Lovely dress but slightly longer than expected. Had to get it altered, but otherwise perfect.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1619086303291-0e4c0f752f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#FF69B4", "#87CEFA", "#98FB98", "#FFD700"]
//   },
//   {
//     id: 17,
//     title: "Premium Leather Running Shoes",
//     type: "Footwear",
//     category: "Footwear",
//     brand: "Nike",
//     originalPrice: 8999,
//     salePrice: 6499,
//     rating: 9.5,
//     reviewCount: 512,
//     shortDescription: "High-performance running shoes with responsive cushioning",
//     detailDescription: "These premium Nike running shoes feature advanced cushioning technology for responsive performance and comfort during long runs. The breathable mesh upper provides ventilation while the durable rubber outsole offers excellent traction on various surfaces. The shoes include a padded collar and tongue for added comfort, and the removable insole allows for custom orthotics if needed. Designed with both performance and style in mind, these shoes are perfect for serious runners and casual athletes alike.",
//     additionalInformation: "Material: Mesh upper, rubber outsole | Cushioning: Nike React foam | Drop: 10mm | Weight: 255g (men's size 9) | Arch Support: Neutral | Closure: Lace-up",
//     reviews: [
//       {
//           username: "Rahul Verma",
//         rating: 10,
//         comment: "Best running shoes I've ever owned. The cushioning is perfect for my daily 5K runs, and they still look great after months of use.",
//       },
//       {
//           username: "Karan Malhotra",
//         rating: 9,
//         comment: "Very comfortable for long-distance running. Good grip on both wet and dry surfaces.",
//       },
//       {
//           username: "Deepak Sharma",
//         rating: 9,
//         comment: "Great shoes but took a few days to break in. Now they're my go-to for all my runs.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#FF0000", "#000000", "#4169E1", "#808080"]
//   },
//   {
//     id: 18,
//     title: "Chronograph Stainless Steel Watch",
//     type: "Accessory",
//     category: "Watches",
//     brand: "Fossil",
//     originalPrice: 12999,
//     salePrice: 9999,
//     rating: 9.0,
//     reviewCount: 187,
//     shortDescription: "Elegant chronograph watch with stainless steel strap and water resistance",
//     detailDescription: "This sophisticated Fossil chronograph watch features a premium stainless steel case and bracelet with a sleek brushed finish. The watch face includes three sub-dials for tracking seconds, minutes, and hours, along with a date window at 4 o'clock. With 100m water resistance, it's suitable for swimming and snorkeling but not for diving. The luminous hands and markers ensure visibility in low-light conditions, while the scratch-resistant mineral crystal protects the face from daily wear. This versatile timepiece transitions seamlessly from office to evening wear.",
//     additionalInformation:"Case Size: 44mm | Case Material: Stainless Steel | Movement: Quartz | Water Resistance: 100m | Battery Life: Approximately 2 years | Features: Chronograph, Date Display, Luminous Hands",
//     reviews: [
//       {
//           username: "Aditya Kapoor",
//         rating: 9,
//         comment: "Excellent watch for the price. Looks much more expensive than it is and keeps perfect time.",
//       },
//       {
//           username: "Sanjay Gupta",
//         rating: 8,
//         comment: "Good quality watch. The chronograph functions work well, and the stainless steel strap is comfortable.",
//       },
//       {
//           username: "Rohit Sharma",
//         rating: 10,
//         comment: "Stunning watch that goes with everything. The water resistance is a great feature for everyday wear.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#C0C0C0", "#FFD700", "#000000"]
//   },
//   {
//     id: 19,
//     title: "4K Smart LED TV",
//     type: "Electronics",
//     category: "Electronics",
//     brand: "Samsung",
//     originalPrice: 59999,
//     salePrice: 47999,
//     rating: 9.3,
//     reviewCount: 423,
//     shortDescription: "55-inch 4K Ultra HD Smart LED TV with HDR and built-in voice assistant",
//     detailDescription: "Experience stunning visuals with this Samsung 55-inch 4K Ultra HD Smart LED TV. Featuring HDR technology, it delivers vibrant colors and deep blacks for an immersive viewing experience. The powerful processor upscales content to near-4K quality, while the smart TV platform provides access to popular streaming services like Netflix, Amazon Prime, and Disney+. Built-in voice assistants (Alexa and Google Assistant) allow for hands-free control, and the slim design with minimal bezels complements any living space. Multiple HDMI and USB ports ensure connectivity with all your devices.",
//     additionalInformation:"Screen Size: 55 inches | Resolution: 3840 x 2160 (4K UHD) | Refresh Rate: 60Hz | HDR: Yes | Smart TV Platform: Tizen | Connectivity: Wi-Fi, Bluetooth, 3 HDMI ports, 2 USB ports | Audio: 20W output with Dolby Digital Plus | Power Consumption: 150W",
//     reviews: [
//       {
//           username: "Vivek Malhotra",
//         rating: 10,
//         comment: "Exceptional picture quality and smart features. The setup was straightforward, and the interface is user-friendly.",
//       },
//       {
//           username: "Suresh Patel",
//         rating: 9,
//         comment: "Great TV for the price. The 4K resolution is stunning, especially when watching nature documentaries.",
//       },
//       {
//           username: "Anand Joshi",
//         rating: 8,
//         comment: "Good TV overall. The sound could be better, but the picture quality is excellent.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#000000"]
//   },
//   {
//     id: 20,
//     title: "Dinosaur Print T-shirt Set",
//     type: "Clothing",
//     category: "Kid's Clothing",
//     brand: "H&M",
//     originalPrice: 1299,
//     salePrice: 899,
//     rating: 8.9,
//     reviewCount: 156,
//     shortDescription: "Comfortable cotton t-shirt and shorts set with fun dinosaur prints",
//     detailDescription: "This adorable H&M dinosaur print set includes a short-sleeve t-shirt and matching shorts, perfect for active kids. Made from 100% organic cotton, the fabric is soft, breathable, and gentle on sensitive skin. The t-shirt features a colorful dinosaur print on the front, while the shorts have an elastic waistband with drawstring for a comfortable fit. The set is easy to wash and maintains its shape and vibrant colors even after multiple washes. Ideal for everyday wear, playdates, or casual outings.",
//     additionalInformation:"Material: 100% Organic Cotton | Care: Machine wash cold, tumble dry low | Age Range: 2-8 years | Sizes Available: 2T, 3T, 4T, 5T, 6, 7, 8 | Set Includes: 1 T-shirt, 1 Shorts",
//     reviews: [
//       {
//         username: "Meera Khanna",
//         rating: 9,
//         comment: "My son loves this dinosaur set! The material is soft and comfortable, and the prints are vibrant even after washing.",
//        },
//       {
//         username: "Pooja Singh",
//         rating: 8,
//         comment: "Good quality clothing for kids. The size runs a bit large, so I'd recommend sizing down.",
//        },
//       {
//         username: "Ritu Desai",
//         rating: 10,
//         comment: "Perfect summer outfit for my 4-year-old. The organic cotton is breathable and doesn't irritate his skin.",
//        }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1519238359922-989348752efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#1E90FF", "#32CD32", "#FF6347", "#FFD700"]
//   },
//   {
//     id: 21,
//     title: "Diamond Pendant Necklace",
//     type: "Jewelry",
//     category: "Jewellery",
//     brand: "Tanishq",
//     originalPrice: 24999,
//     salePrice: 19999,
//     rating: 9.6,
//     reviewCount: 89,
//     shortDescription: "Elegant 18K gold diamond pendant necklace with delicate chain",
//     detailDescription: "This exquisite Tanishq diamond pendant necklace features a stunning 0.25-carat solitaire diamond set in 18K gold. The pendant has a classic design with a modern twist, making it perfect for both everyday wear and special occasions. The delicate 18-inch chain complements the pendant beautifully and includes a secure lobster clasp. Each diamond is carefully selected for its exceptional cut, clarity, and brilliance. The necklace comes in a luxurious gift box with a certificate of authenticity, making it an ideal gift for anniversaries, birthdays, or other special celebrations.",
//     additionalInformation:"Metal: 18K Gold | Diamond: 0.25 carat | Diamond Quality: VS clarity, F color | Chain Length: 18 inches | Clasp: Lobster | Certification: IGI certified | Warranty: Lifetime against manufacturing defects",
//     reviews: [
//       {
//         username: "Anita Desai",
//         rating: 10,
//         comment: "Absolutely stunning necklace! The diamond catches the light beautifully, and the gold chain is delicate yet sturdy.",
//        },
//       {
//         username: "Kavita Sharma",
//         rating: 9,
//         comment: "Purchased this for my anniversary and couldn't be happier. The quality is excellent, and it looks much more expensive than it is.",
//        },
//       {
//         username: "Sunita Patel",
//         rating: 10,
//         comment: "Perfect everyday diamond necklace. Simple yet elegant, and the diamond has amazing sparkle.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#FFD700", "#FFFFFF"]
//   },
//   {
//     id: 22,
//     title: "Designer Leather Handbag",
//     type: "Accessory",
//     category: "Accessories",
//     brand: "Hidesign",
//     originalPrice: 7999,
//     salePrice: 5999,
//     rating: 8.8,
//     reviewCount: 134,
//     shortDescription: "Premium genuine leather handbag with multiple compartments",
//     detailDescription: "This sophisticated Hidesign leather handbag is crafted from premium full-grain leather that develops a beautiful patina over time. The spacious interior features multiple compartments, including a padded laptop sleeve that fits devices up to 13 inches, a zippered pocket for valuables, and several smaller pockets for organization. The bag closes with a secure zipper and includes both top handles and a detachable, adjustable shoulder strap for versatile carrying options. Metal feet on the bottom protect the bag when set down, and the signature Hidesign hardware adds a touch of elegance. Perfect for work, travel, or everyday use.",
//     additionalInformation:"Material: Full-grain leather | Dimensions: 14\"L x 11\"H x 5\"D | Weight: 2.2 lbs | Interior: Cotton lining | Hardware: Brass with antique finish | Pockets: 1 laptop sleeve, 1 zippered pocket, 3 slip pockets | Strap Drop: 9\" (handles), 21\" (shoulder strap)",
//     reviews: [
//       {
//           username: "Nisha Mehta",
//         rating: 9,
//         comment: "Beautiful bag with excellent craftsmanship. The leather is soft yet durable, and the organization inside is perfect for work.",
//       },
//       {
//           username: "Deepika Reddy",
//         rating: 8,
//         comment: "Lovely bag but slightly heavier than expected. The quality is outstanding though, and it fits everything I need.",
//       },
//       {
//         username: "Shalini Gupta",
//         rating: 9,
//         comment: "This bag is perfect for my daily commute. Fits my laptop, lunch, and all essentials with room to spare.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#8B4513", "#000000", "#A52A2A", "#F5F5DC"]
//   },
//   {
//     id: 23,
//     title: "Wireless Noise Cancelling Headphones",
//     type: "Electronics",
//     category: "Electronics",
//     brand: "Sony",
//     originalPrice: 24999,
//     salePrice: 19999,
//     rating: 9.4,
//     reviewCount: 367,
//     shortDescription: "Premium wireless headphones with industry-leading noise cancellation",
//     detailDescription: "Experience superior sound quality with these Sony wireless noise-cancelling headphones. Featuring industry-leading noise cancellation technology, they effectively block out ambient noise for immersive listening. The 40mm drivers deliver rich, clear audio across all frequencies, while the comfortable over-ear design with plush ear cushions allows for extended listening sessions without discomfort. With up to 30 hours of battery life and quick charging capability (5 hours of playback from just 10 minutes of charging), these headphones are perfect for travel, work, or home use. Additional features include touch controls, voice assistant compatibility, and a speak-to-chat function that automatically pauses music when you start speaking.",
//     additionalInformation:"Driver Size: 40mm | Battery Life: Up to 30 hours | Charging Time: 3 hours (full charge) | Quick Charge: 10 min for 5 hours playback | Bluetooth Version: 5.0 | Codec Support: LDAC, AAC, SBC | Weight: 254g | Accessories: Carrying case, charging cable, audio cable",
//     reviews: [
//       {
//         username: "Arjun Nair",
//         rating: 10,
//         comment: "These headphones are worth every rupee. The noise cancellation is phenomenal, especially on flights, and the sound quality is exceptional.",
//        },
//       {
//         username: "Karthik Menon",
//         rating: 9,
//         comment: "Great headphones with impressive battery life. I regularly get over 28 hours on a single charge with noise cancellation on.",
//        },
//       {
//         username: "Pradeep Kumar",
//         rating: 9,
//         comment: "The comfort level is amazing. I can wear these for hours without any discomfort, and the sound quality is top-notch.",
//        }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#000000", "#C0C0C0", "#FFFFFF", "#0000FF"]
//   },
//   {
//     id: 24,
//     title: "Slim Fit Denim Jeans",
//     type: "Clothing",
//     category: "Men's Clothing",
//     brand: "Levi's",
//     originalPrice: 3999,
//     salePrice: 2799,
//     rating: 8.9,
//     reviewCount: 412,
//     shortDescription: "Classic slim fit denim jeans with stretch comfort",
//     detailDescription: "These Levi's slim fit jeans combine classic style with modern comfort. Made from premium denim with added stretch, they provide flexibility and ease of movement throughout the day. The slim fit offers a contemporary silhouette without being too tight, sitting below the waist and slim through the hip and thigh with a narrow leg opening. Five-pocket styling, signature stitching on the back pockets, and the iconic leather patch add authentic Levi's details. The versatile medium wash works well for both casual and semi-formal occasions, easily pairing with t-shirts, button-downs, or sweaters.",
//     additionalInformation:"Material: 98% Cotton, 2% Elastane | Fit: Slim | Rise: Mid-rise | Closure: Button and zipper fly | Pockets: 5-pocket styling | Care: Machine wash cold, tumble dry medium | Inseam Options: 30\", 32\", 34\" | Waist Sizes: 28-40",
//     reviews: [
//       {
//         username: "Varun Khanna",
//         rating: 9,
//         comment: "Perfect fit and very comfortable. The stretch in the denim makes these great for all-day wear.",
//       },
//       {
//           username: "Nikhil Sharma",
//         rating: 8,
//         comment: "Good quality jeans that have held up well after multiple washes. The color hasn't faded much.",
//       },
//       {
//         username: "Rajat Verma",
//         rating: 9,
//         comment: "These are now my go-to jeans. The fit is perfect - not too tight but still looks tailored.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
//       "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
//       "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
//     ],
//     colors: ["#1E90FF", "#000080", "#000000"]
//   },
//   {
//     id: 25,
//     title: "Smartphone with Triple Camera",
//     type: "Electronics",
//     category: "Electronics",
//     brand: "Samsung",
//     originalPrice: 49999,
//     salePrice: 42999,
//     rating: 9.2,
//     reviewCount: 528,
//     shortDescription: "Feature-packed smartphone with triple camera system and AMOLED display",
//     detailDescription: "This Samsung smartphone combines cutting-edge technology with sleek design. The 6.5-inch Dynamic AMOLED display offers vibrant colors and deep blacks with HDR10+ certification for an immersive viewing experience. The triple camera system includes a 64MP main camera, 12MP ultra-wide lens, and 5MP macro camera, allowing you to capture stunning photos in any situation. Powered by an octa-core processor and 8GB of RAM, it handles multitasking and demanding applications with ease. The 4500mAh battery supports fast charging and wireless charging for convenience. Additional features include an in-display fingerprint sensor, facial recognition, IP68 water and dust resistance, and expandable storage via microSD card.",
//     additionalInformation:"Display: 6.5\" Dynamic AMOLED, 120Hz refresh rate | Processor: Octa-core | RAM: 8GB | Storage: 128GB (expandable) | Battery: 4500mAh | Cameras: 64MP main, 12MP ultra-wide, 5MP macro, 32MP front | OS: Android 12 | Connectivity: 5G, Wi-Fi 6, Bluetooth 5.2, NFC | Biometrics: In-display fingerprint, facial recognition | Water Resistance: IP68",
//     reviews: [
//       {
//         username: "Akash Patel",
//         rating: 9,
//         comment: "Excellent smartphone with a fantastic camera system. Battery life is impressive, easily lasting a full day of heavy use.",
//         },
//       {
//         username: "Ravi Shankar",
//         rating: 10,
//         comment: "The display is absolutely stunning - colors are vibrant and the 120Hz refresh rate makes everything smooth. Camera quality exceeds expectations.",
//          },
//       {
//           username: "Siddharth Kapoor",
//         rating: 8,
//         comment: "Great phone overall. The only minor issue is that it heats up a bit during gaming, but performance remains stable.",
//        }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1027&q=80",
//       "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1027&q=80",
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1027&q=80"
//     ],
//     colors: ["#000000", "#C0C0C0", "#4169E1", "#FFFFFF"]
//   },
//   {
//     id: 26,
//     title: "Stylish Block Heel Sandals",
//     type: "Footwear",
//     category: "Footwear",
//     brand: "Metro",
//     originalPrice: 2999,
//     salePrice: 1999,
//     rating: 8.5,
//     reviewCount: 176,
//     shortDescription: "Comfortable block heel sandals with ankle strap and cushioned footbed",
//     detailDescription: "These Metro block heel sandals combine style and comfort for all-day wear. The 2.5-inch block heel provides stability and support, while the cushioned footbed ensures comfort with every step. The adjustable ankle strap with buckle closure offers a secure fit and adds a touch of elegance. Crafted from premium synthetic leather with a soft lining, these sandals are both durable and comfortable. The non-slip rubber sole provides excellent traction on various surfaces. Versatile enough to pair with both casual and formal outfits, these sandals are perfect for work, parties, or everyday wear.",
//     additionalInformation:"Material: Synthetic leather upper, rubber sole | Heel Height: 2.5 inches | Closure: Adjustable ankle strap with buckle | Footbed: Cushioned | Platform Height: 0.5 inches | Available Colors: Black, Tan, Nude, Red | Available Sizes: 36-41 (EU)",
//     reviews: [
//       {
//         username: "Divya Mathur",
//         rating: 9,
//         comment: "These sandals are so comfortable! I wore them to a wedding and was able to dance all night without any pain.",
//        },
//       {
//         username: "Priyanka Joshi",
//         rating: 8,
//         comment: "Good quality sandals that look more expensive than they are. The block heel makes them easy to walk in.",
//        },
//       {
//         username: "Sneha Gupta",
//         rating: 8,
//         comment: "Comfortable and stylish. The ankle strap is adjustable which is great for my narrow ankles.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#000000", "#A52A2A", "#FFC0CB", "#FF0000"]
//   },
//   {
//     id: 27,
//     title: "Gold Plated Bangles Set",
//     type: "Jewelry",
//     category: "Jewellery",
//     brand: "Malabar Gold",
//     originalPrice: 8999,
//     salePrice: 6999,
//     rating: 9.1,
//     reviewCount: 103,
//     shortDescription: "Elegant set of six gold-plated bangles with intricate designs",
//     detailDescription: "This stunning set of six bangles from Malabar Gold features intricate traditional designs with a modern twist. Each bangle is crafted from brass and plated with 22K gold for a luxurious finish that resembles solid gold at a fraction of the price. The bangles vary slightly in design while maintaining a cohesive look, allowing them to be worn together as a set or mixed with other bangles for a personalized style. The secure clasp mechanism makes them easy to put on and take off, while ensuring they stay in place during wear. These bangles are perfect for both everyday wear and special occasions like weddings, festivals, or parties.",
//     additionalInformation:"Material: Brass with 22K gold plating | Quantity: Set of 6 bangles | Inner Diameter: 2.6 inches (standard size) | Width: 0.4 inches | Weight: Approximately 120g (total) | Clasp: Push-button clasp | Care: Store in a dry place, avoid contact with water and chemicals | Warranty: 6 months against manufacturing defects",
//     reviews: [
//       {          
//         username: "Rekha Agarwal",
//         rating: 9,
//         comment: "Beautiful bangles that look like real gold. The designs are intricate and the clasp mechanism is secure.",
//       },
//       {          
//         username: "Jyoti Sharma",
//         rating: 9,
//         comment: "Excellent quality for the price. I've worn them several times and they haven't tarnished at all.",
//       },
//       {          
//         username: "Sarita Patel",
//         rating: 10,
//         comment: "These bangles are stunning! They're comfortable to wear and the designs receive many compliments.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#FFD700"]
//   },
//   {
//     id: 28,
//     title: "Printed Floral Dress for Girls",
//     type: "Clothing",
//     category: "Kid's Clothing",
//     brand: "Gini & Jony",
//     originalPrice: 1799,
//     salePrice: 1299,
//     rating: 8.8,
//     reviewCount: 145,
//     shortDescription: "Adorable floral print dress with puff sleeves and bow detail",
//     detailDescription: "This charming Gini & Jony floral dress is perfect for special occasions or everyday wear. Made from soft cotton blend fabric, it features a beautiful all-over floral print in vibrant colors that little girls will love. The puff sleeves add a touch of elegance, while the bow detail at the waist enhances the cute factor. The dress has a concealed back zipper for easy dressing and a full skirt that twirls beautifully when she moves. The fabric is breathable and comfortable, making it suitable for all-day wear. Machine washable and colorfast, this dress maintains its vibrant appearance even after multiple washes.",
//     additionalInformation:"Material: 95% Cotton, 5% Elastane | Care: Machine wash cold, tumble dry low | Age Range: 2-8 years | Closure: Back zipper | Length: Knee-length | Occasion: Casual, Party | Season: All seasons",
//     reviews: [
//       {
//         username: "Neha Kapoor",
//         rating: 9,
//         comment: "My daughter loves this dress! The fabric is soft, and the floral print is vibrant and hasn't faded after washing.",
//       },
//       {
//         username: "Swati Gupta",
//         rating: 8,
//         comment: "Pretty dress with good quality fabric. The size runs a bit small, so I'd recommend sizing up.",
//       },
//       {
//         username: "Anjali Singh",
//         rating: 9,
//         comment: "Beautiful dress that my daughter wore for her birthday. The puff sleeves and bow detail make it look extra special.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#FF69B4", "#87CEEB", "#9370DB", "#FFFFFF"]
//   },
//   {
//     id: 29,
//     title: "Automatic Chronograph Watch",
//     type: "Accessory",
//     category: "Watches",
//     brand: "Titan",
//     originalPrice: 15999,
//     salePrice: 12999,
//     rating: 8.9,
//     reviewCount: 167,
//     shortDescription: "Sophisticated automatic chronograph watch with leather strap",
//     detailDescription: "This premium Titan automatic chronograph watch combines classic design with modern functionality. The watch features a self-winding mechanical movement that eliminates the need for a battery, powered instead by the natural motion of your wrist. The elegant 42mm stainless steel case houses a multi-function dial with chronograph sub-dials for seconds, minutes, and hours, along with a date window at 4 o'clock. The scratch-resistant sapphire crystal protects the face while providing exceptional clarity. The genuine leather strap with contrast stitching adds a touch of sophistication and develops a beautiful patina over time. Water-resistant to 50 meters, this watch is suitable for everyday wear including swimming in shallow water.",
//     additionalInformation:"Movement: Automatic mechanical | Case Diameter: 42mm | Case Material: Stainless steel | Crystal: Sapphire | Strap: Genuine leather | Water Resistance: 50m | Functions: Hours, minutes, seconds, chronograph, date | Power Reserve: Approximately 40 hours | Warranty: 2 years international warranty",
//     reviews: [
//       {          
//         username: "Vikram Singh",
//         rating: 9,
//         comment: "Excellent watch with great craftsmanship. The automatic movement works flawlessly, and the chronograph functions are precise.",
//       },        {
//         username: "Ajay Sharma",
//         rating: 8,
//         comment: "Beautiful timepiece that looks much more expensive than it is. The leather strap is comfortable and high quality.",
//       },
//       {          
//         username: "Rajeev Kumar",
//         rating: 9,
//         comment: "This is my first automatic watch, and I'm impressed with the quality. It keeps accurate time and the chronograph is a useful feature.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#000000", "#8B4513", "#C0C0C0"]
//   },
//   {
//     id: 30,
//     title: "Wireless Bluetooth Earbuds",
//     type: "Electronics",
//     category: "Electronics",
//     brand: "boAt",
//     originalPrice: 4999,
//     salePrice: 2999,
//     rating: 8.7,
//     reviewCount: 623,
//     shortDescription: "True wireless earbuds with touch controls and long battery life",
//     detailDescription: "Experience superior sound quality with these boAt wireless Bluetooth earbuds. Featuring 10mm dynamic drivers, they deliver powerful bass and crystal-clear highs for an immersive audio experience. The true wireless design eliminates tangled cords, while Bluetooth 5.0 technology ensures a stable connection up to 10 meters. With touch controls on each earbud, you can easily manage music playback, calls, and voice assistants without reaching for your phone. The earbuds provide up to 6 hours of playback on a single charge, and the compact charging case adds an additional 24 hours, for a total of 30 hours of battery life. IPX5 water resistance protects against sweat and light rain, making these earbuds perfect for workouts and outdoor activities.",
//     additionalInformation:"Driver Size: 10mm | Bluetooth Version: 5.0 | Battery Life: 6 hours (earbuds), 24 hours (with case) | Charging Time: 1.5 hours | Water Resistance: IPX5 | Controls: Touch | Microphone: Built-in with noise reduction | Compatibility: Android, iOS, Windows | Warranty: 1 year",
//     reviews: [
//       {
//         username: "Manish Tiwari",
//         rating: 9,
//         comment: "Great sound quality for the price. The bass is impressive, and the battery life is as advertised.",
//       },
//       {
//         username: "Suresh Kumar",
//         rating: 8,
//         comment: "Good earbuds for everyday use. The touch controls work well, and they're comfortable even for long listening sessions.",
//       },
//       {
//         username: "Prakash Jha",
//         rating: 9,
//         comment: "Excellent value for money. The sound quality is comparable to much more expensive brands, and the battery life is impressive.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF"]
//   },
//   {
//     id: 31,
//     title: "Leather Formal Shoes",
//     type: "Footwear",
//     category: "Footwear",
//     brand: "Red Tape",
//     originalPrice: 4999,
//     salePrice: 3499,
//     rating: 8.6,
//     reviewCount: 198,
//     shortDescription: "Premium genuine leather formal shoes with brogue detailing",
//     detailDescription: "These sophisticated Red Tape formal shoes are crafted from genuine leather with classic brogue detailing for a timeless look. The burnished finish adds character and depth to the rich color, while the leather lining provides comfort and breathability. The cushioned insole offers support for all-day wear, and the durable rubber outsole provides excellent traction and shock absorption. The lace-up closure ensures a secure fit, and the slightly elevated heel adds a touch of height. Perfect for formal occasions, business meetings, or everyday office wear, these versatile shoes pair well with suits, trousers, or even dark jeans for a smart-casual look.",
//     additionalInformation:"Material: Genuine leather upper, leather lining, rubber outsole | Closure: Lace-up | Heel Height: 1 inch | Style: Brogue | Toe Shape: Round | Available Colors: Black, Brown, Tan | Available Sizes: UK 6-11 | Care: Clean with leather cleaner, use shoe trees to maintain shape",
//     reviews: [
//       {
//           username: "Rahul Khanna",
//         rating: 9,
//         comment: "Excellent quality shoes that look professional and feel comfortable. The leather is soft yet durable.",
//       },
//       {
//         username: "Anil Sharma",
//         rating: 8,
//         comment: "Good formal shoes for the price. They required a short break-in period but are now very comfortable for all-day wear.",
//       },
//       {
//         username: "Deepak Verma",
//         rating: 9,
//         comment: "These shoes look much more expensive than they are. The brogue detailing adds a touch of elegance to any outfit.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#000000", "#8B4513", "#D2B48C"]
//   },
//   {
//     id: 32,
//     title: "Silver Oxidized Jhumka Earrings",
//     type: "Jewelry",
//     category: "Jewellery",
//     brand: "Jaipur Mart",
//     originalPrice: 1499,
//     salePrice: 999,
//     rating: 9.2,
//     reviewCount: 215,
//     shortDescription: "Traditional silver oxidized jhumka earrings with intricate detailing",
//     detailDescription: "These stunning jhumka earrings from Jaipur Mart showcase the rich tradition of Indian craftsmanship. Handcrafted from sterling silver with an oxidized finish, they feature intricate filigree work and traditional motifs that reflect India's artistic heritage. The dome-shaped design is adorned with small bells that create a subtle, pleasant tinkling sound with movement. Lightweight despite their statement size, these earrings are comfortable for all-day wear. The secure lever-back closure ensures they stay in place. These versatile earrings add a touch of ethnic elegance to both traditional outfits like sarees and lehengas, as well as contemporary western wear for a fusion look.",
//     additionalInformation:"Material: 925 Sterling Silver with oxidized finish | Style: Traditional Jhumka | Length: 2.5 inches | Width: 1.5 inches | Weight: 12g (pair) | Closure: Lever-back | Care: Store in a dry place, clean with silver polish cloth | Origin: Handcrafted in Jaipur, India",
//     reviews: [
//       {
//         username: "Shalini Gupta",
//         rating: 10,
//         comment: "These jhumkas are absolutely beautiful! The craftsmanship is exquisite, and they're surprisingly lightweight for their size.",
//        },
//       {
//         username: "Neha Sharma",
//         rating: 9,
//         comment: "Gorgeous earrings that received many compliments when I wore them to a wedding. The oxidized silver gives them a unique, antique look.",
//        },
//       {
//         username: "Anjali Patel",
//         rating: 8,
//         comment: "Beautiful jhumkas with intricate detailing. They're a bit larger than I expected but still very wearable and elegant.",
//       }
//     ],
//     imageUrls: [
//       "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//       "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//     ],
//     colors: ["#C0C0C0"]
//   },
//   {
//       id: 33,
//       title: "Wireless Gaming Mouse",
//       type: "Electronics",
//       category: "Electronics",
//       brand: "Logitech",
//       originalPrice: 5999,
//       salePrice: 4499,
//       rating: 9.3,
//       reviewCount: 378,
//       shortDescription: "High-performance wireless gaming mouse with customizable RGB lighting",
//       detailDescription: "Elevate your gaming experience with this Logitech wireless gaming mouse. Featuring a high-precision 16,000 DPI optical sensor, it delivers exceptional tracking accuracy for competitive gaming. The ultra-fast 1ms response rate and reliable wireless connection ensure lag-free performance. With 6 programmable buttons, you can customize controls for your favorite games. The ergonomic design with textured grips provides comfort during extended gaming sessions. RGB lighting with 16.8 million color options allows for personalization, while the rechargeable battery offers up to 60 hours of gameplay on a single charge. The lightweight construction (95g) enables quick movements without fatigue.",
//       additionalInformation: "Sensor: 16,000 DPI optical | Connectivity: Wireless (2.4GHz) | Response Rate: 1ms | Buttons: 6 programmable | Battery Life: Up to 60 hours | Weight: 95g | RGB: Yes, 16.8 million colors | Compatibility: Windows, macOS | Software: Logitech G HUB | Warranty: 2 years",
//       reviews: [
//         {
         
//          username: "Akshay Mehta",
//           rating: 10,
//           comment: "Best gaming mouse I've ever used. The sensor is incredibly precise, and the wireless performance is indistinguishable from wired.",
//           },
//         {
//           username: "Varun Singh",
//           rating: 9,
//           comment: "Great mouse with excellent battery life. I can go almost a week of heavy gaming before needing to recharge.",
//           },
//         {
//           username: "Nikhil Sharma",
//           rating: 9,
//           comment: "The customization options are fantastic. The software is intuitive, and the RGB lighting looks amazing.",
//           }
//       ],
//       imageUrls: [
//         "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//         "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//         "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//       ],
//       colors: ["#000000", "#FFFFFF", "#FF0000"]
//     },
//     {
//         id: 34,
//         title: "Printed Casual Shirt",
//         type: "Clothing",
//         category: "Men's Clothing",
//         brand: "Peter England",
//         originalPrice: 1899,
//         salePrice: 1299,
//         rating: 8.6,
//         reviewCount: 256,
//         shortDescription: "Stylish printed casual shirt with short sleeves and modern fit",
//         detailDescription: "This trendy Peter England casual shirt features a contemporary all-over print that adds personality to your casual wardrobe. Made from 100% cotton, it offers exceptional breathability and comfort in warm weather. The modern fit is relaxed without being baggy, providing a clean silhouette. The short sleeves and button-down collar create a versatile look that works well for casual outings, weekend brunches, or relaxed office environments. The shirt includes a chest pocket and curved hem that looks great both tucked in or worn out. Easy to care for and resistant to wrinkles, this shirt maintains its crisp appearance throughout the day.",
//         additionalInformation: "Material: 100% Cotton | Fit: Modern fit | Collar: Button-down | Sleeves: Short | Closure: Button front | Pattern: All-over print | Care: Machine wash cold, tumble dry low | Sizes: S-XXL",
//         reviews: [
//           {
//             username: "Aditya Sharma",
//             rating: 9,
//             comment: "Great casual shirt for summer. The fabric is lightweight and breathable, and the print is subtle yet stylish.",
//             },
//           {
//             username: "Rahul Gupta",
//             rating: 8,
//             comment: "Good quality shirt with nice detailing. The fit is perfect - not too tight or too loose.",
//             },
//           {
//             username: "Karan Malhotra",
//             rating: 9,
//             comment: "Comfortable shirt that looks great with jeans or chinos. Received several compliments when I wore it to a casual dinner.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#87CEEB", "#FFFFFF", "#98FB98", "#FFA07A"]
//       },
//       {
//         id: 35,
//         title: "Fitness Tracker with Heart Rate Monitor",
//         type: "Electronics",
//         category: "Electronics",
//         brand: "Fitbit",
//         originalPrice: 9999,
//         salePrice: 7999,
//         rating: 9.1,
//         reviewCount: 412,
//         shortDescription: "Advanced fitness tracker with heart rate monitoring and sleep analysis",
//         detailDescription: "This Fitbit fitness tracker helps you achieve your health goals with comprehensive activity and wellness monitoring. The continuous heart rate tracking provides insights into your cardio fitness level and helps optimize workouts. Track steps, distance, calories burned, and active minutes throughout the day. The advanced sleep monitoring analyzes light, deep, and REM sleep stages to help improve your sleep quality. The bright, color touchscreen displays real-time stats and smartphone notifications. Water-resistant to 50 meters, it's suitable for swimming and showering. The long-lasting battery provides up to 7 days of use on a single charge, keeping you connected without frequent recharging.",
//         additionalInformation: "Display: 1.4\" color touchscreen | Battery Life: Up to 7 days | Water Resistance: 50m | Sensors: Optical heart rate, 3-axis accelerometer, altimeter | Connectivity: Bluetooth | Compatibility: iOS, Android | Tracking: Steps, distance, calories, sleep, heart rate | Notifications: Calls, texts, calendar, apps | Warranty: 1 year",
//         reviews: [
//           {
//             username: "Priya Nair",
//             rating: 9,
//             comment: "Excellent fitness tracker that has helped me stay motivated. The heart rate monitoring is accurate, and the sleep tracking has been eye-opening.",
//             },
//           {
//             username: "Ankit Patel",
//             rating: 10,
//             comment: "Love this tracker! The battery life is impressive - I only need to charge it once a week despite using all the features daily.",
//             },
//           {
//             username: "Meera Kapoor",
//             rating: 8,
//             comment: "Good fitness tracker with useful features. The app is intuitive and provides detailed insights about your health metrics.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1510003402327-b1a6ad3592ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#000000", "#FF69B4", "#4169E1", "#32CD32"]
//       },
//       {
//         id: 36,
//         title: "Handcrafted Leather Belt",
//         type: "Accessory",
//         category: "Accessories",
//         brand: "Ruosh",
//         originalPrice: 2499,
//         salePrice: 1799,
//         rating: 8.9,
//         reviewCount: 167,
//         shortDescription: "Premium handcrafted leather belt with classic buckle design",
//         detailDescription: "This Ruosh handcrafted leather belt combines timeless style with exceptional craftsmanship. Made from full-grain Italian leather, it features a classic design that complements both formal and casual outfits. The belt is meticulously hand-stitched by skilled artisans, ensuring durability and attention to detail. The solid brass buckle with a brushed finish adds a touch of sophistication, while the 7 adjustment holes allow for a customized fit. The belt's 35mm width is versatile enough for most belt loops. Each belt develops a unique patina over time, becoming more beautiful with age. Perfect for daily wear, this belt is a staple accessory for any wardrobe.",
//         additionalInformation: "Material: Full-grain Italian leather | Width: 35mm | Buckle: Solid brass with brushed finish | Adjustment Holes: 7 | Available Sizes: 30-42 inches | Available Colors: Black, Brown, Tan | Care: Clean with leather conditioner | Origin: Handcrafted in India",
//         reviews: [
//           {
//             username: "Rajiv Khanna",
//             rating: 9,
//             comment: "Excellent quality belt. The leather is thick and supple, and the buckle has a premium feel to it.",
//             },
//           {
//             username: "Sunil Mehta",
//             rating: 9,
//             comment: "This belt looks much more expensive than it is. The craftsmanship is outstanding, and it pairs well with both jeans and formal trousers.",
//             },
//           {
//             username: "Vikram Singh",
//             rating: 8,
//             comment: "Good quality leather belt that has held up well with daily use. The color has developed a nice patina over time.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#000000", "#8B4513", "#D2B48C"]
//       },
//       {
//         id: 37,
//         title: "Stainless Steel Water Bottle",
//         type: "Accessory",
//         category: "Accessories",
//         brand: "Milton",
//         originalPrice: 999,
//         salePrice: 799,
//         rating: 8.7,
//         reviewCount: 289,
//         shortDescription: "Vacuum insulated stainless steel water bottle that keeps drinks hot or cold",
//         detailDescription: "This premium Milton stainless steel water bottle features double-wall vacuum insulation that keeps beverages hot for up to 12 hours and cold for up to 24 hours. Made from high-quality 18/8 food-grade stainless steel, it's BPA-free and doesn't transfer flavors or odors. The leak-proof lid with a secure twist cap prevents spills, making it perfect for commuting, travel, or outdoor activities. The sleek, ergonomic design fits most cup holders and backpack pockets, while the powder-coated exterior provides a comfortable grip and prevents condensation. Durable and built to last, this bottle is an eco-friendly alternative to disposable plastic bottles, helping reduce waste while keeping you hydrated.",
//         additionalInformation: "Material: 18/8 food-grade stainless steel | Capacity: 750ml | Insulation: Double-wall vacuum | Temperature Retention: Hot - 12 hours, Cold - 24 hours | Lid Type: Leak-proof twist cap | Features: BPA-free, sweat-proof, condensation-free | Care: Hand wash recommended | Warranty: 1 year",
//         reviews: [
//           {
//             username: "Neha Gupta",
//             rating: 9,
//             comment: "Excellent water bottle that keeps water cold all day, even in hot weather. The leak-proof cap works perfectly.",
//             },
//           {
//             username: "Ravi Kumar",
//             rating: 8,
//             comment: "Good quality bottle with great insulation. I filled it with hot tea in the morning, and it was still hot when I drank it in the afternoon.",
//             },
//           {
//             username: "Priya Sharma",
//             rating: 9,
//             comment: "Sturdy bottle that's perfect for the gym and office. The powder coating has held up well without scratches or chips.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#000000", "#1E90FF", "#FF4500", "#32CD32"]
//       },
//       {
//         id: 38,
//         title: "Kids' Sports Shoes",
//         type: "Footwear",
//         category: "Kid's Clothing",
//         brand: "Adidas",
//         originalPrice: 2499,
//         salePrice: 1899,
//         rating: 9.0,
//         reviewCount: 187,
//         shortDescription: "Lightweight sports shoes for kids with cushioned soles and easy closure",
//         detailDescription: "These Adidas kids' sports shoes are designed for active children who love to run, jump, and play. The lightweight construction reduces fatigue, while the breathable mesh upper keeps little feet cool and comfortable. The cushioned EVA midsole provides excellent shock absorption to protect growing feet, and the non-marking rubber outsole offers superior traction on various surfaces. The hook-and-loop closure allows for easy on and off, promoting independence, while the padded collar and tongue prevent irritation. Reflective details enhance visibility in low light conditions for added safety. These versatile shoes are perfect for school, sports activities, or casual wear, combining performance features with playful design elements that kids love.",
//         additionalInformation: "Material: Mesh upper, rubber outsole | Closure: Hook-and-loop (Velcro) | Cushioning: EVA midsole | Features: Breathable, lightweight, reflective details | Age Range: 4-12 years | Available Sizes: UK 10C-5Y | Care: Wipe clean with damp cloth | Weight: Approximately 180g (single shoe, size 13C)",
//         reviews: [
//           {
//             username: "Ritu Sharma",
//             rating: 9,
//             comment: "Great shoes for my active 6-year-old. They're lightweight, comfortable, and the Velcro closure makes them easy for him to put on himself.",
//             },
//           {
//             username: "Anand Patel",
//             rating: 9,
//             comment: "These shoes have held up remarkably well despite my daughter wearing them for everything from school to playground activities.",
//             },
//           {
//             username: "Kavita Nair",
//             rating: 8,
//             comment: "Good quality shoes with nice cushioning. My son finds them comfortable for his PE classes and outdoor play.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#FF0000", "#1E90FF", "#000000", "#32CD32"]
//       },
//       {
//         id: 39,
//         title: "Pearl and Gold Necklace Set",
//         type: "Jewelry",
//         category: "Jewellery",
//         brand: "CaratLane",
//         originalPrice: 15999,
//         salePrice: 12999,
//         rating: 9.4,
//         reviewCount: 98,
//         shortDescription: "Elegant freshwater pearl necklace with matching earrings in 18K gold setting",
//         detailDescription: "This exquisite CaratLane pearl necklace set showcases the timeless beauty of freshwater pearls combined with modern design. The necklace features 7-8mm high-quality freshwater pearls arranged in a graduated pattern, interspersed with delicate 18K gold beads that add a touch of luxury. The adjustable chain allows for versatile styling, while the secure lobster clasp ensures the necklace stays in place. The matching drop earrings feature single pearls suspended from gold posts with push-back closures for comfortable all-day wear. Each pearl is hand-selected for its luster, shape, and surface quality, resulting in a set with exceptional beauty. Perfect for weddings, special occasions, or adding elegance to business attire, this set comes in a premium gift box with a certificate of authenticity.",
//         additionalInformation: "Pearls: 7-8mm freshwater pearls | Metal: 18K gold | Necklace Length: 16-18\" adjustable | Earring Length: 1\" | Clasp: Lobster | Earring Closure: Push-back | Certification: Includes authenticity certificate | Care: Store in provided box, clean with soft cloth | Warranty: 1 year against manufacturing defects",
//         reviews: [
//           {
//             username: "Asha Reddy",
//             rating: 10,
//             comment: "Stunning pearl set with exceptional quality. The pearls have beautiful luster, and the gold accents add just the right amount of elegance.",
//             },
//           {
//             username: "Leela Nair",
//             rating: 9,
//             comment: "Beautiful necklace and earrings that look much more expensive than they are. I wore them to my daughter's wedding and received many compliments.",
//             },
//           {
//             username: "Shalini Mehta",
//             rating: 9,
//             comment: "Elegant pearl set with excellent craftsmanship. The adjustable chain on the necklace is a thoughtful feature that allows for different necklines.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#FFFFFF", "#FFD700"]
//       },
//       {
//         id: 40,
//         title: "Leather Crossbody Sling Bag",
//         type: "Accessory",
//         category: "Accessories",
//         brand: "Baggit",
//         originalPrice: 2999,
//         salePrice: 2299,
//         rating: 8.7,
//         reviewCount: 176,
//         shortDescription: "Compact leather crossbody sling bag with multiple compartments",
//         detailDescription: "This stylish Baggit crossbody sling bag combines functionality with contemporary design. Crafted from premium vegan leather with a textured finish, it offers the look and feel of genuine leather while being environmentally conscious. The compact size is perfect for carrying essentials without bulk, making it ideal for shopping, travel, or everyday use. The bag features a main zippered compartment, a front pocket with magnetic closure, and a back zippered pocket for items requiring extra security. The adjustable shoulder strap allows for comfortable wear across the body or over the shoulder. The water-resistant exterior protects your belongings from light rain, while the durable polyester lining withstands daily use. This versatile bag complements both casual and semi-formal outfits.",
//         additionalInformation: "Material: Premium vegan leather exterior, polyester lining | Dimensions: 8\"W x 10\"H x 2\"D | Strap Length: Adjustable up to 25\" | Closure: Zipper | Pockets: 1 main compartment, 1 front pocket, 1 back pocket, 2 interior slip pockets | Features: Water-resistant, adjustable strap | Care: Wipe clean with damp cloth | Warranty: 6 months",
//         reviews: [
//           {
//             username: "Nisha Patel",
//             rating: 9,
//             comment: "Perfect size for daily essentials. The quality is excellent, and the vegan leather looks and feels premium.",
//            },
//           {
//             username: "Priya Sharma",
//             rating: 8,
//             comment: "Great bag for everyday use. The multiple compartments help keep everything organized, and the strap is comfortable.",
//            },
//           {
//             username: "Deepika Reddy",
//             rating: 9,
//             comment: "Stylish and functional bag that goes with everything. I appreciate that it's vegan leather but still looks sophisticated.",
//            }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#000000", "#8B4513", "#A52A2A", "#F5F5DC"]
//       },
//       {
//         id: 41,
//         title: "Portable Bluetooth Speaker",
//         type: "Electronics",
//         category: "Electronics",
//         brand: "JBL",
//         originalPrice: 7999,
//         salePrice: 5999,
//         rating: 9.2,
//         reviewCount: 345,
//         shortDescription: "Waterproof portable Bluetooth speaker with 360° sound and long battery life",
//         detailDescription: "This JBL portable Bluetooth speaker delivers powerful, room-filling sound in a compact, travel-friendly design. The 360° speaker arrangement provides immersive audio from every angle, while the passive radiators enhance bass performance for deep, rich lows. With IPX7 waterproof certification, it withstands immersion in water up to 1 meter for 30 minutes, making it perfect for pool parties, beach outings, or shower use. The rechargeable battery offers up to 12 hours of playtime on a single charge, and the built-in power bank feature lets you charge your smartphone or tablet via the USB port. Bluetooth 5.1 connectivity ensures stable wireless streaming from up to 30 feet away, while the speakerphone function with noise-canceling technology allows for clear hands-free calls. The durable fabric covering and rugged rubber housing protect against drops and bumps during travel.",
//         additionalInformation: "Bluetooth Version: 5.1 | Battery Life: Up to 12 hours | Charging Time: 4 hours | Water Resistance: IPX7 (waterproof) | Power Output: 20W RMS | Frequency Response: 65Hz-20kHz | Features: 360° sound, built-in power bank, speakerphone | Connectivity: Bluetooth, 3.5mm aux input | Dimensions: 7\" x 3\" x 3\" | Weight: 540g | Warranty: 1 year",
//         reviews: [
//           {
//             username: "Vikram Nair",
//             rating: 10,
//             comment: "Incredible sound quality for such a compact speaker. The bass is impressive, and the 360° sound fills my entire living room.",
//             },
//           {
//             username: "Arjun Mehta",
//             rating: 9,
//             comment: "Great portable speaker with excellent battery life. I took it on a weekend trip, and it lasted the entire time without needing a recharge.",
//             },
//           {
//             username: "Kiran Sharma",
//             rating: 8,
//             comment: "Good sound quality and truly waterproof. I accidentally dropped it in the pool, and it continued working perfectly after I fished it out.",
//              }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#000000", "#FF0000", "#1E90FF", "#32CD32"]
//       },
//       {
//         id: 42,
//         title: "Organic Cotton Baby Romper Set",
//         type: "Clothing",
//         category: "Kid's Clothing",
//         brand: "FirstCry",
//         originalPrice: 1499,
//         salePrice: 999,
//         rating: 9.1,
//         reviewCount: 213,
//         shortDescription: "Soft organic cotton romper set for babies with cute animal prints",
//         detailDescription: "This adorable FirstCry romper set is designed with your baby's comfort and safety in mind. Made from 100% GOTS-certified organic cotton, the fabric is exceptionally soft, breathable, and free from harmful chemicals, making it perfect for a baby's sensitive skin. The set includes three rompers with playful animal prints and embroidered details that add a touch of charm. The envelope neckline allows for easy dressing and undressing, while the snap buttons at the bottom facilitate quick diaper changes. The tagless design prevents skin irritation, and the flatlock seams minimize chafing. The pre-shrunk fabric maintains its shape and softness even after multiple washes. This versatile set is perfect for everyday wear, playtime, or as a thoughtful baby shower gift.",
//         additionalInformation: "Material: 100% GOTS-certified organic cotton | Set Includes: 3 rompers | Age Range: 0-12 months | Sizes Available: 0-3M, 3-6M, 6-9M, 9-12M | Closure: Envelope neckline, snap buttons at bottom | Care: Machine wash cold, tumble dry low | Features: Tagless design, flatlock seams, pre-shrunk fabric | Certification: GOTS (Global Organic Textile Standard)",
//         reviews: [
//           {
//             username: "Meera Kapoor",
//             rating: 10,
//             comment: "These rompers are incredibly soft and perfect for my baby's sensitive skin. The animal prints are adorable, and the quality is excellent.",
//             },
//           {
//             username: "Anita Sharma",
//             rating: 9,
//             comment: "Great quality organic cotton that gets softer with each wash. The snap buttons make diaper changes so much easier.",
//             },
//           {
//             username: "Priya Nair",
//             rating: 8,
//             comment: "Lovely romper set that's held up well after multiple washes. The envelope neckline is perfect for easily dressing my wiggly baby.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1519238359922-989348752efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#87CEEB", "#98FB98", "#FFCBA4", "#FFC0CB"]
//       },
//       {
//         id: 43,
//         title: "Men's Aviator Sunglasses",
//         type: "Accessory",
//         category: "Accessories",
//         brand: "Ray-Ban",
//         originalPrice: 7999,
//         salePrice: 5999,
//         rating: 9.3,
//         reviewCount: 267,
//         shortDescription: "Classic aviator sunglasses with polarized lenses and gold frame",
//         detailDescription: "These iconic Ray-Ban aviator sunglasses combine timeless style with premium functionality. The classic teardrop shape flatters most face shapes and has remained fashionable for decades. The polarized lenses reduce glare and enhance visual clarity, making them perfect for driving or outdoor activities. The lenses also provide 100% UV protection, safeguarding your eyes from harmful sun rays. The lightweight gold-tone metal frame features adjustable nose pads for a comfortable, customized fit, while the slim temples with plastic end tips ensure they stay securely in place. The green G-15 lenses offer true color perception and exceptional optical clarity. Each pair comes with a premium leather case, cleaning cloth, and authentication certificate. These versatile sunglasses complement both casual and formal attire, making them a staple accessory for any wardrobe.",
//         additionalInformation: "Frame Material: Metal | Lens Material: Glass | Lens Type: Polarized | UV Protection: 100% | Frame Width: 58mm | Bridge Width: 14mm | Temple Length: 135mm | Case: Premium leather case included | Warranty: 2 years against manufacturing defects | Origin: Made in Italy",
//         reviews: [
//           {
//             username: "Rahul Khanna",
//             rating: 10,
//             comment: "Classic sunglasses that never go out of style. The polarized lenses make a huge difference when driving on sunny days.",
//             },
//           {
//             username: "Vikram Singh",
//             rating: 9,
//             comment: "Excellent quality sunglasses with perfect fit. The gold frame looks premium, and the green lenses provide great clarity.",
//             },
//           {
//             username: "Aditya Sharma",
//             rating: 9,
//             comment: "Worth the investment. These sunglasses are comfortable for all-day wear and provide exceptional sun protection.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#FFD700", "#C0C0C0", "#000000"]
//       },
//       {
//         id: 44,
//         title: "Digital Drawing Tablet",
//         type: "Electronics",
//         category: "Electronics",
//         brand: "Wacom",
//         originalPrice: 12999,
//         salePrice: 9999,
//         rating: 9.0,
//         reviewCount: 187,
//         shortDescription: "Professional drawing tablet with pressure-sensitive pen and customizable shortcuts",
//         detailDescription: "This Wacom digital drawing tablet is designed for artists, designers, and creative professionals seeking precision and control in their digital artwork. The 10 x 6.25-inch active area provides ample space for drawing, while maintaining a compact footprint on your desk. The battery-free pen offers 8,192 levels of pressure sensitivity, allowing for natural-feeling brush strokes that respond to the slightest variations in pressure. The tablet features 8 customizable ExpressKeys that can be programmed with your most-used shortcuts to streamline your workflow. The 4 multi-function touch strips provide intuitive control for scrolling, zooming, brush size adjustment, and canvas rotation. Compatible with Windows and macOS, the tablet connects via USB and works seamlessly with popular creative software like Adobe Photoshop, Illustrator, and Clip Studio Paint. The textured surface mimics the feel of paper for a natural drawing experience.",
//         additionalInformation: "Active Area: 10\" x 6.25\" | Pressure Sensitivity: 8,192 levels | ExpressKeys: 8 customizable | Touch Strips: 4 multi-function | Pen: Battery-free, includes stand and replacement nibs | Resolution: 5080 LPI | Compatibility: Windows 7 or later, macOS 10.12 or later | Connectivity: USB | Software: Includes Wacom drivers and creative software bundle | Warranty: 2 years",
//         reviews: [
//           {
//             username: "Arjun Mehta",
//             rating: 9,
//             comment: "Excellent drawing tablet for digital art. The pressure sensitivity is impressive, and the ExpressKeys save so much time in my workflow.",
//             },
//           {
//             username: "Priya Sharma",
//             rating: 9,
//             comment: "Great quality tablet that has significantly improved my digital illustration process. The pen feels natural, almost like drawing on paper.",
//             },
//           {
//             username: "Rahul Kapoor",
//             rating: 8,
//             comment: "Good tablet for professional work. There's a slight learning curve, but once you get used to it, it's an invaluable tool for digital artists.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1561518776-e76a5e48f731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1587614298171-a597ef0f8d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#000000", "#808080"]
//       },
//       {
//         id: 45,
//         title: "Handcrafted Wooden Chess Set",
//         type: "Accessory",
//         category: "Accessories",
//         brand: "Chessbazaar",
//         originalPrice: 4999,
//         salePrice: 3799,
//         rating: 9.5,
//         reviewCount: 112,
//         shortDescription: "Premium handcrafted wooden chess set with weighted pieces and folding board",
//         detailDescription: "This exquisite Chessbazaar wooden chess set combines artisanal craftsmanship with functional design. Each piece is meticulously hand-carved from premium rosewood and boxwood by skilled artisans, showcasing intricate details and smooth finishing. The chess pieces feature a Staunton design, the international standard for chess tournaments, with a king height of 3.5 inches. Each piece is weighted with felt-bottomed bases for optimal stability during play. The folding chess board is crafted from the same premium woods, creating a striking contrast between the squares. When folded, the board transforms into a storage box for the chess pieces, with a velvet-lined interior that protects each piece. The board's surface is finished with a subtle satin lacquer that enhances the natural wood grain while providing durability. This heirloom-quality chess set is perfect for serious players, collectors, or as a sophisticated decorative piece for your home or office.",
//         additionalInformation: "Materials: Rosewood and boxwood | King Height: 3.5 inches | Board Size (open): 18\" x 18\" | Board Size (folded): 18\" x 9\" x 2\" | Squares: 2\" x 2\" | Pieces: 32 weighted chess pieces with felt bottoms | Storage: Folding board with velvet-lined interior | Finish: Satin lacquer | Care: Dust with soft cloth, avoid direct sunlight | Origin: Handcrafted in India",
//         reviews: [
//           {
//             username: "Vikram Iyer",
//             rating: 10,
//             comment: "Exceptional chess set with beautiful craftsmanship. The weighted pieces feel substantial, and the board's folding design is both practical and elegant.",
//            },
//           {
//             username: "Anil Sharma",
//             rating: 9,
//             comment: "This chess set exceeds expectations. The attention to detail in the carving is impressive, and the wood grain is stunning.",
//            },
//           {
//             username: "Rajiv Kapoor",
//             rating: 10,
//             comment: "Heirloom quality chess set that has become a centerpiece in my study. The craftsmanship is exceptional, and it's a joy to play with.",
//            }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#8B4513", "#F5DEB3"]
//       },
//       {
//         id: 46,
//         title: "Yoga Mat with Alignment Marks",
//         type: "Accessory",
//         category: "Accessories",
//         brand: "Reebok",
//         originalPrice: 2499,
//         salePrice: 1799,
//         rating: 9.0,
//         reviewCount: 234,
//         shortDescription: "Non-slip yoga mat with alignment marks and eco-friendly materials",
//         detailDescription: "Enhance your yoga practice with this premium Reebok yoga mat featuring helpful alignment marks. The printed alignment system guides proper positioning for various poses, helping beginners learn correct form and allowing experienced practitioners to refine their technique. Made from eco-friendly TPE (Thermoplastic Elastomer) material, this mat is free from PVC, latex, and harmful chemicals. The dual-layer construction provides optimal cushioning for joints while maintaining stability for balance poses. The textured non-slip surface ensures secure grip even during intense, sweaty sessions, while the closed-cell construction prevents moisture absorption and bacterial growth. At 6mm thick, the mat offers excellent cushioning without compromising stability. Lightweight and portable, it includes a free carrying strap for easy transport to and from the studio. This versatile mat is suitable for all types of yoga, Pilates, and floor exercises.",
//         additionalInformation: "Material: Eco-friendly TPE | Thickness: 6mm | Dimensions: 72\" x 24\" | Weight: 2.2 lbs | Features: Alignment marks, non-slip texture, dual-layer construction | Includes: Carrying strap | Care: Wipe clean with mild soap and water, air dry | Warranty: 1 year | Eco-friendly: PVC-free, latex-free, non-toxic",
//         reviews: [
//           {
//             username: "Priya Nair",
//             rating: 9,
//             comment: "Excellent yoga mat with helpful alignment marks. The cushioning is perfect - supportive without being too soft, and the grip is outstanding even during hot yoga.",
//             },
//           {
//             username: "Anita Sharma",
//             rating: 9,
//             comment: "Great quality mat that has improved my practice. The alignment marks are subtle but effective for checking positioning.",
//             },
//           {
//             username: "Deepa Mehta",
//             rating: 8,
//             comment: "Good mat with excellent grip. The eco-friendly material doesn't have the chemical smell that many other mats have.",
//             }
//         ],
//         imageUrls: [
//           "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
//           "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
//         ],
//         colors: ["#4682B4", "#800080", "#006400", "#000000"]
//     },
//     {
//       id: 46,
//       title: "Allen Solly Men's Classic Fit Blazer",
//       type: "Formal Wear",
//       category: "All Men's clothing",
//       brand: "Allen Solly",
//       originalPrice: 6999,
//       salePrice: 4899,
//       rating: 8.8,
//       reviewCount: 245,
//       shortDescription: "Premium wool blend classic fit blazer in navy blue",
//       detailDescription: "Allen Solly's signature blazer combines timeless style with modern tailoring. Crafted from a premium wool blend fabric, this navy blue blazer features notched lapels, two-button closure, and functional sleeve buttons. The classic fit design ensures comfort while maintaining a sharp silhouette. Perfect for formal occasions or business meetings.",
//       additionalInformation: "Material: 60% Wool, 40% Polyester | Fit: Classic | Color: Navy Blue | Sizes: 38-46 | Care: Dry clean only | Made in India | SKU: AS-BLZ-2024-NV",
//       reviews: [
//         {
//           username: "Rahul Mehta",
//           rating: 9,
//           comment: "Excellent fit and quality. The fabric is perfect for year-round wear."
//         },
//         {
//           username: "Suresh Kumar",
//           rating: 8,
//           comment: "Great blazer for formal occasions. Stitching quality is top-notch."
//         }
//       ],
//       imageUrls: [
//         "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//         "https://images.unsplash.com/photo-1598808503800-fb201a4cd28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
//       ],
//       colors: ["#000080", "#000000", "#808080"]
//     },
//     {
//       id: 47,
//       title: "Zara Pleated Midi Dress",
//       type: "Dresses",
//       category: "Women's clothing",
//       brand: "Zara",
//       originalPrice: 4999,
//       salePrice: 3499,
//       rating: 9.2,
//       reviewCount: 178,
//       shortDescription: "Elegant pleated midi dress with floral print",
//       detailDescription: "This stunning Zara midi dress features an all-over floral print on flowing pleated fabric. The dress includes a fitted waist, round neckline, and short flutter sleeves. The midi length and lightweight material make it perfect for both casual and semi-formal occasions.",
//       additionalInformation: "Material: 100% Polyester | Length: Midi | Pattern: Floral | Sizes: XS-XL | Care: Machine wash cold | Made in Turkey",
//       reviews: [
//         {
//           username: "Priya Sharma",
//           rating: 9,
//           comment: "Beautiful dress with excellent drape. The pleats hold up well after washing."
//         },
//         {
//           username: "Meera Patel",
//           rating: 9.5,
//           comment: "Perfect for summer events. The fabric quality is exceptional."
//         }
//       ],
//       imageUrls: [
//         "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//         "https://images.unsplash.com/photo-1595777457645-a5f6d41c9966?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
//       ],
//       colors: ["#FFB6C1", "#E6E6FA"]
//     },
//     {
//       id: 48,
//       title: "Nike Air Zoom Pegasus 38",
//       type: "Running Shoes",
//       category: "Footwear",
//       brand: "Nike",
//       originalPrice: 9995,
//       salePrice: 7995,
//       rating: 9.4,
//       reviewCount: 456,
//       shortDescription: "Premium running shoes with React foam technology",
//       detailDescription: "The Nike Air Zoom Pegasus 38 continues its legacy of being the reliable trainer for runners of all levels. Features Nike React foam for responsive cushioning and a Zoom Air unit in the forefoot for added bounce. The engineered mesh upper provides targeted breathability and support.",
//       additionalInformation: "Material: Mesh upper, React foam midsole | Drop: 10mm | Weight: 275g (M), 235g (W) | Sizes: UK 6-12 | Usage: Road running | Technology: Zoom Air, React foam",
//       reviews: [
//         {
//           username: "Arjun Singh",
//           rating: 9.5,
//           comment: "Best running shoes I've owned. Great cushioning and support for long runs."
//         },
//         {
//           username: "Karthik Raman",
//           rating: 9,
//           comment: "Excellent daily trainers. The React foam provides perfect balance of cushion and response."
//         }
//       ],
//       imageUrls: [
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//         "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
//       ],
//       colors: ["#000000", "#4169E1", "#FF4500"]
//     },
//     {
//       id: 49,
//       title: "Titan Raga Moonlight",
//       type: "Women's Watch",
//       category: "Watches",
//       brand: "Titan",
//       originalPrice: 12995,
//       salePrice: 9995,
//       rating: 9.1,
//       reviewCount: 234,
//       shortDescription: "Elegant women's watch with mother of pearl dial",
//       detailDescription: "The Titan Raga Moonlight features a stunning mother of pearl dial adorned with Swarovski crystals. The slim rose gold-toned case and bracelet complement any outfit. Water-resistant up to 30m with precise quartz movement.",
//       additionalInformation: "Case Material: Stainless Steel | Case Diameter: 28mm | Movement: Quartz | Water Resistance: 30m | Crystal: Mineral | Warranty: 2 years | Battery Life: 2 years",
//       reviews: [
//         {
//           username: "Anjali Gupta",
//           rating: 9,
//           comment: "Beautiful watch that looks much more expensive than it is. Perfect for special occasions."
//         },
//         {
//           username: "Sneha Reddy",
//           rating: 9.5,
//           comment: "Elegant design and comfortable to wear. The mother of pearl dial is stunning."
//         }
//       ],
//       imageUrls: [
//         "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//         "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
//       ],
//       colors: ["#FFD700", "#FFF5EE"]
//     },
//     {
//       id: 50,
//       title: "Forest Essentials Facial Treatment Kit",
//       type: "Skincare",
//       category: "Beauty",
//       brand: "Forest Essentials",
//       originalPrice: 3250,
//       salePrice: 2925,
//       rating: 9.3,
//       reviewCount: 189,
//       shortDescription: "Luxury Ayurvedic facial treatment kit with natural ingredients",
//       detailDescription: "This comprehensive facial treatment kit from Forest Essentials includes a cleanser, toner, serum, and moisturizer. All products are formulated using traditional Ayurvedic recipes with pure, natural ingredients like Kashmir Saffron, Indian Rose, and Pure Honey.",
//       additionalInformation: "Contents: 4 products | Quantity: 30ml each | Skin Type: All | Shelf Life: 12 months | Natural Ingredients | Cruelty-free | Made in India",
//       reviews: [
//         {
//           username: "Ritu Desai",
//           rating: 9.5,
//           comment: "Amazing results! My skin feels rejuvenated and glowing after using this kit."
//         },
//         {
//           username: "Pooja Mehta",
//           rating: 9,
//           comment: "Love the natural ingredients and the subtle fragrance. Great for sensitive skin."
//         }
//       ],
//       imageUrls: [
//         "https://images.unsplash.com/photo-1570174097350-7c0374c5f7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
//         "https://images.unsplash.com/photo-1570174691944-7cdc93b51d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
//       ],
//       colors: ["#DEB887", "#F5F5DC"]
//     }
// ]

export const products: Product[] = [
  {
    id: 1,
    title: "Custom Fit Oxford Shirt",
    type: "Shirts",
    category: "Men's clothing",
    brand: "Ralph Lauren",
    originalPrice: 1299,
    salePrice: 999,
    rating: 9.2,
    reviewCount: 458,
    shortDescription: "Classic Oxford cotton shirt with signature pony logo",
    detailDescription: "Crafted from premium cotton Oxford cloth, this shirt features our signature embroidered pony logo. The custom fit offers a tailored silhouette without being too slim. Button-down collar, long sleeves with buttoned barrel cuffs, and a curved hem make this shirt perfect for both casual and semi-formal occasions.",
    additionalInformation: "100% Cotton | Machine washable | Imported | Available in Regular and Tall sizes",
    colors: ["#FFFFFF", "#89CFF0", "#FFC0CB", "#F5F5DC"],
    reviews: [
      { username: "Vikram S.", rating: 9, comment: "Perfect fit and excellent quality cotton. A wardrobe essential." },
      { username: "Aditya R.", rating: 10, comment: "The attention to detail is remarkable. Worth every penny." },
      { username: "Karan M.", rating: 9, comment: "Classic piece that never goes out of style." }
    ],
    imageUrls: [
"https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 2,
    title: "Polo Bear Cashmere Sweater",
    type: "Sweaters",
    category: "Men's clothing",
    brand: "Ralph Lauren",
    originalPrice: 2999,
    salePrice: 2499,
    rating: 9.4,
    reviewCount: 286,
    shortDescription: "Luxury cashmere sweater featuring iconic Polo Bear",
    detailDescription: "This luxurious cashmere sweater features our beloved Polo Bear dressed in classic Ralph Lauren style. The sweater is knitted from the finest cashmere for exceptional softness and warmth. A comfortable crew neckline and ribbed trim complete this collector's piece.",
    additionalInformation: "100% Cashmere | Dry clean only | Made in Italy | Regular fit",
    colors: ["#000000", "#8B4513", "#808080"],
    reviews: [
      { username: "Rajesh K.", rating: 10, comment: "The cashmere quality is outstanding. A true luxury piece." },
      { username: "Nikhil P.", rating: 9, comment: "The Polo Bear detail is charming and well-executed." },
      { username: "Arjun S.", rating: 9, comment: "Incredibly soft and warm. Perfect for winter." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1610901157620-340856d0a50f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579635480803-b990e007f508?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 3,
    title: "Purple Label Wool Suit",
    type: "Suits",
    category: "Men's clothing",
    brand: "Ralph Lauren",
    originalPrice: 1999,
    salePrice: 1799,
    rating: 9.6,
    reviewCount: 124,
    shortDescription: "Handcrafted Italian wool suit from Purple Label collection",
    detailDescription: "From our prestigious Purple Label collection, this suit is handcrafted in Italy from super 150s wool. The jacket features pick-stitched lapels, hand-sewn armholes, and a three-roll-two button closure. Trousers are flat-front with side adjusters and unfinished hems for custom tailoring.",
    additionalInformation: "Super 150s Wool | Full canvas construction | Made in Italy | Includes jacket and trousers",
    colors: ["#000080", "#36454F", "#1B1B1B"],
    reviews: [
      { username: "Rohit M.", rating: 10, comment: "Exceptional craftsmanship. The epitome of luxury suiting." },
      { username: "Sanjay B.", rating: 9, comment: "The fabric quality and construction are outstanding." },
      { username: "Vivek T.", rating: 10, comment: "Worth the investment. Fits like a dream after alterations." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 4,
    title: "RLX Golf Performance Jacket",
    type: "Outerwear",
    category: "Men's clothing",
    brand: "Ralph Lauren",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 9.1,
    reviewCount: 198,
    shortDescription: "Technical performance golf jacket with moisture-wicking technology",
    detailDescription: "From our RLX Golf collection, this performance jacket combines style with functionality. Features our proprietary moisture-wicking technology, four-way stretch fabric, and UV protection. Perfect for golf or casual wear with signature RLX branding.",
    additionalInformation: "88% Polyester, 12% Elastane | Machine washable | Imported | Regular fit",
    colors: ["#000000", "#FFFFFF", "#000080"],
    reviews: [
      { username: "Ajay P.", rating: 9, comment: "Great for golf and casual wear. Very comfortable." },
      { username: "Rahul S.", rating: 9, comment: "Excellent quality and perfect for unpredictable weather." },
      { username: "Deepak R.", rating: 9, comment: "The moisture-wicking really works. Keeps you dry during activity." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 5,
    title: "Polo Sport Track Pants",
    type: "Activewear",
    category: "Men's clothing",
    brand: "Ralph Lauren",
    originalPrice: 999,
    salePrice: 799,
    rating: 8.9,
    reviewCount: 312,
    shortDescription: "Classic track pants with modern performance features",
    detailDescription: "These Polo Sport track pants combine classic style with modern performance features. Made with quick-drying fabric and featuring side pockets, elasticated waistband with drawstring, and ankle zippers. The iconic Polo Sport logo completes the look.",
    additionalInformation: "92% Polyester, 8% Elastane | Machine washable | Imported | Regular fit",
    colors: ["#000000", "#808080", "#000080"],
    reviews: [
      { username: "Kunal M.", rating: 9, comment: "Perfect fit and very comfortable for workouts." },
      { username: "Pranav S.", rating: 8, comment: "Good quality and stylish enough for casual wear." },
      { username: "Harsh P.", rating: 9, comment: "Great value for money. Very versatile." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=80",
      "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1727301209182-f85cd0fe7748?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 6,
    title: "BOSS Slim-Fit Wool Blazer",
    type: "Blazers",
    category: "Men's clothing",
    brand: "Hugo Boss",
    originalPrice: 4999,
    salePrice: 3999,
    rating: 9.3,
    reviewCount: 245,
    shortDescription: "Modern slim-fit blazer in Italian virgin wool",
    detailDescription: "Crafted in Italy from virgin wool, this BOSS blazer exemplifies modern tailoring. Features a slim fit, notch lapels, two-button closure, and four-button cuffs. The partially lined interior ensures comfort while maintaining a clean drape.",
    additionalInformation: "100% Virgin Wool | Dry clean only | Made in Italy | Slim fit",
    colors: ["#000000", "#191970", "#36454F"],
    reviews: [
      { username: "Varun K.", rating: 9, comment: "Excellent cut and superb quality wool. Perfect for formal occasions." },
      { username: "Anish M.", rating: 10, comment: "The slim fit is perfect. Very well constructed." },
      { username: "Dhruv P.", rating: 9, comment: "Worth the investment. Versatile piece for any wardrobe." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609231864033-fc939f9e45df?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 7,
    title: "BOSS Mercerized Cotton Polo",
    type: "Polos",
    category: "Men's clothing",
    brand: "Hugo Boss",
    originalPrice: 899,
    salePrice: 699,
    rating: 9.0,
    reviewCount: 378,
    shortDescription: "Luxury mercerized cotton polo with modern fit",
    detailDescription: "This BOSS polo shirt is crafted from mercerized cotton for superior softness and shine. Features a three-button placket, ribbed collar and cuffs, and subtle BOSS logo on chest. The modern fit offers a contemporary silhouette.",
    additionalInformation: "100% Mercerized Cotton | Machine washable | Imported | Modern fit",
    colors: ["#FFFFFF", "#000000", "#000080", "#8B0000"],
    reviews: [
      { username: "Aryan S.", rating: 9, comment: "The quality is evident. Perfect for business casual." },
      { username: "Rohan K.", rating: 9, comment: "Great fit and the fabric feels luxurious." },
      { username: "Kabir M.", rating: 9, comment: "Excellent polo that keeps its shape after washing." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 8,
    title: "BOSS Stretch Cotton Chinos",
    type: "Pants",
    category: "Men's clothing",
    brand: "Hugo Boss",
    originalPrice: 12999,
    salePrice: 9999,
    rating: 9.2,
    reviewCount: 412,
    shortDescription: "Premium stretch cotton chinos with perfect fit",
    detailDescription: "These BOSS chinos are crafted from stretch cotton twill for comfort and mobility. Features a regular rise, straight leg, and clean front. The fabric blend ensures shape retention while providing all-day comfort.",
    additionalInformation: "98% Cotton, 2% Elastane | Machine washable | Imported | Regular fit",
    colors: ["#000000", "#8B4513", "#36454F", "#F5F5DC"],
    reviews: [
      { username: "Shiv P.", rating: 9, comment: "Perfect fit and great quality fabric." },
      { username: "Arun M.", rating: 9, comment: "Very comfortable for all-day wear." },
      { username: "Neil S.", rating: 10, comment: "Best chinos I've owned. Worth every rupee." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552379392-d0b24be6bdca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 9,
    title: "BOSS Leather Derby Shoes",
    type: "Formal Shoes",
    category: "Men's clothing",
    brand: "Hugo Boss",
    originalPrice: 2999,
    salePrice: 2499,
    rating: 9.4,
    reviewCount: 156,
    shortDescription: "Classic derby shoes in premium Italian leather",
    detailDescription: "Handcrafted in Italy, these BOSS derby shoes feature premium calfskin leather uppers, leather soles, and elegant stitch detailing. The classic design is enhanced with modern comfort features including cushioned insoles.",
    additionalInformation: "100% Calfskin leather | Made in Italy | Leather sole | Includes dust bags",
    colors: ["#000000", "#8B4513"],
    reviews: [
      { username: "Mihir R.", rating: 9, comment: "Exceptional quality and craftsmanship." },
      { username: "Tarun S.", rating: 10, comment: "Very comfortable right from day one." },
      { username: "Gaurav P.", rating: 9, comment: "Classic design with modern comfort." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534233650908-b471f2350922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMERlcmJ5JTIwU2hvZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMERlcmJ5JTIwU2hvZXN8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 10,
    title: "BOSS Leather Belt",
    type: "Belts",
    category: "Men's clothing",
    brand: "Hugo Boss",
    originalPrice: 999,
    salePrice: 799,
    rating: 9.1,
    reviewCount: 289,
    shortDescription: "Premium leather belt with signature BOSS buckle",
    detailDescription: "Crafted from smooth Italian leather, this BOSS belt features a sleek palladium-finish buckle with subtle logo engraving. The reversible design offers versatility, while the precise pin holes ensure a perfect fit.",
    additionalInformation: "100% Leather | Made in Italy | Width: 3.5cm | Available in sizes 30-42",
    colors: ["#000000", "#8B4513"],
    reviews: [
      { username: "Aarav K.", rating: 9, comment: "Excellent quality leather and perfect finish." },
      { username: "Ishaan M.", rating: 9, comment: "The reversible feature is very practical." },
      { username: "Yash S.", rating: 9, comment: "Classic design that goes with everything." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1664285612706-b32633c95820?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1631160246898-58192f971b5f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1534233650908-b471f2350922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMERlcmJ5JTIwU2hvZXN8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 11,
    title: "Tom Ford O'Connor Suit",
    type: "Suits",
    category: "Men's clothing",
    brand: "Tom Ford",
    originalPrice: 3999,
    salePrice: 3499,
    rating: 9.8,
    reviewCount: 86,
    shortDescription: "Signature O'Connor fit suit in Super 160s wool",
    detailDescription: "The iconic O'Connor suit exemplifies Tom Ford's masterful tailoring. Crafted from Super 160s wool with hand-finished details throughout. Features peaked lapels, surgeon's cuffs, and Tom Ford's signature silhouette. Includes matching flat-front trousers with side adjusters.",
    additionalInformation: "Super 160s Wool | Full canvas construction | Made in Italy | O'Connor fit",
    colors: ["#000000", "#191970", "#36454F"],
    reviews: [
      { username: "Akash R.", rating: 10, comment: "The pinnacle of luxury suiting. Exceptional in every way." },
      { username: "Vikas M.", rating: 10, comment: "Impeccable craftsmanship and perfect proportions." },
      { username: "Suresh P.", rating: 9, comment: "Worth every penny. The fit is absolutely perfect." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 12,
    title: "Tom Ford Silk Evening Jacket",
    type: "Formal Wear",
    category: "Men's clothing",
    brand: "Tom Ford",
    originalPrice: 2999,
    salePrice: 2699,
    rating: 9.7,
    reviewCount: 64,
    shortDescription: "Luxurious silk jacquard evening jacket",
    detailDescription: "This evening jacket showcases Tom Ford's mastery of formal wear. Crafted from silk jacquard with a subtle pattern, featuring grosgrain peak lapels and covered buttons. The silk lining and precise tailoring ensure an impeccable drape.",
    additionalInformation: "100% Silk | Dry clean only | Made in Italy | Slim fit",
    colors: ["#000000", "#800020"],
    reviews: [
      { username: "Rajeev S.", rating: 10, comment: "Absolutely stunning piece. The silk quality is exceptional." },
      { username: "Mohit K.", rating: 9, comment: "Perfect for black tie events. Draws compliments every time." },
      { username: "Anand P.", rating: 10, comment: "The attention to detail is remarkable." }
    ],
    imageUrls: [
      "https://plus.unsplash.com/premium_photo-1670088466079-6682af2baaee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXZlbmluZyUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1488027236809-dc613266478a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEV2ZW5pbmclMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1732117941241-791a1be33e62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fEV2ZW5pbmclMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: 13,
    title: "Tom Ford Leather Oxford Shoes",
    type: "Formal Shoes",
    category: "Men's clothing",
    brand: "Tom Ford",
    originalPrice: 899,
    salePrice: 799,
    rating: 9.6,
    reviewCount: 92,
    shortDescription: "Hand-polished leather oxford shoes",
    detailDescription: "These oxford shoes represent the pinnacle of formal footwear. Hand-crafted in Italy from the finest calfskin leather, featuring hand-polished finish, Goodyear-welted construction, and leather soles. The classic design is elevated by Tom Ford's attention to proportion and detail.",
    additionalInformation: "100% Calfskin leather | Made in Italy | Goodyear welted | Includes shoe trees and dust bags",
    colors: ["#000000", "#8B4513"],
    reviews: [
      { username: "Dev P.", rating: 10, comment: "The craftsmanship is outstanding. Worth the investment." },
      { username: "Ravi M.", rating: 9, comment: "Incredibly comfortable despite the formal design." },
      { username: "Sahil K.", rating: 10, comment: "These shoes make a statement. Impeccable quality." }
    ],
    imageUrls: [
      "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExlYXRoZXIlMjBPeGZvcmQlMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1576133384936-ea17c54e9fd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVhdGhlciUyME94Zm9yZCUyMFNob2VzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1728158949987-efc83ed54df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyME94Zm9yZCUyMFNob2VzfGVufDB8fDB8fHww"
    ]
  },
  // Start from Here
  {
  id: 14,
  title: "Premium Cotton Slim Fit Shirt",
  type: "Clothing",
  category: "Men's Clothing",
  brand: "Allen Solly",
  originalPrice: 2499,
  salePrice: 1799,
  rating: 8.7,
  reviewCount: 342,
  shortDescription: "Premium cotton slim fit formal shirt with button-down collar",
  detailDescription: "This premium cotton slim fit shirt from Allen Solly is crafted from 100% Egyptian cotton for superior comfort and durability. Features include a button-down collar, single-button cuffs, and a chest pocket. The slim fit design offers a modern silhouette while maintaining comfort throughout the day. Perfect for formal occasions or office wear.",
  additionalInformation: "Material: 100% Egyptian Cotton | Care: Machine wash cold, tumble dry low | Fit: Slim Fit | Collar: Button-down | Cuffs: Single-button",
  reviews: [
    {
      username: "Rajesh Kumar",
      rating: 9,
      comment: "Excellent quality shirt. The fabric feels premium and the fit is perfect for my build. Will definitely buy more colors.",
    },
    {
      username: "Amit Singh",
      rating: 8,
      comment: "Good shirt for office wear. The cotton is breathable and comfortable even in hot weather.",
    },
    {
      username: "Vikram Mehta",
      rating: 9,
      comment: "The slim fit is perfect - not too tight, not too loose. Excellent craftsmanship.",
    }
  ],
  imageUrls: [
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
  ],
  colors: ["#FFFFFF", "#87CEEB", "#FFC0CB", "#000000"]
},
  {
    id: 15,
    title: "Tom Ford Silk Dress Shirt",
    type: "Shirts",
    category: "Men's clothing",
    brand: "Tom Ford",
    originalPrice: 599,
    salePrice: 499,
    rating: 9.4,
    reviewCount: 124,
    shortDescription: "Classic evening shirt in Italian silk",
    detailDescription: "This formal dress shirt is crafted from the finest Italian silk, featuring mother-of-pearl buttons and French cuffs. The spread collar and darted back ensure a refined fit, while the pure silk construction offers unparalleled luxury and comfort.",
    additionalInformation: "100% Silk | Dry clean only | Made in Italy | Classic fit",
    colors: ["#FFFFFF", "#89CFF0"],
    reviews: [
      { username: "Vinay R.", rating: 9, comment: "The silk quality is outstanding. Perfect for formal events." },
      { username: "Prakash M.", rating: 10, comment: "Impeccable craftsmanship and beautiful details." },
      { username: "Siddharth K.", rating: 9, comment: "The fit is perfect and the fabric is luxurious." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621072156004-e2fccdc0b177?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621072156006-e2fccdc0b178?auto=format&fit=crop&w=1000&q=80"
    ]
  }, {
    id: 16,
    title: "Pleated Midi Dress",
    type: "Dress",
    category: "Women's Clothing",
    brand: "Zara",
    originalPrice: 4990,
    salePrice: 3990,
    rating: 9.2,
    reviewCount: 458,
    shortDescription: "Elegant pleated midi dress with belt detail",
    detailDescription: "This stunning midi dress features intricate pleating throughout, with a removable belt to define the waist. The flowing fabric creates beautiful movement, while the high neckline and three-quarter length sleeves offer sophisticated coverage. Perfect for both office wear and special occasions.",
    additionalInformation: "Material: 100% Polyester | Care: Machine wash cold | Length: 110cm",
    colors: ["#000000", "#8B4513", "#808080"],
    reviews: [
      { username: "Anjali R.", rating: 9, comment: "The pleating is exquisite and the fit is perfect!" },
      { username: "Meera S.", rating: 10, comment: "Received so many compliments. Worth every penny." },
      { username: "Pooja K.", rating: 9, comment: "Perfect for work and evening events." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583396060233-3d13dcd43235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583396060762-68bd900d8b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 17,
    title: "Structured Blazer",
    type: "Jackets",
    category: "Women's Clothing",
    brand: "Zara",
    originalPrice: 5990,
    salePrice: 4790,
    rating: 8.9,
    reviewCount: 312,
    shortDescription: "Classic structured blazer with gold button details",
    detailDescription: "A timeless blazer crafted from premium fabric with a tailored fit. Features gold-tone buttons, peaked lapels, and front flap pockets. The structured shoulders and nipped-in waist create a flattering silhouette. Fully lined with a back vent for ease of movement.",
    additionalInformation: "Material: 63% Polyester, 34% Viscose, 3% Elastane | Care: Dry clean only | Length: 70cm",
    colors: ["#000000", "#NAVY", "#BEIGE"],
    reviews: [
      { username: "Ritu M.", rating: 9, comment: "Perfect fit and excellent quality" },
      { username: "Sneha P.", rating: 8, comment: "Great for office wear, very professional looking" },
      { username: "Deepa S.", rating: 9, comment: "The tailoring is impeccable" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 18,
    title: "High-Waist Wide Leg Trousers",
    type: "Pants",
    category: "Women's Clothing",
    brand: "Zara",
    originalPrice: 3990,
    salePrice: 2990,
    rating: 8.8,
    reviewCount: 276,
    shortDescription: "Flowing wide-leg trousers with pleated front",
    detailDescription: "These elegant high-waisted trousers feature a flowing wide-leg silhouette with front pleats. The high-rise waist includes belt loops and a concealed hook and zip fastening. Side pockets and back welt pockets add functionality to this sophisticated design.",
    additionalInformation: "Material: 88% Polyester, 12% Elastane | Care: Machine wash cold | Inseam: 82cm",
    colors: ["#000000", "#CREAM", "#BROWN"],
    reviews: [
      { username: "Neha K.", rating: 9, comment: "Love the fit and flow of these pants" },
      { username: "Priya R.", rating: 8, comment: "Perfect length and very comfortable" },
      { username: "Sonia M.", rating: 9, comment: "These make any outfit look expensive" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 19,
    title: "Satin Slip Dress",
    type: "Dress",
    category: "Women's Clothing",
    brand: "Zara",
    originalPrice: 4490,
    salePrice: 3590,
    rating: 9.1,
    reviewCount: 198,
    shortDescription: "Luxurious satin slip dress with cowl neck",
    detailDescription: "A stunning slip dress in lustrous satin with a elegant cowl neckline. The bias cut creates a beautiful drape that skims the body. Features adjustable spaghetti straps and a subtle side slit. Perfect for evening events or special occasions.",
    additionalInformation: "Material: 100% Polyester Satin | Care: Hand wash cold | Length: 120cm",
    colors: ["#FFD700", "#8B0000", "#000000"],
    reviews: [
      { username: "Isha P.", rating: 9, comment: "The most elegant dress I own" },
      { username: "Tanya S.", rating: 10, comment: "Perfect fit and beautiful fabric" },
      { username: "Mira R.", rating: 8, comment: "Gorgeous for special occasions" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566491888763-e71518bbe846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 20,
    title: "Knit Cardigan Set",
    type: "Knitwear",
    category: "Women's Clothing",
    brand: "Zara",
    originalPrice: 4290,
    salePrice: 3490,
    rating: 8.7,
    reviewCount: 245,
    shortDescription: "Matching knit cardigan and tank top set",
    detailDescription: "A sophisticated matching set featuring a cropped cardigan and fitted tank top in a premium ribbed knit. The cardigan features pearl buttons and three-quarter length sleeves. The tank top has a square neckline and comfortable stretch fit.",
    additionalInformation: "Material: 52% Viscose, 28% Polyester, 20% Nylon | Care: Hand wash cold | Length: Cardigan 50cm, Tank 60cm",
    colors: ["#CREAM", "#BLACK", "#SAGE"],
    reviews: [
      { username: "Kavita R.", rating: 9, comment: "Love the versatility of this set" },
      { username: "Anita S.", rating: 8, comment: "Great quality and perfect fit" },
      { username: "Reena M.", rating: 9, comment: "So elegant and comfortable" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // H&M Products
  {
    id: 21,
    title: "Organic Cotton Blouse",
    type: "Top",
    category: "Women's Clothing",
    brand: "H&M",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 8.5,
    reviewCount: 387,
    shortDescription: "Sustainable cotton blouse with puff sleeves",
    detailDescription: "Made from organic cotton, this romantic blouse features voluminous puff sleeves and a subtle floral jacquard pattern. The square neckline and fitted bodice create a flattering silhouette. Perfect for both casual and dressy occasions.",
    additionalInformation: "Material: 100% Organic Cotton | Care: Machine wash cold | Length: 65cm",
    colors: ["#FFFFFF", "#LIGHTBLUE", "#PINK"],
    reviews: [
      { username: "Maya K.", rating: 8, comment: "Love the sustainable fabric" },
      { username: "Shreya P.", rating: 9, comment: "Beautiful design and comfortable fit" },
      { username: "Dia R.", rating: 8, comment: "Perfect for summer" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 22,
    title: "Linen Blend Shorts",
    type: "Bottoms",
    category: "Women's Clothing",
    brand: "H&M",
    originalPrice: 1999,
    salePrice: 1499,
    rating: 8.6,
    reviewCount: 234,
    shortDescription: "High-waisted linen blend shorts with belt",
    detailDescription: "These breezy shorts are crafted from a premium linen blend fabric. Features include a high-rise waist, removable fabric belt, and front pleats. The relaxed fit and breathable material make these perfect for warm weather.",
    additionalInformation: "Material: 55% Linen, 45% Cotton | Care: Machine wash cold | Inseam: 12cm",
    colors: ["#BEIGE", "#WHITE", "#OLIVE"],
    reviews: [
      { username: "Nisha S.", rating: 9, comment: "Perfect summer shorts" },
      { username: "Riya M.", rating: 8, comment: "Great quality and fit" },
      { username: "Aditi K.", rating: 9, comment: "Love the linen blend fabric" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 23,
    title: "Ribbed Knit Dress",
    type: "Dress",
    category: "Women's Clothing",
    brand: "H&M",
    originalPrice: 2999,
    salePrice: 2499,
    rating: 8.8,
    reviewCount: 412,
    shortDescription: "Figure-hugging ribbed knit midi dress",
    detailDescription: "A sleek midi dress in a comfortable ribbed knit fabric. Features a high neck, long sleeves, and a figure-hugging silhouette that falls below the knee. The stretchy material ensures comfort while maintaining shape throughout wear.",
    additionalInformation: "Material: 95% Cotton, 5% Elastane | Care: Machine wash cold | Length: 115cm",
    colors: ["#000000", "#GREY", "#NAVY"],
    reviews: [
      { username: "Sana R.", rating: 9, comment: "Perfect fit and so comfortable" },
      { username: "Zara K.", rating: 8, comment: "Great for both work and evening" },
      { username: "Aisha P.", rating: 9, comment: "Love the ribbed texture" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 24,
    title: "Cropped Denim Jacket",
    type: "Outerwear",
    category: "Women's Clothing",
    brand: "H&M",
    originalPrice: 2799,
    salePrice: 2299,
    rating: 8.7,
    reviewCount: 289,
    shortDescription: "Classic cropped denim jacket with raw hem",
    detailDescription: "A modern take on the classic denim jacket featuring a cropped length and raw hem detail. The washed denim gives a lived-in look while metal buttons and chest pockets maintain the traditional styling. Perfect for layering over dresses or with high-waisted bottoms.",
    additionalInformation: "Material: 100% Cotton | Care: Machine wash cold | Length: 45cm",
    colors: ["#LIGHTBLUE", "#MEDIUMBLUE", "#BLACK"],
    reviews: [
      { username: "Kiara M.", rating: 9, comment: "Perfect cropped length" },
      { username: "Simran K.", rating: 8, comment: "Great quality denim" },
      { username: "Neha S.", rating: 9, comment: "Versatile piece for any wardrobe" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 25,
    title: "Printed Maxi Skirt",
    type: "Bottoms",
    category: "Women's Clothing",
    brand: "H&M",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 8.9,
    reviewCount: 356,
    shortDescription: "Flowing maxi skirt with botanical print",
    detailDescription: "A stunning maxi skirt featuring a vibrant botanical print on flowing fabric. The elastic waistband ensures comfort while the tiered design adds movement and drama. Side slits provide ease of movement and a modern touch.",
    additionalInformation: "Material: 100% Viscose | Care: Machine wash cold | Length: 100cm",
    colors: ["#MULTICOLOR", "#GREEN", "#BLUE"],
    reviews: [
      { username: "Rhea P.", rating: 9, comment: "Beautiful print and great movement" },
      { username: "Tanvi R.", rating: 9, comment: "Perfect for summer events" },
      { username: "Kritika S.", rating: 8, comment: "Love the comfortable fit" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // Mango Products
  {
    id: 26,
    title: "Tailored Wool Coat",
    type: "Outerwear",
    category: "Women's Clothing",
    brand: "Mango",
    originalPrice: 8990,
    salePrice: 7190,
    rating: 9.3,
    reviewCount: 267,
    shortDescription: "Premium wool blend coat with classic tailoring",
    detailDescription: "A sophisticated wool-blend coat featuring classic tailoring with modern details. The oversized fit allows for comfortable layering while maintaining an elegant silhouette. Features include notched lapels, double-breasted buttons, and side pockets.",
    additionalInformation: "Material: 60% Wool, 40% Polyester | Care: Dry clean only | Length: 110cm",
    colors: ["#CAMEL", "#BLACK", "#GREY"],
    reviews: [
      { username: "Avantika R.", rating: 10, comment: "Exceptional quality and tailoring" },
      { username: "Sarika M.", rating: 9, comment: "Perfect winter investment piece" },
      { username: "Naina K.", rating: 9, comment: "Beautiful classic coat" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 27,
    title: "Silk Blend Wrap Top",
    type: "Top",
    category: "Women's Clothing",
    brand: "Mango",
    originalPrice: 3990,
    salePrice: 3190,
    rating: 8.8,
    reviewCount: 189,
    shortDescription: "Elegant wrap top in luxurious silk blend",
    detailDescription: "A sophisticated wrap top crafted from a silk blend fabric with a subtle sheen. Features include a deep V-neckline, adjustable wrap tie, and flutter sleeves. The draped design creates an effortlessly elegant look suitable for both day and evening wear.",
    additionalInformation: "Material: 70% Silk, 30% Cotton | Care: Dry clean only | Length: 65cm",
    colors: ["#IVORY", "#BLUSH", "#BLACK"],
    reviews: [
      { username: "Karishma P.", rating: 9, comment: "Beautiful drape and fabric" },
      { username: "Shweta R.", rating: 8, comment: "Perfect for special occasions" },
      { username: "Divya M.", rating: 9, comment: "Elegant and versatile" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 28,
    title: "Leather Mini Skirt",
    type: "Bottoms",
    category: "Women's Clothing",
    brand: "Mango",
    originalPrice: 4990,
    salePrice: 3990,
    rating: 9.0,
    reviewCount: 156,
    shortDescription: "Premium leather mini skirt with modern details",
    detailDescription: "A statement mini skirt crafted from soft leather with contemporary details. Features an A-line silhouette, front zip closure, and subtle side pockets. The high waist design and clean lines create a sleek, modern look perfect for day-to-night styling.",
    additionalInformation: "Material: 100% Leather | Care: Professional leather clean only | Length: 45cm",
    colors: ["#000000", "#BROWN", "#BURGUNDY"],
    reviews: [
      { username: "Ishita S.", rating: 9, comment: "Amazing quality leather" },
      { username: "Vaani K.", rating: 9, comment: "Perfect fit and style" },
      { username: "Mehak R.", rating: 9, comment: "Worth the investment" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 29,
    title: "Printed Midi Dress",
    type: "Dress",
    category: "Women's Clothing",
    brand: "Mango",
    originalPrice: 5990,
    salePrice: 4790,
    rating: 9.1,
    reviewCount: 278,
    shortDescription: "Floral printed midi dress with ruffle details",
    detailDescription: "A romantic midi dress featuring a delicate floral print and feminine ruffle details. The V-neckline and tiered skirt create a flattering silhouette, while the lightweight fabric ensures comfortable wear. Perfect for garden parties or summer events.",
    additionalInformation: "Material: 100% Viscose | Care: Machine wash cold | Length: 120cm",
    colors: ["#FLORAL", "#BLUE", "#GREEN"],
    reviews: [
      { username: "Ananya P.", rating: 9, comment: "Beautiful print and perfect fit" },
      { username: "Gauri S.", rating: 9, comment: "Lovely summer dress" },
      { username: "Ritika M.", rating: 9, comment: "Great quality and design" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566491888763-e71518bbe846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 30,
    title: "Linen Palazzo Pants",
    type: "Bottoms",
    category: "Women's Clothing",
    brand: "Mango",
    originalPrice: 3990,
    salePrice: 3190,
    rating: 8.9,
    reviewCount: 234,
    shortDescription: "Wide-leg palazzo pants in premium linen",
    detailDescription: "Elegant palazzo pants crafted from high-quality linen fabric. Features include a high-rise waist with belt loops, wide-leg silhouette, and front pleats. The flowing design and breathable material make these perfect for warm weather while maintaining a sophisticated look.",
    additionalInformation: "Material: 100% Linen | Care: Machine wash cold | Inseam: 82cm",
    colors: ["#NATURAL", "#WHITE", "#NAVY"],
    reviews: [
      { username: "Suhana R.", rating: 9, comment: "Perfect summer pants" },
      { username: "Alisha K.", rating: 8, comment: "Great quality linen" },
      { username: "Myra P.", rating: 9, comment: "Elegant and comfortable" }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },  {
    id: 31,
    title: "Dinosaur Print Pajama Set",
    type: "Sleepwear",
    category: "Kids Clothing",
    brand: "Carter's",
    originalPrice: 1299,
    salePrice: 999,
    rating: 9.2,
    reviewCount: 456,
    shortDescription: "Cozy 2-piece cotton pajama set with fun dinosaur prints",
    detailDescription: "Made from 100% soft cotton, this pajama set features an all-over dinosaur print. The long-sleeve top has a crew neck and ribbed cuffs, while the full-length pants have an elastic waistband for comfort. Perfect for bedtime or lazy morning wear.",
    additionalInformation: "Size Range: 2T-5T | Material: 100% Cotton | Care: Machine washable",
    colors: ["#87CEEB", "#98FB98", "#FFB6C1"],
    reviews: [
      { username: "Maya P.", rating: 9, comment: "Super soft and my son loves the dinosaur print!" },
      { username: "Ravi S.", rating: 10, comment: "Great quality and washes well without fading." },
      { username: "Neha K.", rating: 9, comment: "Perfect fit and very comfortable for sleep time." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1595034313512-b1e3000a4568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 32,
    title: "Rainbow Heart Dress",
    type: "Dresses",
    category: "Kids Clothing",
    brand: "Carter's",
    originalPrice: 1599,
    salePrice: 1299,
    rating: 8.9,
    reviewCount: 289,
    shortDescription: "Colorful jersey dress with heart pattern and twirl skirt",
    detailDescription: "This adorable dress features a rainbow heart pattern on soft jersey material. The sleeveless design and twirl-worthy skirt make it perfect for warm days. Built-in shorts underneath provide extra coverage during play.",
    additionalInformation: "Size Range: 2T-6X | Material: 95% Cotton, 5% Elastane | Care: Machine washable",
    colors: ["#FF69B4", "#9370DB", "#20B2AA"],
    reviews: [
      { username: "Anita R.", rating: 9, comment: "Beautiful dress that my daughter loves to twirl in!" },
      { username: "Sanjay M.", rating: 8, comment: "Good quality fabric and the built-in shorts are great." },
      { username: "Priya D.", rating: 9, comment: "Washes well and the colors stay bright." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1524920333556-382fe7615d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 33,
    title: "5-Pack Bodysuits",
    type: "Basics",
    category: "Kids Clothing",
    brand: "Carter's",
    originalPrice: 1099,
    salePrice: 899,
    rating: 9.4,
    reviewCount: 678,
    shortDescription: "Essential cotton bodysuits in various colors and patterns",
    detailDescription: "Set of 5 soft cotton bodysuits featuring mix of solid colors and cute patterns. Expandable shoulders and bottom snaps make dressing easy. Perfect for everyday wear and layering.",
    additionalInformation: "Size Range: 0-24M | Material: 100% Cotton | Care: Machine washable",
    colors: ["#FFFFFF", "#FFB6C1", "#B0E0E6"],
    reviews: [
      { username: "Deepa S.", rating: 10, comment: "Best quality bodysuits, so soft for baby's skin!" },
      { username: "Arjun P.", rating: 9, comment: "Great value for money, very durable." },
      { username: "Meera K.", rating: 9, comment: "Perfect basics for any baby's wardrobe." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 34,
    title: "Zip-Up Fleece Hoodie",
    type: "Outerwear",
    category: "Kids Clothing",
    brand: "Carter's",
    originalPrice: 1799,
    salePrice: 1499,
    rating: 8.8,
    reviewCount: 345,
    shortDescription: "Cozy fleece hoodie with fun animal ears on hood",
    detailDescription: "This adorable zip-up hoodie is made from soft fleece material with cute animal ears on the hood. Features kangaroo pockets and ribbed cuffs. Perfect for cool weather layering.",
    additionalInformation: "Size Range: 2T-5T | Material: 100% Polyester Fleece | Care: Machine washable",
    colors: ["#A7C7E7", "#FFB347", "#98FF98"],
    reviews: [
      { username: "Kavita R.", rating: 9, comment: "So cute and warm, my daughter loves the bear ears!" },
      { username: "Rohit M.", rating: 8, comment: "Good quality and perfect for winter." },
      { username: "Anjali S.", rating: 9, comment: "Washes well and stays soft." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 35,
    title: "Cargo Shorts Set",
    type: "Sets",
    category: "Kids Clothing",
    brand: "Carter's",
    originalPrice: 1499,
    salePrice: 1199,
    rating: 8.7,
    reviewCount: 234,
    shortDescription: "2-piece set with graphic tee and cargo shorts",
    detailDescription: "Complete outfit featuring a fun graphic t-shirt and matching cargo shorts. The shorts have an adjustable waist and multiple pockets. Perfect for active kids who love adventure.",
    additionalInformation: "Size Range: 2T-7 | Material: Cotton blend | Care: Machine washable",
    colors: ["#KHAKI", "#NAVY", "#OLIVE"],
    reviews: [
      { username: "Vikram S.", rating: 9, comment: "Great quality and perfect for summer!" },
      { username: "Pooja K.", rating: 8, comment: "My son loves all the pockets in the shorts." },
      { username: "Rajesh M.", rating: 9, comment: "Comfortable and durable set." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // H&M Kids Products
  {
    id: 36,
    title: "Organic Cotton Overall Dress",
    type: "Dresses",
    category: "Kids Clothing",
    brand: "H&M Kids",
    originalPrice: 1699,
    salePrice: 1399,
    rating: 8.9,
    reviewCount: 312,
    shortDescription: "Sustainable denim overall dress with adjustable straps",
    detailDescription: "Made from organic cotton denim, this overall dress features adjustable straps, front pocket, and button sides. The A-line cut provides comfort and style. Perfect for everyday wear or special occasions.",
    additionalInformation: "Size Range: 1-8Y | Material: 100% Organic Cotton | Care: Machine washable",
    colors: ["#1E90FF", "#FF69B4", "#DENIM"],
    reviews: [
      { username: "Sneha R.", rating: 9, comment: "Love the sustainable fabric and cute design!" },
      { username: "Karan P.", rating: 9, comment: "Great quality and easy to adjust." },
      { username: "Divya M.", rating: 8, comment: "Perfect for both play and parties." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 37,
    title: "Printed Sweatshirt Set",
    type: "Sets",
    category: "Kids Clothing",
    brand: "H&M Kids",
    originalPrice: 1899,
    salePrice: 1599,
    rating: 9.1,
    reviewCount: 287,
    shortDescription: "Cozy sweatshirt and jogger set with fun prints",
    detailDescription: "Comfortable set including a printed sweatshirt and matching joggers. Made from soft cotton blend fabric with ribbed cuffs and waistband. Perfect for casual wear and playtime.",
    additionalInformation: "Size Range: 2-10Y | Material: 80% Cotton, 20% Polyester | Care: Machine washable",
    colors: ["#808080", "#FFB6C1", "#98FB98"],
    reviews: [
      { username: "Arun K.", rating: 9, comment: "Super comfortable and great quality!" },
      { username: "Mira S.", rating: 9, comment: "My kid loves wearing this set." },
      { username: "Rahul D.", rating: 9, comment: "Excellent value for money." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 38,
    title: "Tulle Skirt",
    type: "Bottoms",
    category: "Kids Clothing",
    brand: "H&M Kids",
    originalPrice: 1299,
    salePrice: 999,
    rating: 8.8,
    reviewCount: 198,
    shortDescription: "Layered tulle skirt with glitter waistband",
    detailDescription: "Magical tulle skirt with multiple layers and a comfortable elastic waistband with glitter detail. The built-in jersey shorts provide coverage and comfort. Perfect for special occasions or dress-up play.",
    additionalInformation: "Size Range: 2-10Y | Material: Polyester tulle, Cotton liner | Care: Hand wash",
    colors: ["#FFB6C1", "#E6E6FA", "#FFFFFF"],
    reviews: [
      { username: "Nisha P.", rating: 9, comment: "Beautiful skirt, my daughter feels like a princess!" },
      { username: "Sonia M.", rating: 8, comment: "Good quality and not itchy like other tulle skirts." },
      { username: "Aarti K.", rating: 9, comment: "Perfect party wear skirt." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524920333556-382fe7615d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 39,
    title: "Denim Jacket",
    type: "Outerwear",
    category: "Kids Clothing",
    brand: "H&M Kids",
    originalPrice: 2299,
    salePrice: 1899,
    rating: 9.2,
    reviewCount: 245,
    shortDescription: "Classic denim jacket with stretch comfort",
    detailDescription: "Stylish denim jacket with stretch for comfort and easy movement. Features button front, chest pockets, and adjustable button tabs at sides. Perfect for layering in any season.",
    additionalInformation: "Size Range: 2-10Y | Material: 98% Cotton, 2% Elastane | Care: Machine washable",
    colors: ["#LIGHTDENIM", "#DARKDENIM"],
    reviews: [
      { username: "Aryan S.", rating: 9, comment: "Great quality and perfect fit!" },
      { username: "Zara K.", rating: 10, comment: "Versatile jacket that goes with everything." },
      { username: "Kabir M.", rating: 9, comment: "Excellent construction and style." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516962126636-27bf9e59a5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 40,
    title: "Organic Cotton Pajama Set",
    type: "Sleepwear",
    category: "Kids Clothing",
    brand: "H&M Kids",
    originalPrice: 1499,
    salePrice: 1199,
    rating: 9.0,
    reviewCount: 334,
    shortDescription: "Soft organic cotton pajamas with fun prints",
    detailDescription: "Comfortable pajama set made from organic cotton featuring fun prints. Long-sleeve top with round neck and full-length pants with elastic waistband. Perfect for a cozy night's sleep.",
    additionalInformation: "Size Range: 1-10Y | Material: 100% Organic Cotton | Care: Machine washable",
    colors: ["#E6E6FA", "#98FB98", "#FFB6C1"],
    reviews: [
      { username: "Ishaan R.", rating: 9, comment: "Super soft and comfortable!" },
      { username: "Myra P.", rating: 9, comment: "Great quality organic cotton." },
      { username: "Advait S.", rating: 9, comment: "Perfect for sensitive skin." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1595034313512-b1e3000a4568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // Gap Kids Products
  {
    id: 41,
    title: "Stretch Denim Jeans",
    type: "Bottoms",
    category: "Kids Clothing",
    brand: "Gap Kids",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 9.3,
    reviewCount: 423,
    shortDescription: "Classic stretch denim jeans with adjustable waist",
    detailDescription: "These classic jeans feature stretch denim for comfort and mobility. The internal adjustable waistband ensures a perfect fit. Five-pocket styling and reinforced knees make these perfect for active kids.",
    additionalInformation: "Size Range: 4-16Y | Material: 98% Cotton, 2% Elastane | Care: Machine washable",
    colors: ["#000080", "#4169E1", "#LIGHTBLUE"],
    reviews: [
      { username: "Rohan S.", rating: 9, comment: "Best fitting kids jeans we've found!" },
      { username: "Isha M.", rating: 10, comment: "Great quality and very durable." },
      { username: "Vivaan K.", rating: 9, comment: "Perfect for school and play." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 42,
    title: "Logo Hoodie",
    type: "Outerwear",
    category: "Kids Clothing",
    brand: "Gap Kids",
    originalPrice: 2299,
    salePrice: 1799,
    rating: 8.9,
    reviewCount: 287,
    shortDescription: "Classic Gap logo hoodie in soft fleece",
    detailDescription: "Comfortable hoodie featuring the iconic Gap logo. Made from soft fleece material with kangaroo pocket and adjustable hood. Perfect for everyday wear and layering.",
    additionalInformation: "Size Range: 4-16Y | Material: 80% Cotton, 20% Polyester | Care: Machine washable",
    colors: ["#808080", "#000000", "#NAVY"],
    reviews: [
      { username: "Aisha P.", rating: 9, comment: "Classic style and great quality!" },
      { username: "Rehan K.", rating: 8, comment: "Comfortable and warm." },
      { username: "Sara M.", rating: 9, comment: "Perfect school sweater." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 43,
    title: "Uniform Polo Dress",
    type: "Dresses",
    category: "Kids Clothing",
    brand: "Gap Kids",
    originalPrice: 1999,
    salePrice: 1599,
    rating: 9.1,
    reviewCount: 198,
    shortDescription: "Classic polo dress perfect for school uniforms",
    detailDescription: "This polo dress features a classic design with ribbed collar and cuffs. The breathable pique cotton fabric keeps kids comfortable all day. Perfect for school or casual wear.",
    additionalInformation: "Size Range: 4-16Y | Material: 100% Cotton Pique | Care: Machine washable",
    colors: ["#NAVY", "#RED", "#WHITE"],
    reviews: [
      { username: "Neha S.", rating: 9, comment: "Perfect school uniform dress!" },
      { username: "Arjun P.", rating: 9, comment: "Good quality and washes well." },
      { username: "Riya K.", rating: 9, comment: "Comfortable for all-day wear." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1524920333556-382fe7615d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB f8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 44,
    title: "Cargo Pants",
    type: "Bottoms",
    category: "Kids Clothing",
    brand: "Gap Kids",
    originalPrice: 2199,
    salePrice: 1799,
    rating: 8.8,
    reviewCount: 245,
    shortDescription: "Durable cargo pants with multiple pockets",
    detailDescription: "These cargo pants feature multiple pockets and an adjustable waist for the perfect fit. Made from durable cotton twill with reinforced knees. Perfect for adventure and everyday wear.",
    additionalInformation: "Size Range: 4-16Y | Material: 100% Cotton Twill | Care: Machine washable",
    colors: ["#KHAKI", "#OLIVE", "#BROWN"],
    reviews: [
      { username: "Vihaan R.", rating: 9, comment: "Great pants with lots of pockets!" },
      { username: "Anaya S.", rating: 8, comment: "Durable and comfortable." },
      { username: "Dev M.", rating: 9, comment: "Perfect for active kids." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 45,
    title: "Graphic T-Shirt Pack",
    type: "Tops",
    category: "Kids Clothing",
    brand: "Gap Kids",
    originalPrice: 1699,
    salePrice: 1399,
    rating: 9.0,
    reviewCount: 312,
    shortDescription: "3-pack of graphic t-shirts with fun designs",
    detailDescription: "Set of three cotton t-shirts featuring fun graphic prints. Short sleeves and crew neck design with reinforced seams. Perfect for everyday wear and easy mixing and matching.",
    additionalInformation: "Size Range: 4-16Y | Material: 100% Cotton | Care: Machine washable",
    colors: ["#MULTI"],
    reviews: [
      { username: "Aarav P.", rating: 9, comment: "Great quality and fun designs!" },
      { username: "Kiara S.", rating: 9, comment: "Good value for money." },
      { username: "Advika M.", rating: 9, comment: "Holds up well in wash." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 46,
    title: "Nike Air Max 270",
    type: "Running Shoes",
    category: "Footwear",
    brand: "Nike",
    originalPrice: 12995,
    salePrice: 10995,
    rating: 9.2,
    reviewCount: 856,
    shortDescription: "Revolutionary Air cushioning for all-day comfort",
    detailDescription: "The Nike Air Max 270 combines style and performance with its distinctive Air unit in the heel, the tallest yet at 32mm. The shoe features a breathable mesh upper, foam midsole for responsive cushioning, and a rubber outsole for durability. Perfect for both athletic performance and casual wear.",
    additionalInformation: "Style: AH8050-100 | Weight: 300g | Cushlon foam midsole | Engineered mesh upper",
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    reviews: [
      { username: "Virat K.", rating: 9, comment: "Best running shoes I've ever owned. Perfect cushioning!" },
      { username: "Deepika R.", rating: 10, comment: "Stylish and super comfortable for long walks." },
      { username: "Arjun M.", rating: 9, comment: "Great quality and worth the investment." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ]
  },
  {
    id: 47,
    title: "Nike ZoomX Vaporfly NEXT%",
    type: "Running Shoes",
    category: "Footwear",
    brand: "Nike",
    originalPrice: 19995,
    salePrice: 17995,
    rating: 9.5,
    reviewCount: 423,
    shortDescription: "Elite racing shoe with carbon fiber plate",
    detailDescription: "The Nike ZoomX Vaporfly NEXT% is designed for racing and training. Features ZoomX foam for ultimate energy return, a full-length carbon fiber plate for propulsion, and an engineered mesh upper for breathability. The shoe that's breaking records worldwide.",
    additionalInformation: "Style: AO4568-800 | Weight: 190g | ZoomX foam | Carbon fiber plate",
    colors: ["#00FF00", "#0000FF", "#FF0000"],
    reviews: [
      { username: "Rohit S.", rating: 10, comment: "Incredible speed improvement in my marathon time!" },
      { username: "Anita P.", rating: 9, comment: "Worth every penny for serious runners." },
      { username: "Karthik N.", rating: 9, comment: "The energy return is phenomenal." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      "https://images.unsplash.com/photo-1539185441755-769473a23570"
    ]
  },
  {
    id: 48,
    title: "Nike Air Jordan 1 Retro High OG",
    type: "Basketball/Lifestyle",
    category: "Footwear",
    brand: "Nike",
    originalPrice: 14995,
    salePrice: 13495,
    rating: 9.3,
    reviewCount: 1242,
    shortDescription: "Iconic basketball shoes with premium leather",
    detailDescription: "The Air Jordan 1 Retro High OG continues to be a cultural icon. Features premium leather construction, Air-Sole cushioning, and classic high-top design. The shoe that started the sneaker revolution maintains its status as a must-have for collectors and enthusiasts.",
    additionalInformation: "Style: 555088-062 | Genuine leather upper | Air cushioning | Rubber outsole",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    reviews: [
      { username: "Sneakerhead_Jay", rating: 10, comment: "Classic silhouette, premium materials!" },
      { username: "Maya R.", rating: 9, comment: "Perfect for both style and comfort." },
      { username: "Aditya K.", rating: 9, comment: "Best colorway in my collection." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      "https://images.unsplash.com/photo-1586525198428-225f6f12cff5"
    ]
  },
  {
    id: 49,
    title: "Nike React Infinity Run Flyknit",
    type: "Running Shoes",
    category: "Footwear",
    brand: "Nike",
    originalPrice: 13995,
    salePrice: 11995,
    rating: 8.9,
    reviewCount: 687,
    shortDescription: "Designed to reduce running-related injuries",
    detailDescription: "The Nike React Infinity Run Flyknit combines maximum cushioning with stability features to help reduce injury. The Flyknit upper provides breathability and support where you need it most, while React foam delivers a smooth, responsive ride.",
    additionalInformation: "Style: CD4371-002 | React foam technology | Flyknit upper | Rocker geometry",
    colors: ["#000000", "#808080", "#0000FF"],
    reviews: [
      { username: "Runner_Priya", rating: 9, comment: "Perfect balance of cushioning and support!" },
      { username: "Nikhil M.", rating: 8, comment: "Great for long-distance running." },
      { username: "Sonia T.", rating: 9, comment: "Helped with my knee issues." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
    ]
  },
  {
    id: 50,
    title: "Nike Metcon 7",
    type: "Training Shoes",
    category: "Footwear",
    brand: "Nike",
    originalPrice: 11995,
    salePrice: 9995,
    rating: 9.0,
    reviewCount: 542,
    shortDescription: "Ultimate cross-training shoe for gym enthusiasts",
    detailDescription: "The Nike Metcon 7 is built for heavy lifting, high-intensity intervals, and everything in between. Features a wide heel for stability, React foam cushioning in the forefoot, and a textured upper for rope climbing durability.",
    additionalInformation: "Style: CZ8281-010 | Hyperlift insert | React foam | Rubber sidewalls",
    colors: ["#000000", "#FF0000", "#FFFFFF"],
    reviews: [
      { username: "Gym_Guru", rating: 9, comment: "Perfect for CrossFit and weight training!" },
      { username: "Rishi P.", rating: 9, comment: "Stable platform for heavy lifts." },
      { username: "Anjali S.", rating: 9, comment: "Versatile for various workouts." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42"
    ]
  },

  // Adidas Products
  {
    id: 51,
    title: "Adidas Ultraboost 21",
    type: "Running Shoes",
    category: "Footwear",
    brand: "Adidas",
    originalPrice: 15995,
    salePrice: 13995,
    rating: 9.4,
    reviewCount: 756,
    shortDescription: "Maximum energy return with Boost technology",
    detailDescription: "The Adidas Ultraboost 21 features 6% more Boost capsules than its predecessor, delivering incredible energy return. The Primeknit+ upper adapts to your foot's movement while the Linear Energy Push system enhances responsiveness.",
    additionalInformation: "Style: FY0378 | Boost midsole | Primeknit+ upper | Continental™ rubber outsole",
    colors: ["#000000", "#FFFFFF", "#808080"],
    reviews: [
      { username: "Marathon_Man", rating: 10, comment: "The comfort is unmatched!" },
      { username: "Shreya K.", rating: 9, comment: "Perfect for long runs and daily wear." },
      { username: "Rajesh M.", rating: 9, comment: "Best running shoes I've owned." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
      "https://images.unsplash.com/photo-1620794341491-76be6eeb6946",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    ]
  },
  {
    id: 52,
    title: "Adidas NMD_R1",
    type: "Lifestyle",
    category: "Footwear",
    brand: "Adidas",
    originalPrice: 11995,
    salePrice: 9995,
    rating: 8.8,
    reviewCount: 892,
    shortDescription: "Urban style meets running technology",
    detailDescription: "The Adidas NMD_R1 combines modern aesthetics with performance features. The Boost midsole provides responsive cushioning while the engineered mesh upper offers breathability. Perfect for city exploration and casual wear.",
    additionalInformation: "Style: FY5983 | Boost technology | Engineered mesh | EVA plug details",
    colors: ["#000000", "#FF0000", "#0000FF"],
    reviews: [
      { username: "Urban_Explorer", rating: 9, comment: "Stylish and super comfortable!" },
      { username: "Neha R.", rating: 8, comment: "Great for everyday wear." },
      { username: "Kunal S.", rating: 9, comment: "Perfect balance of style and comfort." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    ]
  },
  {
    id: 53,
    title: "Adidas Predator Edge+",
    type: "Football",
    category: "Footwear",
    brand: "Adidas",
    originalPrice: 22995,
    salePrice: 19995,
    rating: 9.1,
    reviewCount: 324,
    shortDescription: "Professional-grade football boots with Zone Skin technology",
    detailDescription: "The Adidas Predator Edge+ features innovative Zone Skin technology for precise ball control. The laceless design provides a clean striking surface while the split outsole ensures optimal traction on firm ground surfaces.",
    additionalInformation: "Style: GW1015 | Zone Skin upper | Firm ground studs | Laceless design",
    colors: ["#000000", "#FF0000", "#FFFFFF"],
    reviews: [
      { username: "Football_Pro", rating: 9, comment: "Best control I've experienced!" },
      { username: "Arjun S.", rating: 9, comment: "Worth every rupee for serious players." },
      { username: "Rahul D.", rating: 9, comment: "Amazing grip and ball feel." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1628413993904-0f392e1c5896",
      "https://images.unsplash.com/photo-1628413993904-0f392e1c5896",
      "https://images.unsplash.com/photo-1628413993904-0f392e1c5896"
    ]
  },
  {
    id: 54,
    title: "Adidas Forum Low",
    type: "Lifestyle",
    category: "Footwear",
    brand: "Adidas",
    originalPrice: 8995,
    salePrice: 7495,
    rating: 8.9,
    reviewCount: 567,
    shortDescription: "Iconic basketball heritage meets modern style",
    detailDescription: "The Adidas Forum Low celebrates basketball heritage with modern updates. Features premium leather upper, signature ankle strap, and comfortable cushioning. A timeless design that's perfect for everyday style.",
    additionalInformation: "Style: FY7756 | Leather upper | EVA midsole | Rubber outsole",
    colors: ["#FFFFFF", "#0000FF", "#FFD700"],
    reviews: [
      { username: "Style_Savvy", rating: 9, comment: "Classic look with modern comfort!" },
      { username: "Priya M.", rating: 9, comment: "Perfect retro vibes." },
      { username: "Vikram K.", rating: 8, comment: "Great quality for the price." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
      "https://images.unsplash.com/photo-1603808033176-9d134e6f2c74",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
    ]
  },
  {
    id: 55,
    title: "Adidas 4DFWD",
    type: "Running",
    category: "Footwear",
    brand: "Adidas",
    originalPrice: 19995,
    salePrice: 17995,
    rating: 9.2,
    reviewCount: 289,
    shortDescription: "Revolutionary 3D-printed midsole technology",
    detailDescription: "The Adidas 4DFWD features a revolutionary 3D-printed midsole that transforms vertical pressure into forward motion. The Primeknit+ upper provides adaptive support while the unique lattice structure offers precise cushioning.",
    additionalInformation: "Style: Q46447 | 3D-printed 4D midsole | Primeknit+ upper | Continental™ rubber outsole",
    colors: ["#000000", "#FF69B4", "#808080"],
    reviews: [
      { username: "Tech_Runner", rating: 9, comment: "Revolutionary cushioning system!" },
      { username: "Anish P.", rating: 9, comment: "Future of running shoes." },
      { username: "Meera S.", rating: 9, comment: "Unique feel and great performance." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42"
    ]
  },
  {
    id: 56,
    title: "New Balance Fresh Foam X 1080v12",
    type: "Running",
    category: "Footwear",
    brand: "New Balance",
    originalPrice: 14995,
    salePrice: 12995,
    rating: 9.3,
    reviewCount: 456,
    shortDescription: "Premium cushioning with Fresh Foam X technology",
    detailDescription: "The New Balance Fresh Foam X 1080v12 delivers premium cushioning for long-distance running. The Fresh Foam X midsole provides exceptional comfort while the engineered knit upper offers strategic areas of stretch and support.",
    additionalInformation: "Style: M1080B12 | Fresh Foam X midsole | Hypoknit upper | Ortholite sockliner",
    colors: ["#000000", "#0000FF", "#808080"],
    reviews: [
      { username: "Distance_Runner", rating: 9, comment: "Perfect for marathon training!" },
      { username: "Sanjay R.", rating: 10, comment: "Best cushioning ever." },
      { username: "Pooja M.", rating: 9, comment: "Great for long runs." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570",
      "https://images.unsplash.com/photo-1539185441755-769473a23570",
      "https://images.unsplash.com/photo-1539185441755-769473a23570"
    ]
  },
  {
    id: 57,
    title: "New Balance 990v5",
    type: "Lifestyle",
    category: "Footwear",
    brand: "New Balance",
    originalPrice: 16995,
    salePrice: 14995,
    rating: 9.0,
    reviewCount: 678,
    shortDescription: "Made in USA premium lifestyle sneaker",
    detailDescription: "The New Balance 990v5 continues the legacy of the 990 series. Features premium pigskin suede upper, ENCAP midsole technology, and OrthoLite insert for superior comfort. Made in USA with domestic and imported materials.",
    additionalInformation: "Style: M990GL5 | ENCAP midsole | Made in USA | Pigskin suede upper",
    colors: ["#808080", "#000000", "#FFFFFF"],
    reviews: [
      { username: "Sneaker_Collector", rating: 9, comment: "Classic silhouette, premium quality!" },
      { username: "Amit B.", rating: 9, comment: "Worth the investment." },
      { username: "Ritu S.", rating: 9, comment: "Most comfortable casual shoes." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"
    ]
  },
  {
    id: 58,
    title: "New Balance FuelCell RC Elite v2",
    type: "Racing",
    category: "Footwear",
    brand: "New Balance",
    originalPrice: 21995,
    salePrice: 19995,
    rating: 9.4,
    reviewCount: 234,
    shortDescription: "Elite racing shoe with carbon fiber plate",
    detailDescription: "The New Balance FuelCell RC Elite v2 is designed for race day performance. Features FuelCell foam for maximum energy return, full-length carbon fiber plate for propulsion, and engineered mesh upper for lightweight breathability.",
    additionalInformation: "Style: MRCELT2 | FuelCell foam | Carbon fiber plate | Weight: 225g",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    reviews: [
      { username: "Speed_Demon", rating: 10, comment: "Set my personal best in these!" },
      { username: "Karan M.", rating: 9, comment: "Incredible racing shoe." },
      { username: "Divya P.", rating: 9, comment: "Worth every penny for racing." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    ]
  },
  {
    id: 59,
    title: "New Balance Fresh Foam Hierro v7",
    type: "Trail Running",
    category: "Footwear",
    brand: "New Balance",
    originalPrice: 13995,
    salePrice: 11995,
    rating: 8.9,
    reviewCount: 345,
    shortDescription: "All-terrain trail running shoe with superior grip",
    detailDescription: "The New Balance Fresh Foam Hierro v7 is built for trail running adventures. Features Fresh Foam midsole cushioning, Vibram® MegaGrip outsole for superior traction, and a synthetic/mesh upper with TPU overlays for protection.",
    additionalInformation: "Style: MTHIERV7 | Vibram® MegaGrip | Fresh Foam midsole | TOE PROTECT™",
    colors: ["#008000", "#000000", "#FFA500"],
    reviews: [
      { username: "Trail_Runner", rating: 9, comment: "Perfect for rough terrains!" },
      { username: "Neeraj K.", rating: 9, comment: "Great grip on wet surfaces." },
      { username: "Swati R.", rating: 8, comment: "Durable and comfortable." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
    ]
  },
  {
    id: 60,
    title: "New Balance 574",
    type: "Lifestyle",
    category: "Footwear",
    brand: "New Balance",
    originalPrice: 7995,
    salePrice: 6995,
    rating: 8.8,
    reviewCount: 892,
    shortDescription: "Iconic lifestyle sneaker with retro design",
    detailDescription: "The New Balance 574 is a timeless classic that combines style and comfort. Features ENCAP midsole technology for support, suede/mesh upper for durability and breathability, and EVA foam cushioning for all-day comfort.",
    additionalInformation: "Style: ML574EVG | ENCAP midsole | Suede/mesh upper | EVA foam cushioning",
    colors: ["#000080", "#808080", "#000000"],
    reviews: [
      { username: "Retro_Lover", rating: 9, comment: "Classic style that never gets old!" },
      { username: "Arun P.", rating: 8, comment: "Great everyday sneaker." },
      { username: "Mira K.", rating: 9, comment: "Comfortable and stylish." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"
    ]
  },
  {
    id: 61,
    title: "Rolex Submariner Date",
    type: "Luxury Diving Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 899999,
    salePrice: 849999,
    rating: 9.8,
    reviewCount: 456,
    shortDescription: "Iconic diving watch with Cerachrom bezel and Glidelock clasp",
    detailDescription: "The Rolex Submariner Date is the benchmark for diving watches. Features a unidirectional rotatable bezel with Cerachrom insert, water resistance to 300 meters, and Rolex's prestigious 3235 movement. The 41mm Oystersteel case houses a black dial with Chromalight display for exceptional legibility in dark conditions. The Oyster bracelet with Glidelock extension system ensures perfect fit over diving suits.",
    additionalInformation: "Case: 41mm Oystersteel | Movement: Calibre 3235 | Water Resistance: 300m | Power Reserve: 70 hours",
    colors: ["#000000", "#0000FF", "#006400"],
    reviews: [
      { username: "Watch_Collector", rating: 10, comment: "The ultimate diving watch. Impeccable quality and precision." },
      { username: "Luxury_Enthusiast", rating: 9, comment: "A true investment piece that holds its value." },
      { username: "Diving_Pro", rating: 10, comment: "Reliable companion for both diving and daily wear." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
      "https://images.unsplash.com/photo-1627165364322-a151cfbc1fb5",
      "https://images.unsplash.com/photo-1627165364322-a151cfbc1fb5"
    ]
  },
  {
    id: 62,
    title: "Rolex Daytona",
    type: "Luxury Chronograph",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 1499999,
    salePrice: 1449999,
    rating: 9.9,
    reviewCount: 378,
    shortDescription: "Legendary chronograph with precious metal construction",
    detailDescription: "The Rolex Cosmograph Daytona in 18kt white gold is the pinnacle of luxury chronographs. Features a tachymetric scale on the bezel for measuring average speeds, three chronograph subdials, and Rolex's high-precision 4130 movement. The case back is fitted with a sapphire crystal for viewing the intricate movement.",
    additionalInformation: "Case: 40mm 18kt White Gold | Movement: Calibre 4130 | Water Resistance: 100m | Chronograph Function",
    colors: ["#C0C0C0", "#FFD700", "#FFFFFF"],
    reviews: [
      { username: "Racing_Enthusiast", rating: 10, comment: "The ultimate chronograph. Worth every penny!" },
      { username: "Timepiece_Master", rating: 9, comment: "Exceptional build quality and precision." },
      { username: "Luxury_Connoisseur", rating: 10, comment: "The holy grail of chronographs." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1627165364589-c5e7cd95bcf3",
      "https://images.unsplash.com/photo-1627165364589-c5e7cd95bcf3",
      "https://images.unsplash.com/photo-1627165364589-c5e7cd95bcf3"
    ]
  },
  {
    id: 63,
    title: "Rolex GMT-Master II",
    type: "Luxury Travel Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 999999,
    salePrice: 959999,
    rating: 9.7,
    reviewCount: 423,
    shortDescription: "Dual time zone watch with iconic 'Pepsi' bezel",
    detailDescription: "The Rolex GMT-Master II features the iconic red and blue 'Pepsi' Cerachrom bezel, allowing travelers to read two time zones simultaneously. The 40mm Oystersteel case houses Rolex's caliber 3285 movement, featuring Chronergy escapement and blue Parachrom hairspring. The Jubilee bracelet provides both comfort and elegance.",
    additionalInformation: "Case: 40mm Oystersteel | Movement: Calibre 3285 | Water Resistance: 100m | GMT Function",
    colors: ["#0000FF", "#FF0000", "#000000"],
    reviews: [
      { username: "Global_Traveler", rating: 9, comment: "Perfect companion for international travel." },
      { username: "Watch_Expert", rating: 10, comment: "The best GMT watch in the market." },
      { username: "Pilot_Pro", rating: 9, comment: "Reliable and beautiful timepiece." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1627165364627-0a8e8f20d634",
      "https://images.unsplash.com/photo-1627165364627-0a8e8f20d634",
      "https://images.unsplash.com/photo-1627165364627-0a8e8f20d634"
    ]
  },
  {
    id: 64,
    title: "Rolex Day-Date 40",
    type: "Luxury Dress Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 3599999,
    salePrice: 3499999,
    rating: 9.8,
    reviewCount: 289,
    shortDescription: "Presidential watch in 18kt yellow gold with day and date display",
    detailDescription: "The Rolex Day-Date 40 in 18kt yellow gold is the epitome of luxury dress watches. Features the signature President bracelet, instantaneous day and date displays, and Rolex's advanced 3255 movement. The champagne dial with Roman numerals exudes elegance, while the fluted bezel adds classic Rolex character.",
    additionalInformation: "Case: 40mm 18kt Yellow Gold | Movement: Calibre 3255 | Water Resistance: 100m | President Bracelet",
    colors: ["#FFD700", "#FFFFFF", "#C0C0C0"],
    reviews: [
      { username: "Executive_Style", rating: 10, comment: "The ultimate status symbol." },
      { username: "Gold_Standard", rating: 9, comment: "Impeccable craftsmanship and presence." },
      { username: "Luxury_Life", rating: 10, comment: "Nothing compares to a gold Day-Date." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1627165364590-1d2c6c8bf4c1",
      "https://images.unsplash.com/photo-1627165364590-1d2c6c8bf4c1",
      "https://images.unsplash.com/photo-1627165364590-1d2c6c8bf4c1"
    ]
  },
  {
    id: 65,
    title: "Rolex Sky-Dweller",
    type: "Luxury Complicated Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 1799999,
    salePrice: 1749999,
    rating: 9.6,
    reviewCount: 245,
    shortDescription: "Annual calendar with dual time zone functionality",
    detailDescription: "The Rolex Sky-Dweller combines sophisticated functionality with elegant design. Features an annual calendar that automatically differentiates between 30 and 31-day months, dual time zone display, and innovative Ring Command bezel system. The 42mm case houses Rolex's complex caliber 9001 movement.",
    additionalInformation: "Case: 42mm Oystersteel | Movement: Calibre 9001 | Water Resistance: 100m | Annual Calendar",
    colors: ["#000000", "#C0C0C0", "#FFD700"],
    reviews: [
      { username: "Tech_Watch", rating: 9, comment: "Most innovative Rolex complication." },
      { username: "Business_Class", rating: 10, comment: "Perfect for international executives." },
      { username: "Horology_Fan", rating: 9, comment: "Engineering masterpiece." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1627165364627-0a8e8f20d634",
      "https://images.unsplash.com/photo-1627165364627-0a8e8f20d634",
      "https://images.unsplash.com/photo-1627165364627-0a8e8f20d634"
    ]
  },

  // Omega Products
  {
    id: 66,
    title: "Omega Speedmaster Professional",
    type: "Luxury Chronograph",
    category: "Watches",
    brand: "Omega",
    originalPrice: 699999,
    salePrice: 649999,
    rating: 9.7,
    reviewCount: 567,
    shortDescription: "The first watch worn on the moon",
    detailDescription: "The Omega Speedmaster Professional 'Moonwatch' is a piece of space exploration history. Features the hand-wound caliber 3861 movement, hesalite crystal, and signature chronograph functionality. The 42mm steel case houses a black dial with luminous hands and markers, while the tachymeter scale bezel allows speed calculations.",
    additionalInformation: "Case: 42mm Stainless Steel | Movement: Calibre 3861 | Water Resistance: 50m | NASA Flight Qualified",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      { username: "Space_Enthusiast", rating: 10, comment: "A piece of space history on the wrist!" },
      { username: "Chrono_Master", rating: 9, comment: "Timeless design, incredible heritage." },
      { username: "Moon_Watch", rating: 10, comment: "The only watch you'll ever need." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1622434641406-a158123450f9",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9"
    ]
  },
  {
    id: 67,
    title: "Omega Seamaster Diver 300M",
    type: "Luxury Diving Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 549999,
    salePrice: 519999,
    rating: 9.5,
    reviewCount: 478,
    shortDescription: "Professional diver's watch with wave-pattern dial",
    detailDescription: "The Omega Seamaster Diver 300M features the iconic wave-pattern dial, ceramic bezel, and helium escape valve. The 42mm case houses Omega's Co-Axial Master Chronometer caliber 8800 movement. Water-resistant to 300 meters, it combines professional diving capabilities with elegant design.",
    additionalInformation: "Case: 42mm Stainless Steel | Movement: Calibre 8800 | Water Resistance: 300m | Master Chronometer Certified",
    colors: ["#0000FF", "#000000", "#C0C0C0"],
    reviews: [
      { username: "Ocean_Explorer", rating: 9, comment: "Best diving watch in its class!" },
      { username: "Watch_Pro", rating: 10, comment: "Incredible value for money." },
      { username: "Dive_Master", rating: 9, comment: "Perfect balance of style and function." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 68,
    title: "Omega Constellation",
    type: "Luxury Dress Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 799999,
    salePrice: 759999,
    rating: 9.4,
    reviewCount: 345,
    shortDescription: "Elegant timepiece with signature claws and integrated bracelet",
    detailDescription: "The Omega Constellation features the iconic 'Manhattan' design with signature claws and integrated bracelet. The 39mm case houses Omega's Co-Axial Master Chronometer caliber 8900 movement. The sunburst dial with diamond hour markers and date window exemplifies luxury.",
    additionalInformation: "Case: 39mm Stainless Steel & Gold | Movement: Calibre 8900 | Water Resistance: 100m | Diamond Indices",
    colors: ["#FFD700", "#C0C0C0", "#000000"],
    reviews: [
      { username: "Luxury_Daily", rating: 9, comment: "Perfect dress watch for any occasion." },
      { username: "Style_Icon", rating: 9, comment: "Elegant and sophisticated design." },
      { username: "Watch_Critic", rating: 10, comment: "Outstanding finishing and comfort." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 69,
    title: "Omega De Ville Tresor",
    type: "Luxury Dress Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 899999,
    salePrice: 849999,
    rating: 9.3,
    reviewCount: 234,
    shortDescription: "Ultra-thin dress watch with vintage inspiration",
    detailDescription: "The Omega De Ville Tresor represents the pinnacle of elegant watchmaking. Features a slim 40mm case in 18kt rose gold, domed opaline silvery dial with applied indices, and Omega's precise caliber 8910 movement. The brown alligator strap completes the sophisticated look.",
    additionalInformation: "Case: 40mm 18kt Rose Gold | Movement: Calibre 8910 | Water Resistance: 30m | Alligator Strap",
    colors: ["#FFD700", "#8B4513", "#FFFFFF"],
    reviews: [
      { username: "Vintage_Love", rating: 9, comment: "Classic elegance at its finest." },
      { username: "Dress_Watch", rating: 10, comment: "Perfect for formal occasions." },
      { username: "Gold_Class", rating: 9, comment: "Understated luxury at its best." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 70,
    title: "Omega Aqua Terra 150M",
    type: "Luxury Sports Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 599999,
    salePrice: 569999,
    rating: 9.6,
    reviewCount: 412,
    shortDescription: "Versatile luxury sports watch with teak pattern dial",
    detailDescription: "The Omega Aqua Terra 150M features the distinctive teak pattern dial inspired by luxury yacht decks. The 41mm case houses Omega's Co-Axial Master Chronometer caliber 8900 movement. Resistant to magnetic fields up to 15,000 gauss, it combines sporty elegance with technical innovation.",
    additionalInformation: "Case: 41mm Stainless Steel | Movement: Calibre 8900 | Water Resistance: 150m | Anti-magnetic",
    colors: ["#0000FF", "#C0C0C0", "#000000"],
    reviews: [
      { username: "Daily_Luxury", rating: 10, comment: "Perfect all-around luxury watch." },
      { username: "Sports_Elegant", rating: 9, comment: "Versatile and beautifully finished." },
      { username: "Watch_Aficionado", rating: 9, comment: "Outstanding daily wearer." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },

  // TAG Heuer Products
  {
    id: 71,
    title: "TAG Heuer Carrera Chronograph",
    type: "Luxury Sports Chronograph",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 499999,
    salePrice: 469999,
    rating: 9.2,
    reviewCount: 345,
    shortDescription: "Iconic racing chronograph with modern refinements",
    detailDescription: "The TAG Heuer Carrera Chronograph celebrates the brand's motor racing heritage. Features a 44mm steel case, ceramic tachymeter bezel, and the in-house Heuer 02 movement with 80-hour power reserve. The skeleton dial showcases the sophisticated chronograph mechanism while maintaining excellent legibility.",
    additionalInformation: "Case: 44mm Stainless Steel | Movement: Calibre Heuer 02 | Water Resistance: 100m | 80-hour Power Reserve",
    colors: ["#000000", "#C0C0C0", "#0000FF"],
    reviews: [
      { username: "Racing_Fan", rating: 9, comment: "Perfect racing heritage timepiece!" },
      { username: "Chrono_Expert", rating: 9, comment: "Excellent value for an in-house chronograph." },
      { username: "Speed_Timer", rating: 9, comment: "Beautiful design and precise timing." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 72,
    title: "TAG Heuer Monaco",
    type: "Luxury Sports Watches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 599999,
    salePrice: 569999,
    rating: 9.4,
    reviewCount: 289,
    shortDescription: "Legendary square chronograph with racing heritage",
    detailDescription: "The TAG Heuer Monaco, made famous by Steve McQueen, features the distinctive square case design. The 39mm case houses the Calibre 11 automatic chronograph movement. The blue sunray dial with contrasting chronograph subdials pays homage to the original 1969 model.",
    additionalInformation: "Case: 39mm Stainless Steel | Movement: Calibre 11 | Water Resistance: 100m | Square Case Design",
    colors: ["#0000FF", "#000000", "#C0C0C0"],
    reviews: [
      { username: "Classic_Racing", rating: 10, comment: "An absolute icon in watchmaking!" },
      { username: "Square_Style", rating: 9, comment: "Unique design that stands out." },
      { username: "Heritage_Watch", rating: 9, comment: "Living piece of racing history." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 73,
    title: "TAG Heuer Aquaracer",
    type: "Luxury Diving Watches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 299999,
    salePrice: 279999,
    rating: 9.1,
    reviewCount: 456,
    shortDescription: "Professional diving watch with modern design",
    detailDescription: "The TAG Heuer Aquaracer Professional 300 features a ceramic unidirectional rotating bezel and distinctive 12-sided design. The 43mm case houses the Calibre 5 automatic movement. Water-resistant to 300 meters, it combines robust functionality with sophisticated style.",
    additionalInformation: "Case: 43mm Stainless Steel | Movement: Calibre 5 | Water Resistance: 300m | Ceramic Bezel",
    colors: ["#000000", "#0000FF", "#C0C0C0"],
    reviews: [
      { username: "Dive_Watch", rating: 9, comment: "Excellent value diving watch!" },
      { username: "Ocean_Timer", rating: 9, comment: "Robust and reliable timepiece." },
      { username: "Water_Sport", rating: 9, comment: "Perfect for water activities." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 74,
    title: "TAG Heuer Formula 1",
    type: "Luxury Sports Watches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 199999,
    salePrice: 189999,
    rating: 9.0,
    reviewCount: 567,
    shortDescription: "Entry-level luxury sports watch with racing DNA",
    detailDescription: "The TAG Heuer Formula 1 embodies the spirit of motor racing. Features a 43mm steel case with ceramic bezel, quartz chronograph movement, and distinctive racing-inspired design elements. The robust construction and sporty aesthetics make it perfect for active lifestyles.",
    additionalInformation: "Case: 43mm Stainless Steel | Movement: Quartz Chronograph | Water Resistance: 200m | Ceramic Bezel",
    colors: ["#FF0000", "#000000", "#C0C0C0"],
    reviews: [
      { username: "F1_Fan", rating: 9, comment: "Great entry into luxury watches!" },
      { username: "Sport_Watch", rating: 9, comment: "Perfect daily sports watch." },
      { username: "Race_Timer", rating: 9, comment: "Robust and reliable chronograph." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 75,
    title: "TAG Heuer Connected",
    type: "Luxury Smartwatches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 249999,
    salePrice: 229999,
    rating: 9.0,
    reviewCount: 345,
    shortDescription: "Premium Swiss smartwatch with advanced features",
    detailDescription: "The TAG Heuer Connected combines Swiss luxury with modern technology. Features a 45mm case with ceramic bezel, high-resolution OLED display, and comprehensive fitness tracking capabilities. The customizable faces replicate mechanical TAG Heuer watches while providing smart functionality.",
    additionalInformation: "Case: 45mm Stainless Steel | Display: OLED Touch Screen | Water Resistance: 50m | Battery Life: 24h",
    colors: ["#000000", "#C0C0C0", "#0000FF"],
    reviews: [
      { username: "Tech_Luxury", rating: 9, comment: "Perfect blend of tradition and technology!" },
      { username: "Smart_Style", rating: 9, comment: "Most premium smartwatch available." },
      { username: "Digital_Watch", rating: 9, comment: "Great for active lifestyle." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b"
    ]
  },
  {
    id: 76,
    title: "MacBook Pro 16-inch M2 Pro",
    type: "Laptop",
    category: "Electronics",
    brand: "Apple",
    originalPrice: 249900,
    salePrice: 229900,
    rating: 9.2,
    reviewCount: 856,
    shortDescription: "Powerful laptop with M2 Pro chip and stunning Liquid Retina XDR display",
    detailDescription: "Experience breakthrough performance with the M2 Pro chip. Features a stunning 16-inch Liquid Retina XDR display, up to 22 hours of battery life, and a advanced camera and audio system. Perfect for professional creative work and intensive tasks.",
    additionalInformation: "CPU: M2 Pro 12-core | RAM: 16GB unified memory | Storage: 512GB SSD | Display: 16-inch Liquid Retina XDR",
    colors: ["#666666", "#999999", "#000000"],
    reviews: [
      { username: "Alex M.", rating: 9.5, comment: "Incredible performance and battery life. Perfect for video editing." },
      { username: "Sarah K.", rating: 9, comment: "The display quality is unmatched. Worth every penny." },
      { username: "David R.", rating: 9, comment: "M2 Pro chip is a game changer for professional work." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 77,
    title: "iPhone 15 Pro Max",
    type: "Smartphone",
    category: "Electronics",
    brand: "Apple",
    originalPrice: 159900,
    salePrice: 149900,
    rating: 9.4,
    reviewCount: 1243,
    shortDescription: "Pro camera system with 48MP main camera and A17 Pro chip",
    detailDescription: "The iPhone 15 Pro Max features a groundbreaking 48MP camera system, powerful A17 Pro chip, and a stunning Super Retina XDR display with ProMotion. The titanium design offers durability while maintaining premium aesthetics.",
    additionalInformation: "Display: 6.7-inch OLED | Storage: 256GB | RAM: 8GB | Battery: 4422mAh",
    colors: ["#4A4A4A", "#E3C4A8", "#000000", "#4169E1"],
    reviews: [
      { username: "Mike P.", rating: 9.5, comment: "The camera system is absolutely incredible." },
      { username: "Lisa T.", rating: 9, comment: "Premium build quality and amazing performance." },
      { username: "John D.", rating: 9.8, comment: "Best iPhone ever. The display is stunning." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1696446702183-abd8e2ccf4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1695048132936-814e25f93ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 78,
    title: "iPad Pro 12.9-inch M2",
    type: "Tablet",
    category: "Electronics",
    brand: "Apple",
    originalPrice: 119900,
    salePrice: 109900,
    rating: 9.1,
    reviewCount: 645,
    shortDescription: "12.9-inch Liquid Retina XDR display with M2 chip",
    detailDescription: "The iPad Pro features the powerful M2 chip, Liquid Retina XDR display, and advanced cameras. Perfect for creative professionals, with support for Apple Pencil 2nd generation and Magic Keyboard.",
    additionalInformation: "Display: 12.9-inch Liquid Retina XDR | Storage: 256GB | RAM: 8GB | Battery: 10,758mAh",
    colors: ["#666666", "#999999"],
    reviews: [
      { username: "Emma S.", rating: 9, comment: "Perfect for digital art and productivity." },
      { username: "Tom H.", rating: 9.2, comment: "The display is amazing for content consumption." },
      { username: "Nina P.", rating: 9.3, comment: "M2 chip makes this a laptop replacement." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511375617956-4dff31f5f4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 79,
    title: "Apple Watch Ultra 2",
    type: "Smartwatch",
    category: "Electronics",
    brand: "Apple",
    originalPrice: 89900,
    salePrice: 84900,
    rating: 9.0,
    reviewCount: 432,
    shortDescription: "Advanced smartwatch with titanium case and precision GPS",
    detailDescription: "The Apple Watch Ultra 2 features a rugged titanium case, the brightest Apple Watch display ever, precision dual-frequency GPS, and up to 36 hours of battery life. Perfect for outdoor adventures and extreme sports.",
    additionalInformation: "Display: 49mm Always-On Retina | Water resistance: 100m | Battery: Up to 36 hours",
    colors: ["#C0C0C0"],
    reviews: [
      { username: "Chris R.", rating: 9, comment: "Perfect for outdoor activities and tracking." },
      { username: "Maria L.", rating: 9.2, comment: "Battery life is impressive for a smartwatch." },
      { username: "James K.", rating: 8.8, comment: "Rugged build quality and great features." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1696925126790-f7d2776d6b03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1697557443517-8ad3d9b96481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1697557443661-0da271a4e7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 80,
    title: "AirPods Pro (2nd Generation)",
    type: "Audio",
    category: "Electronics",
    brand: "Apple",
    originalPrice: 24900,
    salePrice: 22900,
    rating: 9.3,
    reviewCount: 892,
    shortDescription: "Premium wireless earbuds with active noise cancellation",
    detailDescription: "Features personalized Spatial Audio, advanced active noise cancellation, adaptive transparency mode, and up to 6 hours of listening time. Includes precision finding with U1 chip and MagSafe charging case.",
    additionalInformation: "Battery Life: 6 hours (30 hours with case) | Water Resistance: IPX4 | Chip: H2",
    colors: ["#FFFFFF"],
    reviews: [
      { username: "Peter M.", rating: 9.5, comment: "Best noise cancellation in any earbuds." },
      { username: "Sophie L.", rating: 9.2, comment: "Sound quality is exceptional." },
      { username: "Ryan T.", rating: 9.3, comment: "Perfect integration with Apple devices." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1696925126790-f7d2776d6b03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1697557443517-8ad3d9b96481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1697557443661-0da271a4e7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // Samsung Products
  {
    id: 81,
    title: "Samsung Galaxy S24 Ultra",
    type: "Smartphone",
    category: "Electronics",
    brand: "Samsung",
    originalPrice: 134999,
    salePrice: 129999,
    rating: 9.2,
    reviewCount: 756,
    shortDescription: "Ultimate smartphone with S Pen and AI capabilities",
    detailDescription: "The Galaxy S24 Ultra features a 200MP main camera, built-in S Pen, and advanced AI capabilities. The 6.8-inch Dynamic AMOLED 2X display offers stunning visuals, while the Snapdragon 8 Gen 3 ensures top performance.",
    additionalInformation: "Display: 6.8-inch QHD+ | RAM: 12GB | Storage: 256GB | Battery: 5000mAh",
    colors: ["#000000", "#7B68EE", "#808080", "#8B4513"],
    reviews: [
      { username: "Robert K.", rating: 9.3, comment: "The S Pen integration is fantastic." },
      { username: "Anna P.", rating: 9.1, comment: "Camera system is incredibly versatile." },
      { username: "Mark L.", rating: 9.2, comment: "Best Android phone available." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 82,
    title: "Samsung Galaxy Book3 Ultra",
    type: "Laptop",
    category: "Electronics",
    brand: "Samsung",
    originalPrice: 224999,
    salePrice: 209999,
    rating: 8.9,
    reviewCount: 345,
    shortDescription: "Premium laptop with AMOLED display and RTX graphics",
    detailDescription: "Features a stunning 16-inch 3K AMOLED display, 13th Gen Intel Core i9 processor, and NVIDIA RTX 4070 graphics. Perfect for creative professionals and gaming enthusiasts.",
    additionalInformation: "CPU: Intel Core i9-13900H | GPU: RTX 4070 | RAM: 32GB | Storage: 1TB SSD",
    colors: ["#000000", "#4A4A4A"],
    reviews: [
      { username: "Kevin M.", rating: 9, comment: "Display quality is outstanding." },
      { username: "Laura S.", rating: 8.8, comment: "Great performance for creative work." },
      { username: "Paul R.", rating: 9, comment: "Premium build and excellent keyboard." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 83,
    title: "Samsung Galaxy Tab S9 Ultra",
    type: "Tablet",
    category: "Electronics",
    brand: "Samsung",
    originalPrice: 119999,
    salePrice: 109999,
    rating: 8.8,
    reviewCount: 423,
    shortDescription: "Premium Android tablet with S Pen included",
    detailDescription: "Features a massive 14.6-inch Super AMOLED display, Snapdragon 8 Gen 2 chip, and included S Pen. Perfect for productivity and creative work with Samsung DeX support.",
    additionalInformation: "Display: 14.6-inch AMOLED | RAM: 12GB | Storage: 256GB | Battery: 11200mAh",
    colors: ["#808080", "#000000"],
    reviews: [
      { username: "Helen T.", rating: 8.9, comment: "Perfect for digital art and note-taking." },
      { username: "Brian K.", rating: 8.7, comment: "Great multimedia device with excellent speakers." },
      { username: "Carol M.", rating: 8.8, comment: "Samsung DeX is a game-changer." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1632634571086-44a8be676ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589739900257-fb583dd296b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 84,
    title: "Samsung Galaxy Watch6 Classic",
    type: "Smartwatch",
    category: "Electronics",
    brand: "Samsung",
    originalPrice: 39999,
    salePrice: 36999,
    rating: 8.7,
    reviewCount: 289,
    shortDescription: "Premium smartwatch with rotating bezel",
    detailDescription: "Features a classic design with rotating bezel, advanced health tracking, and Wear OS integration. Perfect for fitness enthusiasts and professionals alike.",
    additionalInformation: "Display: 1.4-inch Super AMOLED | Water resistance: 5ATM | Battery: 425mAh",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      { username: "Diana P.", rating: 8.8, comment: "The rotating bezel is intuitive." },
      { username: "Steve M.", rating: 8.6, comment: "Great health tracking features." },
      { username: "Linda K.", rating: 8.7, comment: "Premium build quality." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1697557443517-8ad3d9b96481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1697557443661-0da271a4e7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1697557443403-d3fe8857bcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 85,
    title: "Samsung Galaxy Buds2 Pro",
    type: "Audio",
    category: "Electronics",
    brand: "Samsung",
    originalPrice: 17999,
    salePrice: 15999,
    rating: 8.9,
    reviewCount: 567,
    shortDescription: "Premium wireless earbuds with ANC",
    detailDescription: "Features intelligent active noise cancellation, 360 Audio, and IPX7 water resistance. Delivers immersive sound with crystal clarity and deep bass.",
    additionalInformation: "Battery Life: 5 hours (20 hours with case) | Water Resistance: IPX7 | Bluetooth 5.3",
    colors: ["#000000", "#FFFFFF", "#4B0082"],
    reviews: [
      { username: "Tim R.", rating: 9, comment: "Great sound quality and comfort." },
      { username: "Alice K.", rating: 8.8, comment: "ANC works really well." },
      { username: "George P.", rating: 9, comment: "Perfect for Samsung ecosystem." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598331668626-12a9c95f7a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // Sony Products
  {
    id: 86,
    title: "Sony WH-1000XM5",
    type: "Audio",
    category: "Electronics",
    brand: "Sony",
    originalPrice: 29990,
    salePrice: 26990,
    rating: 9.4,
    reviewCount: 892,
    shortDescription: "Premium wireless noise-cancelling headphones",
    detailDescription: "Industry-leading noise cancellation with eight microphones and Auto NC Optimizer. Features 30-hour battery life, multipoint connection, and LDAC support for high-resolution audio.",
    additionalInformation: "Battery Life: 30 hours | Charging Time: 3.5 hours | Weight: 250g",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      { username: "Michael B.", rating: 9.5, comment: "Best noise cancellation in the market." },
      { username: "Rachel S.", rating: 9.3, comment: "Incredible sound quality and comfort." },
      { username: "David M.", rating: 9.4, comment: "Battery life is outstanding." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618366712025-a97b0ffa0932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618366712013-259d3fb7c8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 87,
    title: "Sony A7 IV",
    type: "Camera",
    category: "Electronics",
    brand: "Sony",
    originalPrice: 249990,
    salePrice: 229990,
    rating: 9.2,
    reviewCount: 456,
    shortDescription: "Full-frame mirrorless camera with advanced AF",
    detailDescription: "Features a 33MP full-frame sensor, advanced AI-based autofocus, and 4K 60p video recording. Perfect for both professional photography and videography.",
    additionalInformation: "Sensor: 33MP Full-frame | ISO: 100-51200 | Weight: 659g | Battery: NP-FZ100",
    colors: ["#000000"],
    reviews: [
      { username: "Jennifer K.", rating: 9.3, comment: "Exceptional image quality and AF performance." },
      { username: "Thomas R.", rating: 9.1, comment: "Great hybrid camera for photo and video." },
      { username: "Sarah M.", rating: 9.2, comment: "Professional features in a compact body." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516035071-78769b4b1ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516035645876-b7f1c4c9a7c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 88,
    title: "Sony BRAVIA XR A95L",
    type: "TV",
    category: "Electronics",
    brand: "Sony",
    originalPrice: 399990,
    salePrice: 369990,
    rating: 9.3,
    reviewCount: 234,
    shortDescription: "QD-OLED TV with cognitive processor XR",
    detailDescription: "Features QD-OLED panel with XR cognitive processor, perfect for gaming with HDMI 2.1 and VRR support. Google TV interface with hands-free voice control.",
    additionalInformation: "Screen: 65-inch QD-OLED | Resolution: 4K | HDR: Dolby Vision | OS: Google TV",
    colors: ["#000000"],
    reviews: [
      { username: "William P.", rating: 9.4, comment: "Best picture quality I've ever seen." },
      { username: "Emily R.", rating: 9.2, comment: "Perfect for movies and gaming." },
      { username: "Jack M.", rating: 9.3, comment: "The cognitive processor makes a difference." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593784991127-ed114d3a8ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593784991400-e31c3c8b4559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 89,
    title: "Sony PlayStation 5",
    type: "Gaming",
    category: "Electronics",
    brand: "Sony",
    originalPrice: 54990,
    salePrice: 49990,
    rating: 9.5,
    reviewCount: 1567,
    shortDescription: "Next-gen gaming console with DualSense controller",
    detailDescription: "Features ray tracing, 3D audio, and ultra-high speed SSD for near-instant loading. The DualSense controller provides immersive haptic feedback and adaptive triggers.",
    additionalInformation: "CPU: AMD Zen 2 | GPU: 10.28 TFLOPS RDNA 2 | Storage: 825GB SSD | RAM: 16GB GDDR6",
    colors: ["#FFFFFF"],
    reviews: [
      { username: "Alex T.", rating: 9.6, comment: "Revolutionary gaming experience." },
      { username: "Michelle K.", rating: 9.4, comment: "The DualSense controller is amazing." },
      { username: "Patrick L.", rating: 9.5, comment: "Lightning-fast loading times." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff1b87b0da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 90,
    title: "Sony WF-1000XM5",
    type: "Audio",
    category: "Electronics",
    brand: "Sony",
    originalPrice: 24990,
    salePrice: 21990,
    rating: 9.1,
    reviewCount: 678,
    shortDescription: "Premium noise-cancelling wireless earbuds",
    detailDescription: "Features industry-leading noise cancellation, high-resolution audio support, and up to 8 hours of battery life. Includes wireless charging and multipoint connection.",
    additionalInformation: "Battery Life: 8 hours (24 hours with case) | Water Resistance: IPX4 | Weight: 5.9g per earbud",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      { username: "Nancy P.", rating: 9.2, comment: "Exceptional sound quality and ANC." },
      { username: "Frank M.", rating: 9.0, comment: "Very comfortable for long sessions." },
      { username: "Julia S.", rating: 9.1, comment: "Great battery life and features." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598331668626-12a9c95f7a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 91,
    title: "Love Bracelet",
    type: "Bracelet",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 689900,
    salePrice: 689900,
    rating: 9.8,
    reviewCount: 1245,
    shortDescription: "Iconic 18K yellow gold bracelet with screwdriver closure",
    detailDescription: "The iconic LOVE bracelet, created in New York in 1969, is a testament to love that transgresses convention. The oval bracelet is designed to be opened and closed with a screwdriver, making it a symbol of committed love. Crafted in 18K yellow gold, this piece features the signature screw motifs that have become a legendary symbol of eternal passion.",
    additionalInformation: "Material: 18K Yellow Gold | Width: 6.1mm | Screw System: Original Cartier | Certificate: Authenticity & Quality",
    colors: ["#FFD700", "#FFFFFF", "#FFA07A"],
    reviews: [
      { username: "Elizabeth R.", rating: 10, comment: "A timeless piece that never goes out of style. Worth every penny." },
      { username: "James M.", rating: 9.5, comment: "The craftsmanship is exceptional. A true symbol of luxury." },
      { username: "Sophie T.", rating: 10, comment: "My everyday piece for over 5 years now. Still looks perfect." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 92,
    title: "Panthère de Cartier Ring",
    type: "Ring",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 459900,
    salePrice: 459900,
    rating: 9.6,
    reviewCount: 856,
    shortDescription: "18K white gold ring with emerald eyes and onyx nose",
    detailDescription: "The Panthère de Cartier ring embodies wild elegance. This stunning piece features the iconic panther head crafted in 18K white gold, set with brilliant-cut diamonds. The emerald eyes and onyx nose bring the fierce beauty to life. A symbol of feminine power and grace.",
    additionalInformation: "Material: 18K White Gold | Stones: Diamonds, Emeralds, Onyx | Total Diamond Weight: 0.25 carats",
    colors: ["#FFFFFF"],
    reviews: [
      { username: "Victoria P.", rating: 9.8, comment: "The detail in the panther design is breathtaking." },
      { username: "Alexander K.", rating: 9.5, comment: "A conversation starter. Pure luxury." },
      { username: "Isabella M.", rating: 9.6, comment: "The emerald eyes catch light beautifully." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602752275197-9d317a1b3f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 93,
    title: "Santos de Cartier Watch",
    type: "Watch",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 729900,
    salePrice: 729900,
    rating: 9.7,
    reviewCount: 634,
    shortDescription: "Automatic steel and gold watch with blue dial",
    detailDescription: "The Santos de Cartier watch combines modern elegance with historic design. Features a blue dial with Roman numerals, sword-shaped hands, and the iconic exposed screws. The automatic movement provides precise timekeeping, while the QuickSwitch system allows for easy strap changes.",
    additionalInformation: "Case: Steel and 18K Yellow Gold | Movement: Automatic | Water Resistance: 100m | Size: 39.8mm",
    colors: ["#C0C0C0", "#FFD700"],
    reviews: [
      { username: "William B.", rating: 9.8, comment: "The perfect blend of sport and luxury." },
      { username: "Charlotte D.", rating: 9.7, comment: "Incredibly comfortable and versatile." },
      { username: "Henry R.", rating: 9.6, comment: "The blue dial is stunning in person." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 94,
    title: "Juste un Clou Necklace",
    type: "Necklace",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 389900,
    salePrice: 389900,
    rating: 9.5,
    reviewCount: 423,
    shortDescription: "18K rose gold nail-design necklace with diamonds",
    detailDescription: "The Juste un Clou necklace transforms a humble nail into a precious object. This bold interpretation in 18K rose gold is adorned with brilliant-cut diamonds. The curved nail wraps gracefully around the neck, making a contemporary statement about transformed beauty.",
    additionalInformation: "Material: 18K Rose Gold | Diamonds: 0.19 carats | Length: 42cm | Closure: Sliding Clasp",
    colors: ["#B76E79"],
    reviews: [
      { username: "Olivia P.", rating: 9.6, comment: "Such an elegant twist on an everyday object." },
      { username: "Marcus L.", rating: 9.4, comment: "The rose gold is perfectly subtle." },
      { username: "Emma S.", rating: 9.5, comment: "Receives compliments every time I wear it." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602283076962-5c50ca1dce50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 95,
    title: "Trinity Earrings",
    type: "Earrings",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 289900,
    salePrice: 289900,
    rating: 9.4,
    reviewCount: 378,
    shortDescription: "Classic three-gold interlinked hoop earrings",
    detailDescription: "The Trinity earrings feature the iconic three interlaced bands in white, yellow, and rose gold. Each ring moves independently, creating a playful and elegant effect. These earrings represent love, fidelity, and friendship in Cartier's signature style.",
    additionalInformation: "Materials: 18K White, Yellow, and Rose Gold | Length: 2.5cm | Closure: Post with Push Back",
    colors: ["#FFD700", "#FFFFFF", "#B76E79"],
    reviews: [
      { username: "Grace T.", rating: 9.5, comment: "Perfect size and weight. Very comfortable." },
      { username: "David P.", rating: 9.3, comment: "The three golds complement any outfit." },
      { username: "Lucy M.", rating: 9.4, comment: "Elegant for both day and evening wear." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // Tiffany & Co. Products
  {
    id: 96,
    title: "T1 Wide Ring",
    type: "Ring",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 359900,
    salePrice: 359900,
    rating: 9.6,
    reviewCount: 567,
    shortDescription: "18K rose gold ring with pavé diamonds",
    detailDescription: "The Tiffany T1 Wide Ring represents strength and elegance. Crafted in 18K rose gold and set with pavé diamonds, this bold design wraps around the finger with architectural precision. The innovative beveled edges create a distinctive profile that catches light beautifully.",
    additionalInformation: "Material: 18K Rose Gold | Diamonds: 0.87 carats total | Width: 6.4mm",
    colors: ["#B76E79"],
    reviews: [
      { username: "Rachel K.", rating: 9.7, comment: "Stunning design and sparkle." },
      { username: "Michael B.", rating: 9.6, comment: "Perfect anniversary gift. She loves it." },
      { username: "Sarah L.", rating: 9.5, comment: "The width makes a beautiful statement." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602752275197-9d317a1b3f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 97,
    title: "Victoria Line Bracelet",
    type: "Bracelet",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 789900,
    salePrice: 789900,
    rating: 9.7,
    reviewCount: 432,
    shortDescription: "Platinum bracelet with alternating diamond clusters",
    detailDescription: "The Tiffany Victoria Line Bracelet features alternating diamond clusters inspired by nature. Set in platinum, each flower-like cluster showcases mixed-cut diamonds arranged to maximize brilliance. The flexible design ensures comfortable wear.",
    additionalInformation: "Material: Platinum | Total Diamond Weight: 4.15 carats | Length: 6.7 inches | Closure: Box Clasp",
    colors: ["#FFFFFF"],
    reviews: [
      { username: "Patricia M.", rating: 9.8, comment: "Absolutely breathtaking piece." },
      { username: "Robert J.", rating: 9.7, comment: "The diamond arrangement is spectacular." },
      { username: "Catherine P.", rating: 9.6, comment: "Worth every penny. True luxury." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 98,
    title: "Schlumberger Bird on a Rock",
    type: "Brooch",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 1289900,
    salePrice: 1289900,
    rating: 9.8,
    reviewCount: 245,
    shortDescription: "Iconic bird brooch with morganite and diamonds",
    detailDescription: "Jean Schlumberger's legendary Bird on a Rock brooch features a whimsical bird perched atop a stunning morganite stone. The bird is crafted in 18K yellow gold and platinum, set with diamonds and a sapphire eye. The piece represents the height of artistic jewelry design.",
    additionalInformation: "Materials: 18K Yellow Gold, Platinum | Center Stone: Morganite 30 carats | Diamonds: 1.25 carats",
    colors: ["#FFD700", "#FFFFFF", "#F09CA4"],
    reviews: [
      { username: "Eleanor R.", rating: 9.9, comment: "A true piece of art. Absolutely magnificent." },
      { username: "Thomas H.", rating: 9.8, comment: "The craftsmanship is beyond compare." },
      { username: "Margaret L.", rating: 9.7, comment: "A collector's dream piece." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1602283076962-5c50ca1dce50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 99,
    title: "Tiffany HardWear Necklace",
    type: "Necklace",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 459900,
    salePrice: 459900,
    rating: 9.5,
    reviewCount: 678,
    shortDescription: "Bold 18K yellow gold graduated link necklace",
    detailDescription: "The Tiffany HardWear graduated link necklace embodies urban elegance. Crafted in 18K yellow gold, the graduated links create a bold statement. Inspired by a 1971 archive design, it captures the spirit of industrial design with modern sophistication.",
    additionalInformation: "Material: 18K Yellow Gold | Length: 18 inches | Closure: Toggle Clasp | Weight: 36.8g",
    colors: ["#FFD700"],
    reviews: [
      { username: "Lauren B.", rating: 9.6, comment: "Makes a powerful statement. Love it." },
      { username: "Andrew M.", rating: 9.4, comment: "The toggle closure is both practical and stylish." },
      { username: "Diana K.", rating: 9.5, comment: "Perfect weight and presence." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602283076962-5c50ca1dce50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 100,
    title: "Tiffany Soleste Earrings",
    type: "Earrings",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 589900,
    salePrice: 589900,
    rating: 9.6,
    reviewCount: 345,
    shortDescription: "Platinum earrings with yellow diamonds",
    detailDescription: "The Tiffany Soleste earrings feature cushion-cut yellow diamonds surrounded by brilliant white diamonds. Set in platinum, these earrings showcase exceptional stones with maximum brilliance. The double halo design creates a stunning sun-like effect.",
    additionalInformation: "Material: Platinum | Center Stones: Yellow Diamonds 2.0 carats total | White Diamonds: 0.8 carats | Closure: Post with Push Back",
    colors: ["#FFFFFF", "#FFD700"],
    reviews: [
      { username: "Michelle P.", rating: 9.7, comment: "The yellow diamonds are extraordinary." },
      { username: "Richard T.", rating: 9.6, comment: "Exceptional quality and sparkle." },
      { username: "Karen L.", rating: 9.5, comment: "Perfect for special occasions." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // Van Cleef & Arpels Products
  {
    id: 101,
    title: "Alhambra Vintage Necklace",
    type: "Necklace",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 689900,
    salePrice: 689900,
    rating: 9.8,
    reviewCount: 789,
    shortDescription: "20-motif necklace in mother-of-pearl and gold",
    detailDescription: "The iconic Vintage Alhambra necklace features 20 mother-of-pearl clover motifs set in 18K yellow gold. Each motif is bordered with delicate beading, creating the signature Van Cleef & Arpels aesthetic. The necklace embodies luck, health, fortune, and love.",
    additionalInformation: "Material: 18K Yellow Gold | Stones: Mother-of-Pearl | Length: 34.6 inches | Motifs: 20",
    colors: ["#FFD700", "#FFFFFF"],
    reviews: [
      { username: "Sophia R.", rating: 9.9, comment: "A true heirloom piece. Timeless elegance." },
      { username: "Benjamin K.", rating: 9.8, comment: "The mother-of-pearl quality is exceptional." },
      { username: "Alice M.", rating: 9.7, comment: "Perfect length and beautiful movement." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602283076962-5c50ca1dce50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 102,
    title: "Frivole Ring",
    type: "Ring",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 459900,
    salePrice: 459900,
    rating: 9.7,
    reviewCount: 456,
    shortDescription: "Between the Finger Ring with diamonds",
    detailDescription: "The Frivole Between the Finger Ring features two flowers of different sizes set with diamonds in white gold. The mirror-polished gold and angular positioning of the petals create a three-dimensional effect that captures light brilliantly.",
    additionalInformation: "Material: 18K White Gold | Diamonds: 0.63 carats | Flowers: 2 (different sizes)",
    colors: ["#FFFFFF"],
    reviews: [
      { username: "Natalie B.", rating: 9.8, comment: "The design is so unique and eye-catching." },
      { username: "Christopher P.", rating: 9.7, comment: "Excellent craftsmanship and comfort." },
      { username: "Emily T.", rating: 9.6, comment: "A modern classic. Gets noticed everywhere." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602752275197-9d317a1b3f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 103,
    title: "Perlée Perlée Bracelet",
    type: "Bracelet",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 329900,
    salePrice: 329900,
    rating: 9.6,
    reviewCount: 567,
    shortDescription: "Rose gold bracelet with signature beaded design",
    detailDescription: "The Perlée bracelet showcases Van Cleef & Arpels' signature golden beads. Crafted in 18K rose gold, each bead is carefully polished to create a luminous effect. The bracelet's flexibility ensures comfortable wear while maintaining its elegant shape.",
    additionalInformation: "Material: 18K Rose Gold | Diameter: 17mm | Weight: 30.5g | Closure: Hidden Clasp",
    colors: ["#B76E79"],
    reviews: [
      { username: "Olivia H.", rating: 9.7, comment: "The beadwork is absolutely stunning." },
      { username: "George M.", rating: 9.6, comment: "Perfect everyday luxury piece." },
      { username: "Isabella P.", rating: 9.5, comment: "Stacks beautifully with other bracelets." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 104,
    title: "Two Butterfly Earrings",
    type: "Earrings",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 549900,
    salePrice: 549900,
    rating: 9.7,
    reviewCount: 345,
    shortDescription: "Pink sapphire and diamond butterfly earrings",
    detailDescription: "The Two Butterfly earrings pair pink sapphires with diamonds in an enchanting design. Set in 18K white gold, each butterfly's wings are carefully crafted to create a sense of movement. The combination of stones creates a beautiful play of color and light.",
    additionalInformation: "Material: 18K White Gold | Stones: Pink Sapphires, Diamonds | Total Weight: 0.98 carats | Closure: Post with Alpha Back",
    colors: ["#FFFFFF", "#FFB6C1"],
    reviews: [
      { username: "Charlotte W.", rating: 9.8, comment: "Whimsical yet sophisticated design." },
      { username: "Philip R.", rating: 9.7, comment: "The pink sapphires are gorgeous." },
      { username: "Victoria M.", rating: 9.6, comment: "Light and comfortable to wear." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 105,
    title: "Cadenas Watch",
    type: "Watch",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 889900,
    salePrice: 889900,
    rating: 9.5,
    reviewCount: 234,
    shortDescription: "Diamond-set yellow gold padlock-shaped watch",
    detailDescription: "The Cadenas watch combines jewelry and timepiece in Van Cleef & Arpels' signature style. The unique padlock-shaped case is set with diamonds and features a discrete time display. Created in 1935, this design remains a symbol of elegance and innovation.",
    additionalInformation: "Material: 18K Yellow Gold | Diamonds: 0.45 carats | Movement: Swiss Quartz | Water Resistance: 30m",
    colors: ["#FFD700"],
    reviews: [
      { username: "Elizabeth P.", rating: 9.6, comment: "A piece of jewelry that tells time." },
      { username: "James T.", rating: 9.5, comment: "Unique design that starts conversations." },
      { username: "Marie L.", rating: 9.4, comment: "The perfect blend of form and function." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 106,
    title: "Neverfull MM Canvas",
    type: "Tote",
    category: "Hand Bags",
    brand: "Louis Vuitton",
    originalPrice: 189000,
    salePrice: 189000,
    rating: 9.4,
    reviewCount: 856,
    shortDescription: "Iconic canvas tote with versatile carrying options",
    detailDescription: "The Neverfull MM is a timeless Louis Vuitton design featuring the iconic Monogram canvas. This versatile tote includes a removable pouch and can be cinched at the sides for a more compact silhouette. The interior is lined with striped fabric and includes a zip pocket for valuables.",
    additionalInformation: "Dimensions: 31.5 x 28.5 x 17 cm | Material: Monogram canvas, natural cowhide leather trim",
    colors: ["#C19A6B"],
    reviews: [
      { username: "Sophie R.", rating: 10, comment: "A true classic that never goes out of style. Perfect for everyday use." },
      { username: "Aisha K.", rating: 9, comment: "Incredibly spacious and durable. Worth the investment!" },
      { username: "Maria L.", rating: 9, comment: "The quality is exceptional, exactly what you'd expect from LV." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 107,
    title: "Alma BB Epi Leather",
    type: "Satchel",
    category: "Hand Bags",
    brand: "Louis Vuitton",
    originalPrice: 215000,
    salePrice: 215000,
    rating: 9.2,
    reviewCount: 634,
    shortDescription: "Elegant structured bag in textured Epi leather",
    detailDescription: "The Alma BB in Epi leather showcases Louis Vuitton's commitment to exceptional craftsmanship. This structured bag features a double zip closure, protective bottom studs, and a detachable strap for crossbody wear. The interior is lined with luxurious microfiber.",
    additionalInformation: "Dimensions: 23.5 x 17.5 x 11 cm | Material: Epi leather | Includes dust bag and authenticity cards",
    colors: ["#000000", "#DC143C", "#000080"],
    reviews: [
      { username: "Emma T.", rating: 9, comment: "The perfect size for everyday essentials. The Epi leather is stunning!" },
      { username: "Linda M.", rating: 10, comment: "Beautiful craftsmanship and very practical size." },
      { username: "Sarah P.", rating: 8, comment: "Elegant and durable. Gets lots of compliments." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 108,
    title: "Pochette Métis",
    type: "Crossbody",
    category: "Hand Bags",
    brand: "Louis Vuitton",
    originalPrice: 245000,
    salePrice: 245000,
    rating: 9.5,
    reviewCount: 742,
    shortDescription: "Sophisticated crossbody with elegant S-lock closure",
    detailDescription: "The Pochette Métis embodies timeless elegance with its structured silhouette and iconic Monogram canvas. Features multiple compartments, including a zipped back pocket and front compartment with the signature S-lock closure. The adjustable strap allows for comfortable shoulder or crossbody wear.",
    additionalInformation: "Dimensions: 25 x 19 x 7 cm | Material: Monogram canvas, natural cowhide leather trim | Adjustable strap",
    colors: ["#C19A6B"],
    reviews: [
      { username: "Jessica W.", rating: 10, comment: "Perfect size and organization. A true investment piece!" },
      { username: "Nina R.", rating: 9, comment: "The quality is exceptional. Love the multiple compartments." },
      { username: "Claire B.", rating: 9, comment: "Versatile and beautiful. Worth every penny." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 109,
    title: "Capucines BB",
    type: "Top Handle",
    category: "Hand Bags",
    brand: "Louis Vuitton",
    originalPrice: 375000,
    salePrice: 375000,
    rating: 9.6,
    reviewCount: 423,
    shortDescription: "Luxurious full-leather bag with distinctive LV closure",
    detailDescription: "The Capucines BB represents the pinnacle of Louis Vuitton's leather craftsmanship. Made from full-grain Taurillon leather, it features the distinctive LV initials in metal hardware. The bag includes a removable leather strap and a sophisticated flap closure that can be worn two ways.",
    additionalInformation: "Dimensions: 27.5 x 18 x 9 cm | Material: Taurillon leather | Includes removable strap and protective feet",
    colors: ["#000000", "#B22222", "#483D8B"],
    reviews: [
      { username: "Victoria H.", rating: 10, comment: "The epitome of luxury. Impeccable craftsmanship." },
      { username: "Diana P.", rating: 9, comment: "A true work of art. The leather quality is outstanding." },
      { username: "Rachel M.", rating: 10, comment: "Elegant and timeless. My most precious bag." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 110,
    title: "Petite Malle",
    type: "Evening Bag",
    category: "Hand Bags",
    brand: "Louis Vuitton",
    originalPrice: 425000,
    salePrice: 425000,
    rating: 9.3,
    reviewCount: 289,
    shortDescription: "Miniature trunk-inspired evening clutch",
    detailDescription: "The Petite Malle is inspired by Louis Vuitton's historic trunks. This evening bag features the iconic S-lock closure, metallic hardware, and a removable chain strap. The interior, though compact, is thoughtfully designed to hold evening essentials.",
    additionalInformation: "Dimensions: 20 x 12.5 x 5 cm | Material: Monogram canvas or Epi leather | Includes chain strap",
    colors: ["#C19A6B", "#000000", "#8B0000"],
    reviews: [
      { username: "Isabella F.", rating: 9, comment: "A true collector's piece. Absolutely stunning craftsmanship." },
      { username: "Olivia S.", rating: 10, comment: "Perfect for special occasions. Always gets noticed." },
      { username: "Charlotte D.", rating: 9, comment: "Small but mighty. The details are incredible." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313931-7e152a81b89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },

  // Gucci Products
  {
    id: 111,
    title: "GG Marmont Matelassé",
    type: "Shoulder Bag",
    category: "Hand Bags",
    brand: "Gucci",
    originalPrice: 235000,
    salePrice: 235000,
    rating: 9.3,
    reviewCount: 678,
    shortDescription: "Quilted leather shoulder bag with iconic double G",
    detailDescription: "The GG Marmont features matelassé chevron leather with a vintage effect. The flap closure has the iconic Double G hardware, and the sliding chain strap can be worn multiple ways. The interior is lined with microfiber with a suede-like finish.",
    additionalInformation: "Dimensions: 24 x 13 x 7 cm | Material: Matelassé chevron leather | Antique gold-toned hardware",
    colors: ["#000000", "#8B4513", "#FFD700"],
    reviews: [
      { username: "Lauren B.", rating: 9, comment: "The leather is butter-soft and the design is timeless." },
      { username: "Anna P.", rating: 10, comment: "Perfect size and the chain strap is very versatile." },
      { username: "Michelle K.", rating: 9, comment: "Beautiful craftsmanship and attention to detail." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312532-4b99d5cd41e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 112,
    title: "Dionysus GG Supreme",
    type: "Shoulder Bag",
    category: "Hand Bags",
    brand: "Gucci",
    originalPrice: 285000,
    salePrice: 285000,
    rating: 9.4,
    reviewCount: 542,
    shortDescription: "Structured bag with tiger head spur closure",
    detailDescription: "The Dionysus GG Supreme features the iconic GG pattern with suede details and the distinctive tiger head closure. The sliding chain allows for multiple carrying options, and the interior is divided into compartments for organization.",
    additionalInformation: "Dimensions: 28 x 17 x 9 cm | Material: GG Supreme canvas with suede details | Tiger head closure",
    colors: ["#8B4513", "#000000"],
    reviews: [
      { username: "Katherine S.", rating: 9, comment: "The tiger head detail is stunning. A true statement piece." },
      { username: "Elizabeth R.", rating: 10, comment: "Perfect mix of classic and modern design." },
      { username: "Jennifer H.", rating: 9, comment: "Excellent quality and very practical for daily use." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312787-4fbf6c62bc12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 113,
    title: "Bamboo Handle Bag",
    type: "Top Handle",
    category: "Hand Bags",
    brand: "Gucci",
    originalPrice: 315000,
    salePrice: 315000,
    rating: 9.2,
    reviewCount: 423,
    shortDescription: "Classic design with iconic bamboo handle",
    detailDescription: "The Bamboo Handle bag is a Gucci classic, featuring the iconic bamboo handle first introduced in 1947. Made from fine leather with bamboo and hardware details, this bag includes a removable shoulder strap and protective metal feet.",
    additionalInformation: "Dimensions: 27 x 18 x 12 cm | Material: Leather with bamboo details | Includes dust bag",
    colors: ["#000000", "#8B4513", "#FFFFFF"],
    reviews: [{ username: "Patricia L.", rating: 9, comment: "The bamboo handle is a work of art. Timeless elegance." },
      { username: "Margaret W.", rating: 9, comment: "Beautiful craftsmanship and very practical size." },
      { username: "Helen T.", rating: 10, comment: "A true heritage piece. Love the vintage appeal." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312888-9e2e0d0c3562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 114,
    title: "Ophidia GG Mini",
    type: "Crossbody",
    category: "Hand Bags",
    brand: "Gucci",
    originalPrice: 165000,
    salePrice: 165000,
    rating: 9.1,
    reviewCount: 567,
    shortDescription: "Compact crossbody with vintage-inspired design",
    detailDescription: "The Ophidia GG Mini features the iconic GG Supreme canvas with Web stripe detail. This compact bag includes an adjustable strap, magnetic closure, and interior zip pocket. The design combines Gucci's heritage elements with modern functionality.",
    additionalInformation: "Dimensions: 19 x 11 x 6 cm | Material: GG Supreme canvas with leather trim | Web stripe detail",
    colors: ["#8B4513"],
    reviews: [
      { username: "Susan R.", rating: 9, comment: "Perfect size for essentials. Love the vintage look." },
      { username: "Mary B.", rating: 9, comment: "Great quality and very versatile." },
      { username: "Alice K.", rating: 9, comment: "The Web stripe detail is classic Gucci. Beautiful bag." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312961-48c95ff1ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 115,
    title: "Jackie 1961",
    type: "Hobo",
    category: "Hand Bags",
    brand: "Gucci",
    originalPrice: 255000,
    salePrice: 255000,
    rating: 9.5,
    reviewCount: 489,
    shortDescription: "Iconic hobo bag with piston closure",
    detailDescription: "The Jackie 1961 is a revival of a Gucci icon. This hobo-style bag features the distinctive piston closure and an adjustable shoulder strap. Made from premium leather with vintage gold-toned hardware, it embodies timeless elegance.",
    additionalInformation: "Dimensions: 28 x 18 x 7 cm | Material: Leather | Piston closure",
    colors: ["#000000", "#8B4513", "#FFFFFF"],
    reviews: [
      { username: "Barbara M.", rating: 10, comment: "A true classic reborn. The leather is exceptional." },
      { username: "Carol D.", rating: 9, comment: "Elegant and practical. Perfect everyday bag." },
      { username: "Nancy W.", rating: 9, comment: "Love the vintage-inspired design. Very chic." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313025-2f2f3e4d0b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  // Hermès Products
  {
    id: 116,
    title: "Birkin 30",
    type: "Top Handle",
    category: "Hand Bags",
    brand: "Hermès",
    originalPrice: 1250000,
    salePrice: 1250000,
    rating: 9.8,
    reviewCount: 245,
    shortDescription: "Legendary handcrafted leather bag",
    detailDescription: "The Birkin 30 is the quintessential Hermès bag, handcrafted by skilled artisans. Features include the signature turn-lock closure, padlock, and protective feet. Each bag is individually crafted from the finest leather, making it a true collector's item.",
    additionalInformation: "Dimensions: 30 x 22 x 16 cm | Material: Togo leather | Palladium hardware",
    colors: ["#000000", "#8B4513", "#483D8B"],
    reviews: [
      { username: "Elizabeth C.", rating: 10, comment: "The ultimate luxury bag. Impeccable craftsmanship." },
      { username: "Catherine P.", rating: 10, comment: "A true work of art. Worth every penny." },
      { username: "Alexandra M.", rating: 9, comment: "The quality is beyond compare. A lifetime investment." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313094-3ac2367cd154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 117,
    title: "Kelly 28",
    type: "Top Handle",
    category: "Hand Bags",
    brand: "Hermès",
    originalPrice: 950000,
    salePrice: 950000,
    rating: 9.7,
    reviewCount: 198,
    shortDescription: "Iconic trapezoid-shaped leather bag",
    detailDescription: "The Kelly 28 is a symbol of Hermès excellence. This structured bag features the distinctive single top handle, shoulder strap, and front strap closure. Each bag is crafted from a single piece of leather, showcasing exceptional artisanship.",
    additionalInformation: "Dimensions: 28 x 22 x 10 cm | Material: Epsom leather | Gold hardware",
    colors: ["#000000", "#8B4513", "#B22222"],
    reviews: [
      { username: "Victoria R.", rating: 10, comment: "The epitome of elegance. Perfectly crafted." },
      { username: "Sophia L.", rating: 9, comment: "A dream bag. The attention to detail is remarkable." },
      { username: "Isabella B.", rating: 10, comment: "Timeless design and exceptional quality." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313159-4c2d904933d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 118,
    title: "Constance 24",
    type: "Shoulder Bag",
    category: "Hand Bags",
    brand: "Hermès",
    originalPrice: 785000,
    salePrice: 785000,
    rating: 9.6,
    reviewCount: 167,
    shortDescription: "Elegant shoulder bag with H clasp",
    detailDescription: "The Constance 24 features the iconic H clasp closure and adjustable strap. This elegant shoulder bag is crafted from premium leather and lined with goatskin. The design combines sophistication with practical functionality.",
    additionalInformation: "Dimensions: 24 x 15 x 6 cm | Material: Box leather | Palladium hardware",
    colors: ["#000000", "#8B4513", "#000080"],
    reviews: [
      { username: "Charlotte H.", rating: 9, comment: "The H clasp is iconic. Beautiful everyday bag." },
      { username: "Olivia P.", rating: 10, comment: "Perfect size and immaculate craftsmanship." },
      { username: "Emma S.", rating: 9, comment: "Elegant and versatile. A true investment piece." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313227-7a31cf2a52f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 119,
    title: "Evelyne III 29",
    type: "Crossbody",
    category: "Hand Bags",
    brand: "Hermès",
    originalPrice: 425000,
    salePrice: 425000,
    rating: 9.4,
    reviewCount: 289,
    shortDescription: "Casual-chic perforated H crossbody bag",
    detailDescription: "The Evelyne III 29 features the distinctive perforated H logo and adjustable canvas strap. Originally designed for grooming equipment, this bag has become a beloved casual-chic icon. The external pocket and secure tab closure make it perfect for everyday use.",
    additionalInformation: "Dimensions: 29 x 30 x 8 cm | Material: Clemence leather | Adjustable canvas strap",
    colors: ["#8B4513", "#000000", "#556B2F"],
    reviews: [
      { username: "Grace T.", rating: 9, comment: "Perfect casual luxury bag. So practical and beautiful." },
      { username: "Audrey M.", rating: 9, comment: "The leather quality is exceptional. Love the perforated H." },
      { username: "Lucy W.", rating: 10, comment: "My go-to everyday bag. Worth every penny." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313298-ba8bc5a6c3e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 120,
    title: "Picotin Lock 18",
    type: "Top Handle",
    category: "Hand Bags",
    brand: "Hermès",
    originalPrice: 325000,
    salePrice: 325000,
    rating: 9.3,
    reviewCount: 234,
    shortDescription: "Charming bucket bag with padlock detail",
    detailDescription: "The Picotin Lock 18 is inspired by horse feed bags, featuring a simple bucket shape with elegant padlock closure. This charming bag is perfect for casual outings while maintaining Hermès' signature sophistication. The interior is spacious and unlined, showcasing the beautiful natural leather.",
    additionalInformation: "Dimensions: 18 x 13 x 13 cm | Material: Clemence leather | Palladium hardware",
    colors: ["#8B4513", "#000000", "#F5F5DC"],
    reviews: [
      { username: "Beatrice N.", rating: 9, comment: "Adorable design with Hermès quality. Perfect size." },
      { username: "Rose M.", rating: 9, comment: "Simple yet elegant. The leather is divine." },
      { username: "Julia P.", rating: 10, comment: "My favorite casual luxury bag. So unique." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313416-3e7c13bf489c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ]
  }
];