import { Product } from "./types";

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
    detailDescription:
      "Crafted from premium cotton Oxford cloth, this shirt features our signature embroidered pony logo. The custom fit offers a tailored silhouette without being too slim. Button-down collar, long sleeves with buttoned barrel cuffs, and a curved hem make this shirt perfect for both casual and semi-formal occasions.",
    additionalInformation:
      "100% Cotton | Machine washable | Imported | Available in Regular and Tall sizes",
    colors: ["#FFFFFF", "#89CFF0", "#FFC0CB", "#F5F5DC"],
    reviews: [
      {
        username: "Vikram S.",
        rating: 9,
        comment:
          "Perfect fit and excellent quality cotton. A wardrobe essential.",
      },
      {
        username: "Aditya R.",
        rating: 10,
        comment: "The attention to detail is remarkable. Worth every penny.",
      },
      {
        username: "Karan M.",
        rating: 9,
        comment: "Classic piece that never goes out of style.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1000&q=80",
    ],
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
    detailDescription:
      "This luxurious cashmere sweater features our beloved Polo Bear dressed in classic Ralph Lauren style. The sweater is knitted from the finest cashmere for exceptional softness and warmth. A comfortable crew neckline and ribbed trim complete this collector's piece.",
    additionalInformation:
      "100% Cashmere | Dry clean only | Made in Italy | Regular fit",
    colors: ["#000000", "#8B4513", "#808080"],
    reviews: [
      {
        username: "Rajesh K.",
        rating: 10,
        comment: "The cashmere quality is outstanding. A true luxury piece.",
      },
      {
        username: "Nikhil P.",
        rating: 9,
        comment: "The Polo Bear detail is charming and well-executed.",
      },
      {
        username: "Arjun S.",
        rating: 9,
        comment: "Incredibly soft and warm. Perfect for winter.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1610901157620-340856d0a50f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579635480803-b990e007f508?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    shortDescription:
      "Handcrafted Italian wool suit from Purple Label collection",
    detailDescription:
      "From our prestigious Purple Label collection, this suit is handcrafted in Italy from super 150s wool. The jacket features pick-stitched lapels, hand-sewn armholes, and a three-roll-two button closure. Trousers are flat-front with side adjusters and unfinished hems for custom tailoring.",
    additionalInformation:
      "Super 150s Wool | Full canvas construction | Made in Italy | Includes jacket and trousers",
    colors: ["#000080", "#36454F", "#1B1B1B"],
    reviews: [
      {
        username: "Rohit M.",
        rating: 10,
        comment: "Exceptional craftsmanship. The epitome of luxury suiting.",
      },
      {
        username: "Sanjay B.",
        rating: 9,
        comment: "The fabric quality and construction are outstanding.",
      },
      {
        username: "Vivek T.",
        rating: 10,
        comment: "Worth the investment. Fits like a dream after alterations.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    shortDescription:
      "Technical performance golf jacket with moisture-wicking technology",
    detailDescription:
      "From our RLX Golf collection, this performance jacket combines style with functionality. Features our proprietary moisture-wicking technology, four-way stretch fabric, and UV protection. Perfect for golf or casual wear with signature RLX branding.",
    additionalInformation:
      "88% Polyester, 12% Elastane | Machine washable | Imported | Regular fit",
    colors: ["#000000", "#FFFFFF", "#000080"],
    reviews: [
      {
        username: "Ajay P.",
        rating: 9,
        comment: "Great for golf and casual wear. Very comfortable.",
      },
      {
        username: "Rahul S.",
        rating: 9,
        comment: "Excellent quality and perfect for unpredictable weather.",
      },
      {
        username: "Deepak R.",
        rating: 9,
        comment:
          "The moisture-wicking really works. Keeps you dry during activity.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    detailDescription:
      "These Polo Sport track pants combine classic style with modern performance features. Made with quick-drying fabric and featuring side pockets, elasticated waistband with drawstring, and ankle zippers. The iconic Polo Sport logo completes the look.",
    additionalInformation:
      "92% Polyester, 8% Elastane | Machine washable | Imported | Regular fit",
    colors: ["#000000", "#808080", "#000080"],
    reviews: [
      {
        username: "Kunal M.",
        rating: 9,
        comment: "Perfect fit and very comfortable for workouts.",
      },
      {
        username: "Pranav S.",
        rating: 8,
        comment: "Good quality and stylish enough for casual wear.",
      },
      {
        username: "Harsh P.",
        rating: 9,
        comment: "Great value for money. Very versatile.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=80",
      "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1727301209182-f85cd0fe7748?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    detailDescription:
      "Crafted in Italy from virgin wool, this BOSS blazer exemplifies modern tailoring. Features a slim fit, notch lapels, two-button closure, and four-button cuffs. The partially lined interior ensures comfort while maintaining a clean drape.",
    additionalInformation:
      "100% Virgin Wool | Dry clean only | Made in Italy | Slim fit",
    colors: ["#000000", "#191970", "#36454F"],
    reviews: [
      {
        username: "Varun K.",
        rating: 9,
        comment:
          "Excellent cut and superb quality wool. Perfect for formal occasions.",
      },
      {
        username: "Anish M.",
        rating: 10,
        comment: "The slim fit is perfect. Very well constructed.",
      },
      {
        username: "Dhruv P.",
        rating: 9,
        comment: "Worth the investment. Versatile piece for any wardrobe.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609231864033-fc939f9e45df?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    detailDescription:
      "This BOSS polo shirt is crafted from mercerized cotton for superior softness and shine. Features a three-button placket, ribbed collar and cuffs, and subtle BOSS logo on chest. The modern fit offers a contemporary silhouette.",
    additionalInformation:
      "100% Mercerized Cotton | Machine washable | Imported | Modern fit",
    colors: ["#FFFFFF", "#000000", "#000080", "#8B0000"],
    reviews: [
      {
        username: "Aryan S.",
        rating: 9,
        comment: "The quality is evident. Perfect for business casual.",
      },
      {
        username: "Rohan K.",
        rating: 9,
        comment: "Great fit and the fabric feels luxurious.",
      },
      {
        username: "Kabir M.",
        rating: 9,
        comment: "Excellent polo that keeps its shape after washing.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    detailDescription:
      "These BOSS chinos are crafted from stretch cotton twill for comfort and mobility. Features a regular rise, straight leg, and clean front. The fabric blend ensures shape retention while providing all-day comfort.",
    additionalInformation:
      "98% Cotton, 2% Elastane | Machine washable | Imported | Regular fit",
    colors: ["#000000", "#8B4513", "#36454F", "#F5F5DC"],
    reviews: [
      {
        username: "Shiv P.",
        rating: 9,
        comment: "Perfect fit and great quality fabric.",
      },
      {
        username: "Arun M.",
        rating: 9,
        comment: "Very comfortable for all-day wear.",
      },
      {
        username: "Neil S.",
        rating: 10,
        comment: "Best chinos I've owned. Worth every rupee.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552379392-d0b24be6bdca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    detailDescription:
      "Handcrafted in Italy, these BOSS derby shoes feature premium calfskin leather uppers, leather soles, and elegant stitch detailing. The classic design is enhanced with modern comfort features including cushioned insoles.",
    additionalInformation:
      "100% Calfskin leather | Made in Italy | Leather sole | Includes dust bags",
    colors: ["#000000", "#8B4513"],
    reviews: [
      {
        username: "Mihir R.",
        rating: 9,
        comment: "Exceptional quality and craftsmanship.",
      },
      {
        username: "Tarun S.",
        rating: 10,
        comment: "Very comfortable right from day one.",
      },
      {
        username: "Gaurav P.",
        rating: 9,
        comment: "Classic design with modern comfort.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534233650908-b471f2350922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMERlcmJ5JTIwU2hvZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMERlcmJ5JTIwU2hvZXN8ZW58MHx8MHx8fDA%3D",
    ],
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
    detailDescription:
      "Crafted from smooth Italian leather, this BOSS belt features a sleek palladium-finish buckle with subtle logo engraving. The reversible design offers versatility, while the precise pin holes ensure a perfect fit.",
    additionalInformation:
      "100% Leather | Made in Italy | Width: 3.5cm | Available in sizes 30-42",
    colors: ["#000000", "#8B4513"],
    reviews: [
      {
        username: "Aarav K.",
        rating: 9,
        comment: "Excellent quality leather and perfect finish.",
      },
      {
        username: "Ishaan M.",
        rating: 9,
        comment: "The reversible feature is very practical.",
      },
      {
        username: "Yash S.",
        rating: 9,
        comment: "Classic design that goes with everything.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1664285612706-b32633c95820?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1631160246898-58192f971b5f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1534233650908-b471f2350922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMERlcmJ5JTIwU2hvZXN8ZW58MHx8MHx8fDA%3D",
    ],
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
    detailDescription:
      "The iconic O'Connor suit exemplifies Tom Ford's masterful tailoring. Crafted from Super 160s wool with hand-finished details throughout. Features peaked lapels, surgeon's cuffs, and Tom Ford's signature silhouette. Includes matching flat-front trousers with side adjusters.",
    additionalInformation:
      "Super 160s Wool | Full canvas construction | Made in Italy | O'Connor fit",
    colors: ["#000000", "#191970", "#36454F"],
    reviews: [
      {
        username: "Akash R.",
        rating: 10,
        comment: "The pinnacle of luxury suiting. Exceptional in every way.",
      },
      {
        username: "Vikas M.",
        rating: 10,
        comment: "Impeccable craftsmanship and perfect proportions.",
      },
      {
        username: "Suresh P.",
        rating: 9,
        comment: "Worth every penny. The fit is absolutely perfect.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    detailDescription:
      "This evening jacket showcases Tom Ford's mastery of formal wear. Crafted from silk jacquard with a subtle pattern, featuring grosgrain peak lapels and covered buttons. The silk lining and precise tailoring ensure an impeccable drape.",
    additionalInformation:
      "100% Silk | Dry clean only | Made in Italy | Slim fit",
    colors: ["#000000", "#800020"],
    reviews: [
      {
        username: "Rajeev S.",
        rating: 10,
        comment: "Absolutely stunning piece. The silk quality is exceptional.",
      },
      {
        username: "Mohit K.",
        rating: 9,
        comment: "Perfect for black tie events. Draws compliments every time.",
      },
      {
        username: "Anand P.",
        rating: 10,
        comment: "The attention to detail is remarkable.",
      },
    ],
    imageUrls: [
      "https://plus.unsplash.com/premium_photo-1670088466079-6682af2baaee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXZlbmluZyUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1488027236809-dc613266478a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEV2ZW5pbmclMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1732117941241-791a1be33e62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fEV2ZW5pbmclMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
    ],
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
    detailDescription:
      "These oxford shoes represent the pinnacle of formal footwear. Hand-crafted in Italy from the finest calfskin leather, featuring hand-polished finish, Goodyear-welted construction, and leather soles. The classic design is elevated by Tom Ford's attention to proportion and detail.",
    additionalInformation:
      "100% Calfskin leather | Made in Italy | Goodyear welted | Includes shoe trees and dust bags",
    colors: ["#000000", "#8B4513"],
    reviews: [
      {
        username: "Dev P.",
        rating: 10,
        comment: "The craftsmanship is outstanding. Worth the investment.",
      },
      {
        username: "Ravi M.",
        rating: 9,
        comment: "Incredibly comfortable despite the formal design.",
      },
      {
        username: "Sahil K.",
        rating: 10,
        comment: "These shoes make a statement. Impeccable quality.",
      },
    ],
    imageUrls: [
      "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExlYXRoZXIlMjBPeGZvcmQlMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1576133384936-ea17c54e9fd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVhdGhlciUyME94Zm9yZCUyMFNob2VzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1728158949987-efc83ed54df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyME94Zm9yZCUyMFNob2VzfGVufDB8fDB8fHww",
    ],
  },
  // Start from Here
  {
    id: 14,
    title: "Premium Cotton Slim Fit Shirt",
    type: "Clothing",
    category: "Men's clothing",
    brand: "Tom Ford",
    originalPrice: 2499,
    salePrice: 1799,
    rating: 8.7,
    reviewCount: 342,
    shortDescription:
      "Premium cotton slim fit formal shirt with button-down collar",
    detailDescription:
      "This premium cotton slim fit shirt from Allen Solly is crafted from 100% Egyptian cotton for superior comfort and durability. Features include a button-down collar, single-button cuffs, and a chest pocket. The slim fit design offers a modern silhouette while maintaining comfort throughout the day. Perfect for formal occasions or office wear.",
    additionalInformation:
      "Material: 100% Egyptian Cotton | Care: Machine wash cold, tumble dry low | Fit: Slim Fit | Collar: Button-down | Cuffs: Single-button",
    reviews: [
      {
        username: "Rajesh Kumar",
        rating: 9,
        comment:
          "Excellent quality shirt. The fabric feels premium and the fit is perfect for my build. Will definitely buy more colors.",
      },
      {
        username: "Amit Singh",
        rating: 8,
        comment:
          "Good shirt for office wear. The cotton is breathable and comfortable even in hot weather.",
      },
      {
        username: "Vikram Mehta",
        rating: 9,
        comment:
          "The slim fit is perfect - not too tight, not too loose. Excellent craftsmanship.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593757147298-e064ed1419e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHNoaXJ0JTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1594201510970-f549e4a6e96d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    colors: ["#FFFFFF", "#87CEEB", "#FFC0CB", "#000000"],
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
    detailDescription:
      "This formal dress shirt is crafted from the finest Italian silk, featuring mother-of-pearl buttons and French cuffs. The spread collar and darted back ensure a refined fit, while the pure silk construction offers unparalleled luxury and comfort.",
    additionalInformation:
      "100% Silk | Dry clean only | Made in Italy | Classic fit",
    colors: ["#FFFFFF", "#89CFF0"],
    reviews: [
      {
        username: "Vinay R.",
        rating: 9,
        comment: "The silk quality is outstanding. Perfect for formal events.",
      },
      {
        username: "Prakash M.",
        rating: 10,
        comment: "Impeccable craftsmanship and beautiful details.",
      },
      {
        username: "Siddharth K.",
        rating: 9,
        comment: "The fit is perfect and the fabric is luxurious.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1463860452799-793003efcb2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601935033900-059813f9abfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 16,
    title: "Pleated Midi Dress",
    type: "Dress",
    category: "Women's clothing",
    brand: "Zara",
    originalPrice: 4990,
    salePrice: 3990,
    rating: 9.2,
    reviewCount: 458,
    shortDescription: "Elegant pleated midi dress with belt detail",
    detailDescription:
      "This stunning midi dress features intricate pleating throughout, with a removable belt to define the waist. The flowing fabric creates beautiful movement, while the high neckline and three-quarter length sleeves offer sophisticated coverage. Perfect for both office wear and special occasions.",
    additionalInformation:
      "Material: 100% Polyester | Care: Machine wash cold | Length: 110cm",
    colors: ["#000000", "#8B4513", "#808080"],
    reviews: [
      {
        username: "Anjali R.",
        rating: 9,
        comment: "The pleating is exquisite and the fit is perfect!",
      },
      {
        username: "Meera S.",
        rating: 10,
        comment: "Received so many compliments. Worth every penny.",
      },
      {
        username: "Pooja K.",
        rating: 9,
        comment: "Perfect for work and evening events.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://cdn-img.prettylittlething.com/1/f/6/f/1f6fd633c625e71f0a16e93a53e3a7e0b1d5ea5c_cma0523_4.jpg",
      "https://cdn-img.prettylittlething.com/1/d/f/0/1df07bdf846bcb5d3ee1d66374d4756859b63740_cly4082_2.jpg",
    ],
  },
  {
    id: 17,
    title: "Structured Blazer",
    type: "Jackets",
    category: "Women's clothing",
    brand: "Zara",
    originalPrice: 5990,
    salePrice: 4790,
    rating: 8.9,
    reviewCount: 312,
    shortDescription: "Classic structured blazer with gold button details",
    detailDescription:
      "A timeless blazer crafted from premium fabric with a tailored fit. Features gold-tone buttons, peaked lapels, and front flap pockets. The structured shoulders and nipped-in waist create a flattering silhouette. Fully lined with a back vent for ease of movement.",
    additionalInformation:
      "Material: 63% Polyester, 34% Viscose, 3% Elastane | Care: Dry clean only | Length: 70cm",
    colors: ["#000000", "#NAVY", "#BEIGE"],
    reviews: [
      {
        username: "Ritu M.",
        rating: 9,
        comment: "Perfect fit and excellent quality",
      },
      {
        username: "Sneha P.",
        rating: 8,
        comment: "Great for office wear, very professional looking",
      },
      {
        username: "Deepa S.",
        rating: 9,
        comment: "The tailoring is impeccable",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 18,
    title: "High-Waist Wide Leg Trousers",
    type: "Pants",
    category: "Women's clothing",
    brand: "Zara",
    originalPrice: 3990,
    salePrice: 2990,
    rating: 8.8,
    reviewCount: 276,
    shortDescription: "Flowing wide-leg trousers with pleated front",
    detailDescription:
      "These elegant high-waisted trousers feature a flowing wide-leg silhouette with front pleats. The high-rise waist includes belt loops and a concealed hook and zip fastening. Side pockets and back welt pockets add functionality to this sophisticated design.",
    additionalInformation:
      "Material: 88% Polyester, 12% Elastane | Care: Machine wash cold | Inseam: 82cm",
    colors: ["#000000", "#CREAM", "#BROWN"],
    reviews: [
      {
        username: "Neha K.",
        rating: 9,
        comment: "Love the fit and flow of these pants",
      },
      {
        username: "Priya R.",
        rating: 8,
        comment: "Perfect length and very comfortable",
      },
      {
        username: "Sonia M.",
        rating: 9,
        comment: "These make any outfit look expensive",
      },
    ],
    imageUrls: [
      "https://i.pinimg.com/736x/8f/16/68/8f1668f0afc37b5d1f645ccd48685d8c.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20201015/eSWV/5f8745bdf997dd8c83653c91/-473Wx593H-460760387-gray-MODEL4.jpg",
      "https://assets.digitalcontent.marksandspencer.app/images/w_1024,q_auto,f_auto/MS_10_T83_9432S_Y0_X_EC_0/High-Waisted-Wide-Leg-Trousers",
    ],
  },
  {
    id: 19,
    title: "Satin Slip Dress",
    type: "Dress",
    category: "Women's clothing",
    brand: "Zara",
    originalPrice: 4490,
    salePrice: 3590,
    rating: 9.1,
    reviewCount: 198,
    shortDescription: "Luxurious satin slip dress with cowl neck",
    detailDescription:
      "A stunning slip dress in lustrous satin with a elegant cowl neckline. The bias cut creates a beautiful drape that skims the body. Features adjustable spaghetti straps and a subtle side slit. Perfect for evening events or special occasions.",
    additionalInformation:
      "Material: 100% Polyester Satin | Care: Hand wash cold | Length: 120cm",
    colors: ["#FFD700", "#8B0000", "#000000"],
    reviews: [
      {
        username: "Isha P.",
        rating: 9,
        comment: "The most elegant dress I own",
      },
      {
        username: "Tanya S.",
        rating: 10,
        comment: "Perfect fit and beautiful fabric",
      },
      {
        username: "Mira R.",
        rating: 8,
        comment: "Gorgeous for special occasions",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1566491888763-e71518bbe846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 20,
    title: "Knit Cardigan Set",
    type: "Knitwear",
    category: "Women's clothing",
    brand: "Zara",
    originalPrice: 4290,
    salePrice: 3490,
    rating: 8.7,
    reviewCount: 245,
    shortDescription: "Matching knit cardigan and tank top set",
    detailDescription:
      "A sophisticated matching set featuring a cropped cardigan and fitted tank top in a premium ribbed knit. The cardigan features pearl buttons and three-quarter length sleeves. The tank top has a square neckline and comfortable stretch fit.",
    additionalInformation:
      "Material: 52% Viscose, 28% Polyester, 20% Nylon | Care: Hand wash cold | Length: Cardigan 50cm, Tank 60cm",
    colors: ["#CREAM", "#BLACK", "#SAGE"],
    reviews: [
      {
        username: "Kavita R.",
        rating: 9,
        comment: "Love the versatility of this set",
      },
      {
        username: "Anita S.",
        rating: 8,
        comment: "Great quality and perfect fit",
      },
      {
        username: "Reena M.",
        rating: 9,
        comment: "So elegant and comfortable",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1583846717393-dc2412c95ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 21,
    title: "Organic Cotton Blouse",
    type: "Top",
    category: "Women's clothing",
    brand: "H&M",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 8.5,
    reviewCount: 387,
    shortDescription: "Sustainable cotton blouse with puff sleeves",
    detailDescription:
      "Made from organic cotton, this romantic blouse features voluminous puff sleeves and a subtle floral jacquard pattern. The square neckline and fitted bodice create a flattering silhouette. Perfect for both casual and dressy occasions.",
    additionalInformation:
      "Material: 100% Organic Cotton | Care: Machine wash cold | Length: 65cm",
    colors: ["#FFFFFF", "#LIGHTBLUE", "#PINK"],
    reviews: [
      {
        username: "Maya K.",
        rating: 8,
        comment: "Love the sustainable fabric",
      },
      {
        username: "Shreya P.",
        rating: 9,
        comment: "Beautiful design and comfortable fit",
      },
      { username: "Dia R.", rating: 8, comment: "Perfect for summer" },
    ],
    imageUrls: [
      "https://amourvert.com/cdn/shop/files/10390_Aida_IVORY_1_2ff81b78-6883-4cd6-902e-4c7b6b31d6b2.jpg?/amourvert.com/cdn/shop/files/10390_Aida_IVORY_1_2ff81b78-6883-4cd6-902e-4c7b6b31d6b2.jpg?&w=%7Bwidth%7D",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 22,
    title: "Linen Blend Shorts",
    type: "Bottoms",
    category: "Women's clothing",
    brand: "H&M",
    originalPrice: 1999,
    salePrice: 1499,
    rating: 8.6,
    reviewCount: 234,
    shortDescription: "High-waisted linen blend shorts with belt",
    detailDescription:
      "These breezy shorts are crafted from a premium linen blend fabric. Features include a high-rise waist, removable fabric belt, and front pleats. The relaxed fit and breathable material make these perfect for warm weather.",
    additionalInformation:
      "Material: 55% Linen, 45% Cotton | Care: Machine wash cold | Inseam: 12cm",
    colors: ["#BEIGE", "#WHITE", "#OLIVE"],
    reviews: [
      { username: "Nisha S.", rating: 9, comment: "Perfect summer shorts" },
      { username: "Riya M.", rating: 8, comment: "Great quality and fit" },
      {
        username: "Aditi K.",
        rating: 9,
        comment: "Love the linen blend fabric",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://m.media-amazon.com/images/I/71f07Aq8EXL._AC_SL1500_.jpg",
    ],
  },
  {
    id: 23,
    title: "Ribbed Knit Dress",
    type: "Dress",
    category: "Women's clothing",
    brand: "H&M",
    originalPrice: 2999,
    salePrice: 2499,
    rating: 8.8,
    reviewCount: 412,
    shortDescription: "Figure-hugging ribbed knit midi dress",
    detailDescription:
      "A sleek midi dress in a comfortable ribbed knit fabric. Features a high neck, long sleeves, and a figure-hugging silhouette that falls below the knee. The stretchy material ensures comfort while maintaining shape throughout wear.",
    additionalInformation:
      "Material: 95% Cotton, 5% Elastane | Care: Machine wash cold | Length: 115cm",
    colors: ["#000000", "#GREY", "#NAVY"],
    reviews: [
      {
        username: "Sana R.",
        rating: 9,
        comment: "Perfect fit and so comfortable",
      },
      {
        username: "Zara K.",
        rating: 8,
        comment: "Great for both work and evening",
      },
      { username: "Aisha P.", rating: 9, comment: "Love the ribbed texture" },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1472923430079-278ad08b889a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1559034750-cdab70a66b8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 24,
    title: "Cropped Denim Jacket",
    type: "Outerwear",
    category: "Women's clothing",
    brand: "H&M",
    originalPrice: 2799,
    salePrice: 2299,
    rating: 8.7,
    reviewCount: 289,
    shortDescription: "Classic cropped denim jacket with raw hem",
    detailDescription:
      "A modern take on the classic denim jacket featuring a cropped length and raw hem detail. The washed denim gives a lived-in look while metal buttons and chest pockets maintain the traditional styling. Perfect for layering over dresses or with high-waisted bottoms.",
    additionalInformation:
      "Material: 100% Cotton | Care: Machine wash cold | Length: 45cm",
    colors: ["#LIGHTBLUE", "#MEDIUMBLUE", "#BLACK"],
    reviews: [
      { username: "Kiara M.", rating: 9, comment: "Perfect cropped length" },
      { username: "Simran K.", rating: 8, comment: "Great quality denim" },
      {
        username: "Neha S.",
        rating: 9,
        comment: "Versatile piece for any wardrobe",
      },
    ],
    imageUrls: [
      "https://cdnc.lystit.com/photos/missguided/1c50653a/missguided-designer-blue-Tall-Blue-Denim-Cropped-Jacket.jpeg",
      "https://i.ebayimg.com/images/g/ulIAAOSw9-xld2IB/s-l1600.jpg",
      "https://www.tradeinn.com/f/13889/138899370/levis---90s-trucker-denim-jacket.jpg",
    ],
  },
  {
    id: 25,
    title: "Printed Maxi Skirt",
    type: "Bottoms",
    category: "Women's clothing",
    brand: "H&M",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 8.9,
    reviewCount: 356,
    shortDescription: "Flowing maxi skirt with botanical print",
    detailDescription:
      "A stunning maxi skirt featuring a vibrant botanical print on flowing fabric. The elastic waistband ensures comfort while the tiered design adds movement and drama. Side slits provide ease of movement and a modern touch.",
    additionalInformation:
      "Material: 100% Viscose | Care: Machine wash cold | Length: 100cm",
    colors: ["#MULTICOLOR", "#GREEN", "#BLUE"],
    reviews: [
      {
        username: "Rhea P.",
        rating: 9,
        comment: "Beautiful print and great movement",
      },
      { username: "Tanvi R.", rating: 9, comment: "Perfect for summer events" },
      {
        username: "Kritika S.",
        rating: 8,
        comment: "Love the comfortable fit",
      },
    ],
    imageUrls: [
      "https://tse1.mm.bing.net/th?id=OIP.z9HL9xvjHmQK4aF_pJqswgHaJ2&w=200&h=266&c=7",
      "https://tse2.mm.bing.net/th?id=OIP.-syXG8UZBo1utQCHH89uawHaLH&w=200&h=300&c=7",
      "https://tse2.mm.bing.net/th?id=OIP.Shgdt-i-0A-91bWgGKl8ZwHaLx&w=200&h=318&c=7",
    ],
  },

  // Mango Products
  {
    id: 26,
    title: "Tailored Wool Coat",
    type: "Outerwear",
    category: "Women's clothing",
    brand: "Mango",
    originalPrice: 8990,
    salePrice: 7190,
    rating: 9.3,
    reviewCount: 267,
    shortDescription: "Premium wool blend coat with classic tailoring",
    detailDescription:
      "A sophisticated wool-blend coat featuring classic tailoring with modern details. The oversized fit allows for comfortable layering while maintaining an elegant silhouette. Features include notched lapels, double-breasted buttons, and side pockets.",
    additionalInformation:
      "Material: 60% Wool, 40% Polyester | Care: Dry clean only | Length: 110cm",
    colors: ["#CAMEL", "#BLACK", "#GREY"],
    reviews: [
      {
        username: "Avantika R.",
        rating: 10,
        comment: "Exceptional quality and tailoring",
      },
      {
        username: "Sarika M.",
        rating: 9,
        comment: "Perfect winter investment piece",
      },
      { username: "Naina K.", rating: 9, comment: "Beautiful classic coat" },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 27,
    title: "Silk Blend Wrap Top",
    type: "Top",
    category: "Women's clothing",
    brand: "Mango",
    originalPrice: 3990,
    salePrice: 3190,
    rating: 8.8,
    reviewCount: 189,
    shortDescription: "Elegant wrap top in luxurious silk blend",
    detailDescription:
      "A sophisticated wrap top crafted from a silk blend fabric with a subtle sheen. Features include a deep V-neckline, adjustable wrap tie, and flutter sleeves. The draped design creates an effortlessly elegant look suitable for both day and evening wear.",
    additionalInformation:
      "Material: 70% Silk, 30% Cotton | Care: Dry clean only | Length: 65cm",
    colors: ["#IVORY", "#BLUSH", "#BLACK"],
    reviews: [
      {
        username: "Karishma P.",
        rating: 9,
        comment: "Beautiful drape and fabric",
      },
      {
        username: "Shweta R.",
        rating: 8,
        comment: "Perfect for special occasions",
      },
      { username: "Divya M.", rating: 9, comment: "Elegant and versatile" },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://tse1.mm.bing.net/th?id=OIP._izz2Y2DFlso1oEWYGVlDgAAAA&w=200&h=307&c=7",
    ],
  },
  {
    id: 28,
    title: "Leather Mini Skirt",
    type: "Bottoms",
    category: "Women's clothing",
    brand: "Mango",
    originalPrice: 4990,
    salePrice: 3990,
    rating: 9.0,
    reviewCount: 156,
    shortDescription: "Premium leather mini skirt with modern details",
    detailDescription:
      "A statement mini skirt crafted from soft leather with contemporary details. Features an A-line silhouette, front zip closure, and subtle side pockets. The high waist design and clean lines create a sleek, modern look perfect for day-to-night styling.",
    additionalInformation:
      "Material: 100% Leather | Care: Professional leather clean only | Length: 45cm",
    colors: ["#000000", "#BROWN", "#BURGUNDY"],
    reviews: [
      { username: "Ishita S.", rating: 9, comment: "Amazing quality leather" },
      { username: "Vaani K.", rating: 9, comment: "Perfect fit and style" },
      { username: "Mehak R.", rating: 9, comment: "Worth the investment" },
    ],
    imageUrls: [
      "https://product-images-cdn.liketoknow.it/sZKY7AmhvSt4QlUsDP1mZnrXInItNv8sf8UxStoSFHHhkfFAyD.oGAowYztY8IBCt7dU43PwyZaVQNa.OUn6HoB6bbH_Qnt74LSKMuD73148PuqmOVLJE6CQGSzzlEQo2LeW6WujZOxBiRlwm.IE9D9qrG5E_.kQnzltuSyFCo.lpCcIKzkB8vR8bYw-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2.625",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/bdfd1895-3303-53b0-b893-132a9fb2e2ab/c7562025-858a-52f9-9b87-56d12b452965.jpg",
      "https://product-images-cdn.liketoknow.it/bwW0DwbO6K.K9.5nA1n.JJkm97vPieo928XlUN77ssCr9FDeAn_YPTduWTWmsuKbH1yo8j.w.z8jvU.lFa3UScr2g3YWAZB6iKDITCSQwmDmMVNJqilMgyvE.tpkTcEEFwmoa1tGU4tnSyaZ65fY7QDaoi1cp5EEEDv0nSCCOUmhc6mmUVQ5i9M1ORU-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2.625",
    ],
  },
  {
    id: 29,
    title: "Printed Midi Dress",
    type: "Dress",
    category: "Women's clothing",
    brand: "Mango",
    originalPrice: 5990,
    salePrice: 4790,
    rating: 9.1,
    reviewCount: 278,
    shortDescription: "Floral printed midi dress with ruffle details",
    detailDescription:
      "A romantic midi dress featuring a delicate floral print and feminine ruffle details. The V-neckline and tiered skirt create a flattering silhouette, while the lightweight fabric ensures comfortable wear. Perfect for garden parties or summer events.",
    additionalInformation:
      "Material: 100% Viscose | Care: Machine wash cold | Length: 120cm",
    colors: ["#FLORAL", "#BLUE", "#GREEN"],
    reviews: [
      {
        username: "Ananya P.",
        rating: 9,
        comment: "Beautiful print and perfect fit",
      },
      { username: "Gauri S.", rating: 9, comment: "Lovely summer dress" },
      { username: "Ritika M.", rating: 9, comment: "Great quality and design" },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566491888763-e71518bbe846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 30,
    title: "Linen Palazzo Pants",
    type: "Bottoms",
    category: "Women's clothing",
    brand: "Mango",
    originalPrice: 3990,
    salePrice: 3190,
    rating: 8.9,
    reviewCount: 234,
    shortDescription: "Wide-leg palazzo pants in premium linen",
    detailDescription:
      "Elegant palazzo pants crafted from high-quality linen fabric. Features include a high-rise waist with belt loops, wide-leg silhouette, and front pleats. The flowing design and breathable material make these perfect for warm weather while maintaining a sophisticated look.",
    additionalInformation:
      "Material: 100% Linen | Care: Machine wash cold | Inseam: 82cm",
    colors: ["#NATURAL", "#WHITE", "#NAVY"],
    reviews: [
      { username: "Suhana R.", rating: 9, comment: "Perfect summer pants" },
      { username: "Alisha K.", rating: 8, comment: "Great quality linen" },
      { username: "Myra P.", rating: 9, comment: "Elegant and comfortable" },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 31,
    title: "Dinosaur Print Pajama Set",
    type: "Sleepwear",
    category: "Kid's clothing",
    brand: "Carter's",
    originalPrice: 1299,
    salePrice: 999,
    rating: 9.2,
    reviewCount: 456,
    shortDescription: "Cozy 2-piece cotton pajama set with fun dinosaur prints",
    detailDescription:
      "Made from 100% soft cotton, this pajama set features an all-over dinosaur print. The long-sleeve top has a crew neck and ribbed cuffs, while the full-length pants have an elastic waistband for comfort. Perfect for bedtime or lazy morning wear.",
    additionalInformation:
      "Size Range: 2T-5T | Material: 100% Cotton | Care: Machine washable",
    colors: ["#87CEEB", "#98FB98", "#FFB6C1"],
    reviews: [
      {
        username: "Maya P.",
        rating: 9,
        comment: "Super soft and my son loves the dinosaur print!",
      },
      {
        username: "Ravi S.",
        rating: 10,
        comment: "Great quality and washes well without fading.",
      },
      {
        username: "Neha K.",
        rating: 9,
        comment: "Perfect fit and very comfortable for sleep time.",
      },
    ],
    imageUrls: [
      "https://cdn.fcglcdn.com/brainbees/images/products/583x720/15421903a.webp",
      "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19116987a.webp",
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_600,h_780,q_auto,f_auto,e_sharpen/SD_04_T86_3704Q_UT_X_EC_0",
    ],
  },
  {
    id: 32,
    title: "Rainbow Heart Dress",
    type: "Dresses",
    category: "Kid's clothing",
    brand: "Carter's",
    originalPrice: 1599,
    salePrice: 1299,
    rating: 8.9,
    reviewCount: 289,
    shortDescription:
      "Colorful jersey dress with heart pattern and twirl skirt",
    detailDescription:
      "This adorable dress features a rainbow heart pattern on soft jersey material. The sleeveless design and twirl-worthy skirt make it perfect for warm days. Built-in shorts underneath provide extra coverage during play.",
    additionalInformation:
      "Size Range: 2T-6X | Material: 95% Cotton, 5% Elastane | Care: Machine washable",
    colors: ["#FF69B4", "#9370DB", "#20B2AA"],
    reviews: [
      {
        username: "Anita R.",
        rating: 9,
        comment: "Beautiful dress that my daughter loves to twirl in!",
      },
      {
        username: "Sanjay M.",
        rating: 8,
        comment: "Good quality fabric and the built-in shorts are great.",
      },
      {
        username: "Priya D.",
        rating: 9,
        comment: "Washes well and the colors stay bright.",
      },
    ],
    imageUrls: [
      "https://i.etsystatic.com/5143695/r/il/53ea10/3494942803/il_570xN.3494942803_qsz1.jpg",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://fredandnoah.com/cdn/shop/products/IMG_8008_2231x.jpg?v=1624312474",
    ],
  },
  {
    id: 33,
    title: "5-Pack Bodysuits",
    type: "Basics",
    category: "Kid's clothing",
    brand: "Carter's",
    originalPrice: 1099,
    salePrice: 899,
    rating: 9.4,
    reviewCount: 678,
    shortDescription:
      "Essential cotton bodysuits in various colors and patterns",
    detailDescription:
      "Set of 5 soft cotton bodysuits featuring mix of solid colors and cute patterns. Expandable shoulders and bottom snaps make dressing easy. Perfect for everyday wear and layering.",
    additionalInformation:
      "Size Range: 0-24M | Material: 100% Cotton | Care: Machine washable",
    colors: ["#FFFFFF", "#FFB6C1", "#B0E0E6"],
    reviews: [
      {
        username: "Deepa S.",
        rating: 10,
        comment: "Best quality bodysuits, so soft for baby's skin!",
      },
      {
        username: "Arjun P.",
        rating: 9,
        comment: "Great value for money, very durable.",
      },
      {
        username: "Meera K.",
        rating: 9,
        comment: "Perfect basics for any baby's wardrobe.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 34,
    title: "Zip-Up Fleece Hoodie",
    type: "Outerwear",
    category: "Kid's clothing",
    brand: "Carter's",
    originalPrice: 1799,
    salePrice: 1499,
    rating: 8.8,
    reviewCount: 345,
    shortDescription: "Cozy fleece hoodie with fun animal ears on hood",
    detailDescription:
      "This adorable zip-up hoodie is made from soft fleece material with cute animal ears on the hood. Features kangaroo pockets and ribbed cuffs. Perfect for cool weather layering.",
    additionalInformation:
      "Size Range: 2T-5T | Material: 100% Polyester Fleece | Care: Machine washable",
    colors: ["#A7C7E7", "#FFB347", "#98FF98"],
    reviews: [
      {
        username: "Kavita R.",
        rating: 9,
        comment: "So cute and warm, my daughter loves the bear ears!",
      },
      {
        username: "Rohit M.",
        rating: 8,
        comment: "Good quality and perfect for winter.",
      },
      {
        username: "Anjali S.",
        rating: 9,
        comment: "Washes well and stays soft.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 35,
    title: "Cargo Shorts Set",
    type: "Sets",
    category: "Kid's clothing",
    brand: "Carter's",
    originalPrice: 1499,
    salePrice: 1199,
    rating: 8.7,
    reviewCount: 234,
    shortDescription: "2-piece set with graphic tee and cargo shorts",
    detailDescription:
      "Complete outfit featuring a fun graphic t-shirt and matching cargo shorts. The shorts have an adjustable waist and multiple pockets. Perfect for active kids who love adventure.",
    additionalInformation:
      "Size Range: 2T-7 | Material: Cotton blend | Care: Machine washable",
    colors: ["#KHAKI", "#NAVY", "#OLIVE"],
    reviews: [
      {
        username: "Vikram S.",
        rating: 9,
        comment: "Great quality and perfect for summer!",
      },
      {
        username: "Pooja K.",
        rating: 8,
        comment: "My son loves all the pockets in the shorts.",
      },
      {
        username: "Rajesh M.",
        rating: 9,
        comment: "Comfortable and durable set.",
      },
    ],
    imageUrls: [
      "https://en-sa.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwccd359a6/sss/SSS2/N/K/8/6/H/SSS2_NK86H383_023_742728121635_1.jpg?sw=700&sh=700&sm=fit",
      "https://images.stylishop.com/cdn-cgi/image/width=500,quality=100/media/catalog/product/2111398320/images/2111398320_1.jpg?v=1",
      "https://images.bestsellerclothing.in/data/JJ/22-mar-2024/900381301_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
    ],
  },
  {
    id: 36,
    title: "Organic Cotton Overall Dress",
    type: "Dresses",
    category: "Kid's clothing",
    brand: "H&M Kids",
    originalPrice: 1699,
    salePrice: 1399,
    rating: 8.9,
    reviewCount: 312,
    shortDescription: "Sustainable denim overall dress with adjustable straps",
    detailDescription:
      "Made from organic cotton denim, this overall dress features adjustable straps, front pocket, and button sides. The A-line cut provides comfort and style. Perfect for everyday wear or special occasions.",
    additionalInformation:
      "Size Range: 1-8Y | Material: 100% Organic Cotton | Care: Machine washable",
    colors: ["#1E90FF", "#FF69B4", "#DENIM"],
    reviews: [
      {
        username: "Sneha R.",
        rating: 9,
        comment: "Love the sustainable fabric and cute design!",
      },
      {
        username: "Karan P.",
        rating: 9,
        comment: "Great quality and easy to adjust.",
      },
      {
        username: "Divya M.",
        rating: 8,
        comment: "Perfect for both play and parties.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 37,
    title: "Printed Sweatshirt Set",
    type: "Sets",
    category: "Kid's clothing",
    brand: "H&M Kids",
    originalPrice: 1899,
    salePrice: 1599,
    rating: 9.1,
    reviewCount: 287,
    shortDescription: "Cozy sweatshirt and jogger set with fun prints",
    detailDescription:
      "Comfortable set including a printed sweatshirt and matching joggers. Made from soft cotton blend fabric with ribbed cuffs and waistband. Perfect for casual wear and playtime.",
    additionalInformation:
      "Size Range: 2-10Y | Material: 80% Cotton, 20% Polyester | Care: Machine washable",
    colors: ["#808080", "#FFB6C1", "#98FB98"],
    reviews: [
      {
        username: "Arun K.",
        rating: 9,
        comment: "Super comfortable and great quality!",
      },
      {
        username: "Mira S.",
        rating: 9,
        comment: "My kid loves wearing this set.",
      },
      {
        username: "Rahul D.",
        rating: 9,
        comment: "Excellent value for money.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 38,
    title: "Tulle Skirt",
    type: "Bottoms",
    category: "Kid's clothing",
    brand: "H&M Kids",
    originalPrice: 1299,
    salePrice: 999,
    rating: 8.8,
    reviewCount: 198,
    shortDescription: "Layered tulle skirt with glitter waistband",
    detailDescription:
      "Magical tulle skirt with multiple layers and a comfortable elastic waistband with glitter detail. The built-in jersey shorts provide coverage and comfort. Perfect for special occasions or dress-up play.",
    additionalInformation:
      "Size Range: 2-10Y | Material: Polyester tulle, Cotton liner | Care: Hand wash",
    colors: ["#FFB6C1", "#E6E6FA", "#FFFFFF"],
    reviews: [
      {
        username: "Nisha P.",
        rating: 9,
        comment: "Beautiful skirt, my daughter feels like a princess!",
      },
      {
        username: "Sonia M.",
        rating: 8,
        comment: "Good quality and not itchy like other tulle skirts.",
      },
      { username: "Aarti K.", rating: 9, comment: "Perfect party wear skirt." },
    ],
    imageUrls: [
      "https://www.chanellewright.com/cdn/shop/products/74607582_786181951835255_1116993613549535232_o.jpg?v=1578937440",
      "https://i.etsystatic.com/14768389/r/il/4bd765/1329559326/il_570xN.1329559326_6rcl.jpg",
      "https://i.ebayimg.com/images/g/0T4AAOSwVaxk0gJK/s-l1200.jpg",
    ],
  },
  {
    id: 39,
    title: "Denim Jacket",
    type: "Outerwear",
    category: "Kid's clothing",
    brand: "H&M Kids",
    originalPrice: 2299,
    salePrice: 1899,
    rating: 9.2,
    reviewCount: 245,
    shortDescription: "Classic denim jacket with stretch comfort",
    detailDescription:
      "Stylish denim jacket with stretch for comfort and easy movement. Features button front, chest pockets, and adjustable button tabs at sides. Perfect for layering in any season.",
    additionalInformation:
      "Size Range: 2-10Y | Material: 98% Cotton, 2% Elastane | Care: Machine washable",
    colors: ["#LIGHTDENIM", "#DARKDENIM"],
    reviews: [
      {
        username: "Aryan S.",
        rating: 9,
        comment: "Great quality and perfect fit!",
      },
      {
        username: "Zara K.",
        rating: 10,
        comment: "Versatile jacket that goes with everything.",
      },
      {
        username: "Kabir M.",
        rating: 9,
        comment: "Excellent construction and style.",
      },
    ],
    imageUrls: [
      "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67093265_TM.jpg?imwidth=2048&imdensity=1&ts=1708418028090",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.meesho.com/images/products/425689523/sdvom_512.webp",
    ],
  },
  {
    id: 40,
    title: "Organic Cotton Pajama Set",
    type: "Sleepwear",
    category: "Kid's clothing",
    brand: "H&M Kids",
    originalPrice: 1499,
    salePrice: 1199,
    rating: 9.0,
    reviewCount: 334,
    shortDescription: "Soft organic cotton pajamas with fun prints",
    detailDescription:
      "Comfortable pajama set made from organic cotton featuring fun prints. Long-sleeve top with round neck and full-length pants with elastic waistband. Perfect for a cozy night's sleep.",
    additionalInformation:
      "Size Range: 1-10Y | Material: 100% Organic Cotton | Care: Machine washable",
    colors: ["#E6E6FA", "#98FB98", "#FFB6C1"],
    reviews: [
      {
        username: "Ishaan R.",
        rating: 9,
        comment: "Super soft and comfortable!",
      },
      {
        username: "Myra P.",
        rating: 9,
        comment: "Great quality organic cotton.",
      },
      {
        username: "Advait S.",
        rating: 9,
        comment: "Perfect for sensitive skin.",
      },
    ],
    imageUrls: [
      "https://us.hatley.com/cdn/shop/files/pdp_zoom_d6076762-bfbd-4547-bbc1-dfa477d13ea5.jpg?v=1720730051&width=1445",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/fe0a33b4-e1e8-5c4c-a318-5f7d604cef19/6d37201a-9505-5cd4-83a6-b2daff697d2b.jpg",
      "https://www.citythreads.com/cdn/shop/products/8_18ffffc2-fa5a-49ba-a125-36b99ac58107_1200x.png?v=1694831184",
    ],
  },
  {
    id: 41,
    title: "Stretch Denim Jeans",
    type: "Bottoms",
    category: "Kid's clothing",
    brand: "Gap Kids",
    originalPrice: 2499,
    salePrice: 1999,
    rating: 9.3,
    reviewCount: 423,
    shortDescription: "Classic stretch denim jeans with adjustable waist",
    detailDescription:
      "These classic jeans feature stretch denim for comfort and mobility. The internal adjustable waistband ensures a perfect fit. Five-pocket styling and reinforced knees make these perfect for active kids.",
    additionalInformation:
      "Size Range: 4-16Y | Material: 98% Cotton, 2% Elastane | Care: Machine washable",
    colors: ["#000080", "#4169E1", "#LIGHTBLUE"],
    reviews: [
      {
        username: "Rohan S.",
        rating: 9,
        comment: "Best fitting kids jeans we've found!",
      },
      {
        username: "Isha M.",
        rating: 10,
        comment: "Great quality and very durable.",
      },
      {
        username: "Vivaan K.",
        rating: 9,
        comment: "Perfect for school and play.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.meesho.com/images/products/430438101/7ow7w_512.webp",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 42,
    title: "Logo Hoodie",
    type: "Outerwear",
    category: "Kid's clothing",
    brand: "Gap Kids",
    originalPrice: 2299,
    salePrice: 1799,
    rating: 8.9,
    reviewCount: 287,
    shortDescription: "Classic Gap logo hoodie in soft fleece",
    detailDescription:
      "Comfortable hoodie featuring the iconic Gap logo. Made from soft fleece material with kangaroo pocket and adjustable hood. Perfect for everyday wear and layering.",
    additionalInformation:
      "Size Range: 4-16Y | Material: 80% Cotton, 20% Polyester | Care: Machine washable",
    colors: ["#808080", "#000000", "#NAVY"],
    reviews: [
      {
        username: "Aisha P.",
        rating: 9,
        comment: "Classic style and great quality!",
      },
      { username: "Rehan K.", rating: 8, comment: "Comfortable and warm." },
      { username: "Sara M.", rating: 9, comment: "Perfect school sweater." },
    ],
    imageUrls: [
      "https://lookagain.scene7.com/is/image/OttoUK/600w/Kids-Logo-Print-Hoodie-by-KangaROOS~51245636FRSP.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20241224/s5cP/676a48d8c148fa1b305af81b/-473Wx593H-442306913-blue-MODEL.jpg",
      "https://images.jackjones.com/12258823/4547989/008/jackjones-jjelogosweathood2col24-25noosjnr-yellow.jpg?v=f69d7f72182cc2cc6316afb10065a265&format=webp&width=1280&quality=90&key=25-0-3",
    ],
  },
  {
    id: 43,
    title: "Uniform Polo Dress",
    type: "Dresses",
    category: "Kid's clothing",
    brand: "Gap Kids",
    originalPrice: 1999,
    salePrice: 1599,
    rating: 9.1,
    reviewCount: 198,
    shortDescription: "Classic polo dress perfect for school uniforms",
    detailDescription:
      "This polo dress features a classic design with ribbed collar and cuffs. The breathable pique cotton fabric keeps kids comfortable all day. Perfect for school or casual wear.",
    additionalInformation:
      "Size Range: 4-16Y | Material: 100% Cotton Pique | Care: Machine washable",
    colors: ["#NAVY", "#RED", "#WHITE"],
    reviews: [
      {
        username: "Neha S.",
        rating: 9,
        comment: "Perfect school uniform dress!",
      },
      {
        username: "Arjun P.",
        rating: 9,
        comment: "Good quality and washes well.",
      },
      {
        username: "Riya K.",
        rating: 9,
        comment: "Comfortable for all-day wear.",
      },
    ],
    imageUrls: [
      "https://image.made-in-china.com/2f0j00PyHlYBignnbV/Custom-Logo-Short-Sleeve-School-Uniform-Polo-Shirt-Dress-and-Short-Sport-Wear-2-Piece-Set-School-Uniforms-for-Girls-and-Boys.webp",
      "https://s.alicdn.com/@sc04/kf/HTB1Lth9gHZnBKNjSZFrq6yRLFXaJ.jpg_720x720q50.jpg",
      "https://image.made-in-china.com/202f0j00kmMbYuOqpFcn/Summer-Short-Sleeve-Dress-Primary-School-Uniform-Polo-Long-School-Girl-Dress-Uniform-for-Kids-Girls-School.webp",
    ],
  },
  {
    id: 44,
    title: "Cargo Pants",
    type: "Bottoms",
    category: "Kid's clothing",
    brand: "Gap Kids",
    originalPrice: 2199,
    salePrice: 1799,
    rating: 8.8,
    reviewCount: 245,
    shortDescription: "Durable cargo pants with multiple pockets",
    detailDescription:
      "These cargo pants feature multiple pockets and an adjustable waist for the perfect fit. Made from durable cotton twill with reinforced knees. Perfect for adventure and everyday wear.",
    additionalInformation:
      "Size Range: 4-16Y | Material: 100% Cotton Twill | Care: Machine washable",
    colors: ["#KHAKI", "#OLIVE", "#BROWN"],
    reviews: [
      {
        username: "Vihaan R.",
        rating: 9,
        comment: "Great pants with lots of pockets!",
      },
      { username: "Anaya S.", rating: 8, comment: "Durable and comfortable." },
      { username: "Dev M.", rating: 9, comment: "Perfect for active kids." },
    ],
    imageUrls: [
      "https://5.imimg.com/data5/ANDROID/Default/2020/9/MO/KE/XH/25983076/product-jpeg.jpg",
      "https://images-cdn.ubuy.co.in/657b0f402527684f37169038-patpat-boys-cargo-pants-with-pocket.jpg",
      "https://image.made-in-china.com/2f0j00BjRbAYtKEvoP/Spring-Autumn-High-Quality-Boy-s-Casual-Trouser-Popular-Kids-Cargo-Pants.jpg",
    ],
  },
  {
    id: 45,
    title: "Graphic T-Shirt Pack",
    type: "Tops",
    category: "Kid's clothing",
    brand: "Gap Kids",
    originalPrice: 1699,
    salePrice: 1399,
    rating: 9.0,
    reviewCount: 312,
    shortDescription: "3-pack of graphic t-shirts with fun designs",
    detailDescription:
      "Set of three cotton t-shirts featuring fun graphic prints. Short sleeves and crew neck design with reinforced seams. Perfect for everyday wear and easy mixing and matching.",
    additionalInformation:
      "Size Range: 4-16Y | Material: 100% Cotton | Care: Machine washable",
    colors: ["#MULTI"],
    reviews: [
      {
        username: "Aarav P.",
        rating: 9,
        comment: "Great quality and fun designs!",
      },
      { username: "Kiara S.", rating: 9, comment: "Good value for money." },
      { username: "Advika M.", rating: 9, comment: "Holds up well in wash." },
    ],
    imageUrls: [
      "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022526466_437Wx649H_202406072212411.jpeg",
      "https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000010616067-Multicolour-M-1000010616067-9292021_01-2100.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240928/JG6y/66f768e7f9b8ef490b7980f7/-473Wx593H-700492653-multi-MODEL.jpg",
    ],
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
    detailDescription:
      "The Nike Air Max 270 combines style and performance with its distinctive Air unit in the heel, the tallest yet at 32mm. The shoe features a breathable mesh upper, foam midsole for responsive cushioning, and a rubber outsole for durability. Perfect for both athletic performance and casual wear.",
    additionalInformation:
      "Style: AH8050-100 | Weight: 300g | Cushlon foam midsole | Engineered mesh upper",
    colors: ["#FFFFFF", "#000000", "#FF0000"],
    reviews: [
      {
        username: "Virat K.",
        rating: 9,
        comment: "Best running shoes I've ever owned. Perfect cushioning!",
      },
      {
        username: "Deepika R.",
        rating: 10,
        comment: "Stylish and super comfortable for long walks.",
      },
      {
        username: "Arjun M.",
        rating: 9,
        comment: "Great quality and worth the investment.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    ],
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
    detailDescription:
      "The Nike ZoomX Vaporfly NEXT% is designed for racing and training. Features ZoomX foam for ultimate energy return, a full-length carbon fiber plate for propulsion, and an engineered mesh upper for breathability. The shoe that's breaking records worldwide.",
    additionalInformation:
      "Style: AO4568-800 | Weight: 190g | ZoomX foam | Carbon fiber plate",
    colors: ["#00FF00", "#0000FF", "#FF0000"],
    reviews: [
      {
        username: "Rohit S.",
        rating: 10,
        comment: "Incredible speed improvement in my marathon time!",
      },
      {
        username: "Anita P.",
        rating: 9,
        comment: "Worth every penny for serious runners.",
      },
      {
        username: "Karthik N.",
        rating: 9,
        comment: "The energy return is phenomenal.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      "https://images.unsplash.com/photo-1539185441755-769473a23570",
    ],
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
    detailDescription:
      "The Air Jordan 1 Retro High OG continues to be a cultural icon. Features premium leather construction, Air-Sole cushioning, and classic high-top design. The shoe that started the sneaker revolution maintains its status as a must-have for collectors and enthusiasts.",
    additionalInformation:
      "Style: 555088-062 | Genuine leather upper | Air cushioning | Rubber outsole",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    reviews: [
      {
        username: "Sneakerhead_Jay",
        rating: 10,
        comment: "Classic silhouette, premium materials!",
      },
      {
        username: "Maya R.",
        rating: 9,
        comment: "Perfect for both style and comfort.",
      },
      {
        username: "Aditya K.",
        rating: 9,
        comment: "Best colorway in my collection.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      "https://images.unsplash.com/photo-1586525198428-225f6f12cff5",
    ],
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
    detailDescription:
      "The Nike React Infinity Run Flyknit combines maximum cushioning with stability features to help reduce injury. The Flyknit upper provides breathability and support where you need it most, while React foam delivers a smooth, responsive ride.",
    additionalInformation:
      "Style: CD4371-002 | React foam technology | Flyknit upper | Rocker geometry",
    colors: ["#000000", "#808080", "#0000FF"],
    reviews: [
      {
        username: "Runner_Priya",
        rating: 9,
        comment: "Perfect balance of cushioning and support!",
      },
      {
        username: "Nikhil M.",
        rating: 8,
        comment: "Great for long-distance running.",
      },
      {
        username: "Sonia T.",
        rating: 9,
        comment: "Helped with my knee issues.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://wornwellhub.com/wp-content/uploads/2024/11/p-photo-2024-11-11-12-44-07-13-17-07-878819.webp",
      "https://heartbreak.run/cdn/shop/products/DH5392-401-PHSRH000-2000_740x.jpg?v=1669232040",
    ],
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
    detailDescription:
      "The Nike Metcon 7 is built for heavy lifting, high-intensity intervals, and everything in between. Features a wide heel for stability, React foam cushioning in the forefoot, and a textured upper for rope climbing durability.",
    additionalInformation:
      "Style: CZ8281-010 | Hyperlift insert | React foam | Rubber sidewalls",
    colors: ["#000000", "#FF0000", "#FFFFFF"],
    reviews: [
      {
        username: "Gym_Guru",
        rating: 9,
        comment: "Perfect for CrossFit and weight training!",
      },
      {
        username: "Rishi P.",
        rating: 9,
        comment: "Stable platform for heavy lifts.",
      },
      {
        username: "Anjali S.",
        rating: 9,
        comment: "Versatile for various workouts.",
      },
    ],
    imageUrls: [
      "https://images-cdn.ubuy.co.in/66805e2d608cf94aba671756-nike-men-39-s-sneaker.jpg",
      "https://i1.t4s.cz/products/dh3344-003/nike-metcon-7-flyease-472173-dh3344-003.jpeg",
      "https://fitatmidlife.com/wp-content/uploads/Nike-Metcon-7-AMP-Shoe-Review-2-crop.jpg",
    ],
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
    detailDescription:
      "The Adidas Ultraboost 21 features 6% more Boost capsules than its predecessor, delivering incredible energy return. The Primeknit+ upper adapts to your foot's movement while the Linear Energy Push system enhances responsiveness.",
    additionalInformation:
      "Style: FY0378 | Boost midsole | Primeknit+ upper | Continental™ rubber outsole",
    colors: ["#000000", "#FFFFFF", "#808080"],
    reviews: [
      {
        username: "Marathon_Man",
        rating: 10,
        comment: "The comfort is unmatched!",
      },
      {
        username: "Shreya K.",
        rating: 9,
        comment: "Perfect for long runs and daily wear.",
      },
      {
        username: "Rajesh M.",
        rating: 9,
        comment: "Best running shoes I've owned.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
      "https://images.unsplash.com/photo-1620794341491-76be6eeb6946",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
    ],
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
    detailDescription:
      "The Adidas NMD_R1 combines modern aesthetics with performance features. The Boost midsole provides responsive cushioning while the engineered mesh upper offers breathability. Perfect for city exploration and casual wear.",
    additionalInformation:
      "Style: FY5983 | Boost technology | Engineered mesh | EVA plug details",
    colors: ["#000000", "#FF0000", "#0000FF"],
    reviews: [
      {
        username: "Urban_Explorer",
        rating: 9,
        comment: "Stylish and super comfortable!",
      },
      { username: "Neha R.", rating: 8, comment: "Great for everyday wear." },
      {
        username: "Kunal S.",
        rating: 9,
        comment: "Perfect balance of style and comfort.",
      },
    ],
    imageUrls: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec857a26f920444eb59d816d37d31f0a_9366/TRACK-GAIT_Black_JK1262_01_00_standard.jpg",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
    ],
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
    shortDescription:
      "Professional-grade football boots with Zone Skin technology",
    detailDescription:
      "The Adidas Predator Edge+ features innovative Zone Skin technology for precise ball control. The laceless design provides a clean striking surface while the split outsole ensures optimal traction on firm ground surfaces.",
    additionalInformation:
      "Style: GW1015 | Zone Skin upper | Firm ground studs | Laceless design",
    colors: ["#000000", "#FF0000", "#FFFFFF"],
    reviews: [
      {
        username: "Football_Pro",
        rating: 9,
        comment: "Best control I've experienced!",
      },
      {
        username: "Arjun S.",
        rating: 9,
        comment: "Worth every rupee for serious players.",
      },
      {
        username: "Rahul D.",
        rating: 9,
        comment: "Amazing grip and ball feel.",
      },
    ],
    imageUrls: [
      "https://thumblr.uniid.it/product/238724/a037a4a66921.jpg?width=3840&format=webp&q=75",
      "https://thumblr.uniid.it/product/239026/8cf4fee194e9.jpg?width=3840&format=webp&q=75",
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-63424376/adidas_adidas_predator_edge-3_firm_ground_football_shoes_sepatu_sepakbola_pria_-gw1002-_full04_sd0e5wlu.jpg",
    ],
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
    detailDescription:
      "The Adidas Forum Low celebrates basketball heritage with modern updates. Features premium leather upper, signature ankle strap, and comfortable cushioning. A timeless design that's perfect for everyday style.",
    additionalInformation:
      "Style: FY7756 | Leather upper | EVA midsole | Rubber outsole",
    colors: ["#FFFFFF", "#0000FF", "#FFD700"],
    reviews: [
      {
        username: "Style_Savvy",
        rating: 9,
        comment: "Classic look with modern comfort!",
      },
      { username: "Priya M.", rating: 9, comment: "Perfect retro vibes." },
      {
        username: "Vikram K.",
        rating: 8,
        comment: "Great quality for the price.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
      "https://images.unsplash.com/photo-1603808033176-9d134e6f2c74",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Forum_Low_Shoes_White_FY7757_01_standard.jpg",
    ],
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
    detailDescription:
      "The Adidas 4DFWD features a revolutionary 3D-printed midsole that transforms vertical pressure into forward motion. The Primeknit+ upper provides adaptive support while the unique lattice structure offers precise cushioning.",
    additionalInformation:
      "Style: Q46447 | 3D-printed 4D midsole | Primeknit+ upper | Continental™ rubber outsole",
    colors: ["#000000", "#FF69B4", "#808080"],
    reviews: [
      {
        username: "Tech_Runner",
        rating: 9,
        comment: "Revolutionary cushioning system!",
      },
      { username: "Anish P.", rating: 9, comment: "Future of running shoes." },
      {
        username: "Meera S.",
        rating: 9,
        comment: "Unique feel and great performance.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42",
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fadidas-4dfwd-pulse-signal-green-q46451-release-date-1.jpg?q=75&w=800&cbr=1&fit=max",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/49c1e513-476e-548f-8c36-c2bc77551a5e/cc6f2a81-5c1e-509b-917d-8856d937ccaf.jpg",
    ],
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
    detailDescription:
      "The New Balance Fresh Foam X 1080v12 delivers premium cushioning for long-distance running. The Fresh Foam X midsole provides exceptional comfort while the engineered knit upper offers strategic areas of stretch and support.",
    additionalInformation:
      "Style: M1080B12 | Fresh Foam X midsole | Hypoknit upper | Ortholite sockliner",
    colors: ["#000000", "#0000FF", "#808080"],
    reviews: [
      {
        username: "Distance_Runner",
        rating: 9,
        comment: "Perfect for marathon training!",
      },
      { username: "Sanjay R.", rating: 10, comment: "Best cushioning ever." },
      { username: "Pooja M.", rating: 9, comment: "Great for long runs." },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/9dac5a7e-0f9a-5c9a-8c92-63d6b7223279/0cc90d30-a5b6-5b17-84e7-d69176530e61.jpg",
      "https://cdn.mos.cms.futurecdn.net/DPnxwM7aHibtP7cGvS2emh.jpg",
    ],
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
    detailDescription:
      "The New Balance 990v5 continues the legacy of the 990 series. Features premium pigskin suede upper, ENCAP midsole technology, and OrthoLite insert for superior comfort. Made in USA with domestic and imported materials.",
    additionalInformation:
      "Style: M990GL5 | ENCAP midsole | Made in USA | Pigskin suede upper",
    colors: ["#808080", "#000000", "#FFFFFF"],
    reviews: [
      {
        username: "Sneaker_Collector",
        rating: 9,
        comment: "Classic silhouette, premium quality!",
      },
      { username: "Amit B.", rating: 9, comment: "Worth the investment." },
      {
        username: "Ritu S.",
        rating: 9,
        comment: "Most comfortable casual shoes.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2Fnew-balance-990-v5-made-in-us-grey-00.jpg?w=960&cbr=1&q=90&fit=max",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/d240ae9a-fd18-5635-8582-b8cc8b4c35f8/261927f6-e828-52c9-a5de-fa05d581f3d1.jpg",
    ],
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
    detailDescription:
      "The New Balance FuelCell RC Elite v2 is designed for race day performance. Features FuelCell foam for maximum energy return, full-length carbon fiber plate for propulsion, and engineered mesh upper for lightweight breathability.",
    additionalInformation:
      "Style: MRCELT2 | FuelCell foam | Carbon fiber plate | Weight: 225g",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    reviews: [
      {
        username: "Speed_Demon",
        rating: 10,
        comment: "Set my personal best in these!",
      },
      { username: "Karan M.", rating: 9, comment: "Incredible racing shoe." },
      {
        username: "Divya P.",
        rating: 9,
        comment: "Worth every penny for racing.",
      },
    ],
    imageUrls: [
      "https://5.imimg.com/data5/SELLER/Default/2024/1/373401914/XG/NY/OZ/102860792/whatsapp-image-2023-12-21-at-4-50-17-pm-1-500x500.jpeg",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/4924585c-9740-5af0-b98b-f2ee95ff9418/cfe32d8d-7011-565b-ace5-0273f4adc8e0.jpg",
      "https://images-cdn.ubuy.co.in/6540d4621f5e2829a339f68c-new-balance-men-39-s-fuelcell-rc-elite.jpg",
    ],
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
    detailDescription:
      "The New Balance Fresh Foam Hierro v7 is built for trail running adventures. Features Fresh Foam midsole cushioning, Vibram® MegaGrip outsole for superior traction, and a synthetic/mesh upper with TPU overlays for protection.",
    additionalInformation:
      "Style: MTHIERV7 | Vibram® MegaGrip | Fresh Foam midsole | TOE PROTECT™",
    colors: ["#008000", "#000000", "#FFA500"],
    reviews: [
      {
        username: "Trail_Runner",
        rating: 9,
        comment: "Perfect for rough terrains!",
      },
      {
        username: "Neeraj K.",
        rating: 9,
        comment: "Great grip on wet surfaces.",
      },
      { username: "Swati R.", rating: 8, comment: "Durable and comfortable." },
    ],
    imageUrls: [
      "https://images.bauerhosting.com/affiliates/sites/2/2023/10/New-Balance-Fresh-Foam-X-Hierro-v7-review-1.jpg?auto=format&w=1440&q=80",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/878ac8b9-32f8-5098-a0c3-a23a68d75fe8/f813def0-89ee-5d07-a1a1-fb1e618144a5.jpg",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/6add1114-fb57-5251-8d53-7dc09cad082f/cc6f2a81-5c1e-509b-917d-8856d937ccaf.jpg",
    ],
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
    detailDescription:
      "The New Balance 574 is a timeless classic that combines style and comfort. Features ENCAP midsole technology for support, suede/mesh upper for durability and breathability, and EVA foam cushioning for all-day comfort.",
    additionalInformation:
      "Style: ML574EVG | ENCAP midsole | Suede/mesh upper | EVA foam cushioning",
    colors: ["#000080", "#808080", "#000000"],
    reviews: [
      {
        username: "Retro_Lover",
        rating: 9,
        comment: "Classic style that never gets old!",
      },
      { username: "Arun P.", rating: 8, comment: "Great everyday sneaker." },
      { username: "Mira K.", rating: 9, comment: "Comfortable and stylish." },
    ],
    imageUrls: [
      "https://m.media-amazon.com/images/I/51bWK0yNBVL._AC_SY695_.jpg",
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F07%2Fnew-balance-574-sport-official-unveil-tw.jpg?w=960&cbr=1&q=90&fit=max",
      "https://resources.booztcdn.com/211736-1602502388_574ML574EGG5copy.jpg",
    ],
  },
  {
    id: 61,
    title: "Rolex Submariner Date",
    type: "Luxury Diving Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 8999,
    salePrice: 8499,
    rating: 9.8,
    reviewCount: 456,
    shortDescription:
      "Iconic diving watch with Cerachrom bezel and Glidelock clasp",
    detailDescription:
      "The Rolex Submariner Date is the benchmark for diving watches. Features a unidirectional rotatable bezel with Cerachrom insert, water resistance to 300 meters, and Rolex's prestigious 3235 movement. The 41mm Oystersteel case houses a black dial with Chromalight display for exceptional legibility in dark conditions. The Oyster bracelet with Glidelock extension system ensures perfect fit over diving suits.",
    additionalInformation:
      "Case: 41mm Oystersteel | Movement: Calibre 3235 | Water Resistance: 300m | Power Reserve: 70 hours",
    colors: ["#000000", "#0000FF", "#006400"],
    reviews: [
      {
        username: "Watch_Collector",
        rating: 10,
        comment: "The ultimate diving watch. Impeccable quality and precision.",
      },
      {
        username: "Luxury_Enthusiast",
        rating: 9,
        comment: "A true investment piece that holds its value.",
      },
      {
        username: "Diving_Pro",
        rating: 10,
        comment: "Reliable companion for both diving and daily wear.",
      },
    ],
    imageUrls: [
      "https://cdn.prod.website-files.com/636a2d3c26aa845d12b17679/645a5a5b722c712a9f2b4102_2019-11-04-rolex-submariner-date-ref-116610ln-49.webp",
      "https://img.chrono24.com/images/uhren/37208939-ztd1ndjvefju3tnblgdx77l7-ExtraLarge.jpg",
      "https://media.rolex.com/image/upload/q_auto:best/f_auto/c_limit,w_3840/v1727258031/rolexcom/collection/family-pages/professional-watches/submariner/top-navigation/professional-watches-submariner-all-models-navigation_m126603-0001_2210jva_001",
    ],
  },
  {
    id: 62,
    title: "Rolex Daytona",
    type: "Luxury Chronograph",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 14999,
    salePrice: 14499,
    rating: 9.9,
    reviewCount: 378,
    shortDescription: "Legendary chronograph with precious metal construction",
    detailDescription:
      "The Rolex Cosmograph Daytona in 18kt white gold is the pinnacle of luxury chronographs. Features a tachymetric scale on the bezel for measuring average speeds, three chronograph subdials, and Rolex's high-precision 4130 movement. The case back is fitted with a sapphire crystal for viewing the intricate movement.",
    additionalInformation:
      "Case: 40mm 18kt White Gold | Movement: Calibre 4130 | Water Resistance: 100m | Chronograph Function",
    colors: ["#C0C0C0", "#FFD700", "#FFFFFF"],
    reviews: [
      {
        username: "Racing_Enthusiast",
        rating: 10,
        comment: "The ultimate chronograph. Worth every penny!",
      },
      {
        username: "Timepiece_Master",
        rating: 9,
        comment: "Exceptional build quality and precision.",
      },
      {
        username: "Luxury_Connoisseur",
        rating: 10,
        comment: "The holy grail of chronographs.",
      },
    ],
    imageUrls: [
      "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/r/o/rolex-cosmograph-daytona-116503-powg19b-multiple-4.jpg",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/14f6b13f-cd7b-5f4a-bba2-751560d5ac18/fd2437ed-2e64-5cc0-8e21-2ea42a698ca0.jpg",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/5c8976c3-b611-5ba1-9ed3-1f8d03e1432d/f47ab36e-fb8f-5a32-a7d2-89b3d60c4633.jpg",
    ],
  },
  {
    id: 63,
    title: "Rolex GMT-Master II",
    type: "Luxury Travel Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 9999,
    salePrice: 9599,
    rating: 9.7,
    reviewCount: 423,
    shortDescription: "Dual time zone watch with iconic 'Pepsi' bezel",
    detailDescription:
      "The Rolex GMT-Master II features the iconic red and blue 'Pepsi' Cerachrom bezel, allowing travelers to read two time zones simultaneously. The 40mm Oystersteel case houses Rolex's caliber 3285 movement, featuring Chronergy escapement and blue Parachrom hairspring. The Jubilee bracelet provides both comfort and elegance.",
    additionalInformation:
      "Case: 40mm Oystersteel | Movement: Calibre 3285 | Water Resistance: 100m | GMT Function",
    colors: ["#0000FF", "#FF0000", "#000000"],
    reviews: [
      {
        username: "Global_Traveler",
        rating: 9,
        comment: "Perfect companion for international travel.",
      },
      {
        username: "Watch_Expert",
        rating: 10,
        comment: "The best GMT watch in the market.",
      },
      {
        username: "Pilot_Pro",
        rating: 9,
        comment: "Reliable and beautiful timepiece.",
      },
    ],
    imageUrls: [
      "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/r/o/rolex-gmt-master-ii-126710blnr-blkind-powg22c-multiple-1.jpg",
      "https://newsroom-content.rolex.com/-/media/project/rolex/newsroom/rolex/rolex-newsroom-int/2024-04/gmt-master-ii/responsive-images/newsroom-topolino-m126710grnr-0004_2401uf_002.jpg?imwidth=337",
      "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/r/o/rolex-gmt-master-ii-126710blro-blkind-multiple-7.jpg",
    ],
  },
  {
    id: 64,
    title: "Rolex Day-Date 40",
    type: "Luxury Dress Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 35999,
    salePrice: 34999,
    rating: 9.8,
    reviewCount: 289,
    shortDescription:
      "Presidential watch in 18kt yellow gold with day and date display",
    detailDescription:
      "The Rolex Day-Date 40 in 18kt yellow gold is the epitome of luxury dress watches. Features the signature President bracelet, instantaneous day and date displays, and Rolex's advanced 3255 movement. The champagne dial with Roman numerals exudes elegance, while the fluted bezel adds classic Rolex character.",
    additionalInformation:
      "Case: 40mm 18kt Yellow Gold | Movement: Calibre 3255 | Water Resistance: 100m | President Bracelet",
    colors: ["#FFD700", "#FFFFFF", "#C0C0C0"],
    reviews: [
      {
        username: "Executive_Style",
        rating: 10,
        comment: "The ultimate status symbol.",
      },
      {
        username: "Gold_Standard",
        rating: 9,
        comment: "Impeccable craftsmanship and presence.",
      },
      {
        username: "Luxury_Life",
        rating: 10,
        comment: "Nothing compares to a gold Day-Date.",
      },
    ],
    imageUrls: [
      "https://cdn11.bigcommerce.com/s-eie9lsi1uc/images/stencil/1280x1280/products/205692/2452163/rolex-day-date-40-228238-chpsp-79__24728.1741010093.jpg?c=1",
      "https://newsroom-content.rolex.com/-/media/project/rolex/newsroom/rolex/rolex-newsroom-int/2022/day-date/01_banner/m228236-0012_2201jva_001-v1.jpg?imwidth=375&impolicy=grid-1",
      "https://cdn11.bigcommerce.com/s-eie9lsi1uc/images/stencil/1280x1280/products/205691/2451939/rolex-day-date-40-228239-blurp-72__80070.1741010021.jpg?c=1",
    ],
  },
  {
    id: 65,
    title: "Rolex Sky-Dweller",
    type: "Luxury Complicated Watches",
    category: "Watches",
    brand: "Rolex",
    originalPrice: 17999,
    salePrice: 17499,
    rating: 9.6,
    reviewCount: 245,
    shortDescription: "Annual calendar with dual time zone functionality",
    detailDescription:
      "The Rolex Sky-Dweller combines sophisticated functionality with elegant design. Features an annual calendar that automatically differentiates between 30 and 31-day months, dual time zone display, and innovative Ring Command bezel system. The 42mm case houses Rolex's complex caliber 9001 movement.",
    additionalInformation:
      "Case: 42mm Oystersteel | Movement: Calibre 9001 | Water Resistance: 100m | Annual Calendar",
    colors: ["#000000", "#C0C0C0", "#FFD700"],
    reviews: [
      {
        username: "Tech_Watch",
        rating: 9,
        comment: "Most innovative Rolex complication.",
      },
      {
        username: "Business_Class",
        rating: 10,
        comment: "Perfect for international executives.",
      },
      {
        username: "Horology_Fan",
        rating: 9,
        comment: "Engineering masterpiece.",
      },
    ],
    imageUrls: [
      "https://watchesbysjx.com/wp-content/uploads/2024/07/rolex-sky-dweller-white-gold-oysterflex.jpg",
      "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/r/o/rolex-sky-dweller-326934-powg18b-multiple-2.jpg",
      "https://img.chrono24.com/images/uhren/27178325-9ig089vjcnavusdfei0y11vz-ExtraLarge.jpg",
    ],
  },
  {
    id: 66,
    title: "Omega Speedmaster Professional",
    type: "Luxury Chronograph",
    category: "Watches",
    brand: "Omega",
    originalPrice: 6999,
    salePrice: 6499,
    rating: 9.7,
    reviewCount: 567,
    shortDescription: "The first watch worn on the moon",
    detailDescription:
      "The Omega Speedmaster Professional 'Moonwatch' is a piece of space exploration history. Features the hand-wound caliber 3861 movement, hesalite crystal, and signature chronograph functionality. The 42mm steel case houses a black dial with luminous hands and markers, while the tachymeter scale bezel allows speed calculations.",
    additionalInformation:
      "Case: 42mm Stainless Steel | Movement: Calibre 3861 | Water Resistance: 50m | NASA Flight Qualified",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      {
        username: "Space_Enthusiast",
        rating: 10,
        comment: "A piece of space history on the wrist!",
      },
      {
        username: "Chrono_Master",
        rating: 9,
        comment: "Timeless design, incredible heritage.",
      },
      {
        username: "Moon_Watch",
        rating: 10,
        comment: "The only watch you'll ever need.",
      },
    ],
    imageUrls: [
      "https://www.omegawatches.com/media/wysiwyg/Precision-PN15-large.jpg",
      "https://www.omegawatches.com/media/wysiwyg/Home_SP_MoonphaseMeteorite_large.jpg",
      "https://www.omegawatches.com/media/wysiwyg/Precision-PN15-watch.png",
    ],
  },
  {
    id: 67,
    title: "Omega Seamaster Diver 300M",
    type: "Luxury Diving Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 54999,
    salePrice: 51999,
    rating: 9.5,
    reviewCount: 478,
    shortDescription: "Professional diver's watch with wave-pattern dial",
    detailDescription:
      "The Omega Seamaster Diver 300M features the iconic wave-pattern dial, ceramic bezel, and helium escape valve. The 42mm case houses Omega's Co-Axial Master Chronometer caliber 8800 movement. Water-resistant to 300 meters, it combines professional diving capabilities with elegant design.",
    additionalInformation:
      "Case: 42mm Stainless Steel | Movement: Calibre 8800 | Water Resistance: 300m | Master Chronometer Certified",
    colors: ["#0000FF", "#000000", "#C0C0C0"],
    reviews: [
      {
        username: "Ocean_Explorer",
        rating: 9,
        comment: "Best diving watch in its class!",
      },
      {
        username: "Watch_Pro",
        rating: 10,
        comment: "Incredible value for money.",
      },
      {
        username: "Dive_Master",
        rating: 9,
        comment: "Perfect balance of style and function.",
      },
    ],
    imageUrls: [
      "https://www.omegawatches.com/media/wysiwyg/SE-2103042200101-P-large.jpg",
      "https://www.omegawatches.com/media/wysiwyg/Home_SP_30430435206001.png",
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21090422001003-c0bfe1.png?w=400",
    ],
  },
  {
    id: 68,
    title: "Omega Constellation",
    type: "Luxury Dress Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 7999,
    salePrice: 7599,
    rating: 9.4,
    reviewCount: 345,
    shortDescription:
      "Elegant timepiece with signature claws and integrated bracelet",
    detailDescription:
      "The Omega Constellation features the iconic 'Manhattan' design with signature claws and integrated bracelet. The 39mm case houses Omega's Co-Axial Master Chronometer caliber 8900 movement. The sunburst dial with diamond hour markers and date window exemplifies luxury.",
    additionalInformation:
      "Case: 39mm Stainless Steel & Gold | Movement: Calibre 8900 | Water Resistance: 100m | Diamond Indices",
    colors: ["#FFD700", "#C0C0C0", "#000000"],
    reviews: [
      {
        username: "Luxury_Daily",
        rating: 9,
        comment: "Perfect dress watch for any occasion.",
      },
      {
        username: "Style_Icon",
        rating: 9,
        comment: "Elegant and sophisticated design.",
      },
      {
        username: "Watch_Critic",
        rating: 10,
        comment: "Outstanding finishing and comfort.",
      },
    ],
    imageUrls: [
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/08372447-6a27-5795-a34d-595576e9f447/f3628426-050a-5c99-9e9e-0f38ea2a0bc6.jpg",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b",
      "https://www.omegawatches.com/media/wysiwyg/Home_SP_Pilot_KV_Push.jpg",
    ],
  },
  {
    id: 69,
    title: "Omega De Ville Tresor",
    type: "Luxury Dress Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 8999,
    salePrice: 8499,
    rating: 9.3,
    reviewCount: 234,
    shortDescription: "Ultra-thin dress watch with vintage inspiration",
    detailDescription:
      "The Omega De Ville Tresor represents the pinnacle of elegant watchmaking. Features a slim 40mm case in 18kt rose gold, domed opaline silvery dial with applied indices, and Omega's precise caliber 8910 movement. The brown alligator strap completes the sophisticated look.",
    additionalInformation:
      "Case: 40mm 18kt Rose Gold | Movement: Calibre 8910 | Water Resistance: 30m | Alligator Strap",
    colors: ["#FFD700", "#8B4513", "#FFFFFF"],
    reviews: [
      {
        username: "Vintage_Love",
        rating: 9,
        comment: "Classic elegance at its finest.",
      },
      {
        username: "Dress_Watch",
        rating: 10,
        comment: "Perfect for formal occasions.",
      },
      {
        username: "Gold_Class",
        rating: 9,
        comment: "Understated luxury at its best.",
      },
    ],
    imageUrls: [
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-de-ville-mini-tresor-quartz-26-mm-42817266004007-5898e2.png?w=700",
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-de-ville-mini-tresor-quartz-26-mm-42817266004008-0f56e0.png?w=700",
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-de-ville-mini-tresor-quartz-26-mm-42815266004001-c9d10e.png?w=700",
    ],
  },
  {
    id: 70,
    title: "Omega Aqua Terra 150M",
    type: "Luxury Sports Watches",
    category: "Watches",
    brand: "Omega",
    originalPrice: 5999,
    salePrice: 5699,
    rating: 9.6,
    reviewCount: 412,
    shortDescription: "Versatile luxury sports watch with teak pattern dial",
    detailDescription:
      "The Omega Aqua Terra 150M features the distinctive teak pattern dial inspired by luxury yacht decks. The 41mm case houses Omega's Co-Axial Master Chronometer caliber 8900 movement. Resistant to magnetic fields up to 15,000 gauss, it combines sporty elegance with technical innovation.",
    additionalInformation:
      "Case: 41mm Stainless Steel | Movement: Calibre 8900 | Water Resistance: 150m | Anti-magnetic",
    colors: ["#0000FF", "#C0C0C0", "#000000"],
    reviews: [
      {
        username: "Daily_Luxury",
        rating: 10,
        comment: "Perfect all-around luxury watch.",
      },
      {
        username: "Sports_Elegant",
        rating: 9,
        comment: "Versatile and beautifully finished.",
      },
      {
        username: "Watch_Aficionado",
        rating: 9,
        comment: "Outstanding daily wearer.",
      },
    ],
    imageUrls: [
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412103006-5059c4.png?w=700",
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22012412101001-eec16d.png?w=700",
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412101002-ceac31.png?w=700",
    ],
  },

  // TAG Heuer Products
  {
    id: 71,
    title: "TAG Heuer Carrera Chronograph",
    type: "Luxury Sports Chronograph",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 4999,
    salePrice: 4699,
    rating: 9.2,
    reviewCount: 345,
    shortDescription: "Iconic racing chronograph with modern refinements",
    detailDescription:
      "The TAG Heuer Carrera Chronograph celebrates the brand's motor racing heritage. Features a 44mm steel case, ceramic tachymeter bezel, and the in-house Heuer 02 movement with 80-hour power reserve. The skeleton dial showcases the sophisticated chronograph mechanism while maintaining excellent legibility.",
    additionalInformation:
      "Case: 44mm Stainless Steel | Movement: Calibre Heuer 02 | Water Resistance: 100m | 80-hour Power Reserve",
    colors: ["#000000", "#C0C0C0", "#0000FF"],
    reviews: [
      {
        username: "Racing_Fan",
        rating: 9,
        comment: "Perfect racing heritage timepiece!",
      },
      {
        username: "Chrono_Expert",
        rating: 9,
        comment: "Excellent value for an in-house chronograph.",
      },
      {
        username: "Speed_Timer",
        rating: 9,
        comment: "Beautiful design and precise timing.",
      },
    ],
    imageUrls: [
      "https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dw730e32fc/images/sprites/Carrera/CBS2210.FC6534/RTW_backUp.jpg",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw90e50211/TAG_Heuer_Carrera/CBS2210.FC6534/CBS2210.FC6534_0314.png?impolicy=resize&width=3840",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwce722cee/TAG_Heuer_Carrera/CBS2210.FC6534/CBS2210.FC6534_12.png?impolicy=resize&width=3840",
    ],
  },
  {
    id: 72,
    title: "TAG Heuer Monaco",
    type: "Luxury Sports Watches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 5999,
    salePrice: 5699,
    rating: 9.4,
    reviewCount: 289,
    shortDescription: "Legendary square chronograph with racing heritage",
    detailDescription:
      "The TAG Heuer Monaco, made famous by Steve McQueen, features the distinctive square case design. The 39mm case houses the Calibre 11 automatic chronograph movement. The blue sunray dial with contrasting chronograph subdials pays homage to the original 1969 model.",
    additionalInformation:
      "Case: 39mm Stainless Steel | Movement: Calibre 11 | Water Resistance: 100m | Square Case Design",
    colors: ["#0000FF", "#000000", "#C0C0C0"],
    reviews: [
      {
        username: "Classic_Racing",
        rating: 10,
        comment: "An absolute icon in watchmaking!",
      },
      {
        username: "Square_Style",
        rating: 9,
        comment: "Unique design that stands out.",
      },
      {
        username: "Heritage_Watch",
        rating: 9,
        comment: "Living piece of racing history.",
      },
    ],
    imageUrls: [
      "https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dw229f91a3/images/sprites/Monaco/CBL2111.BA0644/RTW_backUp.jpg",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwc159dcef/TAG_Heuer_Monaco/CBL2111.BA0644/CBL2111.BA0644_0314.png?impolicy=resize&width=3840",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw73821e57/TAG_Heuer_Monaco/CBL2111.BA0644/CBL2111.BA0644_12.png?impolicy=resize&width=3840",
    ],
  },
  {
    id: 73,
    title: "TAG Heuer Aquaracer",
    type: "Luxury Diving Watches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 2999,
    salePrice: 2799,
    rating: 9.1,
    reviewCount: 456,
    shortDescription: "Professional diving watch with modern design",
    detailDescription:
      "The TAG Heuer Aquaracer Professional 300 features a ceramic unidirectional rotating bezel and distinctive 12-sided design. The 43mm case houses the Calibre 5 automatic movement. Water-resistant to 300 meters, it combines robust functionality with sophisticated style.",
    additionalInformation:
      "Case: 43mm Stainless Steel | Movement: Calibre 5 | Water Resistance: 300m | Ceramic Bezel",
    colors: ["#000000", "#0000FF", "#C0C0C0"],
    reviews: [
      {
        username: "Dive_Watch",
        rating: 9,
        comment: "Excellent value diving watch!",
      },
      {
        username: "Ocean_Timer",
        rating: 9,
        comment: "Robust and reliable timepiece.",
      },
      {
        username: "Water_Sport",
        rating: 9,
        comment: "Perfect for water activities.",
      },
    ],
    imageUrls: [
      "https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dwf1ce45b4/images/sprites/Carrera/CBU2082.FT6275/RTW_backUp.jpg",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwb65a08ac/TAG_Heuer_Carrera/CBU2082.FT6275/CBU2082.FT6275_11.png?impolicy=resize&width=3840",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwe15d848a/TAG_Heuer_Carrera/CBU2082.FT6275/CBU2082.FT6275_0314.png?impolicy=resize&width=3840",
    ],
  },
  {
    id: 74,
    title: "TAG Heuer Formula 1",
    type: "Luxury Sports Watches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 1999,
    salePrice: 1899,
    rating: 9.0,
    reviewCount: 567,
    shortDescription: "Entry-level luxury sports watch with racing DNA",
    detailDescription:
      "The TAG Heuer Formula 1 embodies the spirit of motor racing. Features a 43mm steel case with ceramic bezel, quartz chronograph movement, and distinctive racing-inspired design elements. The robust construction and sporty aesthetics make it perfect for active lifestyles.",
    additionalInformation:
      "Case: 43mm Stainless Steel | Movement: Quartz Chronograph | Water Resistance: 200m | Ceramic Bezel",
    colors: ["#FF0000", "#000000", "#C0C0C0"],
    reviews: [
      {
        username: "F1_Fan",
        rating: 9,
        comment: "Great entry into luxury watches!",
      },
      {
        username: "Sport_Watch",
        rating: 9,
        comment: "Perfect daily sports watch.",
      },
      {
        username: "Race_Timer",
        rating: 9,
        comment: "Robust and reliable chronograph.",
      },
    ],
    imageUrls: [
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw0709bab9/TAG_Heuer_Formula_1/CAZ1010.BA0842/CAZ1010.BA0842_1000.png?impolicy=resizeTrim&width=1768&height=2212",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwece17e22/TAG_Heuer_Formula_1/CAZ1010.BA0842/CAZ1010.BA0842_0913.png?impolicy=resize&width=3840",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw480a6891/TAG_Heuer_Formula_1/CAZ1010.BA0842/CAZ1010.BA0842_12.png?impolicy=resize&width=3840",
    ],
  },
  {
    id: 75,
    title: "TAG Heuer Connected",
    type: "Luxury Smartwatches",
    category: "Watches",
    brand: "TAG Heuer",
    originalPrice: 2499,
    salePrice: 2299,
    rating: 9.0,
    reviewCount: 345,
    shortDescription: "Premium Swiss smartwatch with advanced features",
    detailDescription:
      "The TAG Heuer Connected combines Swiss luxury with modern technology. Features a 45mm case with ceramic bezel, high-resolution OLED display, and comprehensive fitness tracking capabilities. The customizable faces replicate mechanical TAG Heuer watches while providing smart functionality.",
    additionalInformation:
      "Case: 45mm Stainless Steel | Display: OLED Touch Screen | Water Resistance: 50m | Battery Life: 24h",
    colors: ["#000000", "#C0C0C0", "#0000FF"],
    reviews: [
      {
        username: "Tech_Luxury",
        rating: 9,
        comment: "Perfect blend of tradition and technology!",
      },
      {
        username: "Smart_Style",
        rating: 9,
        comment: "Most premium smartwatch available.",
      },
      {
        username: "Digital_Watch",
        rating: 9,
        comment: "Great for active lifestyle.",
      },
    ],
    imageUrls: [
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw01e9bb93/TAG_Heuer_Connected_/SBR8A80.BT6261/SBR8A80.BT6261_0913.png?impolicy=resize&width=3840",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw2ba0331d/TAG_Heuer_Connected_/SBR8A80.BT6261/SBR8A80.BT6261_00.png?impolicy=resizeTrim&width=1768&height=2212",
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw90323bdf/Calibre_E4_45MM/SBR8A80.BT6261/SBR8A80.BT6261_12.png?impolicy=resize&width=3840",
    ],
  },
  {
    id: 76,
    title: "MacBook Pro 16-inch M2 Pro",
    type: "Laptop",
    category: "Electronics",
    brand: "Apple",
    originalPrice: 24900,
    salePrice: 22990,
    rating: 9.2,
    reviewCount: 856,
    shortDescription:
      "Powerful laptop with M2 Pro chip and stunning Liquid Retina XDR display",
    detailDescription:
      "Experience breakthrough performance with the M2 Pro chip. Features a stunning 16-inch Liquid Retina XDR display, up to 22 hours of battery life, and a advanced camera and audio system. Perfect for professional creative work and intensive tasks.",
    additionalInformation:
      "CPU: M2 Pro 12-core | RAM: 16GB unified memory | Storage: 512GB SSD | Display: 16-inch Liquid Retina XDR",
    colors: ["#666666", "#999999", "#000000"],
    reviews: [
      {
        username: "Alex M.",
        rating: 9.5,
        comment:
          "Incredible performance and battery life. Perfect for video editing.",
      },
      {
        username: "Sarah K.",
        rating: 9,
        comment: "The display quality is unmatched. Worth every penny.",
      },
      {
        username: "David R.",
        rating: 9,
        comment: "M2 Pro chip is a game changer for professional work.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
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
    shortDescription:
      "Pro camera system with 48MP main camera and A17 Pro chip",
    detailDescription:
      "The iPhone 15 Pro Max features a groundbreaking 48MP camera system, powerful A17 Pro chip, and a stunning Super Retina XDR display with ProMotion. The titanium design offers durability while maintaining premium aesthetics.",
    additionalInformation:
      "Display: 6.7-inch OLED | Storage: 256GB | RAM: 8GB | Battery: 4422mAh",
    colors: ["#4A4A4A", "#E3C4A8", "#000000", "#4169E1"],
    reviews: [
      {
        username: "Mike P.",
        rating: 9.5,
        comment: "The camera system is absolutely incredible.",
      },
      {
        username: "Lisa T.",
        rating: 9,
        comment: "Premium build quality and amazing performance.",
      },
      {
        username: "John D.",
        rating: 9.8,
        comment: "Best iPhone ever. The display is stunning.",
      },
    ],
    imageUrls: [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51UtwJ0576L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81MDZsYTIoL._SX679_.jpg",
    ],
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
    detailDescription:
      "The iPad Pro features the powerful M2 chip, Liquid Retina XDR display, and advanced cameras. Perfect for creative professionals, with support for Apple Pencil 2nd generation and Magic Keyboard.",
    additionalInformation:
      "Display: 12.9-inch Liquid Retina XDR | Storage: 256GB | RAM: 8GB | Battery: 10,758mAh",
    colors: ["#666666", "#999999"],
    reviews: [
      {
        username: "Emma S.",
        rating: 9,
        comment: "Perfect for digital art and productivity.",
      },
      {
        username: "Tom H.",
        rating: 9.2,
        comment: "The display is amazing for content consumption.",
      },
      {
        username: "Nina P.",
        rating: 9.3,
        comment: "M2 chip makes this a laptop replacement.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://m.media-amazon.com/images/I/51NVFTCAP3L._SX300_SY300_QL70_FMwebp_.jpg",
    ],
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
    shortDescription:
      "Advanced smartwatch with titanium case and precision GPS",
    detailDescription:
      "The Apple Watch Ultra 2 features a rugged titanium case, the brightest Apple Watch display ever, precision dual-frequency GPS, and up to 36 hours of battery life. Perfect for outdoor adventures and extreme sports.",
    additionalInformation:
      "Display: 49mm Always-On Retina | Water resistance: 100m | Battery: Up to 36 hours",
    colors: ["#C0C0C0"],
    reviews: [
      {
        username: "Chris R.",
        rating: 9,
        comment: "Perfect for outdoor activities and tracking.",
      },
      {
        username: "Maria L.",
        rating: 9.2,
        comment: "Battery life is impressive for a smartwatch.",
      },
      {
        username: "James K.",
        rating: 8.8,
        comment: "Rugged build quality and great features.",
      },
    ],
    imageUrls: [
      "https://www.apple.com/v/apple-watch-ultra-2/g/images/overview/hero/hero_endframe__b7prz1z3rs2u_large_2x.jpg",
      "https://www.apple.com/v/apple-watch-ultra-2/g/images/overview/running/lifestyle_running__cj4i05t23gk2_large_2x.jpg",
      "https://www.apple.com/v/apple-watch-ultra-2/g/images/overview/cycling/cycling_rpm__c2a2ydzatp0m_large_2x.jpg",
    ],
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
    detailDescription:
      "Features personalized Spatial Audio, advanced active noise cancellation, adaptive transparency mode, and up to 6 hours of listening time. Includes precision finding with U1 chip and MagSafe charging case.",
    additionalInformation:
      "Battery Life: 6 hours (30 hours with case) | Water Resistance: IPX4 | Chip: H2",
    colors: ["#FFFFFF"],
    reviews: [
      {
        username: "Peter M.",
        rating: 9.5,
        comment: "Best noise cancellation in any earbuds.",
      },
      {
        username: "Sophie L.",
        rating: 9.2,
        comment: "Sound quality is exceptional.",
      },
      {
        username: "Ryan T.",
        rating: 9.3,
        comment: "Perfect integration with Apple devices.",
      },
    ],
    imageUrls: [
      "https://m.media-amazon.com/images/I/51WZTCvBFAL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/51G5pfRfSfL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/51UxtGtL8gL._SY879_.jpg",
    ],
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
    detailDescription:
      "The Galaxy S24 Ultra features a 200MP main camera, built-in S Pen, and advanced AI capabilities. The 6.8-inch Dynamic AMOLED 2X display offers stunning visuals, while the Snapdragon 8 Gen 3 ensures top performance.",
    additionalInformation:
      "Display: 6.8-inch QHD+ | RAM: 12GB | Storage: 256GB | Battery: 5000mAh",
    colors: ["#000000", "#7B68EE", "#808080", "#8B4513"],
    reviews: [
      {
        username: "Robert K.",
        rating: 9.3,
        comment: "The S Pen integration is fantastic.",
      },
      {
        username: "Anna P.",
        rating: 9.1,
        comment: "Camera system is incredibly versatile.",
      },
      {
        username: "Mark L.",
        rating: 9.2,
        comment: "Best Android phone available.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
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
    detailDescription:
      "Features a stunning 16-inch 3K AMOLED display, 13th Gen Intel Core i9 processor, and NVIDIA RTX 4070 graphics. Perfect for creative professionals and gaming enthusiasts.",
    additionalInformation:
      "CPU: Intel Core i9-13900H | GPU: RTX 4070 | RAM: 32GB | Storage: 1TB SSD",
    colors: ["#000000", "#4A4A4A"],
    reviews: [
      {
        username: "Kevin M.",
        rating: 9,
        comment: "Display quality is outstanding.",
      },
      {
        username: "Laura S.",
        rating: 8.8,
        comment: "Great performance for creative work.",
      },
      {
        username: "Paul R.",
        rating: 9,
        comment: "Premium build and excellent keyboard.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
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
    detailDescription:
      "Features a massive 14.6-inch Super AMOLED display, Snapdragon 8 Gen 2 chip, and included S Pen. Perfect for productivity and creative work with Samsung DeX support.",
    additionalInformation:
      "Display: 14.6-inch AMOLED | RAM: 12GB | Storage: 256GB | Battery: 11200mAh",
    colors: ["#808080", "#000000"],
    reviews: [
      {
        username: "Helen T.",
        rating: 8.9,
        comment: "Perfect for digital art and note-taking.",
      },
      {
        username: "Brian K.",
        rating: 8.7,
        comment: "Great multimedia device with excellent speakers.",
      },
      {
        username: "Carol M.",
        rating: 8.8,
        comment: "Samsung DeX is a game-changer.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.samsung.com/is/image/samsung/assets/in/galaxy-tab-s9/feature/galaxy-tab-s9-kv-pc.jpg",
      "https://images.samsung.com/is/image/samsung/assets/in/galaxy-tab-s9/feature/galaxy-tab-s9-ai-image03-pc.jpg",
    ],
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
    detailDescription:
      "Features a classic design with rotating bezel, advanced health tracking, and Wear OS integration. Perfect for fitness enthusiasts and professionals alike.",
    additionalInformation:
      "Display: 1.4-inch Super AMOLED | Water resistance: 5ATM | Battery: 425mAh",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      {
        username: "Diana P.",
        rating: 8.8,
        comment: "The rotating bezel is intuitive.",
      },
      {
        username: "Steve M.",
        rating: 8.6,
        comment: "Great health tracking features.",
      },
      { username: "Linda K.", rating: 8.7, comment: "Premium build quality." },
    ],
    imageUrls: [
      "https://m.media-amazon.com/images/I/41s8MrQUONL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71mP-5v4pxL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ium7SD9VL._SX679_.jpg",
    ],
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
    detailDescription:
      "Features intelligent active noise cancellation, 360 Audio, and IPX7 water resistance. Delivers immersive sound with crystal clarity and deep bass.",
    additionalInformation:
      "Battery Life: 5 hours (20 hours with case) | Water Resistance: IPX7 | Bluetooth 5.3",
    colors: ["#000000", "#FFFFFF", "#4B0082"],
    reviews: [
      {
        username: "Tim R.",
        rating: 9,
        comment: "Great sound quality and comfort.",
      },
      { username: "Alice K.", rating: 8.8, comment: "ANC works really well." },
      {
        username: "George P.",
        rating: 9,
        comment: "Perfect for Samsung ecosystem.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://m.media-amazon.com/images/I/81ZnkXiV6EL._SX522_.jpg",
    ],
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
    detailDescription:
      "Industry-leading noise cancellation with eight microphones and Auto NC Optimizer. Features 30-hour battery life, multipoint connection, and LDAC support for high-resolution audio.",
    additionalInformation:
      "Battery Life: 30 hours | Charging Time: 3.5 hours | Weight: 250g",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      {
        username: "Michael B.",
        rating: 9.5,
        comment: "Best noise cancellation in the market.",
      },
      {
        username: "Rachel S.",
        rating: 9.3,
        comment: "Incredible sound quality and comfort.",
      },
      {
        username: "David M.",
        rating: 9.4,
        comment: "Battery life is outstanding.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://m.media-amazon.com/images/I/51gaT35OeML._SX522_.jpg",
      "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp",
    ],
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
    detailDescription:
      "Features a 33MP full-frame sensor, advanced AI-based autofocus, and 4K 60p video recording. Perfect for both professional photography and videography.",
    additionalInformation:
      "Sensor: 33MP Full-frame | ISO: 100-51200 | Weight: 659g | Battery: NP-FZ100",
    colors: ["#000000"],
    reviews: [
      {
        username: "Jennifer K.",
        rating: 9.3,
        comment: "Exceptional image quality and AF performance.",
      },
      {
        username: "Thomas R.",
        rating: 9.1,
        comment: "Great hybrid camera for photo and video.",
      },
      {
        username: "Sarah M.",
        rating: 9.2,
        comment: "Professional features in a compact body.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://m.media-amazon.com/images/I/81Tr3Jo8DvL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/812VIwWG2DL._SX679_.jpg",
    ],
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
    detailDescription:
      "Features QD-OLED panel with XR cognitive processor, perfect for gaming with HDMI 2.1 and VRR support. Google TV interface with hands-free voice control.",
    additionalInformation:
      "Screen: 65-inch QD-OLED | Resolution: 4K | HDR: Dolby Vision | OS: Google TV",
    colors: ["#000000"],
    reviews: [
      {
        username: "William P.",
        rating: 9.4,
        comment: "Best picture quality I've ever seen.",
      },
      {
        username: "Emily R.",
        rating: 9.2,
        comment: "Perfect for movies and gaming.",
      },
      {
        username: "Jack M.",
        rating: 9.3,
        comment: "The cognitive processor makes a difference.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://m.media-amazon.com/images/I/81IAdR7FhwL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71nIENiNlrL._SX522_.jpg",
    ],
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
    detailDescription:
      "Features ray tracing, 3D audio, and ultra-high speed SSD for near-instant loading. The DualSense controller provides immersive haptic feedback and adaptive triggers.",
    additionalInformation:
      "CPU: AMD Zen 2 | GPU: 10.28 TFLOPS RDNA 2 | Storage: 825GB SSD | RAM: 16GB GDDR6",
    colors: ["#FFFFFF"],
    reviews: [
      {
        username: "Alex T.",
        rating: 9.6,
        comment: "Revolutionary gaming experience.",
      },
      {
        username: "Michelle K.",
        rating: 9.4,
        comment: "The DualSense controller is amazing.",
      },
      {
        username: "Patrick L.",
        rating: 9.5,
        comment: "Lightning-fast loading times.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://m.media-amazon.com/images/I/71nIENiNlrL._SX522_.jpg",
    ],
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
    detailDescription:
      "Features industry-leading noise cancellation, high-resolution audio support, and up to 8 hours of battery life. Includes wireless charging and multipoint connection.",
    additionalInformation:
      "Battery Life: 8 hours (24 hours with case) | Water Resistance: IPX4 | Weight: 5.9g per earbud",
    colors: ["#000000", "#C0C0C0"],
    reviews: [
      {
        username: "Nancy P.",
        rating: 9.2,
        comment: "Exceptional sound quality and ANC.",
      },
      {
        username: "Frank M.",
        rating: 9.0,
        comment: "Very comfortable for long sessions.",
      },
      {
        username: "Julia S.",
        rating: 9.1,
        comment: "Great battery life and features.",
      },
    ],
    imageUrls: [
      "https://m.media-amazon.com/images/I/61qL6ihGn7L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61xTj3Q0llL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/718hZDkhEkL._SX679_.jpg",
    ],
  },
  {
    id: 91,
    title: "Love Bracelet",
    type: "Bracelet",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 6890,
    salePrice: 6890,
    rating: 9.8,
    reviewCount: 1245,
    shortDescription:
      "Iconic 18K yellow gold bracelet with screwdriver closure",
    detailDescription:
      "The iconic LOVE bracelet, created in New York in 1969, is a testament to love that transgresses convention. The oval bracelet is designed to be opened and closed with a screwdriver, making it a symbol of committed love. Crafted in 18K yellow gold, this piece features the signature screw motifs that have become a legendary symbol of eternal passion.",
    additionalInformation:
      "Material: 18K Yellow Gold | Width: 6.1mm | Screw System: Original Cartier | Certificate: Authenticity & Quality",
    colors: ["#FFD700", "#FFFFFF", "#FFA07A"],
    reviews: [
      {
        username: "Elizabeth R.",
        rating: 10,
        comment:
          "A timeless piece that never goes out of style. Worth every penny.",
      },
      {
        username: "James M.",
        rating: 9.5,
        comment: "The craftsmanship is exceptional. A true symbol of luxury.",
      },
      {
        username: "Sophie T.",
        rating: 10,
        comment: "My everyday piece for over 5 years now. Still looks perfect.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 92,
    title: "Panthère de Cartier Ring",
    type: "Ring",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 4599,
    salePrice: 4500,
    rating: 9.6,
    reviewCount: 856,
    shortDescription: "18K white gold ring with emerald eyes and onyx nose",
    detailDescription:
      "The Panthère de Cartier ring embodies wild elegance. This stunning piece features the iconic panther head crafted in 18K white gold, set with brilliant-cut diamonds. The emerald eyes and onyx nose bring the fierce beauty to life. A symbol of feminine power and grace.",
    additionalInformation:
      "Material: 18K White Gold | Stones: Diamonds, Emeralds, Onyx | Total Diamond Weight: 0.25 carats",
    colors: ["#FFFFFF"],
    reviews: [
      {
        username: "Victoria P.",
        rating: 9.8,
        comment: "The detail in the panther design is breathtaking.",
      },
      {
        username: "Alexander K.",
        rating: 9.5,
        comment: "A conversation starter. Pure luxury.",
      },
      {
        username: "Isabella M.",
        rating: 9.6,
        comment: "The emerald eyes catch light beautifully.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw043c559f/images/large/6d82e05f8e265881b6746cb62e4d7b8f.png?sw=750&sh=750&sm=fit&sfrm=png",
    ],
  },
  {
    id: 93,
    title: "Santos de Cartier Watch",
    type: "Watch",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 7900,
    salePrice: 7290,
    rating: 9.7,
    reviewCount: 634,
    shortDescription: "Automatic steel and gold watch with blue dial",
    detailDescription:
      "The Santos de Cartier watch combines modern elegance with historic design. Features a blue dial with Roman numerals, sword-shaped hands, and the iconic exposed screws. The automatic movement provides precise timekeeping, while the QuickSwitch system allows for easy strap changes.",
    additionalInformation:
      "Case: Steel and 18K Yellow Gold | Movement: Automatic | Water Resistance: 100m | Size: 39.8mm",
    colors: ["#C0C0C0", "#FFD700"],
    reviews: [
      {
        username: "William B.",
        rating: 9.8,
        comment: "The perfect blend of sport and luxury.",
      },
      {
        username: "Charlotte D.",
        rating: 9.7,
        comment: "Incredibly comfortable and versatile.",
      },
      {
        username: "Henry R.",
        rating: 9.6,
        comment: "The blue dial is stunning in person.",
      },
    ],
    imageUrls: [
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwfa43f32a/images/large/b66edd509d8d5796a5828ef84e9d3586.png?sw=750&sh=750&sm=fit&sfrm=png",
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw62b0abd0/images/large/ad9817bcf15d56a28f90fa5494c20073.png?sw=750&sh=750&sm=fit&sfrm=png",
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwb3b2e2a3/images/large/c27593ecd63451b785881134fa9a1675.png?sw=750&sh=750&sm=fit&sfrm=png",
    ],
  },
  {
    id: 94,
    title: "Juste un Clou Necklace",
    type: "Necklace",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 3900,
    salePrice: 3800,
    rating: 9.5,
    reviewCount: 423,
    shortDescription: "18K rose gold nail-design necklace with diamonds",
    detailDescription:
      "The Juste un Clou necklace transforms a humble nail into a precious object. This bold interpretation in 18K rose gold is adorned with brilliant-cut diamonds. The curved nail wraps gracefully around the neck, making a contemporary statement about transformed beauty.",
    additionalInformation:
      "Material: 18K Rose Gold | Diamonds: 0.19 carats | Length: 42cm | Closure: Sliding Clasp",
    colors: ["#B76E79"],
    reviews: [
      {
        username: "Olivia P.",
        rating: 9.6,
        comment: "Such an elegant twist on an everyday object.",
      },
      {
        username: "Marcus L.",
        rating: 9.4,
        comment: "The rose gold is perfectly subtle.",
      },
      {
        username: "Emma S.",
        rating: 9.5,
        comment: "Receives compliments every time I wear it.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwcaadb41d/images/large/d23340307fba5cd8908e9eae232477fa.png?sw=750&sh=750&sm=fit&sfrm=png",
    ],
  },
  {
    id: 95,
    title: "Trinity Earrings",
    type: "Earrings",
    category: "Jewellery",
    brand: "Cartier",
    originalPrice: 2899,
    salePrice: 2899,
    rating: 9.4,
    reviewCount: 378,
    shortDescription: "Classic three-gold interlinked hoop earrings",
    detailDescription:
      "The Trinity earrings feature the iconic three interlaced bands in white, yellow, and rose gold. Each ring moves independently, creating a playful and elegant effect. These earrings represent love, fidelity, and friendship in Cartier's signature style.",
    additionalInformation:
      "Materials: 18K White, Yellow, and Rose Gold | Length: 2.5cm | Closure: Post with Push Back",
    colors: ["#FFD700", "#FFFFFF", "#B76E79"],
    reviews: [
      {
        username: "Grace T.",
        rating: 9.5,
        comment: "Perfect size and weight. Very comfortable.",
      },
      {
        username: "David P.",
        rating: 9.3,
        comment: "The three golds complement any outfit.",
      },
      {
        username: "Lucy M.",
        rating: 9.4,
        comment: "Elegant for both day and evening wear.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },

  // Tiffany & Co. Products
  {
    id: 96,
    title: "T1 Wide Ring",
    type: "Ring",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 35990,
    salePrice: 35990,
    rating: 9.6,
    reviewCount: 567,
    shortDescription: "18K rose gold ring with pavé diamonds",
    detailDescription:
      "The Tiffany T1 Wide Ring represents strength and elegance. Crafted in 18K rose gold and set with pavé diamonds, this bold design wraps around the finger with architectural precision. The innovative beveled edges create a distinctive profile that catches light beautifully.",
    additionalInformation:
      "Material: 18K Rose Gold | Diamonds: 0.87 carats total | Width: 6.4mm",
    colors: ["#B76E79"],
    reviews: [
      {
        username: "Rachel K.",
        rating: 9.7,
        comment: "Stunning design and sparkle.",
      },
      {
        username: "Michael B.",
        rating: 9.6,
        comment: "Perfect anniversary gift. She loves it.",
      },
      {
        username: "Sarah L.",
        rating: 9.5,
        comment: "The width makes a beautiful statement.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://www.susannahlovis.com/wp-content/uploads/2022/05/7004213_susannahlovis_antique_vintage_jewellery_vintage_cartier_wide_love_ring_in_yellow_gold_IMG_2009.jpg",
    ],
  },
  {
    id: 97,
    title: "Victoria Line Bracelet",
    type: "Bracelet",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 7890,
    salePrice: 7890,
    rating: 9.7,
    reviewCount: 432,
    shortDescription: "Platinum bracelet with alternating diamond clusters",
    detailDescription:
      "The Tiffany Victoria Line Bracelet features alternating diamond clusters inspired by nature. Set in platinum, each flower-like cluster showcases mixed-cut diamonds arranged to maximize brilliance. The flexible design ensures comfortable wear.",
    additionalInformation:
      "Material: Platinum | Total Diamond Weight: 4.15 carats | Length: 6.7 inches | Closure: Box Clasp",
    colors: ["#FFFFFF"],
    reviews: [
      {
        username: "Patricia M.",
        rating: 9.8,
        comment: "Absolutely breathtaking piece.",
      },
      {
        username: "Robert J.",
        rating: 9.7,
        comment: "The diamond arrangement is spectacular.",
      },
      {
        username: "Catherine P.",
        rating: 9.6,
        comment: "Worth every penny. True luxury.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 98,
    title: "Schlumberger Bird on a Rock",
    type: "Brooch",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 12900,
    salePrice: 12900,
    rating: 9.8,
    reviewCount: 245,
    shortDescription: "Iconic bird brooch with morganite and diamonds",
    detailDescription:
      "Jean Schlumberger's legendary Bird on a Rock brooch features a whimsical bird perched atop a stunning morganite stone. The bird is crafted in 18K yellow gold and platinum, set with diamonds and a sapphire eye. The piece represents the height of artistic jewelry design.",
    additionalInformation:
      "Materials: 18K Yellow Gold, Platinum | Center Stone: Morganite 30 carats | Diamonds: 1.25 carats",
    colors: ["#FFD700", "#FFFFFF", "#F09CA4"],
    reviews: [
      {
        username: "Eleanor R.",
        rating: 9.9,
        comment: "A true piece of art. Absolutely magnificent.",
      },
      {
        username: "Thomas H.",
        rating: 9.8,
        comment: "The craftsmanship is beyond compare.",
      },
      {
        username: "Margaret L.",
        rating: 9.7,
        comment: "A collector's dream piece.",
      },
    ],
    imageUrls: [
      "https://press.tiffany.com/wp-content/uploads/Sclumberger_ATJ_4x5_9.jpg",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 99,
    title: "Tiffany HardWear Necklace",
    type: "Necklace",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 9900,
    salePrice: 9900,
    rating: 9.5,
    reviewCount: 678,
    shortDescription: "Bold 18K yellow gold graduated link necklace",
    detailDescription:
      "The Tiffany HardWear graduated link necklace embodies urban elegance. Crafted in 18K yellow gold, the graduated links create a bold statement. Inspired by a 1971 archive design, it captures the spirit of industrial design with modern sophistication.",
    additionalInformation:
      "Material: 18K Yellow Gold | Length: 18 inches | Closure: Toggle Clasp | Weight: 36.8g",
    colors: ["#FFD700"],
    reviews: [
      {
        username: "Lauren B.",
        rating: 9.6,
        comment: "Makes a powerful statement. Love it.",
      },
      {
        username: "Andrew M.",
        rating: 9.4,
        comment: "The toggle closure is both practical and stylish.",
      },
      {
        username: "Diana K.",
        rating: 9.5,
        comment: "Perfect weight and presence.",
      },
    ],
    imageUrls: [
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardweargraduated-link-necklace-70750996_1067505_AV_1.jpg?op_usm=1.0%2C1.0%2C6.0&defaultImage=NoImageAvailableInternal",
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardwearmedium-link-necklace-70751143_1063705_SV_1.jpg?op_usm=1.0%2C1.0%2C6.0&defaultImage=NoImageAvailableInternal",
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardweargraduated-link-necklace-38086898_969560_AV_1.jpg?op_usm=1.0%2C1.0%2C6.0&defaultImage=NoImageAvailableInternal",
    ],
  },
  {
    id: 100,
    title: "Tiffany Soleste Earrings",
    type: "Earrings",
    category: "Jewellery",
    brand: "Tiffany & Co.",
    originalPrice: 5900,
    salePrice: 5900,
    rating: 9.6,
    reviewCount: 345,
    shortDescription: "Platinum earrings with yellow diamonds",
    detailDescription:
      "The Tiffany Soleste earrings feature cushion-cut yellow diamonds surrounded by brilliant white diamonds. Set in platinum, these earrings showcase exceptional stones with maximum brilliance. The double halo design creates a stunning sun-like effect.",
    additionalInformation:
      "Material: Platinum | Center Stones: Yellow Diamonds 2.0 carats total | White Diamonds: 0.8 carats | Closure: Post with Push Back",
    colors: ["#FFFFFF", "#FFD700"],
    reviews: [
      {
        username: "Michelle P.",
        rating: 9.7,
        comment: "The yellow diamonds are extraordinary.",
      },
      {
        username: "Richard T.",
        rating: 9.6,
        comment: "Exceptional quality and sparkle.",
      },
      {
        username: "Karen L.",
        rating: 9.5,
        comment: "Perfect for special occasions.",
      },
    ],
    imageUrls: [
      "https://e3brpsvspqv.exactdn.com/wp-content/uploads/2018/01/E109.jpg?strip=all&lossy=0&webp=92&sharp=1&ssl=1",
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-solesteearrings-60572895_1027799_ED.jpg?op_usm=2.0%2C1.0%2C6.0&%24cropN=0.1%2C0.1%2C0.8%2C0.8&defaultImage=NoImageAvailableInternal",
      "https://static.wixstatic.com/media/fc9e82_492439f702b8420daed9b43cbf064e78~mv2.jpg/v1/fill/w_480,h_640,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fc9e82_492439f702b8420daed9b43cbf064e78~mv2.jpg",
    ],
  },

  // Van Cleef & Arpels Products
  {
    id: 101,
    title: "Alhambra Vintage Necklace",
    type: "Necklace",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 9900,
    salePrice: 9900,
    rating: 9.8,
    reviewCount: 789,
    shortDescription: "20-motif necklace in mother-of-pearl and gold",
    detailDescription:
      "The iconic Vintage Alhambra necklace features 20 mother-of-pearl clover motifs set in 18K yellow gold. Each motif is bordered with delicate beading, creating the signature Van Cleef & Arpels aesthetic. The necklace embodies luck, health, fortune, and love.",
    additionalInformation:
      "Material: 18K Yellow Gold | Stones: Mother-of-Pearl | Length: 34.6 inches | Motifs: 20",
    colors: ["#FFD700", "#FFFFFF"],
    reviews: [
      {
        username: "Sophia R.",
        rating: 9.9,
        comment: "A true heirloom piece. Timeless elegance.",
      },
      {
        username: "Benjamin K.",
        rating: 9.8,
        comment: "The mother-of-pearl quality is exceptional.",
      },
      {
        username: "Alice M.",
        rating: 9.7,
        comment: "Perfect length and beautiful movement.",
      },
    ],
    imageUrls: [
      "https://www.luxafrique.boutique/cdn/shop/products/2054564.jpg?v=1665333512",
      "https://i.pinimg.com/736x/2c/23/79/2c2379ab7c6201de045fe658b2917399.jpg",
      "https://imperialtime.co.uk/media/catalog/product/cache/d5aad5f722d05c93b59d23ee81aaf26b/i/m/img_2041_3.jpg",
    ],
  },
  {
    id: 102,
    title: "Frivole Ring",
    type: "Ring",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 9900,
    salePrice: 9900,
    rating: 9.7,
    reviewCount: 456,
    shortDescription: "Between the Finger Ring with diamonds",
    detailDescription:
      "The Frivole Between the Finger Ring features two flowers of different sizes set with diamonds in white gold. The mirror-polished gold and angular positioning of the petals create a three-dimensional effect that captures light brilliantly.",
    additionalInformation:
      "Material: 18K White Gold | Diamonds: 0.63 carats | Flowers: 2 (different sizes)",
    colors: ["#FFFFFF"],
    reviews: [
      {
        username: "Natalie B.",
        rating: 9.8,
        comment: "The design is so unique and eye-catching.",
      },
      {
        username: "Christopher P.",
        rating: 9.7,
        comment: "Excellent craftsmanship and comfort.",
      },
      {
        username: "Emily T.",
        rating: 9.6,
        comment: "A modern classic. Gets noticed everywhere.",
      },
    ],
    imageUrls: [
      "https://nypost.com/wp-content/uploads/sites/2/2022/05/van-cleef-clover-ring-hp.jpg?quality=75&strip=all",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3e54e74e-68bf-532b-904a-2c65ed0b5cb8/fb8242b6-5a01-5d8c-96c8-dbde0cf2a3ab.jpg",
      "https://www.vancleefarpels.cn/content/dam/rcq/vca/20/54/42/6/2054426.jpeg",
    ],
  },
  {
    id: 103,
    title: "Perlée Perlée Bracelet",
    type: "Bracelet",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 3200,
    salePrice: 3200,
    rating: 9.6,
    reviewCount: 567,
    shortDescription: "Rose gold bracelet with signature beaded design",
    detailDescription:
      "The Perlée bracelet showcases Van Cleef & Arpels' signature golden beads. Crafted in 18K rose gold, each bead is carefully polished to create a luminous effect. The bracelet's flexibility ensures comfortable wear while maintaining its elegant shape.",
    additionalInformation:
      "Material: 18K Rose Gold | Diameter: 17mm | Weight: 30.5g | Closure: Hidden Clasp",
    colors: ["#B76E79"],
    reviews: [
      {
        username: "Olivia H.",
        rating: 9.7,
        comment: "The beadwork is absolutely stunning.",
      },
      {
        username: "George M.",
        rating: 9.6,
        comment: "Perfect everyday luxury piece.",
      },
      {
        username: "Isabella P.",
        rating: 9.5,
        comment: "Stacks beautifully with other bracelets.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 104,
    title: "Two Butterfly Earrings",
    type: "Earrings",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 5490,
    salePrice: 5490,
    rating: 9.7,
    reviewCount: 345,
    shortDescription: "Pink sapphire and diamond butterfly earrings",
    detailDescription:
      "The Two Butterfly earrings pair pink sapphires with diamonds in an enchanting design. Set in 18K white gold, each butterfly's wings are carefully crafted to create a sense of movement. The combination of stones creates a beautiful play of color and light.",
    additionalInformation:
      "Material: 18K White Gold | Stones: Pink Sapphires, Diamonds | Total Weight: 0.98 carats | Closure: Post with Alpha Back",
    colors: ["#FFFFFF", "#FFB6C1"],
    reviews: [
      {
        username: "Charlotte W.",
        rating: 9.8,
        comment: "Whimsical yet sophisticated design.",
      },
      {
        username: "Philip R.",
        rating: 9.7,
        comment: "The pink sapphires are gorgeous.",
      },
      {
        username: "Victoria M.",
        rating: 9.6,
        comment: "Light and comfortable to wear.",
      },
    ],
    imageUrls: [
      "https://www.mgsignedjewelry.com/images/MTSJ12380-1.jpg",
      "https://mygemma.com/cdn/shop/products/119957-fv.jpg?v=1683331947&width=400",
      "https://i.pinimg.com/736x/fa/37/29/fa372912bbd6d60425cfc8464eb568f6.jpg",
    ],
  },
  {
    id: 105,
    title: "Cadenas Watch",
    type: "Watch",
    category: "Jewellery",
    brand: "Van Cleef & Arpels",
    originalPrice: 9900,
    salePrice: 9900,
    rating: 9.5,
    reviewCount: 234,
    shortDescription: "Diamond-set yellow gold padlock-shaped watch",
    detailDescription:
      "The Cadenas watch combines jewelry and timepiece in Van Cleef & Arpels' signature style. The unique padlock-shaped case is set with diamonds and features a discrete time display. Created in 1935, this design remains a symbol of elegance and innovation.",
    additionalInformation:
      "Material: 18K Yellow Gold | Diamonds: 0.45 carats | Movement: Swiss Quartz | Water Resistance: 30m",
    colors: ["#FFD700"],
    reviews: [
      {
        username: "Elizabeth P.",
        rating: 9.6,
        comment: "A piece of jewelry that tells time.",
      },
      {
        username: "James T.",
        rating: 9.5,
        comment: "Unique design that starts conversations.",
      },
      {
        username: "Marie L.",
        rating: 9.4,
        comment: "The perfect blend of form and function.",
      },
    ],
    imageUrls: [
      "https://www.vancleefarpels.cn/content/dam/rcq/vca/16/27/42/4/1627424.png",
      "https://www.mikaeldan.com/41312-superlarge_default/van-cleef-arpels-cadenas-gold-watch.jpg",
      "https://www.vancleefarpels.com/content/dam/rcq/vca/16/27/41/9/1627419.png",
    ],
  },
  {
    id: 106,
    title: "Neverfull MM Canvas",
    type: "Tote",
    category: "Hand bags",
    brand: "Louis Vuitton",
    originalPrice: 19000,
    salePrice: 18000,
    rating: 9.4,
    reviewCount: 856,
    shortDescription: "Iconic canvas tote with versatile carrying options",
    detailDescription:
      "The Neverfull MM is a timeless Louis Vuitton design featuring the iconic Monogram canvas. This versatile tote includes a removable pouch and can be cinched at the sides for a more compact silhouette. The interior is lined with striped fabric and includes a zip pocket for valuables.",
    additionalInformation:
      "Dimensions: 31.5 x 28.5 x 17 cm | Material: Monogram canvas, natural cowhide leather trim",
    colors: ["#C19A6B"],
    reviews: [
      {
        username: "Sophie R.",
        rating: 10,
        comment:
          "A true classic that never goes out of style. Perfect for everyday use.",
      },
      {
        username: "Aisha K.",
        rating: 9,
        comment: "Incredibly spacious and durable. Worth the investment!",
      },
      {
        username: "Maria L.",
        rating: 9,
        comment:
          "The quality is exceptional, exactly what you'd expect from LV.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm--M46987_PM1_Cropped%20worn%20view.jpg",
    ],
  },
  {
    id: 107,
    title: "Alma BB Epi Leather",
    type: "Satchel",
    category: "Hand bags",
    brand: "Louis Vuitton",
    originalPrice: 25000,
    salePrice: 21000,
    rating: 9.2,
    reviewCount: 634,
    shortDescription: "Elegant structured bag in textured Epi leather",
    detailDescription:
      "The Alma BB in Epi leather showcases Louis Vuitton's commitment to exceptional craftsmanship. This structured bag features a double zip closure, protective bottom studs, and a detachable strap for crossbody wear. The interior is lined with luxurious microfiber.",
    additionalInformation:
      "Dimensions: 23.5 x 17.5 x 11 cm | Material: Epi leather | Includes dust bag and authenticity cards",
    colors: ["#000000", "#DC143C", "#000080"],
    reviews: [
      {
        username: "Emma T.",
        rating: 9,
        comment:
          "The perfect size for everyday essentials. The Epi leather is stunning!",
      },
      {
        username: "Linda M.",
        rating: 10,
        comment: "Beautiful craftsmanship and very practical size.",
      },
      {
        username: "Sarah P.",
        rating: 8,
        comment: "Elegant and durable. Gets lots of compliments.",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 108,
    title: "Pochette Métis",
    type: "Crossbody",
    category: "Hand bags",
    brand: "Louis Vuitton",
    originalPrice: 25000,
    salePrice: 24000,
    rating: 9.5,
    reviewCount: 742,
    shortDescription: "Sophisticated crossbody with elegant S-lock closure",
    detailDescription:
      "The Pochette Métis embodies timeless elegance with its structured silhouette and iconic Monogram canvas. Features multiple compartments, including a zipped back pocket and front compartment with the signature S-lock closure. The adjustable strap allows for comfortable shoulder or crossbody wear.",
    additionalInformation:
      "Dimensions: 25 x 19 x 7 cm | Material: Monogram canvas, natural cowhide leather trim | Adjustable strap",
    colors: ["#C19A6B"],
    reviews: [
      {
        username: "Jessica W.",
        rating: 10,
        comment: "Perfect size and organization. A true investment piece!",
      },
      {
        username: "Nina R.",
        rating: 9,
        comment: "The quality is exceptional. Love the multiple compartments.",
      },
      {
        username: "Claire B.",
        rating: 9,
        comment: "Versatile and beautiful. Worth every penny.",
      },
    ],
    imageUrls: [
      "https://preview.redd.it/pochette-metis-pros-cons-v0-1wh09qm3sktb1.jpg?width=1080&crop=smart&auto=webp&s=a554b56893c02b775088e717cfabac9f71bdc31e",
      "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--M46595_PM2_Front%20view.jpg?wid=750&hei=870",
      "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pochette-metis-east-west--M22942_PM2_Front%20view.jpg",
    ],
  },
  {
    id: 109,
    title: "Capucines BB",
    type: "Top Handle",
    category: "Hand bags",
    brand: "Louis Vuitton",
    originalPrice: 37000,
    salePrice: 35000,
    rating: 9.6,
    reviewCount: 423,
    shortDescription: "Luxurious full-leather bag with distinctive LV closure",
    detailDescription:
      "The Capucines BB represents the pinnacle of Louis Vuitton's leather craftsmanship. Made from full-grain Taurillon leather, it features the distinctive LV initials in metal hardware. The bag includes a removable leather strap and a sophisticated flap closure that can be worn two ways.",
    additionalInformation:
      "Dimensions: 27.5 x 18 x 9 cm | Material: Taurillon leather | Includes removable strap and protective feet",
    colors: ["#000000", "#B22222", "#483D8B"],
    reviews: [
      {
        username: "Victoria H.",
        rating: 10,
        comment: "The epitome of luxury. Impeccable craftsmanship.",
      },
      {
        username: "Diana P.",
        rating: 9,
        comment: "A true work of art. The leather quality is outstanding.",
      },
      {
        username: "Rachel M.",
        rating: 10,
        comment: "Elegant and timeless. My most precious bag.",
      },
    ],
    imageUrls: [
      "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--N83103_PM2_Front%20view.jpg?wid=750&hei=870",
      "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-capucines-bb--M24684_PM2_Front%20view.jpg",
      "https://i0.wp.com/thesisluxury.com/wp-content/uploads/2023/12/z4954370851826_7272833c5e4e89017751df45e6a524c3.jpg?fit=2016%2C1512&ssl=1",
    ],
  },
  {
    id: 110,
    title: "Petite Malle",
    type: "Evening Bag",
    category: "Hand bags",
    brand: "Louis Vuitton",
    originalPrice: 45000,
    salePrice: 42000,
    rating: 9.3,
    reviewCount: 289,
    shortDescription: "Miniature trunk-inspired evening clutch",
    detailDescription:
      "The Petite Malle is inspired by Louis Vuitton's historic trunks. This evening bag features the iconic S-lock closure, metallic hardware, and a removable chain strap. The interior, though compact, is thoughtfully designed to hold evening essentials.",
    additionalInformation:
      "Dimensions: 20 x 12.5 x 5 cm | Material: Monogram canvas or Epi leather | Includes chain strap",
    colors: ["#C19A6B", "#000000", "#8B0000"],
    reviews: [
      {
        username: "Isabella F.",
        rating: 9,
        comment: "A true collector's piece. Absolutely stunning craftsmanship.",
      },
      {
        username: "Olivia S.",
        rating: 10,
        comment: "Perfect for special occasions. Always gets noticed.",
      },
      {
        username: "Charlotte D.",
        rating: 9,
        comment: "Small but mighty. The details are incredible.",
      },
    ],
    imageUrls: [
      "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-petite-malle--M23518_PM1_Cropped%20worn%20view.jpg",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b05a20f2-1918-5780-95c1-c98af11ed0ea/a22e9ae1-6ddd-5298-bff1-8a97dc7f0118.jpg",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--M45943_PM2_Front%20view.jpg?wid=750&hei=870",
    ],
  },
  {
    id: 111,
    title: "GG Marmont Matelassé",
    type: "Shoulder Bag",
    category: "Hand bags",
    brand: "Gucci",
    originalPrice: 25000,
    salePrice: 23000,
    rating: 9.3,
    reviewCount: 678,
    shortDescription: "Quilted leather shoulder bag with iconic double G",
    detailDescription:
      "The GG Marmont features matelassé chevron leather with a vintage effect. The flap closure has the iconic Double G hardware, and the sliding chain strap can be worn multiple ways. The interior is lined with microfiber with a suede-like finish.",
    additionalInformation:
      "Dimensions: 24 x 13 x 7 cm | Material: Matelassé chevron leather | Antique gold-toned hardware",
    colors: ["#000000", "#8B4513", "#FFD700"],
    reviews: [
      {
        username: "Lauren B.",
        rating: 9,
        comment: "The leather is butter-soft and the design is timeless.",
      },
      {
        username: "Anna P.",
        rating: 10,
        comment: "Perfect size and the chain strap is very versatile.",
      },
      {
        username: "Michelle K.",
        rating: 9,
        comment: "Beautiful craftsmanship and attention to detail.",
      },
    ],
    imageUrls: [
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/cbce1cb7-c760-528a-92b3-3be430cea7b9/261927f6-e828-52c9-a5de-fa05d581f3d1.jpg",
      "https://i.pinimg.com/736x/10/81/6f/10816f6b38fda0e204995c5ddbaede15.jpg",
      "https://images-cdn.ubuy.co.in/65eb0f9072b2fc6eb12f3b99-gucci-gg-marmont-small-shoulder-bag.jpg",
    ],
  },
  {
    id: 112,
    title: "Dionysus GG Supreme",
    type: "Shoulder Bag",
    category: "Hand bags",
    brand: "Gucci",
    originalPrice: 28000,
    salePrice: 25000,
    rating: 9.4,
    reviewCount: 542,
    shortDescription: "Structured bag with tiger head spur closure",
    detailDescription:
      "The Dionysus GG Supreme features the iconic GG pattern with suede details and the distinctive tiger head closure. The sliding chain allows for multiple carrying options, and the interior is divided into compartments for organization.",
    additionalInformation:
      "Dimensions: 28 x 17 x 9 cm | Material: GG Supreme canvas with suede details | Tiger head closure",
    colors: ["#8B4513", "#000000"],
    reviews: [
      {
        username: "Katherine S.",
        rating: 9,
        comment: "The tiger head detail is stunning. A true statement piece.",
      },
      {
        username: "Elizabeth R.",
        rating: 10,
        comment: "Perfect mix of classic and modern design.",
      },
      {
        username: "Jennifer H.",
        rating: 9,
        comment: "Excellent quality and very practical for daily use.",
      },
    ],
    imageUrls: [
      "https://luxecollectivefashion.com/cdn/shop/files/LVO53225_0-Photoroom_912x.jpg?v=1728396022",
      "https://i.pinimg.com/736x/62/b6/04/62b60476d2bd1506e5c20905b0254de0.jpg",
      "https://luxecollectivefashion.com/cdn/shop/files/GXY49192_10-Photoroom_912x.jpg?v=1726754186",
    ],
  },
  {
    id: 113,
    title: "Bamboo Handle Bag",
    type: "Top Handle",
    category: "Hand bags",
    brand: "Gucci",
    originalPrice: 35000,
    salePrice: 31000,
    rating: 9.2,
    reviewCount: 423,
    shortDescription: "Classic design with iconic bamboo handle",
    detailDescription:
      "The Bamboo Handle bag is a Gucci classic, featuring the iconic bamboo handle first introduced in 1947. Made from fine leather with bamboo and hardware details, this bag includes a removable shoulder strap and protective metal feet.",
    additionalInformation:
      "Dimensions: 27 x 18 x 12 cm | Material: Leather with bamboo details | Includes dust bag",
    colors: ["#000000", "#8B4513", "#FFFFFF"],
    reviews: [
      {
        username: "Patricia L.",
        rating: 9,
        comment: "The bamboo handle is a work of art. Timeless elegance.",
      },
      {
        username: "Margaret W.",
        rating: 9,
        comment: "Beautiful craftsmanship and very practical size.",
      },
      {
        username: "Helen T.",
        rating: 10,
        comment: "A true heritage piece. Love the vintage appeal.",
      },
    ],
    imageUrls: [
      "https://backend.yoogiscloset.com/media/catalog/product/5/6/562028_01.jpg?quality=80&bg-color=255%2C255%2C255&fit=bounds&height=840&width=630",
      "https://biubiubiuluxury.com/cdn/shop/files/DSC00863-removebg-preview.png?v=1728450165&width=320",
      "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/01/18123548/Heat-and-bend-Gucci-3.jpg",
    ],
  },
  {
    id: 114,
    title: "Ophidia GG Mini",
    type: "Crossbody",
    category: "Hand bags",
    brand: "Gucci",
    originalPrice: 16000,
    salePrice: 15000,
    rating: 9.1,
    reviewCount: 567,
    shortDescription: "Compact crossbody with vintage-inspired design",
    detailDescription:
      "The Ophidia GG Mini features the iconic GG Supreme canvas with Web stripe detail. This compact bag includes an adjustable strap, magnetic closure, and interior zip pocket. The design combines Gucci's heritage elements with modern functionality.",
    additionalInformation:
      "Dimensions: 19 x 11 x 6 cm | Material: GG Supreme canvas with leather trim | Web stripe detail",
    colors: ["#8B4513"],
    reviews: [
      {
        username: "Susan R.",
        rating: 9,
        comment: "Perfect size for essentials. Love the vintage look.",
      },
      {
        username: "Mary B.",
        rating: 9,
        comment: "Great quality and very versatile.",
      },
      {
        username: "Alice K.",
        rating: 9,
        comment: "The Web stripe detail is classic Gucci. Beautiful bag.",
      },
    ],
    imageUrls: [
      "https://cdn11.bigcommerce.com/s-eie9lsi1uc/images/stencil/1280x1280/products/5551/22066/360_724606_9C2SG_8746_001_100_0000_Light-Mini-sac-main-OphidiaGG__78127.1680687972.jpg?c=1",
      "https://img.vitkac.com/uploads/product_thumb/TORBA%20772239%20FACUJ-8745/up/2.jpg",
      "https://cdn11.bigcommerce.com/s-eie9lsi1uc/images/stencil/1280x1280/products/96890/988547/772053_96IWG_8745_004_100_0000_Light-Mini-sac-main-OphidiaGG__57909.1701077817.jpg?c=1",
    ],
  },
  {
    id: 115,
    title: "Jackie 1961",
    type: "Hobo",
    category: "Hand bags",
    brand: "Gucci",
    originalPrice: 28000,
    salePrice: 25000,
    rating: 9.5,
    reviewCount: 489,
    shortDescription: "Iconic hobo bag with piston closure",
    detailDescription:
      "The Jackie 1961 is a revival of a Gucci icon. This hobo-style bag features the distinctive piston closure and an adjustable shoulder strap. Made from premium leather with vintage gold-toned hardware, it embodies timeless elegance.",
    additionalInformation:
      "Dimensions: 28 x 18 x 7 cm | Material: Leather | Piston closure",
    colors: ["#000000", "#8B4513", "#FFFFFF"],
    reviews: [
      {
        username: "Barbara M.",
        rating: 10,
        comment: "A true classic reborn. The leather is exceptional.",
      },
      {
        username: "Carol D.",
        rating: 9,
        comment: "Elegant and practical. Perfect everyday bag.",
      },
      {
        username: "Nancy W.",
        rating: 9,
        comment: "Love the vintage-inspired design. Very chic.",
      },
    ],
    imageUrls: [
      "https://i.pinimg.com/736x/e4/91/59/e49159ef8645e9cad4abc4458936efda.jpg",
      "https://i.pinimg.com/236x/ec/df/c1/ecdfc17ade2a4f4d8aa4bba7a9f588c5.jpg",
      "https://vader-prod.s3.amazonaws.com/1683023793-gucci-jackie-bag-6450e7908f9a6.jpg",
    ],
  },
  // Hermès Products
  {
    id: 116,
    title: "Birkin 30",
    type: "Top Handle",
    category: "Hand bags",
    brand: "Hermès",
    originalPrice: 12500,
    salePrice: 10000,
    rating: 9.8,
    reviewCount: 245,
    shortDescription: "Legendary handcrafted leather bag",
    detailDescription:
      "The Birkin 30 is the quintessential Hermès bag, handcrafted by skilled artisans. Features include the signature turn-lock closure, padlock, and protective feet. Each bag is individually crafted from the finest leather, making it a true collector's item.",
    additionalInformation:
      "Dimensions: 30 x 22 x 16 cm | Material: Togo leather | Palladium hardware",
    colors: ["#000000", "#8B4513", "#483D8B"],
    reviews: [
      {
        username: "Elizabeth C.",
        rating: 10,
        comment: "The ultimate luxury bag. Impeccable craftsmanship.",
      },
      {
        username: "Catherine P.",
        rating: 10,
        comment: "A true work of art. Worth every penny.",
      },
      {
        username: "Alexandra M.",
        rating: 9,
        comment: "The quality is beyond compare. A lifetime investment.",
      },
    ],
    imageUrls: [
      "https://i.pinimg.com/474x/d5/b4/fd/d5b4fddca3f2c4573610a7e6cd9eb858.jpg",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e17895ac-c641-58ae-bf50-e3ccc6e88f78/c333fa07-46bc-5144-847a-89206d0c368e.jpg",
      "https://myalmari.in/cdn/shop/files/KJO4-0323.jpg?v=1733972628&width=3699",
    ],
  },
  {
    id: 117,
    title: "Kelly 28",
    type: "Top Handle",
    category: "Hand bags",
    brand: "Hermès",
    originalPrice: 95000,
    salePrice: 95000,
    rating: 9.7,
    reviewCount: 198,
    shortDescription: "Iconic trapezoid-shaped leather bag",
    detailDescription:
      "The Kelly 28 is a symbol of Hermès excellence. This structured bag features the distinctive single top handle, shoulder strap, and front strap closure. Each bag is crafted from a single piece of leather, showcasing exceptional artisanship.",
    additionalInformation:
      "Dimensions: 28 x 22 x 10 cm | Material: Epsom leather | Gold hardware",
    colors: ["#000000", "#8B4513", "#B22222"],
    reviews: [
      {
        username: "Victoria R.",
        rating: 10,
        comment: "The epitome of elegance. Perfectly crafted.",
      },
      {
        username: "Sophia L.",
        rating: 9,
        comment: "A dream bag. The attention to detail is remarkable.",
      },
      {
        username: "Isabella B.",
        rating: 10,
        comment: "Timeless design and exceptional quality.",
      },
    ],
    imageUrls: [
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c3c88cac-cc3e-5479-a661-1075cbf3b725/aec8f940-3469-5597-816f-0dd903b3407c.jpg",
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/d2c91d0b-2f42-59b6-8cc5-95c2cd1d0d69/9bb8cf9c-f902-570c-b4d0-496205399f5b.jpg",
      "https://medias.collectorsquare.com/images/products/409936/00pp-hermes-kelly-28-cm-handbag-in-royal-blue-box-leather.jpg",
    ],
  },
  {
    id: 118,
    title: "Constance 24",
    type: "Shoulder Bag",
    category: "Hand bags",
    brand: "Hermès",
    originalPrice: 75000,
    salePrice: 75000,
    rating: 9.6,
    reviewCount: 167,
    shortDescription: "Elegant shoulder bag with H clasp",
    detailDescription:
      "The Constance 24 features the iconic H clasp closure and adjustable strap. This elegant shoulder bag is crafted from premium leather and lined with goatskin. The design combines sophistication with practical functionality.",
    additionalInformation:
      "Dimensions: 24 x 15 x 6 cm | Material: Box leather | Palladium hardware",
    colors: ["#000000", "#8B4513", "#000080"],
    reviews: [
      {
        username: "Charlotte H.",
        rating: 9,
        comment: "The H clasp is iconic. Beautiful everyday bag.",
      },
      {
        username: "Olivia P.",
        rating: 10,
        comment: "Perfect size and immaculate craftsmanship.",
      },
      {
        username: "Emma S.",
        rating: 9,
        comment: "Elegant and versatile. A true investment piece.",
      },
    ],
    imageUrls: [
      "https://i.pinimg.com/736x/d8/f9/d9/d8f9d943ef792609595e544a7dba6e1b.jpg",
      "https://saclab.com/wp-content/uploads/2023/02/2317_Hermes_Constance_24_Feu_M_1M.jpg",
      "https://saclab.com/wp-content/uploads/2021/05/798_Hermes_Constance_24_Gold_M_1F_S.jpg",
    ],
  },
  {
    id: 119,
    title: "Evelyne III 29",
    type: "Crossbody",
    category: "Hand bags",
    brand: "Hermès",
    originalPrice: 45000,
    salePrice: 42000,
    rating: 9.4,
    reviewCount: 289,
    shortDescription: "Casual-chic perforated H crossbody bag",
    detailDescription:
      "The Evelyne III 29 features the distinctive perforated H logo and adjustable canvas strap. Originally designed for grooming equipment, this bag has become a beloved casual-chic icon. The external pocket and secure tab closure make it perfect for everyday use.",
    additionalInformation:
      "Dimensions: 29 x 30 x 8 cm | Material: Clemence leather | Adjustable canvas strap",
    colors: ["#8B4513", "#000000", "#556B2F"],
    reviews: [
      {
        username: "Grace T.",
        rating: 9,
        comment: "Perfect casual luxury bag. So practical and beautiful.",
      },
      {
        username: "Audrey M.",
        rating: 9,
        comment: "The leather quality is exceptional. Love the perforated H.",
      },
      {
        username: "Lucy W.",
        rating: 10,
        comment: "My go-to everyday bag. Worth every penny.",
      },
    ],
    imageUrls: [
      "https://assets.hermes.com/is/image/hermesproduct/evelyne-iii-29-bag--056277CK08-worn-9-0-0-900-900_g.jpg",
      "https://preview.redd.it/haul-evelyne-iii-29-in-gold-with-phw-v0-g844bjc5paod1.jpeg?auto=webp&s=a0f18d552d70f74260d9faae102712b25e302140",
      "https://i.pinimg.com/564x/a5/d8/05/a5d80509d4ae2f154a607f356427c786.jpg",
    ],
  },
  {
    id: 120,
    title: "Picotin Lock 18",
    type: "Top Handle",
    category: "Hand bags",
    brand: "Hermès",
    originalPrice: 35000,
    salePrice: 32000,
    rating: 9.3,
    reviewCount: 234,
    shortDescription: "Charming bucket bag with padlock detail",
    detailDescription:
      "The Picotin Lock 18 is inspired by horse feed bags, featuring a simple bucket shape with elegant padlock closure. This charming bag is perfect for casual outings while maintaining Hermès' signature sophistication. The interior is spacious and unlined, showcasing the beautiful natural leather.",
    additionalInformation:
      "Dimensions: 18 x 13 x 13 cm | Material: Clemence leather | Palladium hardware",
    colors: ["#8B4513", "#000000", "#F5F5DC"],
    reviews: [
      {
        username: "Beatrice N.",
        rating: 9,
        comment: "Adorable design with Hermès quality. Perfect size.",
      },
      {
        username: "Rose M.",
        rating: 9,
        comment: "Simple yet elegant. The leather is divine.",
      },
      {
        username: "Julia P.",
        rating: 10,
        comment: "My favorite casual luxury bag. So unique.",
      },
    ],
    imageUrls: [
      "https://assets.hermes.cn/is/image/hermesproduct/picotin-lock-18-pocket-bag--083189CKAO-worn-1-0-0-900-900_g.jpg",
      "https://i.pinimg.com/736x/aa/d7/6f/aad76fa5b4ba9cc3bb0dd0c6a76360bc.jpg",
      "https://www.bragmybag.com/wp-content/uploads/2020/04/Hermes-Picotin-Lock-18-Bag-in-Clemence-Gris-Misty.webp",
    ],
  },
];
