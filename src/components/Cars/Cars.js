import {useEffect, useState} from 'react';

import CarForm from "../CarForm/CarForm";
import {carService} from "../../services";
import Car from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    },[])



    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car=><Car kay={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;