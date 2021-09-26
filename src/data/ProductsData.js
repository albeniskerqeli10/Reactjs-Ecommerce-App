import chocolate from "../assets/chocolate.webp";
import headphones from "../assets/headphones.webp";
import macbook from "../assets/macbook.webp";
import pizza from "../assets/pizza.webp";
export const ProductsData = [
  {
    id: 0,
    title: "Chocolate",
    image: chocolate,
    price: 5,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },

  {
    id: 1,
    title: "Headphones",
    image: headphones,
    price: 25,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  },

  {
    id: 2,
    title: "Macbook M1",
    image:macbook,
    price: 680,
    count: 1,
    addQty: function () {
      this.count = this.count++;
    }
  },

  {
    id: 4,
    title: "Pizza",
    image:pizza,
    price: 10,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  }
];
