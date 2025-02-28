const products = [
    {
      id: 1,
      title: 'Wool Blend Sweater',
      department: 'English Department',
      originalPrice: 89.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 2,
      title: 'Casual Denim Jacket',
      department: 'English Department',
      originalPrice: 129.99,
      salePrice: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 3,
      title: 'Slim Fit Chinos',
      department: 'English Department',
      originalPrice: 69.99,
      salePrice: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 4,
      title: 'Linen Button-Up Shirt',
      department: 'English Department',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 5,
      title: 'Casual Oxford Shirt',
      department: 'English Department',
      originalPrice: 65.99,
      salePrice: 45.99,
      imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 6,
      title: 'Printed Summer Shirt',
      department: 'English Department',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 7,
      title: 'Slim Fit Blazer',
      department: 'Formal Collection',
      originalPrice: 199.99,
      salePrice: 149.99,
      imageUrl: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 8,
      title: 'Lightweight Puffer Vest',
      department: 'Outdoor Collection',
      originalPrice: 89.99,
      salePrice: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 9,
      title: 'Classic Denim Jeans',
      department: 'Casual Collection',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 10,
      title: 'Striped Polo Shirt',
      department: 'Summer Collection',
      originalPrice: 49.99,
      salePrice: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 11,
      title: 'Lightweight Bomber Jacket',
      department: 'Urban Collection',
      originalPrice: 129.99,
      salePrice: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1591047139214-d21426a4a1bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 12,
      title: 'Merino Wool Cardigan',
      department: 'Winter Collection',
      originalPrice: 119.99,
      salePrice: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 13,
      title: 'Graphic Print T-Shirt',
      department: 'Casual Collection',
      originalPrice: 39.99,
      salePrice: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 14,
      title: 'Slim Fit Dress Shirt',
      department: 'Formal Collection',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 15,
      title: 'Lightweight Chino Shorts',
      department: 'Summer Collection',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 16,
      title: 'Hooded Sweatshirt',
      department: 'Casual Collection',
      originalPrice: 69.99,
      salePrice: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 17,
      title: 'Quilted Jacket',
      department: 'Winter Collection',
      originalPrice: 149.99,
      salePrice: 99.99,
      imageUrl: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 18,
      title: 'Slim Fit Turtleneck',
      department: 'Winter Collection',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 19,
      title: 'Cargo Pants',
      department: 'Outdoor Collection',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 20,
      title: 'Lightweight Raincoat',
      department: 'Outdoor Collection',
      originalPrice: 129.99,
      salePrice: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 21,
      title: 'Knit Beanie Hat',
      department: 'Winter Accessories',
      originalPrice: 29.99,
      salePrice: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 22,
      title: 'Leather Belt',
      department: 'Accessories',
      originalPrice: 49.99,
      salePrice: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1553704571-c32d20af8b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 23,
      title: 'Patterned Socks Set',
      department: 'Accessories',
      originalPrice: 24.99,
      salePrice: 16.99,
      imageUrl: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 24,
      title: 'Leather Wallet',
      department: 'Accessories',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 25,
      title: 'Aviator Sunglasses',
      department: 'Accessories',
      originalPrice: 129.99,
      salePrice: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 26,
      title: 'Plaid Flannel Shirt',
      department: 'Casual Collection',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1589992896844-9b720813d1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 27,
      title: 'Slim Fit Joggers',
      department: 'Activewear',
      originalPrice: 69.99,
      salePrice: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 28,
      title: 'Performance T-Shirt',
      department: 'Activewear',
      originalPrice: 39.99,
      salePrice: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 29,
      title: 'Zip-Up Hoodie',
      department: 'Casual Collection',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 30,
      title: 'Corduroy Shirt',
      department: 'Fall Collection',
      originalPrice: 69.99,
      salePrice: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 31,
      title: 'Wool Blend Overcoat',
      department: 'Winter Collection',
      originalPrice: 249.99,
      salePrice: 179.99,
      imageUrl: 'https://images.unsplash.com/photo-1608236415053-3691791bbffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 32,
      title: 'Leather Gloves',
      department: 'Winter Accessories',
      originalPrice: 49.99,
      salePrice: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 33,
      title: 'Cashmere Scarf',
      department: 'Winter Accessories',
      originalPrice: 89.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 34,
      title: 'Slim Fit Suit',
      department: 'Formal Collection',
      originalPrice: 399.99,
      salePrice: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 35,
      title: 'Silk Tie',
      department: 'Formal Accessories',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 36,
      title: 'Pocket Square Set',
      department: 'Formal Accessories',
      originalPrice: 39.99,
      salePrice: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 37,
      title: 'Dress Shoes',
      department: 'Footwear',
      originalPrice: 149.99,
      salePrice: 99.99,
      imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 38,
      title: 'Casual Sneakers',
      department: 'Footwear',
      originalPrice: 89.99,
      salePrice: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 39,
      title: 'Leather Boots',
      department: 'Footwear',
      originalPrice: 179.99,
      salePrice: 129.99,
      imageUrl: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 40,
      title: 'Casual Loafers',
      department: 'Footwear',
      originalPrice: 119.99,
      salePrice: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 41,
      title: 'Leather Messenger Bag',
      department: 'Accessories',
      originalPrice: 199.99,
      salePrice: 149.99,
      imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 42,
      title: 'Canvas Backpack',
      department: 'Accessories',
      originalPrice: 89.99,
      salePrice: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 43,
      title: 'Analog Watch',
      department: 'Watches',
      originalPrice: 199.99,
      salePrice: 149.99,
      imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 44,
      title: 'Digital Smartwatch',
      department: 'Watches',
      originalPrice: 249.99,
      salePrice: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 45,
      title: 'Swim Shorts',
      department: 'Summer Collection',
      originalPrice: 49.99,
      salePrice: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 46,
      title: 'Linen Pants',
      department: 'Summer Collection',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 47,
      title: 'Denim Overshirt',
      department: 'Fall Collection',
      originalPrice: 89.99,
      salePrice: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 48,
      title: 'Leather Jacket',
      department: 'Fall Collection',
      originalPrice: 299.99,
      salePrice: 229.99,
      imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 49,
      title: 'Thermal Henley',
      department: 'Winter Collection',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 50,
      title: 'Wool Blend Sweater',
      department: 'Winter Collection',
      originalPrice: 99.99,
      salePrice: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 51,
      title: 'Quilted Vest',
      department: 'Fall Collection',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 52,
      title: 'Slim Fit Polo',
      department: 'Summer Collection',
      originalPrice: 49.99,
      salePrice: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 53,
      title: 'Stretch Jeans',
      department: 'Casual Collection',
      originalPrice: 79.99,
      salePrice: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1604176424472-9d7122c67c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 54,
      title: 'Crewneck Sweatshirt',
      department: 'Casual Collection',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1572495641004-28421ae29ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 55,
      title: 'Packable Down Jacket',
      department: 'Winter Collection',
      originalPrice: 149.99,
      salePrice: 99.99,
      imageUrl: 'https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 56,
      title: 'Wayfarer Sunglasses',
      department: 'Accessories',
      originalPrice: 119.99,
      salePrice: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 57,
      title: 'Leather Card Holder',
      department: 'Accessories',
      originalPrice: 39.99,
      salePrice: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1607435097405-db48f377bff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 58,
      title: 'Knit Pullover',
      department: 'Fall Collection',
      originalPrice: 89.99,
      salePrice: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1576070167415-a7d4df451e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 59,
      title: 'Slim Fit Dress Pants',
      department: 'Formal Collection',
      originalPrice: 89.99,
      salePrice: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    },
    {
      id: 60,
      title: 'Casual Lounge Pants',
      department: 'Casual Collection',
      originalPrice: 59.99,
      salePrice: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      colors: ['#33A0FF', '#2DD06F', '#F52B70', '#FFC107']
    }
  ]