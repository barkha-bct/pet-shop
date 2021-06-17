import food from "../../Assets/Images/dog-food.jpg";
import appLogo from "../../Assets/Images/pet-icon.png";
import './style.css';

const icons = {
    Food: food,
    AppLogo: appLogo
}
const Icon = ({name, sourceUrl, iconClass}) => {
    const i = sourceUrl ? sourceUrl: icons[name];
    return <img src={i} alt={name} className={iconClass}/> ;
}

export default Icon;