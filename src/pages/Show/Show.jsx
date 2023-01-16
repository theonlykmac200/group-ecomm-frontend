import "./Show.css";
import { useNavigate, useParams } from "react-router";

function Show({ products }) {

  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const navigate = useNavigate();


  return (
    <div className="container">
      <div className="left">
      <img className="product-img" src={product.img} alt={product.Title} />
        </div>

      <div className="center">
      <p className="product-title">{product.Title}</p>
      </div>

      <div className="right">
      <h1>testing</h1>
        <p>${product.Price}</p>
        <button>Add to cart</button>
      </div>
    </div>



  )
};


export default Show;