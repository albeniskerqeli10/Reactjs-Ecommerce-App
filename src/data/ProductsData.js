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
    image:
      "https://machousestore.com/media/catalog/product/cache/1/small_image/438.2x/040ec09b1e35df139433887a97daa66f/m/a/macbook-pro_1.png",
    price: 680,
    count: 1,
    addQty: function () {
      this.count = this.count++;
    }
  },

  {
    id: 4,
    title: "Pizza",
    image:
      "https://www.pngkey.com/png/full/171-1714464_custom-logo-printed-wholesale-design-pizza-boxes.png",
    price: 10,
    count: 1,
    addQty: function () {
      return ++this.count;
    }
  }
];
