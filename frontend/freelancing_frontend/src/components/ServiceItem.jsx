import { Link } from "react-router-dom";
import "./ServiceItem.css";

const ServiceItem = ({ id, name, title, rating, price, image }) => {
  return (
    <Link to={`/service/${id}`} className="servcard">

      <img src={image} alt={name} className="servimg" />

      <div className="servbody">
        <h3>{name}</h3>
        <p className="servtit">{title}</p>

        <div className="moredetser">
          <span>${price}/hr</span>
        </div>
      </div>

    </Link>
  );
};

export default ServiceItem;
