import './style.css';

const Menu = ({ categories, name }) => {
    return <ul className="nav-menu">
        {categories.map((i) => {
            return <li className="nav-menu-listitem"><a href={`/${name}-${i}`}>{i}</a></li>
        })}
    </ul>
}

export default Menu;