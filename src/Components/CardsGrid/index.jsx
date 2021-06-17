import Card from "../Card";
import './style.css'

const CardsGrid = (props) => {
    const {items} = props;

    return <div className="grid-body">{items && items.map((i) => {
        return <Card item={i}/>}
    )} </div>
}

export default CardsGrid;