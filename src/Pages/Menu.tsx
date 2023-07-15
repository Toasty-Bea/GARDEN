import React from 'react';
import { TutorialList } from '../Helper/TutorialList'; //�Ψө�JMENU���dlist
import MenuCard from '../components/MenuCard';//�Ψө�JMENU���d
//�j�d��
import { BigCardList } from '../Helper/BigCardList'; //�Ψө�JMENU���j�d����ư}�C
import BigMenuCard from '../components/BigMenuCard';//�Ψө�JMENU���d

import backgroundImage from '../assets/image/USED/Background/11.png';

import '../styles/Menu.css';
import { useState } from 'react';

const Menu = () => {

    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        
        setSelectedCard(index);
    };
    //STATE�h����O�_�n��ܤj�d��
    const handleHideBigCard = () => {
        
        setSelectedCard(null);
    };

    return (
        <div className="menu" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <h1 className="MenuPage">Plant Species Directory</h1>

            {/*�p�d�������*/}
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


            {/*�j�d�������*/}
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