import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Wedding from '../images/wedding1.jpg';
import HouseHold from '../images/household1.jpg';
import Tailor from '../images/tailoring1.jpg';
import SameDay from '../images/girl.jpg';
import Shirt from '../images/shirt.jpg';

function Cards() {
    return (
        <div className = 'cards'>
            <h1 className = "title">Our Services</h1>
           
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src = {Wedding}
                        text = "Formal and Wedding Gowns"
                        label = 'Adventure'
                        path = '/'
                        />
                         <CardItem
                        src = {HouseHold}
                        text = "Household Cleaning"
                        label = 'Luxury'
                        path = '/'
                        /> 
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src = {Tailor}
                        text = "Alteration/Tailoring"
                        label = 'Mystery'
                        path = '/'
                        />
                        <CardItem
                        src = {SameDay}
                        text = "Same Day Service*"
                        label = 'Adventure'
                        path = '/'
                        />
                        <CardItem
                        src = {Shirt}
                        text = "Dress Shirt Laundry"
                        label = 'Adrenaline'
                        path = '/'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
