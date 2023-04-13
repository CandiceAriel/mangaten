import TokyoRevengersCover from "../assets/images/TokyoRevengersCover.jpg";

export const books = [
  {
    productId: "M001",
    src: TokyoRevengersCover,
    title: "Tokyo Revengers",
    price: 4.00
  },
  {
    productId: "M002",
    title: "Your Name",
    price: 4.00
  },
  {
    productId: "M003",
    title: "Your Name",
    price: 4.00
  },
  {
    productId: "M004",
    title: "Your Name",
    price: 4.00
  }
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
        title: "Your Name",
        price: 4.00
      },
    ],
  },
  {
    categoryId: "C02",
    categoryName: "Novel"
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