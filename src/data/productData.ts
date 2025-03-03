import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Leather Laptop Bag",
    type: "Accessory",
    category: "Bags",
    brand: "Hidesign",
    originalPrice: 4999,
    salePrice: 3999,
    rating: 8.7,
    reviewCount: 342,
    shortDescription: "Elegant genuine leather laptop bag with multiple compartments",
    detailDescription: "Crafted from premium full-grain leather, this laptop bag features a padded compartment that fits laptops up to 15.6 inches. The bag includes multiple pockets for accessories, documents, and personal items. The adjustable shoulder strap and sturdy handles provide comfortable carrying options. The bag's interior is lined with durable fabric to protect your devices from scratches.",
    additionalInformation: "Dimensions: 40cm x 30cm x 10cm | Weight: 1.2kg | Warranty: 1 year manufacturer warranty",
    colors: ["#3E2723", "#A52A2A", "#000000"],
    reviews: [
      { username: "Rahul M.", rating: 9, comment: "Excellent quality leather and craftsmanship. Worth every rupee." },
      { username: "Priya S.", rating: 8, comment: "Beautiful bag with plenty of space. The leather smell is divine!" },
      { username: "Amit K.", rating: 9, comment: "Using it for 6 months now, and it's aging beautifully." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 2,
    title: "Wireless Noise Cancelling Headphones",
    type: "Electronics",
    category: "Audio",
    brand: "Sony",
    originalPrice: 24990,
    salePrice: 19990,
    rating: 9.2,
    reviewCount: 1256,
    shortDescription: "Premium wireless headphones with industry-leading noise cancellation",
    detailDescription: "Experience the next level of silence with industry-leading noise cancellation technology. These headphones feature 40mm liquid crystal polymer drivers for exceptional audio quality. With up to 30 hours of battery life and quick charging capability, you can enjoy uninterrupted music all day. The touch controls allow easy management of your music, calls, and voice assistant. The headphones automatically adjust the ambient sound based on your activity for an optimal listening experience.",
    additionalInformation: "Bluetooth 5.0 | Battery Life: Up to 30 hours | Quick Charge: 10 min charge for 5 hours playback | Weight: 254g | Warranty: 2 years",
    colors: ["#000000", "#7B7B7B", "#C0C0C0"],
    reviews: [
      { username: "Vikram T.", rating: 10, comment: "The noise cancellation is unbelievable. Perfect for flights and office." },
      { username: "Neha G.", rating: 9, comment: "Sound quality is exceptional. Battery life is impressive too." },
      { username: "Karan S.", rating: 8, comment: "Comfortable for long listening sessions. Worth the investment." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 3,
    title: "Men's Slim Fit Formal Shirt",
    type: "Clothing",
    category: "Men's Fashion",
    brand: "Allen Solly",
    originalPrice: 2499,
    salePrice: 1799,
    rating: 8.5,
    reviewCount: 789,
    shortDescription: "Premium cotton formal shirt with wrinkle-resistant technology",
    detailDescription: "This slim-fit formal shirt is crafted from 100% premium cotton with wrinkle-resistant technology, making it perfect for long workdays. The shirt features a classic collar, button cuffs, and a chest pocket. The breathable fabric ensures comfort throughout the day. The tailored fit provides a modern silhouette without being too tight. This versatile shirt pairs well with formal trousers for office wear or with chinos for a smart-casual look.",
    additionalInformation: "Material: 100% Cotton | Care: Machine wash cold, Tumble dry low | Sizes available: 38-44 | Fit: Slim fit",
    colors: ["#FFFFFF", "#87CEEB", "#FFB6C1", "#000000"],
    reviews: [
      { username: "Rajesh K.", rating: 9, comment: "Perfect fit and excellent fabric quality. Minimal ironing needed." },
      { username: "Suresh P.", rating: 8, comment: "Comfortable for all-day wear. The wrinkle-resistant feature actually works." },
      { username: "Mahesh T.", rating: 8, comment: "Great value for money. I've bought three more in different colors." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 4,
    title: "Smart LED TV 55-inch 4K",
    type: "Electronics",
    category: "Television",
    brand: "Samsung",
    originalPrice: 59990,
    salePrice: 49990,
    rating: 9.0,
    reviewCount: 2345,
    shortDescription: "55-inch 4K Ultra HD Smart LED TV with HDR and voice control",
    detailDescription: "Experience stunning clarity with this 55-inch 4K Ultra HD Smart LED TV. The Quantum Processor 4K upscales content to 4K resolution for enhanced detail. HDR technology brings out the detail and contrast in dark scenes. The TV features multiple voice assistants for hands-free control. With built-in apps and screen mirroring, you can enjoy a variety of content from different sources. The slim design with minimal bezels provides an immersive viewing experience.",
    additionalInformation: "Resolution: 3840 x 2160 | Refresh Rate: 120Hz | Connectivity: 3 HDMI ports, 2 USB ports, Wi-Fi, Bluetooth | Sound: 20W output with Dolby Digital Plus | Warranty: 1 year comprehensive + 1 year on panel",
    colors: ["#000000"],
    reviews: [
      { username: "Deepak S.", rating: 9, comment: "Picture quality is exceptional. Smart features work smoothly." },
      { username: "Anita R.", rating: 10, comment: "The 4K resolution is mind-blowing. Worth every penny." },
      { username: "Vivek M.", rating: 8, comment: "Great TV, but the sound could be better. I added a soundbar." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 5,
    title: "Stainless Steel Water Bottle",
    type: "Home",
    category: "Kitchen",
    brand: "Milton",
    originalPrice: 1299,
    salePrice: 999,
    rating: 8.8,
    reviewCount: 1876,
    shortDescription: "Double-walled vacuum insulated stainless steel water bottle",
    detailDescription: "This premium stainless steel water bottle features double-walled vacuum insulation that keeps beverages cold for 24 hours or hot for 12 hours. The bottle is made from high-quality 18/8 food-grade stainless steel that's BPA-free and doesn't transfer flavors. The leak-proof cap ensures no spills in your bag. The wide mouth makes it easy to fill with ice cubes and clean. The durable powder coating provides a slip-free grip and prevents condensation on the exterior.",
    additionalInformation: "Capacity: 750ml | Material: 18/8 Stainless Steel | Dimensions: 27cm x 7.5cm | Weight: 330g | Warranty: 5 years",
    colors: ["#000000", "#1E90FF", "#FF4500", "#228B22"],
    reviews: [
      { username: "Arjun N.", rating: 9, comment: "Keeps water cold all day even in hot summer. Excellent quality." },
      { username: "Divya M.", rating: 8, comment: "No leaks, easy to clean, and looks stylish. Great purchase." },
      { username: "Ravi S.", rating: 9, comment: "Using it for 6 months daily. Still looks and works like new." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610847499832-918a1c3c6811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 6,
    title: "Smartphone with 108MP Camera",
    type: "Electronics",
    category: "Mobile Phones",
    brand: "Xiaomi",
    originalPrice: 29999,
    salePrice: 24999,
    rating: 8.9,
    reviewCount: 3421,
    shortDescription: "Feature-packed smartphone with 108MP camera and 5G connectivity",
    detailDescription: "This powerful smartphone features a 108MP main camera with 8K video recording capability. The 6.67-inch AMOLED display offers a 120Hz refresh rate for smooth scrolling and gaming. Powered by the latest Snapdragon processor with 8GB RAM, it handles multitasking with ease. The 5000mAh battery supports 67W fast charging, giving you a full day's power in just 30 minutes. With 5G connectivity, you're future-proofed for the next generation of mobile networks. The phone runs on the latest Android version with minimal bloatware.",
    additionalInformation: "Display: 6.67-inch AMOLED, 120Hz | Processor: Snapdragon 8 Gen 1 | RAM: 8GB LPDDR5 | Storage: 128GB UFS 3.1 | Battery: 5000mAh | Charging: 67W wired | OS: Android 12 | Warranty: 1 year",
    colors: ["#000000", "#0000FF", "#FFFFFF"],
    reviews: [
      { username: "Rohit K.", rating: 9, comment: "Camera quality is exceptional. Battery life is impressive too." },
      { username: "Sneha T.", rating: 9, comment: "Fast performance and the display is gorgeous. Great value for money." },
      { username: "Prakash J.", rating: 8, comment: "5G works well in supported areas. Overall a solid phone." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 7,
    title: "Ergonomic Office Chair",
    type: "Furniture",
    category: "Office",
    brand: "Featherlite",
    originalPrice: 15999,
    salePrice: 12999,
    rating: 8.6,
    reviewCount: 742,
    shortDescription: "High-back ergonomic office chair with adjustable lumbar support",
    detailDescription: "This ergonomic office chair is designed for all-day comfort with adjustable lumbar support that conforms to your spine. The breathable mesh backrest provides ventilation to keep you cool during long work sessions. The chair features multiple adjustment points including seat height, armrest height and angle, tilt tension, and recline lock. The high-density foam cushion distributes weight evenly to reduce pressure points. The sturdy nylon base with smooth-rolling casters allows for easy movement on various floor surfaces.",
    additionalInformation: "Weight Capacity: 120kg | Seat Height: 45-55cm adjustable | Material: Mesh back, fabric seat | Assembly: Required, tools included | Warranty: 3 years",
    colors: ["#000000", "#808080", "#0000FF"],
    reviews: [
      { username: "Sanjay R.", rating: 9, comment: "Best investment for work from home. My back pain has significantly reduced." },
      { username: "Anjali P.", rating: 8, comment: "Very comfortable for long hours. Assembly was straightforward." },
      { username: "Mohan K.", rating: 9, comment: "The adjustability options are excellent. Quality construction." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 8,
    title: "Handcrafted Leather Wallet",
    type: "Accessory",
    category: "Men's Fashion",
    brand: "Woodland",
    originalPrice: 1999,
    salePrice: 1499,
    rating: 8.7,
    reviewCount: 956,
    shortDescription: "Genuine leather bifold wallet with RFID protection",
    detailDescription: "This handcrafted wallet is made from full-grain genuine leather that develops a beautiful patina over time. The wallet features RFID blocking technology to protect your credit cards from unauthorized scanning. With 8 card slots, 2 currency compartments, and an ID window, it offers ample storage while maintaining a slim profile. The precision stitching ensures durability for years of use. Each wallet is unique with natural variations in the leather grain and color.",
    additionalInformation: "Material: Full-grain leather | Dimensions: 11.5cm x 9cm x 1.5cm | RFID Protection: Yes | Warranty: 1 year against manufacturing defects",
    colors: ["#8B4513", "#000000", "#A52A2A"],
    reviews: [
      { username: "Nikhil S.", rating: 9, comment: "Excellent quality leather. Slim design fits perfectly in pocket." },
      { username: "Arun T.", rating: 8, comment: "The RFID protection works well. Leather feels premium." },
      { username: "Dinesh R.", rating: 9, comment: "Using it for a year now and it's aging beautifully." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559694097-9180d94bb882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 9,
    title: "Fitness Smartwatch",
    type: "Electronics",
    category: "Wearables",
    brand: "Fitbit",
    originalPrice: 14999,
    salePrice: 11999,
    rating: 8.9,
    reviewCount: 2134,
    shortDescription: "Advanced fitness tracker with heart rate monitoring and GPS",
    detailDescription: "This advanced fitness smartwatch tracks your heart rate 24/7 and monitors sleep stages to provide insights into your health. The built-in GPS tracks your outdoor activities with precise route mapping. With over 20 goal-based exercise modes, you can get real-time stats during your workouts. The watch is water-resistant up to 50 meters, making it suitable for swimming. The always-on display is protected by Corning Gorilla Glass. The battery lasts up to 7 days on a single charge, depending on usage. The watch also supports notifications, music control, and contactless payments.",
    additionalInformation: "Display: 1.58-inch AMOLED | Water Resistance: 5 ATM | Battery Life: Up to 7 days | Sensors: Heart rate, SpO2, accelerometer, gyroscope, altimeter | Connectivity: Bluetooth 5.0, Wi-Fi | Compatibility: iOS 12.2+, Android 7.0+ | Warranty: 1 year",
    colors: ["#000000", "#1E90FF", "#FF69B4"],
    reviews: [
      { username: "Pradeep M.", rating: 9, comment: "Accurate fitness tracking and the battery life is impressive." },
      { username: "Kavita S.", rating: 9, comment: "Sleep tracking has helped me improve my sleep habits. Worth the investment." },
      { username: "Rajiv D.", rating: 8, comment: "GPS works well for running. The app is intuitive and provides good insights." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 10,
    title: "Handmade Ceramic Dinner Set",
    type: "Home",
    category: "Dining",
    brand: "Ellementry",
    originalPrice: 8999,
    salePrice: 6999,
    rating: 9.1,
    reviewCount: 487,
    shortDescription: "Artisanal 24-piece ceramic dinner set with hand-painted designs",
    detailDescription: "This exquisite dinner set is handcrafted by skilled artisans using traditional techniques. Each piece is made from high-quality ceramic and hand-painted with food-safe glazes. The set includes 6 dinner plates, 6 side plates, 6 bowls, and 6 mugs, perfect for a family of six. The unique hand-painted designs ensure that no two pieces are exactly alike. The ceramic material retains heat well, keeping your food warm longer. The set is microwave, dishwasher, and oven safe, making it both beautiful and practical for everyday use.",
    additionalInformation: "Material: Ceramic | Pieces: 24 (6 dinner plates, 6 side plates, 6 bowls, 6 mugs) | Dishwasher Safe: Yes | Microwave Safe: Yes | Oven Safe: Up to 180°C | Care: Avoid sudden temperature changes",
    colors: ["#F5F5DC", "#87CEEB", "#E6E6FA"],
    reviews: [
      { username: "Rekha J.", rating: 10, comment: "Absolutely beautiful craftsmanship. Each piece is a work of art." },
      { username: "Sunil P.", rating: 9, comment: "The quality is excellent. We use it for special occasions and everyday meals." },
      { username: "Meera K.", rating: 8, comment: "Beautiful set that has held up well to daily use. The colors are vibrant." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 11,
    title: "Women's Running Shoes",
    type: "Footwear",
    category: "Sports",
    brand: "Nike",
    originalPrice: 7999,
    salePrice: 5999,
    rating: 8.8,
    reviewCount: 1543,
    shortDescription: "Lightweight running shoes with responsive cushioning",
    detailDescription: "These premium running shoes feature responsive cushioning that returns energy with every step. The engineered mesh upper provides targeted breathability and support where you need it most. The lightweight foam midsole delivers a smooth, stable ride. The rubber outsole offers durable traction on various surfaces. The shoes have a heel pull tab for easy on and off. The padded collar and tongue provide additional comfort during long runs. The reflective elements enhance visibility in low-light conditions.",
    additionalInformation: "Weight: 255g (women's size 7) | Drop: 10mm | Arch Support: Neutral | Terrain: Road | Pronation: Neutral | Warranty: 2 years",
    colors: ["#FF69B4", "#000000", "#4169E1", "#FFFFFF"],
    reviews: [
      { username: "Pooja S.", rating: 9, comment: "Extremely comfortable for long runs. Great cushioning and support." },
      { username: "Nisha R.", rating: 9, comment: "Perfect fit and very lightweight. My go-to running shoes now." },
      { username: "Tanya M.", rating: 8, comment: "Good grip on wet surfaces. Breathable even during summer runs." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 12,
    title: "Professional DSLR Camera",
    type: "Electronics",
    category: "Photography",
    brand: "Canon",
    originalPrice: 89990,
    salePrice: 79990,
    rating: 9.3,
    reviewCount: 876,
    shortDescription: "Full-frame DSLR camera with 4K video recording",
    detailDescription: "This professional-grade DSLR camera features a 30.4 megapixel full-frame CMOS sensor that delivers stunning image quality with remarkable detail. The camera offers 4K video recording at 30fps and Full HD at 60fps. The 61-point autofocus system with 41 cross-points ensures precise focusing even in challenging conditions. The camera has a native ISO range of 100-32000, expandable to 50-102400, for excellent low-light performance. The weather-sealed body protects against dust and moisture. The 3.2-inch touchscreen LCD allows for intuitive operation. The camera is compatible with a wide range of EF lenses.",
    additionalInformation: "Sensor: 30.4MP Full-Frame CMOS | Processor: DIGIC 6+ | Autofocus: 61-point AF system | ISO Range: 100-32000 (expandable to 50-102400) | Continuous Shooting: 7fps | Storage: Dual card slots (CF and SD) | Battery Life: Approx. 900 shots | Warranty: 2 years",
    colors: ["#000000"],
    reviews: [
      { username: "Aditya P.", rating: 10, comment: "Exceptional image quality and autofocus performance. Worth every rupee for professionals." },
      { username: "Neelam K.", rating: 9, comment: "The low light performance is outstanding. Build quality is top-notch." },
      { username: "Sameer R.", rating: 9, comment: "4K video quality is excellent. The weather sealing has been reliable in various conditions." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 13,
    title: "Organic Ayurvedic Skincare Set",
    type: "Beauty",
    category: "Skincare",
    brand: "Forest Essentials",
    originalPrice: 4999,
    salePrice: 3999,
    rating: 8.9,
    reviewCount: 723,
    shortDescription: "Luxury Ayurvedic skincare set with natural ingredients",
    detailDescription: "This premium Ayurvedic skincare set is formulated with natural ingredients sourced from sustainable farms across India. The set includes a facial cleanser, toner, moisturizer, face mask, and facial oil, all designed to work together for radiant skin. The products are free from parabens, sulfates, and synthetic fragrances. The formulations are based on traditional Ayurvedic recipes enhanced with modern skincare science. All ingredients are ethically sourced and the packaging is eco-friendly. The products are suitable for all skin types and are dermatologically tested.",
    additionalInformation: "Contents: Facial Cleanser (100ml), Facial Toner (100ml), Facial Moisturizer (50ml), Face Mask (50g), Facial Oil (30ml) | Shelf Life: 12 months | Skin Type: All skin types | Free from: Parabens, sulfates, synthetic fragrances | Cruelty-free: Yes",
    colors: ["#F5F5DC"],
    reviews: [
      { username: "Ananya S.", rating: 9, comment: "My skin feels rejuvenated and glowing. The natural fragrance is divine." },
      { username: "Ritu P.", rating: 9, comment: "The facial oil is exceptional for dry skin. All products work well together." },
      { username: "Jyoti M.", rating: 8, comment: "Gentle yet effective. Has helped with my sensitive skin issues." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 14,
    title: "Smart Home Security System",
    type: "Electronics",
    category: "Home Security",
    brand: "Godrej",
    originalPrice: 19999,
    salePrice: 16999,
    rating: 8.7,
    reviewCount: 542,
    shortDescription: "Comprehensive smart home security system with mobile app control",
    detailDescription: "This comprehensive smart home security system includes a central hub, 2 indoor cameras, 1 outdoor camera, 4 door/window sensors, and a motion detector. The system connects to your home Wi-Fi and can be controlled via the mobile app from anywhere. The cameras feature 1080p HD video, night vision, and two-way audio. The system supports AI-powered person detection to reduce false alerts. The door/window sensors notify you immediately when entry points are breached. The system works with voice assistants for hands-free control. The mobile app allows you to arm/disarm the system, view live camera feeds, and receive real-time alerts.",
    additionalInformation: "Camera Resolution: 1080p HD | Night Vision: Up to 30 feet | Storage: Cloud (7-day free, subscription for longer) and local microSD | Power: Wired with battery backup | Connectivity: Wi-Fi 2.4GHz | Compatibility: Android 5.0+, iOS 10.0+ | Warranty: 2 years",
    colors: ["#FFFFFF"],
    reviews: [
      { username: "Vinod K.", rating: 9, comment: "Easy to install and the app is intuitive. Provides peace of mind when away from home." },
      { username: "Sheetal R.", rating: 8, comment: "The motion detection works well and the camera quality is excellent." },
      { username: "Ramesh S.", rating: 9, comment: "Integration with voice assistants is seamless. The notifications are prompt." }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563459802257-2a97df940f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595750383596-b625f5c1a5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ]
  },{
    id: 15,
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
    id: 16,
    title: "Floral Print Maxi Dress",
    type: "Clothing",
    category: "Women's Clothing",
    brand: "Biba",
    originalPrice: 3999,
    salePrice: 2799,
    rating: 9.2,
    reviewCount: 278,
    shortDescription: "Elegant floral print maxi dress with V-neck and flared design",
    detailDescription: "This stunning floral print maxi dress from Biba features a flattering V-neckline and a flared design that creates an elegant silhouette. Made from premium rayon fabric, it offers exceptional comfort and breathability. The vibrant floral pattern adds a touch of femininity, making it perfect for summer outings, casual gatherings, or festive occasions. The dress includes convenient side pockets and a concealed back zipper for easy wear.",
    additionalInformation: "Material: 100% Rayon | Care: Hand wash cold, line dry | Length: Maxi | Neckline: V-neck | Sleeves: Three-quarter | Closure: Back zipper",
    reviews: [
      {
          username: "Priya Sharma",
        rating: 10,
        comment: "Absolutely love this dress! The fit is perfect and the floral print is gorgeous. Received many compliments when I wore it to a family function.",
      },
      {
          username: "Neha Gupta",
        rating: 9,
        comment: "Beautiful dress with great quality fabric. The pockets are a nice bonus!",
        },
      {
          username: "Anjali Patel",
        rating: 8,
        comment: "Lovely dress but slightly longer than expected. Had to get it altered, but otherwise perfect.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1619086303291-0e4c0f752f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#FF69B4", "#87CEFA", "#98FB98", "#FFD700"]
  },
  {
    id: 17,
    title: "Premium Leather Running Shoes",
    type: "Footwear",
    category: "Footwear",
    brand: "Nike",
    originalPrice: 8999,
    salePrice: 6499,
    rating: 9.5,
    reviewCount: 512,
    shortDescription: "High-performance running shoes with responsive cushioning",
    detailDescription: "These premium Nike running shoes feature advanced cushioning technology for responsive performance and comfort during long runs. The breathable mesh upper provides ventilation while the durable rubber outsole offers excellent traction on various surfaces. The shoes include a padded collar and tongue for added comfort, and the removable insole allows for custom orthotics if needed. Designed with both performance and style in mind, these shoes are perfect for serious runners and casual athletes alike.",
    additionalInformation: "Material: Mesh upper, rubber outsole | Cushioning: Nike React foam | Drop: 10mm | Weight: 255g (men's size 9) | Arch Support: Neutral | Closure: Lace-up",
    reviews: [
      {
          username: "Rahul Verma",
        rating: 10,
        comment: "Best running shoes I've ever owned. The cushioning is perfect for my daily 5K runs, and they still look great after months of use.",
      },
      {
          username: "Karan Malhotra",
        rating: 9,
        comment: "Very comfortable for long-distance running. Good grip on both wet and dry surfaces.",
      },
      {
          username: "Deepak Sharma",
        rating: 9,
        comment: "Great shoes but took a few days to break in. Now they're my go-to for all my runs.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#FF0000", "#000000", "#4169E1", "#808080"]
  },
  {
    id: 18,
    title: "Chronograph Stainless Steel Watch",
    type: "Accessory",
    category: "Watches",
    brand: "Fossil",
    originalPrice: 12999,
    salePrice: 9999,
    rating: 9.0,
    reviewCount: 187,
    shortDescription: "Elegant chronograph watch with stainless steel strap and water resistance",
    detailDescription: "This sophisticated Fossil chronograph watch features a premium stainless steel case and bracelet with a sleek brushed finish. The watch face includes three sub-dials for tracking seconds, minutes, and hours, along with a date window at 4 o'clock. With 100m water resistance, it's suitable for swimming and snorkeling but not for diving. The luminous hands and markers ensure visibility in low-light conditions, while the scratch-resistant mineral crystal protects the face from daily wear. This versatile timepiece transitions seamlessly from office to evening wear.",
    additionalInformation:"Case Size: 44mm | Case Material: Stainless Steel | Movement: Quartz | Water Resistance: 100m | Battery Life: Approximately 2 years | Features: Chronograph, Date Display, Luminous Hands",
    reviews: [
      {
          username: "Aditya Kapoor",
        rating: 9,
        comment: "Excellent watch for the price. Looks much more expensive than it is and keeps perfect time.",
      },
      {
          username: "Sanjay Gupta",
        rating: 8,
        comment: "Good quality watch. The chronograph functions work well, and the stainless steel strap is comfortable.",
      },
      {
          username: "Rohit Sharma",
        rating: 10,
        comment: "Stunning watch that goes with everything. The water resistance is a great feature for everyday wear.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#C0C0C0", "#FFD700", "#000000"]
  },
  {
    id: 19,
    title: "4K Smart LED TV",
    type: "Electronics",
    category: "Electronics",
    brand: "Samsung",
    originalPrice: 59999,
    salePrice: 47999,
    rating: 9.3,
    reviewCount: 423,
    shortDescription: "55-inch 4K Ultra HD Smart LED TV with HDR and built-in voice assistant",
    detailDescription: "Experience stunning visuals with this Samsung 55-inch 4K Ultra HD Smart LED TV. Featuring HDR technology, it delivers vibrant colors and deep blacks for an immersive viewing experience. The powerful processor upscales content to near-4K quality, while the smart TV platform provides access to popular streaming services like Netflix, Amazon Prime, and Disney+. Built-in voice assistants (Alexa and Google Assistant) allow for hands-free control, and the slim design with minimal bezels complements any living space. Multiple HDMI and USB ports ensure connectivity with all your devices.",
    additionalInformation:"Screen Size: 55 inches | Resolution: 3840 x 2160 (4K UHD) | Refresh Rate: 60Hz | HDR: Yes | Smart TV Platform: Tizen | Connectivity: Wi-Fi, Bluetooth, 3 HDMI ports, 2 USB ports | Audio: 20W output with Dolby Digital Plus | Power Consumption: 150W",
    reviews: [
      {
          username: "Vivek Malhotra",
        rating: 10,
        comment: "Exceptional picture quality and smart features. The setup was straightforward, and the interface is user-friendly.",
      },
      {
          username: "Suresh Patel",
        rating: 9,
        comment: "Great TV for the price. The 4K resolution is stunning, especially when watching nature documentaries.",
      },
      {
          username: "Anand Joshi",
        rating: 8,
        comment: "Good TV overall. The sound could be better, but the picture quality is excellent.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#000000"]
  },
  {
    id: 20,
    title: "Dinosaur Print T-shirt Set",
    type: "Clothing",
    category: "Kid's Clothing",
    brand: "H&M",
    originalPrice: 1299,
    salePrice: 899,
    rating: 8.9,
    reviewCount: 156,
    shortDescription: "Comfortable cotton t-shirt and shorts set with fun dinosaur prints",
    detailDescription: "This adorable H&M dinosaur print set includes a short-sleeve t-shirt and matching shorts, perfect for active kids. Made from 100% organic cotton, the fabric is soft, breathable, and gentle on sensitive skin. The t-shirt features a colorful dinosaur print on the front, while the shorts have an elastic waistband with drawstring for a comfortable fit. The set is easy to wash and maintains its shape and vibrant colors even after multiple washes. Ideal for everyday wear, playdates, or casual outings.",
    additionalInformation:"Material: 100% Organic Cotton | Care: Machine wash cold, tumble dry low | Age Range: 2-8 years | Sizes Available: 2T, 3T, 4T, 5T, 6, 7, 8 | Set Includes: 1 T-shirt, 1 Shorts",
    reviews: [
      {
        username: "Meera Khanna",
        rating: 9,
        comment: "My son loves this dinosaur set! The material is soft and comfortable, and the prints are vibrant even after washing.",
       },
      {
        username: "Pooja Singh",
        rating: 8,
        comment: "Good quality clothing for kids. The size runs a bit large, so I'd recommend sizing down.",
       },
      {
        username: "Ritu Desai",
        rating: 10,
        comment: "Perfect summer outfit for my 4-year-old. The organic cotton is breathable and doesn't irritate his skin.",
       }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1519238359922-989348752efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#1E90FF", "#32CD32", "#FF6347", "#FFD700"]
  },
  {
    id: 21,
    title: "Diamond Pendant Necklace",
    type: "Jewelry",
    category: "Jewellery",
    brand: "Tanishq",
    originalPrice: 24999,
    salePrice: 19999,
    rating: 9.6,
    reviewCount: 89,
    shortDescription: "Elegant 18K gold diamond pendant necklace with delicate chain",
    detailDescription: "This exquisite Tanishq diamond pendant necklace features a stunning 0.25-carat solitaire diamond set in 18K gold. The pendant has a classic design with a modern twist, making it perfect for both everyday wear and special occasions. The delicate 18-inch chain complements the pendant beautifully and includes a secure lobster clasp. Each diamond is carefully selected for its exceptional cut, clarity, and brilliance. The necklace comes in a luxurious gift box with a certificate of authenticity, making it an ideal gift for anniversaries, birthdays, or other special celebrations.",
    additionalInformation:"Metal: 18K Gold | Diamond: 0.25 carat | Diamond Quality: VS clarity, F color | Chain Length: 18 inches | Clasp: Lobster | Certification: IGI certified | Warranty: Lifetime against manufacturing defects",
    reviews: [
      {
        username: "Anita Desai",
        rating: 10,
        comment: "Absolutely stunning necklace! The diamond catches the light beautifully, and the gold chain is delicate yet sturdy.",
       },
      {
        username: "Kavita Sharma",
        rating: 9,
        comment: "Purchased this for my anniversary and couldn't be happier. The quality is excellent, and it looks much more expensive than it is.",
       },
      {
        username: "Sunita Patel",
        rating: 10,
        comment: "Perfect everyday diamond necklace. Simple yet elegant, and the diamond has amazing sparkle.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#FFD700", "#FFFFFF"]
  },
  {
    id: 22,
    title: "Designer Leather Handbag",
    type: "Accessory",
    category: "Accessories",
    brand: "Hidesign",
    originalPrice: 7999,
    salePrice: 5999,
    rating: 8.8,
    reviewCount: 134,
    shortDescription: "Premium genuine leather handbag with multiple compartments",
    detailDescription: "This sophisticated Hidesign leather handbag is crafted from premium full-grain leather that develops a beautiful patina over time. The spacious interior features multiple compartments, including a padded laptop sleeve that fits devices up to 13 inches, a zippered pocket for valuables, and several smaller pockets for organization. The bag closes with a secure zipper and includes both top handles and a detachable, adjustable shoulder strap for versatile carrying options. Metal feet on the bottom protect the bag when set down, and the signature Hidesign hardware adds a touch of elegance. Perfect for work, travel, or everyday use.",
    additionalInformation:"Material: Full-grain leather | Dimensions: 14\"L x 11\"H x 5\"D | Weight: 2.2 lbs | Interior: Cotton lining | Hardware: Brass with antique finish | Pockets: 1 laptop sleeve, 1 zippered pocket, 3 slip pockets | Strap Drop: 9\" (handles), 21\" (shoulder strap)",
    reviews: [
      {
          username: "Nisha Mehta",
        rating: 9,
        comment: "Beautiful bag with excellent craftsmanship. The leather is soft yet durable, and the organization inside is perfect for work.",
      },
      {
          username: "Deepika Reddy",
        rating: 8,
        comment: "Lovely bag but slightly heavier than expected. The quality is outstanding though, and it fits everything I need.",
      },
      {
        username: "Shalini Gupta",
        rating: 9,
        comment: "This bag is perfect for my daily commute. Fits my laptop, lunch, and all essentials with room to spare.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#8B4513", "#000000", "#A52A2A", "#F5F5DC"]
  },
  {
    id: 23,
    title: "Wireless Noise Cancelling Headphones",
    type: "Electronics",
    category: "Electronics",
    brand: "Sony",
    originalPrice: 24999,
    salePrice: 19999,
    rating: 9.4,
    reviewCount: 367,
    shortDescription: "Premium wireless headphones with industry-leading noise cancellation",
    detailDescription: "Experience superior sound quality with these Sony wireless noise-cancelling headphones. Featuring industry-leading noise cancellation technology, they effectively block out ambient noise for immersive listening. The 40mm drivers deliver rich, clear audio across all frequencies, while the comfortable over-ear design with plush ear cushions allows for extended listening sessions without discomfort. With up to 30 hours of battery life and quick charging capability (5 hours of playback from just 10 minutes of charging), these headphones are perfect for travel, work, or home use. Additional features include touch controls, voice assistant compatibility, and a speak-to-chat function that automatically pauses music when you start speaking.",
    additionalInformation:"Driver Size: 40mm | Battery Life: Up to 30 hours | Charging Time: 3 hours (full charge) | Quick Charge: 10 min for 5 hours playback | Bluetooth Version: 5.0 | Codec Support: LDAC, AAC, SBC | Weight: 254g | Accessories: Carrying case, charging cable, audio cable",
    reviews: [
      {
        username: "Arjun Nair",
        rating: 10,
        comment: "These headphones are worth every rupee. The noise cancellation is phenomenal, especially on flights, and the sound quality is exceptional.",
       },
      {
        username: "Karthik Menon",
        rating: 9,
        comment: "Great headphones with impressive battery life. I regularly get over 28 hours on a single charge with noise cancellation on.",
       },
      {
        username: "Pradeep Kumar",
        rating: 9,
        comment: "The comfort level is amazing. I can wear these for hours without any discomfort, and the sound quality is top-notch.",
       }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#000000", "#C0C0C0", "#FFFFFF", "#0000FF"]
  },
  {
    id: 24,
    title: "Slim Fit Denim Jeans",
    type: "Clothing",
    category: "Men's Clothing",
    brand: "Levi's",
    originalPrice: 3999,
    salePrice: 2799,
    rating: 8.9,
    reviewCount: 412,
    shortDescription: "Classic slim fit denim jeans with stretch comfort",
    detailDescription: "These Levi's slim fit jeans combine classic style with modern comfort. Made from premium denim with added stretch, they provide flexibility and ease of movement throughout the day. The slim fit offers a contemporary silhouette without being too tight, sitting below the waist and slim through the hip and thigh with a narrow leg opening. Five-pocket styling, signature stitching on the back pockets, and the iconic leather patch add authentic Levi's details. The versatile medium wash works well for both casual and semi-formal occasions, easily pairing with t-shirts, button-downs, or sweaters.",
    additionalInformation:"Material: 98% Cotton, 2% Elastane | Fit: Slim | Rise: Mid-rise | Closure: Button and zipper fly | Pockets: 5-pocket styling | Care: Machine wash cold, tumble dry medium | Inseam Options: 30\", 32\", 34\" | Waist Sizes: 28-40",
    reviews: [
      {
        username: "Varun Khanna",
        rating: 9,
        comment: "Perfect fit and very comfortable. The stretch in the denim makes these great for all-day wear.",
      },
      {
          username: "Nikhil Sharma",
        rating: 8,
        comment: "Good quality jeans that have held up well after multiple washes. The color hasn't faded much.",
      },
      {
        username: "Rajat Verma",
        rating: 9,
        comment: "These are now my go-to jeans. The fit is perfect - not too tight but still looks tailored.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
    ],
    colors: ["#1E90FF", "#000080", "#000000"]
  },
  {
    id: 25,
    title: "Smartphone with Triple Camera",
    type: "Electronics",
    category: "Electronics",
    brand: "Samsung",
    originalPrice: 49999,
    salePrice: 42999,
    rating: 9.2,
    reviewCount: 528,
    shortDescription: "Feature-packed smartphone with triple camera system and AMOLED display",
    detailDescription: "This Samsung smartphone combines cutting-edge technology with sleek design. The 6.5-inch Dynamic AMOLED display offers vibrant colors and deep blacks with HDR10+ certification for an immersive viewing experience. The triple camera system includes a 64MP main camera, 12MP ultra-wide lens, and 5MP macro camera, allowing you to capture stunning photos in any situation. Powered by an octa-core processor and 8GB of RAM, it handles multitasking and demanding applications with ease. The 4500mAh battery supports fast charging and wireless charging for convenience. Additional features include an in-display fingerprint sensor, facial recognition, IP68 water and dust resistance, and expandable storage via microSD card.",
    additionalInformation:"Display: 6.5\" Dynamic AMOLED, 120Hz refresh rate | Processor: Octa-core | RAM: 8GB | Storage: 128GB (expandable) | Battery: 4500mAh | Cameras: 64MP main, 12MP ultra-wide, 5MP macro, 32MP front | OS: Android 12 | Connectivity: 5G, Wi-Fi 6, Bluetooth 5.2, NFC | Biometrics: In-display fingerprint, facial recognition | Water Resistance: IP68",
    reviews: [
      {
        username: "Akash Patel",
        rating: 9,
        comment: "Excellent smartphone with a fantastic camera system. Battery life is impressive, easily lasting a full day of heavy use.",
        },
      {
        username: "Ravi Shankar",
        rating: 10,
        comment: "The display is absolutely stunning - colors are vibrant and the 120Hz refresh rate makes everything smooth. Camera quality exceeds expectations.",
         },
      {
          username: "Siddharth Kapoor",
        rating: 8,
        comment: "Great phone overall. The only minor issue is that it heats up a bit during gaming, but performance remains stable.",
       }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1027&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1027&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1027&q=80"
    ],
    colors: ["#000000", "#C0C0C0", "#4169E1", "#FFFFFF"]
  },
  {
    id: 26,
    title: "Stylish Block Heel Sandals",
    type: "Footwear",
    category: "Footwear",
    brand: "Metro",
    originalPrice: 2999,
    salePrice: 1999,
    rating: 8.5,
    reviewCount: 176,
    shortDescription: "Comfortable block heel sandals with ankle strap and cushioned footbed",
    detailDescription: "These Metro block heel sandals combine style and comfort for all-day wear. The 2.5-inch block heel provides stability and support, while the cushioned footbed ensures comfort with every step. The adjustable ankle strap with buckle closure offers a secure fit and adds a touch of elegance. Crafted from premium synthetic leather with a soft lining, these sandals are both durable and comfortable. The non-slip rubber sole provides excellent traction on various surfaces. Versatile enough to pair with both casual and formal outfits, these sandals are perfect for work, parties, or everyday wear.",
    additionalInformation:"Material: Synthetic leather upper, rubber sole | Heel Height: 2.5 inches | Closure: Adjustable ankle strap with buckle | Footbed: Cushioned | Platform Height: 0.5 inches | Available Colors: Black, Tan, Nude, Red | Available Sizes: 36-41 (EU)",
    reviews: [
      {
        username: "Divya Mathur",
        rating: 9,
        comment: "These sandals are so comfortable! I wore them to a wedding and was able to dance all night without any pain.",
       },
      {
        username: "Priyanka Joshi",
        rating: 8,
        comment: "Good quality sandals that look more expensive than they are. The block heel makes them easy to walk in.",
       },
      {
        username: "Sneha Gupta",
        rating: 8,
        comment: "Comfortable and stylish. The ankle strap is adjustable which is great for my narrow ankles.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#000000", "#A52A2A", "#FFC0CB", "#FF0000"]
  },
  {
    id: 27,
    title: "Gold Plated Bangles Set",
    type: "Jewelry",
    category: "Jewellery",
    brand: "Malabar Gold",
    originalPrice: 8999,
    salePrice: 6999,
    rating: 9.1,
    reviewCount: 103,
    shortDescription: "Elegant set of six gold-plated bangles with intricate designs",
    detailDescription: "This stunning set of six bangles from Malabar Gold features intricate traditional designs with a modern twist. Each bangle is crafted from brass and plated with 22K gold for a luxurious finish that resembles solid gold at a fraction of the price. The bangles vary slightly in design while maintaining a cohesive look, allowing them to be worn together as a set or mixed with other bangles for a personalized style. The secure clasp mechanism makes them easy to put on and take off, while ensuring they stay in place during wear. These bangles are perfect for both everyday wear and special occasions like weddings, festivals, or parties.",
    additionalInformation:"Material: Brass with 22K gold plating | Quantity: Set of 6 bangles | Inner Diameter: 2.6 inches (standard size) | Width: 0.4 inches | Weight: Approximately 120g (total) | Clasp: Push-button clasp | Care: Store in a dry place, avoid contact with water and chemicals | Warranty: 6 months against manufacturing defects",
    reviews: [
      {          
        username: "Rekha Agarwal",
        rating: 9,
        comment: "Beautiful bangles that look like real gold. The designs are intricate and the clasp mechanism is secure.",
      },
      {          
        username: "Jyoti Sharma",
        rating: 9,
        comment: "Excellent quality for the price. I've worn them several times and they haven't tarnished at all.",
      },
      {          
        username: "Sarita Patel",
        rating: 10,
        comment: "These bangles are stunning! They're comfortable to wear and the designs receive many compliments.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#FFD700"]
  },
  {
    id: 28,
    title: "Printed Floral Dress for Girls",
    type: "Clothing",
    category: "Kid's Clothing",
    brand: "Gini & Jony",
    originalPrice: 1799,
    salePrice: 1299,
    rating: 8.8,
    reviewCount: 145,
    shortDescription: "Adorable floral print dress with puff sleeves and bow detail",
    detailDescription: "This charming Gini & Jony floral dress is perfect for special occasions or everyday wear. Made from soft cotton blend fabric, it features a beautiful all-over floral print in vibrant colors that little girls will love. The puff sleeves add a touch of elegance, while the bow detail at the waist enhances the cute factor. The dress has a concealed back zipper for easy dressing and a full skirt that twirls beautifully when she moves. The fabric is breathable and comfortable, making it suitable for all-day wear. Machine washable and colorfast, this dress maintains its vibrant appearance even after multiple washes.",
    additionalInformation:"Material: 95% Cotton, 5% Elastane | Care: Machine wash cold, tumble dry low | Age Range: 2-8 years | Closure: Back zipper | Length: Knee-length | Occasion: Casual, Party | Season: All seasons",
    reviews: [
      {
        username: "Neha Kapoor",
        rating: 9,
        comment: "My daughter loves this dress! The fabric is soft, and the floral print is vibrant and hasn't faded after washing.",
      },
      {
        username: "Swati Gupta",
        rating: 8,
        comment: "Pretty dress with good quality fabric. The size runs a bit small, so I'd recommend sizing up.",
      },
      {
        username: "Anjali Singh",
        rating: 9,
        comment: "Beautiful dress that my daughter wore for her birthday. The puff sleeves and bow detail make it look extra special.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#FF69B4", "#87CEEB", "#9370DB", "#FFFFFF"]
  },
  {
    id: 29,
    title: "Automatic Chronograph Watch",
    type: "Accessory",
    category: "Watches",
    brand: "Titan",
    originalPrice: 15999,
    salePrice: 12999,
    rating: 8.9,
    reviewCount: 167,
    shortDescription: "Sophisticated automatic chronograph watch with leather strap",
    detailDescription: "This premium Titan automatic chronograph watch combines classic design with modern functionality. The watch features a self-winding mechanical movement that eliminates the need for a battery, powered instead by the natural motion of your wrist. The elegant 42mm stainless steel case houses a multi-function dial with chronograph sub-dials for seconds, minutes, and hours, along with a date window at 4 o'clock. The scratch-resistant sapphire crystal protects the face while providing exceptional clarity. The genuine leather strap with contrast stitching adds a touch of sophistication and develops a beautiful patina over time. Water-resistant to 50 meters, this watch is suitable for everyday wear including swimming in shallow water.",
    additionalInformation:"Movement: Automatic mechanical | Case Diameter: 42mm | Case Material: Stainless steel | Crystal: Sapphire | Strap: Genuine leather | Water Resistance: 50m | Functions: Hours, minutes, seconds, chronograph, date | Power Reserve: Approximately 40 hours | Warranty: 2 years international warranty",
    reviews: [
      {          
        username: "Vikram Singh",
        rating: 9,
        comment: "Excellent watch with great craftsmanship. The automatic movement works flawlessly, and the chronograph functions are precise.",
      },        {
        username: "Ajay Sharma",
        rating: 8,
        comment: "Beautiful timepiece that looks much more expensive than it is. The leather strap is comfortable and high quality.",
      },
      {          
        username: "Rajeev Kumar",
        rating: 9,
        comment: "This is my first automatic watch, and I'm impressed with the quality. It keeps accurate time and the chronograph is a useful feature.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#000000", "#8B4513", "#C0C0C0"]
  },
  {
    id: 30,
    title: "Wireless Bluetooth Earbuds",
    type: "Electronics",
    category: "Electronics",
    brand: "boAt",
    originalPrice: 4999,
    salePrice: 2999,
    rating: 8.7,
    reviewCount: 623,
    shortDescription: "True wireless earbuds with touch controls and long battery life",
    detailDescription: "Experience superior sound quality with these boAt wireless Bluetooth earbuds. Featuring 10mm dynamic drivers, they deliver powerful bass and crystal-clear highs for an immersive audio experience. The true wireless design eliminates tangled cords, while Bluetooth 5.0 technology ensures a stable connection up to 10 meters. With touch controls on each earbud, you can easily manage music playback, calls, and voice assistants without reaching for your phone. The earbuds provide up to 6 hours of playback on a single charge, and the compact charging case adds an additional 24 hours, for a total of 30 hours of battery life. IPX5 water resistance protects against sweat and light rain, making these earbuds perfect for workouts and outdoor activities.",
    additionalInformation:"Driver Size: 10mm | Bluetooth Version: 5.0 | Battery Life: 6 hours (earbuds), 24 hours (with case) | Charging Time: 1.5 hours | Water Resistance: IPX5 | Controls: Touch | Microphone: Built-in with noise reduction | Compatibility: Android, iOS, Windows | Warranty: 1 year",
    reviews: [
      {
        username: "Manish Tiwari",
        rating: 9,
        comment: "Great sound quality for the price. The bass is impressive, and the battery life is as advertised.",
      },
      {
        username: "Suresh Kumar",
        rating: 8,
        comment: "Good earbuds for everyday use. The touch controls work well, and they're comfortable even for long listening sessions.",
      },
      {
        username: "Prakash Jha",
        rating: 9,
        comment: "Excellent value for money. The sound quality is comparable to much more expensive brands, and the battery life is impressive.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF"]
  },
  {
    id: 31,
    title: "Leather Formal Shoes",
    type: "Footwear",
    category: "Footwear",
    brand: "Red Tape",
    originalPrice: 4999,
    salePrice: 3499,
    rating: 8.6,
    reviewCount: 198,
    shortDescription: "Premium genuine leather formal shoes with brogue detailing",
    detailDescription: "These sophisticated Red Tape formal shoes are crafted from genuine leather with classic brogue detailing for a timeless look. The burnished finish adds character and depth to the rich color, while the leather lining provides comfort and breathability. The cushioned insole offers support for all-day wear, and the durable rubber outsole provides excellent traction and shock absorption. The lace-up closure ensures a secure fit, and the slightly elevated heel adds a touch of height. Perfect for formal occasions, business meetings, or everyday office wear, these versatile shoes pair well with suits, trousers, or even dark jeans for a smart-casual look.",
    additionalInformation:"Material: Genuine leather upper, leather lining, rubber outsole | Closure: Lace-up | Heel Height: 1 inch | Style: Brogue | Toe Shape: Round | Available Colors: Black, Brown, Tan | Available Sizes: UK 6-11 | Care: Clean with leather cleaner, use shoe trees to maintain shape",
    reviews: [
      {
          username: "Rahul Khanna",
        rating: 9,
        comment: "Excellent quality shoes that look professional and feel comfortable. The leather is soft yet durable.",
      },
      {
        username: "Anil Sharma",
        rating: 8,
        comment: "Good formal shoes for the price. They required a short break-in period but are now very comfortable for all-day wear.",
      },
      {
        username: "Deepak Verma",
        rating: 9,
        comment: "These shoes look much more expensive than they are. The brogue detailing adds a touch of elegance to any outfit.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#000000", "#8B4513", "#D2B48C"]
  },
  {
    id: 32,
    title: "Silver Oxidized Jhumka Earrings",
    type: "Jewelry",
    category: "Jewellery",
    brand: "Jaipur Mart",
    originalPrice: 1499,
    salePrice: 999,
    rating: 9.2,
    reviewCount: 215,
    shortDescription: "Traditional silver oxidized jhumka earrings with intricate detailing",
    detailDescription: "These stunning jhumka earrings from Jaipur Mart showcase the rich tradition of Indian craftsmanship. Handcrafted from sterling silver with an oxidized finish, they feature intricate filigree work and traditional motifs that reflect India's artistic heritage. The dome-shaped design is adorned with small bells that create a subtle, pleasant tinkling sound with movement. Lightweight despite their statement size, these earrings are comfortable for all-day wear. The secure lever-back closure ensures they stay in place. These versatile earrings add a touch of ethnic elegance to both traditional outfits like sarees and lehengas, as well as contemporary western wear for a fusion look.",
    additionalInformation:"Material: 925 Sterling Silver with oxidized finish | Style: Traditional Jhumka | Length: 2.5 inches | Width: 1.5 inches | Weight: 12g (pair) | Closure: Lever-back | Care: Store in a dry place, clean with silver polish cloth | Origin: Handcrafted in Jaipur, India",
    reviews: [
      {
        username: "Shalini Gupta",
        rating: 10,
        comment: "These jhumkas are absolutely beautiful! The craftsmanship is exquisite, and they're surprisingly lightweight for their size.",
       },
      {
        username: "Neha Sharma",
        rating: 9,
        comment: "Gorgeous earrings that received many compliments when I wore them to a wedding. The oxidized silver gives them a unique, antique look.",
       },
      {
        username: "Anjali Patel",
        rating: 8,
        comment: "Beautiful jhumkas with intricate detailing. They're a bit larger than I expected but still very wearable and elegant.",
      }
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    colors: ["#C0C0C0"]
  },
  {
      id: 33,
      title: "Wireless Gaming Mouse",
      type: "Electronics",
      category: "Electronics",
      brand: "Logitech",
      originalPrice: 5999,
      salePrice: 4499,
      rating: 9.3,
      reviewCount: 378,
      shortDescription: "High-performance wireless gaming mouse with customizable RGB lighting",
      detailDescription: "Elevate your gaming experience with this Logitech wireless gaming mouse. Featuring a high-precision 16,000 DPI optical sensor, it delivers exceptional tracking accuracy for competitive gaming. The ultra-fast 1ms response rate and reliable wireless connection ensure lag-free performance. With 6 programmable buttons, you can customize controls for your favorite games. The ergonomic design with textured grips provides comfort during extended gaming sessions. RGB lighting with 16.8 million color options allows for personalization, while the rechargeable battery offers up to 60 hours of gameplay on a single charge. The lightweight construction (95g) enables quick movements without fatigue.",
      additionalInformation: "Sensor: 16,000 DPI optical | Connectivity: Wireless (2.4GHz) | Response Rate: 1ms | Buttons: 6 programmable | Battery Life: Up to 60 hours | Weight: 95g | RGB: Yes, 16.8 million colors | Compatibility: Windows, macOS | Software: Logitech G HUB | Warranty: 2 years",
      reviews: [
        {
         
         username: "Akshay Mehta",
          rating: 10,
          comment: "Best gaming mouse I've ever used. The sensor is incredibly precise, and the wireless performance is indistinguishable from wired.",
          },
        {
          username: "Varun Singh",
          rating: 9,
          comment: "Great mouse with excellent battery life. I can go almost a week of heavy gaming before needing to recharge.",
          },
        {
          username: "Nikhil Sharma",
          rating: 9,
          comment: "The customization options are fantastic. The software is intuitive, and the RGB lighting looks amazing.",
          }
      ],
      imageUrls: [
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
        "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
        "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
      ],
      colors: ["#000000", "#FFFFFF", "#FF0000"]
    },
    {
        id: 34,
        title: "Printed Casual Shirt",
        type: "Clothing",
        category: "Men's Clothing",
        brand: "Peter England",
        originalPrice: 1899,
        salePrice: 1299,
        rating: 8.6,
        reviewCount: 256,
        shortDescription: "Stylish printed casual shirt with short sleeves and modern fit",
        detailDescription: "This trendy Peter England casual shirt features a contemporary all-over print that adds personality to your casual wardrobe. Made from 100% cotton, it offers exceptional breathability and comfort in warm weather. The modern fit is relaxed without being baggy, providing a clean silhouette. The short sleeves and button-down collar create a versatile look that works well for casual outings, weekend brunches, or relaxed office environments. The shirt includes a chest pocket and curved hem that looks great both tucked in or worn out. Easy to care for and resistant to wrinkles, this shirt maintains its crisp appearance throughout the day.",
        additionalInformation: "Material: 100% Cotton | Fit: Modern fit | Collar: Button-down | Sleeves: Short | Closure: Button front | Pattern: All-over print | Care: Machine wash cold, tumble dry low | Sizes: S-XXL",
        reviews: [
          {
            username: "Aditya Sharma",
            rating: 9,
            comment: "Great casual shirt for summer. The fabric is lightweight and breathable, and the print is subtle yet stylish.",
            },
          {
            username: "Rahul Gupta",
            rating: 8,
            comment: "Good quality shirt with nice detailing. The fit is perfect - not too tight or too loose.",
            },
          {
            username: "Karan Malhotra",
            rating: 9,
            comment: "Comfortable shirt that looks great with jeans or chinos. Received several compliments when I wore it to a casual dinner.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#87CEEB", "#FFFFFF", "#98FB98", "#FFA07A"]
      },
      {
        id: 35,
        title: "Fitness Tracker with Heart Rate Monitor",
        type: "Electronics",
        category: "Electronics",
        brand: "Fitbit",
        originalPrice: 9999,
        salePrice: 7999,
        rating: 9.1,
        reviewCount: 412,
        shortDescription: "Advanced fitness tracker with heart rate monitoring and sleep analysis",
        detailDescription: "This Fitbit fitness tracker helps you achieve your health goals with comprehensive activity and wellness monitoring. The continuous heart rate tracking provides insights into your cardio fitness level and helps optimize workouts. Track steps, distance, calories burned, and active minutes throughout the day. The advanced sleep monitoring analyzes light, deep, and REM sleep stages to help improve your sleep quality. The bright, color touchscreen displays real-time stats and smartphone notifications. Water-resistant to 50 meters, it's suitable for swimming and showering. The long-lasting battery provides up to 7 days of use on a single charge, keeping you connected without frequent recharging.",
        additionalInformation: "Display: 1.4\" color touchscreen | Battery Life: Up to 7 days | Water Resistance: 50m | Sensors: Optical heart rate, 3-axis accelerometer, altimeter | Connectivity: Bluetooth | Compatibility: iOS, Android | Tracking: Steps, distance, calories, sleep, heart rate | Notifications: Calls, texts, calendar, apps | Warranty: 1 year",
        reviews: [
          {
            username: "Priya Nair",
            rating: 9,
            comment: "Excellent fitness tracker that has helped me stay motivated. The heart rate monitoring is accurate, and the sleep tracking has been eye-opening.",
            },
          {
            username: "Ankit Patel",
            rating: 10,
            comment: "Love this tracker! The battery life is impressive - I only need to charge it once a week despite using all the features daily.",
            },
          {
            username: "Meera Kapoor",
            rating: 8,
            comment: "Good fitness tracker with useful features. The app is intuitive and provides detailed insights about your health metrics.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1510003402327-b1a6ad3592ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#000000", "#FF69B4", "#4169E1", "#32CD32"]
      },
      {
        id: 36,
        title: "Handcrafted Leather Belt",
        type: "Accessory",
        category: "Accessories",
        brand: "Ruosh",
        originalPrice: 2499,
        salePrice: 1799,
        rating: 8.9,
        reviewCount: 167,
        shortDescription: "Premium handcrafted leather belt with classic buckle design",
        detailDescription: "This Ruosh handcrafted leather belt combines timeless style with exceptional craftsmanship. Made from full-grain Italian leather, it features a classic design that complements both formal and casual outfits. The belt is meticulously hand-stitched by skilled artisans, ensuring durability and attention to detail. The solid brass buckle with a brushed finish adds a touch of sophistication, while the 7 adjustment holes allow for a customized fit. The belt's 35mm width is versatile enough for most belt loops. Each belt develops a unique patina over time, becoming more beautiful with age. Perfect for daily wear, this belt is a staple accessory for any wardrobe.",
        additionalInformation: "Material: Full-grain Italian leather | Width: 35mm | Buckle: Solid brass with brushed finish | Adjustment Holes: 7 | Available Sizes: 30-42 inches | Available Colors: Black, Brown, Tan | Care: Clean with leather conditioner | Origin: Handcrafted in India",
        reviews: [
          {
            username: "Rajiv Khanna",
            rating: 9,
            comment: "Excellent quality belt. The leather is thick and supple, and the buckle has a premium feel to it.",
            },
          {
            username: "Sunil Mehta",
            rating: 9,
            comment: "This belt looks much more expensive than it is. The craftsmanship is outstanding, and it pairs well with both jeans and formal trousers.",
            },
          {
            username: "Vikram Singh",
            rating: 8,
            comment: "Good quality leather belt that has held up well with daily use. The color has developed a nice patina over time.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#000000", "#8B4513", "#D2B48C"]
      },
      {
        id: 37,
        title: "Stainless Steel Water Bottle",
        type: "Accessory",
        category: "Accessories",
        brand: "Milton",
        originalPrice: 999,
        salePrice: 799,
        rating: 8.7,
        reviewCount: 289,
        shortDescription: "Vacuum insulated stainless steel water bottle that keeps drinks hot or cold",
        detailDescription: "This premium Milton stainless steel water bottle features double-wall vacuum insulation that keeps beverages hot for up to 12 hours and cold for up to 24 hours. Made from high-quality 18/8 food-grade stainless steel, it's BPA-free and doesn't transfer flavors or odors. The leak-proof lid with a secure twist cap prevents spills, making it perfect for commuting, travel, or outdoor activities. The sleek, ergonomic design fits most cup holders and backpack pockets, while the powder-coated exterior provides a comfortable grip and prevents condensation. Durable and built to last, this bottle is an eco-friendly alternative to disposable plastic bottles, helping reduce waste while keeping you hydrated.",
        additionalInformation: "Material: 18/8 food-grade stainless steel | Capacity: 750ml | Insulation: Double-wall vacuum | Temperature Retention: Hot - 12 hours, Cold - 24 hours | Lid Type: Leak-proof twist cap | Features: BPA-free, sweat-proof, condensation-free | Care: Hand wash recommended | Warranty: 1 year",
        reviews: [
          {
            username: "Neha Gupta",
            rating: 9,
            comment: "Excellent water bottle that keeps water cold all day, even in hot weather. The leak-proof cap works perfectly.",
            },
          {
            username: "Ravi Kumar",
            rating: 8,
            comment: "Good quality bottle with great insulation. I filled it with hot tea in the morning, and it was still hot when I drank it in the afternoon.",
            },
          {
            username: "Priya Sharma",
            rating: 9,
            comment: "Sturdy bottle that's perfect for the gym and office. The powder coating has held up well without scratches or chips.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#000000", "#1E90FF", "#FF4500", "#32CD32"]
      },
      {
        id: 38,
        title: "Kids' Sports Shoes",
        type: "Footwear",
        category: "Kid's Clothing",
        brand: "Adidas",
        originalPrice: 2499,
        salePrice: 1899,
        rating: 9.0,
        reviewCount: 187,
        shortDescription: "Lightweight sports shoes for kids with cushioned soles and easy closure",
        detailDescription: "These Adidas kids' sports shoes are designed for active children who love to run, jump, and play. The lightweight construction reduces fatigue, while the breathable mesh upper keeps little feet cool and comfortable. The cushioned EVA midsole provides excellent shock absorption to protect growing feet, and the non-marking rubber outsole offers superior traction on various surfaces. The hook-and-loop closure allows for easy on and off, promoting independence, while the padded collar and tongue prevent irritation. Reflective details enhance visibility in low light conditions for added safety. These versatile shoes are perfect for school, sports activities, or casual wear, combining performance features with playful design elements that kids love.",
        additionalInformation: "Material: Mesh upper, rubber outsole | Closure: Hook-and-loop (Velcro) | Cushioning: EVA midsole | Features: Breathable, lightweight, reflective details | Age Range: 4-12 years | Available Sizes: UK 10C-5Y | Care: Wipe clean with damp cloth | Weight: Approximately 180g (single shoe, size 13C)",
        reviews: [
          {
            username: "Ritu Sharma",
            rating: 9,
            comment: "Great shoes for my active 6-year-old. They're lightweight, comfortable, and the Velcro closure makes them easy for him to put on himself.",
            },
          {
            username: "Anand Patel",
            rating: 9,
            comment: "These shoes have held up remarkably well despite my daughter wearing them for everything from school to playground activities.",
            },
          {
            username: "Kavita Nair",
            rating: 8,
            comment: "Good quality shoes with nice cushioning. My son finds them comfortable for his PE classes and outdoor play.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#FF0000", "#1E90FF", "#000000", "#32CD32"]
      },
      {
        id: 39,
        title: "Pearl and Gold Necklace Set",
        type: "Jewelry",
        category: "Jewellery",
        brand: "CaratLane",
        originalPrice: 15999,
        salePrice: 12999,
        rating: 9.4,
        reviewCount: 98,
        shortDescription: "Elegant freshwater pearl necklace with matching earrings in 18K gold setting",
        detailDescription: "This exquisite CaratLane pearl necklace set showcases the timeless beauty of freshwater pearls combined with modern design. The necklace features 7-8mm high-quality freshwater pearls arranged in a graduated pattern, interspersed with delicate 18K gold beads that add a touch of luxury. The adjustable chain allows for versatile styling, while the secure lobster clasp ensures the necklace stays in place. The matching drop earrings feature single pearls suspended from gold posts with push-back closures for comfortable all-day wear. Each pearl is hand-selected for its luster, shape, and surface quality, resulting in a set with exceptional beauty. Perfect for weddings, special occasions, or adding elegance to business attire, this set comes in a premium gift box with a certificate of authenticity.",
        additionalInformation: "Pearls: 7-8mm freshwater pearls | Metal: 18K gold | Necklace Length: 16-18\" adjustable | Earring Length: 1\" | Clasp: Lobster | Earring Closure: Push-back | Certification: Includes authenticity certificate | Care: Store in provided box, clean with soft cloth | Warranty: 1 year against manufacturing defects",
        reviews: [
          {
            username: "Asha Reddy",
            rating: 10,
            comment: "Stunning pearl set with exceptional quality. The pearls have beautiful luster, and the gold accents add just the right amount of elegance.",
            },
          {
            username: "Leela Nair",
            rating: 9,
            comment: "Beautiful necklace and earrings that look much more expensive than they are. I wore them to my daughter's wedding and received many compliments.",
            },
          {
            username: "Shalini Mehta",
            rating: 9,
            comment: "Elegant pearl set with excellent craftsmanship. The adjustable chain on the necklace is a thoughtful feature that allows for different necklines.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#FFFFFF", "#FFD700"]
      },
      {
        id: 40,
        title: "Leather Crossbody Sling Bag",
        type: "Accessory",
        category: "Accessories",
        brand: "Baggit",
        originalPrice: 2999,
        salePrice: 2299,
        rating: 8.7,
        reviewCount: 176,
        shortDescription: "Compact leather crossbody sling bag with multiple compartments",
        detailDescription: "This stylish Baggit crossbody sling bag combines functionality with contemporary design. Crafted from premium vegan leather with a textured finish, it offers the look and feel of genuine leather while being environmentally conscious. The compact size is perfect for carrying essentials without bulk, making it ideal for shopping, travel, or everyday use. The bag features a main zippered compartment, a front pocket with magnetic closure, and a back zippered pocket for items requiring extra security. The adjustable shoulder strap allows for comfortable wear across the body or over the shoulder. The water-resistant exterior protects your belongings from light rain, while the durable polyester lining withstands daily use. This versatile bag complements both casual and semi-formal outfits.",
        additionalInformation: "Material: Premium vegan leather exterior, polyester lining | Dimensions: 8\"W x 10\"H x 2\"D | Strap Length: Adjustable up to 25\" | Closure: Zipper | Pockets: 1 main compartment, 1 front pocket, 1 back pocket, 2 interior slip pockets | Features: Water-resistant, adjustable strap | Care: Wipe clean with damp cloth | Warranty: 6 months",
        reviews: [
          {
            username: "Nisha Patel",
            rating: 9,
            comment: "Perfect size for daily essentials. The quality is excellent, and the vegan leather looks and feels premium.",
           },
          {
            username: "Priya Sharma",
            rating: 8,
            comment: "Great bag for everyday use. The multiple compartments help keep everything organized, and the strap is comfortable.",
           },
          {
            username: "Deepika Reddy",
            rating: 9,
            comment: "Stylish and functional bag that goes with everything. I appreciate that it's vegan leather but still looks sophisticated.",
           }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#000000", "#8B4513", "#A52A2A", "#F5F5DC"]
      },
      {
        id: 41,
        title: "Portable Bluetooth Speaker",
        type: "Electronics",
        category: "Electronics",
        brand: "JBL",
        originalPrice: 7999,
        salePrice: 5999,
        rating: 9.2,
        reviewCount: 345,
        shortDescription: "Waterproof portable Bluetooth speaker with 360° sound and long battery life",
        detailDescription: "This JBL portable Bluetooth speaker delivers powerful, room-filling sound in a compact, travel-friendly design. The 360° speaker arrangement provides immersive audio from every angle, while the passive radiators enhance bass performance for deep, rich lows. With IPX7 waterproof certification, it withstands immersion in water up to 1 meter for 30 minutes, making it perfect for pool parties, beach outings, or shower use. The rechargeable battery offers up to 12 hours of playtime on a single charge, and the built-in power bank feature lets you charge your smartphone or tablet via the USB port. Bluetooth 5.1 connectivity ensures stable wireless streaming from up to 30 feet away, while the speakerphone function with noise-canceling technology allows for clear hands-free calls. The durable fabric covering and rugged rubber housing protect against drops and bumps during travel.",
        additionalInformation: "Bluetooth Version: 5.1 | Battery Life: Up to 12 hours | Charging Time: 4 hours | Water Resistance: IPX7 (waterproof) | Power Output: 20W RMS | Frequency Response: 65Hz-20kHz | Features: 360° sound, built-in power bank, speakerphone | Connectivity: Bluetooth, 3.5mm aux input | Dimensions: 7\" x 3\" x 3\" | Weight: 540g | Warranty: 1 year",
        reviews: [
          {
            username: "Vikram Nair",
            rating: 10,
            comment: "Incredible sound quality for such a compact speaker. The bass is impressive, and the 360° sound fills my entire living room.",
            },
          {
            username: "Arjun Mehta",
            rating: 9,
            comment: "Great portable speaker with excellent battery life. I took it on a weekend trip, and it lasted the entire time without needing a recharge.",
            },
          {
            username: "Kiran Sharma",
            rating: 8,
            comment: "Good sound quality and truly waterproof. I accidentally dropped it in the pool, and it continued working perfectly after I fished it out.",
             }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#000000", "#FF0000", "#1E90FF", "#32CD32"]
      },
      {
        id: 42,
        title: "Organic Cotton Baby Romper Set",
        type: "Clothing",
        category: "Kid's Clothing",
        brand: "FirstCry",
        originalPrice: 1499,
        salePrice: 999,
        rating: 9.1,
        reviewCount: 213,
        shortDescription: "Soft organic cotton romper set for babies with cute animal prints",
        detailDescription: "This adorable FirstCry romper set is designed with your baby's comfort and safety in mind. Made from 100% GOTS-certified organic cotton, the fabric is exceptionally soft, breathable, and free from harmful chemicals, making it perfect for a baby's sensitive skin. The set includes three rompers with playful animal prints and embroidered details that add a touch of charm. The envelope neckline allows for easy dressing and undressing, while the snap buttons at the bottom facilitate quick diaper changes. The tagless design prevents skin irritation, and the flatlock seams minimize chafing. The pre-shrunk fabric maintains its shape and softness even after multiple washes. This versatile set is perfect for everyday wear, playtime, or as a thoughtful baby shower gift.",
        additionalInformation: "Material: 100% GOTS-certified organic cotton | Set Includes: 3 rompers | Age Range: 0-12 months | Sizes Available: 0-3M, 3-6M, 6-9M, 9-12M | Closure: Envelope neckline, snap buttons at bottom | Care: Machine wash cold, tumble dry low | Features: Tagless design, flatlock seams, pre-shrunk fabric | Certification: GOTS (Global Organic Textile Standard)",
        reviews: [
          {
            username: "Meera Kapoor",
            rating: 10,
            comment: "These rompers are incredibly soft and perfect for my baby's sensitive skin. The animal prints are adorable, and the quality is excellent.",
            },
          {
            username: "Anita Sharma",
            rating: 9,
            comment: "Great quality organic cotton that gets softer with each wash. The snap buttons make diaper changes so much easier.",
            },
          {
            username: "Priya Nair",
            rating: 8,
            comment: "Lovely romper set that's held up well after multiple washes. The envelope neckline is perfect for easily dressing my wiggly baby.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1519238359922-989348752efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#87CEEB", "#98FB98", "#FFCBA4", "#FFC0CB"]
      },
      {
        id: 43,
        title: "Men's Aviator Sunglasses",
        type: "Accessory",
        category: "Accessories",
        brand: "Ray-Ban",
        originalPrice: 7999,
        salePrice: 5999,
        rating: 9.3,
        reviewCount: 267,
        shortDescription: "Classic aviator sunglasses with polarized lenses and gold frame",
        detailDescription: "These iconic Ray-Ban aviator sunglasses combine timeless style with premium functionality. The classic teardrop shape flatters most face shapes and has remained fashionable for decades. The polarized lenses reduce glare and enhance visual clarity, making them perfect for driving or outdoor activities. The lenses also provide 100% UV protection, safeguarding your eyes from harmful sun rays. The lightweight gold-tone metal frame features adjustable nose pads for a comfortable, customized fit, while the slim temples with plastic end tips ensure they stay securely in place. The green G-15 lenses offer true color perception and exceptional optical clarity. Each pair comes with a premium leather case, cleaning cloth, and authentication certificate. These versatile sunglasses complement both casual and formal attire, making them a staple accessory for any wardrobe.",
        additionalInformation: "Frame Material: Metal | Lens Material: Glass | Lens Type: Polarized | UV Protection: 100% | Frame Width: 58mm | Bridge Width: 14mm | Temple Length: 135mm | Case: Premium leather case included | Warranty: 2 years against manufacturing defects | Origin: Made in Italy",
        reviews: [
          {
            username: "Rahul Khanna",
            rating: 10,
            comment: "Classic sunglasses that never go out of style. The polarized lenses make a huge difference when driving on sunny days.",
            },
          {
            username: "Vikram Singh",
            rating: 9,
            comment: "Excellent quality sunglasses with perfect fit. The gold frame looks premium, and the green lenses provide great clarity.",
            },
          {
            username: "Aditya Sharma",
            rating: 9,
            comment: "Worth the investment. These sunglasses are comfortable for all-day wear and provide exceptional sun protection.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#FFD700", "#C0C0C0", "#000000"]
      },
      {
        id: 44,
        title: "Digital Drawing Tablet",
        type: "Electronics",
        category: "Electronics",
        brand: "Wacom",
        originalPrice: 12999,
        salePrice: 9999,
        rating: 9.0,
        reviewCount: 187,
        shortDescription: "Professional drawing tablet with pressure-sensitive pen and customizable shortcuts",
        detailDescription: "This Wacom digital drawing tablet is designed for artists, designers, and creative professionals seeking precision and control in their digital artwork. The 10 x 6.25-inch active area provides ample space for drawing, while maintaining a compact footprint on your desk. The battery-free pen offers 8,192 levels of pressure sensitivity, allowing for natural-feeling brush strokes that respond to the slightest variations in pressure. The tablet features 8 customizable ExpressKeys that can be programmed with your most-used shortcuts to streamline your workflow. The 4 multi-function touch strips provide intuitive control for scrolling, zooming, brush size adjustment, and canvas rotation. Compatible with Windows and macOS, the tablet connects via USB and works seamlessly with popular creative software like Adobe Photoshop, Illustrator, and Clip Studio Paint. The textured surface mimics the feel of paper for a natural drawing experience.",
        additionalInformation: "Active Area: 10\" x 6.25\" | Pressure Sensitivity: 8,192 levels | ExpressKeys: 8 customizable | Touch Strips: 4 multi-function | Pen: Battery-free, includes stand and replacement nibs | Resolution: 5080 LPI | Compatibility: Windows 7 or later, macOS 10.12 or later | Connectivity: USB | Software: Includes Wacom drivers and creative software bundle | Warranty: 2 years",
        reviews: [
          {
            username: "Arjun Mehta",
            rating: 9,
            comment: "Excellent drawing tablet for digital art. The pressure sensitivity is impressive, and the ExpressKeys save so much time in my workflow.",
            },
          {
            username: "Priya Sharma",
            rating: 9,
            comment: "Great quality tablet that has significantly improved my digital illustration process. The pen feels natural, almost like drawing on paper.",
            },
          {
            username: "Rahul Kapoor",
            rating: 8,
            comment: "Good tablet for professional work. There's a slight learning curve, but once you get used to it, it's an invaluable tool for digital artists.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1561518776-e76a5e48f731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1587614298171-a597ef0f8d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#000000", "#808080"]
      },
      {
        id: 45,
        title: "Handcrafted Wooden Chess Set",
        type: "Accessory",
        category: "Accessories",
        brand: "Chessbazaar",
        originalPrice: 4999,
        salePrice: 3799,
        rating: 9.5,
        reviewCount: 112,
        shortDescription: "Premium handcrafted wooden chess set with weighted pieces and folding board",
        detailDescription: "This exquisite Chessbazaar wooden chess set combines artisanal craftsmanship with functional design. Each piece is meticulously hand-carved from premium rosewood and boxwood by skilled artisans, showcasing intricate details and smooth finishing. The chess pieces feature a Staunton design, the international standard for chess tournaments, with a king height of 3.5 inches. Each piece is weighted with felt-bottomed bases for optimal stability during play. The folding chess board is crafted from the same premium woods, creating a striking contrast between the squares. When folded, the board transforms into a storage box for the chess pieces, with a velvet-lined interior that protects each piece. The board's surface is finished with a subtle satin lacquer that enhances the natural wood grain while providing durability. This heirloom-quality chess set is perfect for serious players, collectors, or as a sophisticated decorative piece for your home or office.",
        additionalInformation: "Materials: Rosewood and boxwood | King Height: 3.5 inches | Board Size (open): 18\" x 18\" | Board Size (folded): 18\" x 9\" x 2\" | Squares: 2\" x 2\" | Pieces: 32 weighted chess pieces with felt bottoms | Storage: Folding board with velvet-lined interior | Finish: Satin lacquer | Care: Dust with soft cloth, avoid direct sunlight | Origin: Handcrafted in India",
        reviews: [
          {
            username: "Vikram Iyer",
            rating: 10,
            comment: "Exceptional chess set with beautiful craftsmanship. The weighted pieces feel substantial, and the board's folding design is both practical and elegant.",
           },
          {
            username: "Anil Sharma",
            rating: 9,
            comment: "This chess set exceeds expectations. The attention to detail in the carving is impressive, and the wood grain is stunning.",
           },
          {
            username: "Rajiv Kapoor",
            rating: 10,
            comment: "Heirloom quality chess set that has become a centerpiece in my study. The craftsmanship is exceptional, and it's a joy to play with.",
           }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#8B4513", "#F5DEB3"]
      },
      {
        id: 46,
        title: "Yoga Mat with Alignment Marks",
        type: "Accessory",
        category: "Accessories",
        brand: "Reebok",
        originalPrice: 2499,
        salePrice: 1799,
        rating: 9.0,
        reviewCount: 234,
        shortDescription: "Non-slip yoga mat with alignment marks and eco-friendly materials",
        detailDescription: "Enhance your yoga practice with this premium Reebok yoga mat featuring helpful alignment marks. The printed alignment system guides proper positioning for various poses, helping beginners learn correct form and allowing experienced practitioners to refine their technique. Made from eco-friendly TPE (Thermoplastic Elastomer) material, this mat is free from PVC, latex, and harmful chemicals. The dual-layer construction provides optimal cushioning for joints while maintaining stability for balance poses. The textured non-slip surface ensures secure grip even during intense, sweaty sessions, while the closed-cell construction prevents moisture absorption and bacterial growth. At 6mm thick, the mat offers excellent cushioning without compromising stability. Lightweight and portable, it includes a free carrying strap for easy transport to and from the studio. This versatile mat is suitable for all types of yoga, Pilates, and floor exercises.",
        additionalInformation: "Material: Eco-friendly TPE | Thickness: 6mm | Dimensions: 72\" x 24\" | Weight: 2.2 lbs | Features: Alignment marks, non-slip texture, dual-layer construction | Includes: Carrying strap | Care: Wipe clean with mild soap and water, air dry | Warranty: 1 year | Eco-friendly: PVC-free, latex-free, non-toxic",
        reviews: [
          {
            username: "Priya Nair",
            rating: 9,
            comment: "Excellent yoga mat with helpful alignment marks. The cushioning is perfect - supportive without being too soft, and the grip is outstanding even during hot yoga.",
            },
          {
            username: "Anita Sharma",
            rating: 9,
            comment: "Great quality mat that has improved my practice. The alignment marks are subtle but effective for checking positioning.",
            },
          {
            username: "Deepa Mehta",
            rating: 8,
            comment: "Good mat with excellent grip. The eco-friendly material doesn't have the chemical smell that many other mats have.",
            }
        ],
        imageUrls: [
          "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
          "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        ],
        colors: ["#4682B4", "#800080", "#006400", "#000000"]
    },
]