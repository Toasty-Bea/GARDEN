import React from 'react';
import { TutorialList } from '../Helper/TutorialList'; //用來放入MENU的卡list
import MenuCard from '../components/MenuCard';//用來放入MENU的卡
//大卡片
import { BigCardList } from '../Helper/BigCardList'; //用來放入MENU的大卡片資料陣列
import BigMenuCard from '../components/BigMenuCard';//用來放入MENU的卡

import backgroundImage from '../assets/image/USED/Background/11.png';

import '../styles/Menu.css';
import { useState } from 'react';

const Menu = () => {

    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        
        setSelectedCard(index);
    };
    //STATE去控制是否要顯示大卡片
    const handleHideBigCard = () => {
        
        setSelectedCard(null);
    };

    return (
        <div className="menu" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <h1 className="MenuPage">Plant Species Directory</h1>

            {/*小卡片的資料*/}
            <div className="menuList" >
                {TutorialList.map((Menuitem, index) => {
                    return (<MenuCard
                        key={index}
                        image={Menuitem.image}
                        name={Menuitem.name}
                        description={Menuitem.description}
                        onCardClick={() => handleCardClick(index)}
                    />
                    );
                })}
            </div>


            {/*大卡片的資料*/}
            <div className="bigCardList" onClick={handleHideBigCard}>
                {BigCardList.map((BigMenuItem, index) => {
                    return (<BigMenuCard
                        key={index}
                        //imageList={BigMenuItem.image}
                        image={BigMenuItem.image}
                        name={BigMenuItem.name}
                        description={BigMenuItem.description}
                        selectedCard={selectedCard !== null && selectedCard === index}
                        
                    />
                    );
                })}
            </div>

           

        </div>
    );
};

export default Menu;