import "./Show.css";
import { useNavigate, useParams } from "react-router";
import StarIcon from '@mui/icons-material/Star';

function Show({ products }) {

  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const navigate = useNavigate();


  return (
    <div className="allproducts">
      <div className="container">
        <div className="left">
          <img className="product-img" src={product.img} alt={product.Title} />
        </div>

        <div className="center">
          <h1 className="product-title">{product.Title}</h1>
          <StarIcon id="star-rating"/> 
          <StarIcon id="star-rating"/> 
          <StarIcon id="star-rating"/> 
          <StarIcon id="star-rating"/> 

          <p className="product-price">${product.Price}</p>

          <div className="paragraph-two">
          <p className="product-description">{product.desc}</p>
        </div>
        </div>

        <div className="right">
          <div className="section">
          <h1 className="buy-button">Buy now</h1>
          <button className="add-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>



  )
};


export default Show;