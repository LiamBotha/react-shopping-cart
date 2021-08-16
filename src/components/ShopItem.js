import { useState } from "react";

function ShopItem(props) {
    let [bIsHovered, setIsHovered] = useState(false);
    let [amount, setAmount] = useState(1);
    let {item, addToCart} = props;
    const handleInput = (e) => {
        let value = !isNaN(parseInt(e.target.value)) ? Math.max(1, parseInt(e.target.value)) : 1;
        setAmount(value);
    }
    return <div>
        <h3>{item.title}</h3>
        <div className='item-preview' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={item.img} alt='product preview'/>
            { bIsHovered && <p>{item.desc}</p> }
        </div>
        <div className='amount-selector'>
            <button onClick={() => {setAmount(amount+1)}}>+</button>
            <input onChange={(e) => handleInput(e)} value={amount} type='number' min='1'/>
            <button onClick={() => {setAmount(Math.max(1, amount-1))}}>-</button>
        </div>
        <button onClick={() => addToCart(item, amount)}>Add to Cart</button>
    </div>
}

export default ShopItem;