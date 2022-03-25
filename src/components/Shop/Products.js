import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "test1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "test2",
    price: 12,
    description: "This is a second product - amazing!",
  },
  {
    id: 3,
    title: "test3",
    price: 18,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
