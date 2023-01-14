import Product from "../../components/Product/Product";
import "./Index.css";
const Index = ({ products }) => {
  function loaded() {
    return products.map((product) => {
      console.log(product._id);
      return (
        <Product
          className="product"
          name={product.Title}
          description={product.desc}
          price={product.Price}
          img={product.img}
          id={product._id}
        />
      );
    });
  }
  function loading() {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <>
      <div className="products">{products ? loaded() : loading()}</div>
    </>
  );
};
export default Index;
