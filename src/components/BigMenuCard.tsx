import React from 'react';
import { HouseIcon } from '../Helper/SvgIcon';

function BigMenuCard({ image, name, description, selectedCard }: { image: string[]; name: string; description: string; selectedCard: boolean; }) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0); // 添加状态用于追踪当前显示的图片索引

    const BigMenuItemSwitch = selectedCard ? "BigMenuItem" : "BigMenuItem hidden"; // 根據 selectedCard 狀態決定顯示的類名CSS設定

    const handleButtonRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length); // 切换到下一张图片


        // 处理按钮右侧点击事件的逻辑
        console.log("右侧按钮被点击了");
        event.stopPropagation();
    };

    const handleButtonLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length); // 切换到上一张图片
        // 处理按钮左侧点击事件的逻辑
        console.log("左侧按钮被点击了");
        event.stopPropagation();
    };

   
  


    return (
        <div className={BigMenuItemSwitch} >
            <div style={{ backgroundImage: `url(${image[currentImageIndex]})` }}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="buttonContainer">
                <button className="rightbtton" onClick={handleButtonRightClick}><HouseIcon.Icon2 /></button>
                <button className="leftbtton" onClick={handleButtonLeftClick}><HouseIcon.Icon3 /></button>
            </div>
        </div>
    );
};

export default BigMenuCard;