import "./Show.css";
import { useNavigate, useParams } from "react-router";

function Show ({products}) {

  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const navigate = useNavigate();


  return (
    <div className="show">
      <h1>{product.Title}</h1>
      <h1>{product.desc}</h1>
      <h1>{product.Price}</h1>
      <img src={product.img} alt={product.Title} />
      <h1>{product._id}</h1>
    </div>
  )
};

export default Show;