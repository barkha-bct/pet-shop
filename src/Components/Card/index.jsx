import Icon from '../../Components/Icon';
import './style.css';

const Card = ({ item }) => {
    return <div className="column">
        <div className="card">
        <Icon name={item.name} sourceUrl={item.imgSourceUrl} iconClass="card-img" />
            <h3>{item.name}</h3>
            <p> Rs. {item.price}</p>
            <div className="add-to-cart-button">Add To Cart</div>
        </div>
    </div>;
}

export default Card;