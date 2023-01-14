import "./Show.css";
import { useNavigate, useParams } from "react-router";

function Show ({products}) {

  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const navigate = useNavigate();


  return (
    <div className="show">
      <h1>{product.Title}</h1>
      <p>{product.desc}</p>
      <p>{product.Price}</p>
      <img src={product.img} alt={product.Title} />
    </div>
  )
};

export default Show;