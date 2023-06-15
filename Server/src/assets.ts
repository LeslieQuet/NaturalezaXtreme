const articlesData= [
    {
        name: "Man Hennia Tshirt UV",
        price: 26400,
        rating: [5],
        brand: "Montagne",
        gender: "male",
        size: { XS: 1, S: 5, M: 6, L: 10, XL: 10, U: 0 },
        color: "Black",
        image: "https://d368r8jqz0fwvm.cloudfront.net/34883-product_lg/remera-de-hombre-hanoi-uv.jpg",
        type: "Tshirt",
        active: true,
    }, 
    {
        name: "Alaska women's thermal underwear pants",
        price: 18200,
        rating: [5],
        brand: "Montagne",
        gender: "female",
        size: { XS: 10, S: 5, M: 6, L: 6, XL: 10, U: 0 },
        color: "grey",
        comments: ["I would buy 1000", "They are excellent"],
        image: "https://d368r8jqz0fwvm.cloudfront.net/27703-product_lg/pantalon-interior-termico-de-mujer-alaska.jpg",
        type: "pant",
        active: true,
    },
    {
        name: "Men's Waterproof Ski Mountaineering Jacket",
        price: 25300,
        rating: [5],
        brand: "Jimchi",
        gender: "male",
        size: { XS: 0, S: 5, M: 6, L: 0, XL: 10, U: 0 },
        color: "red",
        comments: ["It is excellent, very good quality"],
        image: "https://m.media-amazon.com/images/I/617HtfYBSGL._AC_UL1200_.jpg",
        type: "jacket",
        active: true,
    },
    {
        name: "Men's Outdoor Pants Convertible",
        price: 25300,
        rating: [3],
        brand: "Zorea",
        gender: "male",
        size: { XS: 0, S: 5, M: 6, L: 0, XL: 10, U: 0 },    
        color: "green",
        comments: ["It broke fast"],
        image: "https://m.media-amazon.com/images/I/61HZPHer1QL._AC_UL1500_.jpg",
        type: "pant",
        active: true,
    },
    {
        name: "UNISEX ROUTINE BEANIE HAT",
        price: 3700,
        brand: "Quiksilver",
        gender: "unisex",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 10 },
        color: "green",
        stock: 10,
        image: "https://m.media-amazon.com/images/I/81KZeAxdPgL._AC_UL1208_.jpg",
        type: "accesories",
        active: true,
    },
    {
        name: "Hiking pants for women Mara",
        price: 65000,
        rating: [3],
        brand: "kutook",
        gender: "female",
        size: { XS: 1, S: 1, M: 1, L: 0, XL: 0, U: 0 },
        color: "brown",
        image: "https://m.media-amazon.com/images/I/71q7cKDWq4L._AC_UL1500_.jpg",
        type: "pant",
        active: true,
    },
    {
        name: "Cotton pants for women Beny",
        price: 35000,
        rating: [3],
        brand: "Benneton",
        gender: "female",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 0 },
        color: "orange",
        image: "https://m.media-amazon.com/images/I/81K-rIMWK-L._AC_UL1500_.jpg",
        type: "pant",
        active: true,
    },
    {
        name: "Mika Unisex Knit Hat",
        price: 4000,
        brand: "Wmcaps",
        gender: "unisex",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 10 },
        color: "pink",
        image: "https://m.media-amazon.com/images/I/81oODXOm19L._AC_UL1500_.jpg",
        type: "accesories",
        active: true,
    },
    {
        name: "Lola women's trousers",
        price: 35300,
        rating: [4],
        brand: "Montagne",
        gender: "female",
        size: { XS: 1, S: 5, M: 6, L: 1, XL: 10, U: 0 },
        color: "black",
        comments: ["Good pants, the fabric is super resistant"],
        image: "https://d368r8jqz0fwvm.cloudfront.net/31113-product_lg/pantalon-de-mujer-sasha.jpg",
        type: "pant",
        active: true,
    },
    {
        name: "Fury Knit Beanie",
        price: 3500,
        brand: "Nitras",
        gender: "unisex",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 10 },
        color: "yellow",
        image: "https://m.media-amazon.com/images/I/71AqNsaN3FL._AC_UL1500_.jpg",
        type: "accesories",
        active: true,
    },
    {
        name: "Glacier women's boots",
        price: 45000,
        brand: "Glacier",
        gender: "female",
        shoeSize: {35: 1,36: 5, 37: 2, 38: 1, 39: 1, 40: 0, 41: 6, 42: 2, 43: 0, 44: 10, 45: 0, 46: 0},
        color: "orange",
        image: "https://d368r8jqz0fwvm.cloudfront.net/41283-product_lg/botas-de-mujer-glacier.jpg",
        type: "shoes",
        active: true,
    },
    {
        name: "Mountain Boots Hiking Shoes Sneakers",
        price: 70500,
        brand: "Nortiv",
        gender: "male",
        shoeSize: {35: 1,36: 5, 37: 2, 38: 1, 39: 1, 40: 0, 41: 6, 42: 2, 43: 3, 44: 10, 45: 1, 46: 1},
        color: "grey",
        image: "https://m.media-amazon.com/images/I/61xIPVRJCwL._AC_UL1000_.jpg",
        type: "shoes",
        active: true,
    },
    {
        name: "Women's Waterproof Non-slip Hiking Shoes",
        price: 68000,
        brand: "Wowei",
        gender: "famale",
        shoeSize: {35: 1,36: 5, 37: 2, 38: 1, 39: 1, 40: 5, 41: 6, 42: 2, 43: 3, 44: 10, 45: 1, 46: 1},
        color: "green",
        image: "https://m.media-amazon.com/images/I/61xIPVRJCwL._AC_UL1000_.jpg",
        type: "shoes",
        active: true,
    },
    {
        name: "Ewing Tec men's jacket",
        price: 45200,
        brand: "Montagne",
        gender: "male",
        size: { XS: 0, S: 5, M: 6, L: 0, XL: 10, U: 0 },
        color: "green",
        image: "https://d368r8jqz0fwvm.cloudfront.net/17856-product_lg/campera-de-hombre-ewing.jpg",
        type: "jacket",
        active: true,
    },
    {
        name: "Cycling Glasses Polarized Interchangeable Lenses UV 400 GeenGlass",
        price: 22000,
        rating: [5],
        brand: "Queshark",
        gender: "unisex",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 7 },
        color: "green",
        image: "https://m.media-amazon.com/images/I/61II9HV9TlL._AC_UL1500_.jpg",
        type: "accesories",
        active: true,
    },
    {
        name: "Cycling Glasses 1 Polarized 4 HD Interchangeable Lenses UV 400 RedGlass",
        price: 22000,
        rating: [5],
        brand: "Queshark",
        gender: "unisex",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 2 },
        color: "red",
        image: "https://m.media-amazon.com/images/I/41HmY6Os26L._AC_.jpg",
        type: "accesories",
        active: true,
    },
    {
        name: "Sports Sunglasses Unisex Adult",
        price: 26500,
        rating: [5],
        brand: "Cressi",
        gender: "unisex",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 6 },
        color: "grey",
        image: "https://m.media-amazon.com/images/I/61Urj9HOWoL._AC_UL1500_.jpg",
        type: "accesories",
        active: true,
    },
    {
        name: "Aspire Pocito Sunglasses Unisex Adult",
        price: 35000,
        rating: [5],
        brand: "Cressi",
        gender: "unisex",
        size: { XS: 0, S: 0, M: 0, L: 0, XL: 0, U: 7 },
        color: "orange",
        image: "https://m.media-amazon.com/images/I/61eZs-fRRoL._AC_SX425_.jpg",
        type: "accesories",
        active: true,
    },
    {
        name: "Women's Light Elastic Trekking Cargo Pants",
        price: 35300,
        brand: "MoFiz",
        gender: "female",
        size: { XS: 1, S: 5, M: 6, L: 1, XL: 10, U: 0 },
        color: "grey",
        image: "https://m.media-amazon.com/images/I/51PTNSbqvdL._AC_UL1500_.jpg",
        type: "pant",
        active: true,
    },
    {
        name: "HH Lifa women's sports undershirt",
        price: 27000,
        rating: [5],
        brand: "Helly Hansen",
        gender: "female",
        size: { XS: 1, S: 5, M: 6, L: 1, XL: 10, U: 0 },
        color: "black",
        comments: ["It is very warm and soft"],
        image: "https://m.media-amazon.com/images/I/71-PY6S+p2L._AC_UL1500_.jpg",
        type: "Tshirt",
        active: true,
    },
    {
        name: "Gamma Men's Short Sleeve Thermal Shirt",
        price: 20000,
        brand: "Gems",
        gender: "male",
        size: { XS: 1, S: 5, M: 6, L: 1, XL: 10, U: 0 },
        color: "black",
        image: "https://m.media-amazon.com/images/I/51rFBQdaSLL._AC_UL1000_.jpg",
        type: "Tshirt",
        active: true,
    },
    {
        name: "Thermal Shirt Active Crew Woman Blue",
        price: 23000,
        brand: "Helly Hansen",
        gender: "female",
        size: { XS: 1, S: 5, M: 6, L: 1, XL: 10, U: 0 },
        color: "blue",
        image: "https://m.media-amazon.com/images/I/81ojLgGgncL._AC_UL1500_.jpg",
        type: "Tshirt",
        active: true,
    },
    {
        name: "Women's Active Crew Thermal Shirt",
        price: 23000,
        brand: "Helly Hansen",
        gender: "female",
        size: { XS: 1, S: 3, M: 6, L: 1, XL: 1, U: 0 },
        color: "violet",
        image: "https://m.media-amazon.com/images/I/41R9+PjjURL._AC_.jpg",
        type: "Tshirt",
        active: true,
    }
]

export default articlesData;