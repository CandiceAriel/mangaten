import TokyoRevengersCover from "../assets/images/TokyoRevengersCover.jpg";

export const books = [
  {
    productId: "M001",
    src: TokyoRevengersCover,
    title: "Tokyo Revengers",
    categoryId: "C01",
    price: 4.00
  },
  {
    productId: "M002",
    src: TokyoRevengersCover,
    title: "Tokyo Revengers",
    categoryId: "C01",
    price: 4.00
  },
  {
    productId: "M003",
    src: TokyoRevengersCover,
    title: "My Hero Academia",
    categoryId: "C01",
    price: 4.00
  },
  {
    productId: "M004",
    src: TokyoRevengersCover,
    title: "Fruit Basket",
    categoryId: "C01",
    price: 4.00
  },
  {
    productId: "M005",
    src: TokyoRevengersCover,
    title: "Horimiya",
    categoryId: "C01",
    price: 4.00
  },
  {
    productId: "M006",
    src: TokyoRevengersCover,
    title: "Demon Slayer",
    categoryId: "C01",
    price: 4.00
  },
  {
    productId: "M007",
    src: TokyoRevengersCover,
    title: "Chainsaw Man",
    categoryId: "C01",
    price: 4.00
  },
  {
    productId: "N008",
    src: TokyoRevengersCover,
    title: "My Love Mix-Up!",
    categoryId: "C02",
    price: 4.00
  },
  {
    productId: "N001",
    title: "Your Name",
    categoryId: "C02",
    price: 4.00
  },
];

export const bookCategories = [
  {
    categoryId: "C01",
    categoryName: "Manga",
    items: [
      {
        productId: "M001",
        src: TokyoRevengersCover,
        title: "Tokyo Revengers",
        price: 4.00
      },
      {
        productId: "M002",
        src: TokyoRevengersCover,
        title: "My Hero Academia ",
        price: 4.00
      },
      {
        productId: "M003",
        src: TokyoRevengersCover,
        title: "Fruit Basket",
        price: 4.00
      },
      {
        productId: "M004",
        src: TokyoRevengersCover,
        title: "Horimiya",
        price: 4.00
      },
      {
        productId: "M005",
        src: TokyoRevengersCover,
        title: "Demon Slayer",
        price: 4.00
      },
      {
        productId: "M006",
        src: TokyoRevengersCover,
        title: "Chainsaw Man",
        price: 4.00
      },
      {
        productId: "M007",
        src: TokyoRevengersCover,
        title: "My Love Mix-Up!",
        price: 4.00
      },
    ],
  },
  {
    categoryId: "C02",
    categoryName: "Novel",
    items: [
      {
        productId: "N001",
        title: "Your Name",
        price: 4.00
      },
      {
        productId: "N002",
        title: "Your Name",
        price: 4.00
      },
    ],
  },
  {
    categoryId: "C03",
    categoryName: "Artbook"
  },
  {
    categoryId: "C04",
    categoryName: "Study Guide"
  },
  {
    categoryId: "C05",
    categoryName: "Others"
  }
]