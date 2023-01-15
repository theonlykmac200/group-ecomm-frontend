import "./Show.css";
import { useNavigate, useParams } from "react-router";

function Show({ products }) {

  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const navigate = useNavigate();


  return (
    <div className="box-one">
      <div className="content">
        <img className="product-img" src={product.img} alt={product.Title} />

        <p className="product-title">{product.Title}</p>
        <p className="product-price">${product.Price}</p>
      </div>
    </div>

  

  )
};

export default Show;