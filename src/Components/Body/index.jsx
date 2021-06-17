import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsGrid from "../CardsGrid";
import Cat from "../Cat";
import Dog from "../Dog";
import Filterpanel from "../FilterPanel";
import Offers from "../Offers";
import './style.css';

const Body = (props) => {

    const [data, setData] = useState();

    // useEffect(async () => {
    //     const result = await axios(
    //         'https://localhost:5001/api/products/getByCategory?name=Food&categoryType=all',
    //     );
    //     debugger;

    //     setData(result.data);
    // },[]);

    const mockData =
        [
            {
                "id": "1",
                "name": "Royal Canin",
                "price": "2899",
                "imgSourceUrl": "https://images-na.ssl-images-amazon.com/images/I/61%2Br%2B-2zBFL._AC_SY879_.jpg"
            },
            {
                "id": "2",
                "name": "Drools",
                "price": "1499",
                "imgSourceUrl": "https://www.bigbasket.com/media/uploads/p/l/40142449_2-drools-dog-food-chicken-egg-puppy.jpg"
            },
            {
                "id": "3",
                "name": "Pedigree",
                "price": "1200",
                "imgSourceUrl": "https://5.imimg.com/data5/KN/FK/FP/SELLER-6476813/pedigree-dog-food-500x500.jpg"
            },
            {
                "id": "4",
                "name": "Hills Science",
                "price": "2020",
                "imgSourceUrl": "https://images-na.ssl-images-amazon.com/images/I/81UfmF8y-wS._SX679_.jpg"
            }
        ];
    const filterData =
        [
            {
                "id": "1",
                "name": "Type",
                "children": [
                    {
                        "id": "1",
                        "name": "Wet Food",
                        "link": ""
                    },
                    {
                        "id": "2",
                        "name": "Dry Food",
                        "link": ""
                    },
                    {
                        "id": "3",
                        "name": "Treats treat treat treat treat",
                        "link": ""
                    },
                ]
            },
            {
                "id": "2",
                "name": "Brand",
                "children": [
                    {
                        "id": "1",
                        "name": "RC",
                        "link": ""
                    },
                ]
            }
        ];
    return (
        <div className="body">
            {/* {props.section == "Dog" && <Dog />}
            {props.section == "Cat" && <Cat />}
            {props.section == "Offers" && <Offers />} */}
            <Filterpanel filters={filterData} />
            <CardsGrid items={mockData} />
        </div>
    );
}

export default Body;