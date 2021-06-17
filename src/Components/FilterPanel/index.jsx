
import Cover from '../../Assets/Images/pets.jpg';
import './style.css';

const Filterpanel = (props) => {
    
    return <div className="Filterpanel">
        <span className="filter-title">Filters</span>
        {props.filters.map((i) => {
            return <ul className="filter-list">
                <li><span className="filter-type-name">{i.name}</span>
                    <ul className="child-list">
                        {i.children && i.children.map((i) => {
                            return <li className="child-list-item">
                                <input type="checkbox" />
                                <span>{i.name}</span>
                            </li>
                        })}
                    </ul>
                </li>
            </ul>
        }
        )}
    </div>
}

export default Filterpanel;