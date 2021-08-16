import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import ShopItem from "./ShopItem";

function Shop() {
    let [bIsHidden, setIsHidden] = useState(true);
    let [cartItems, setCartItems] = useState([]);
    let items = [
        {title:'item a', img: '', desc: 'an item of type a'}, {title:'item b', img: '', desc: 'an item of type b'},
        {title:'item c', img: '', desc: 'an item of type c'}, {title:'item d', img: '', desc: 'an item of type d'},
        {title:'item e', img: '', desc: 'an item of type e'}, {title:'item f', img: '', desc: 'an item of type f'},
        {title:'item g', img: '', desc: 'an item of type g'}, {title:'item h', img: '', desc: 'an item of type h'},
        {title:'item i', img: '', desc: 'an item of type i'},
    ];
    const addToCart = (item, amount) => {
        if(cartItems.some(x => x.title === item.title))
        {
            let newArray = [...cartItems];
            newArray.map((x) => {
                if(x.title === item.title)
                    x.amount += amount;
                return item;
            })
            setCartItems(newArray);
        }
        else
            setCartItems(arr => [...arr, {...item, amount}])
    };
    return <div className='shop'>
        <button className='btn-cart' onClick={() => setIsHidden(false)}>Cart { cartItems.length > 0 ? `(${cartItems.length})` : null }</button>
        { !bIsHidden && <ShoppingCart setIsHidden={setIsHidden} cartItems={cartItems} setCartItems={setCartItems}/> }
        <h1>Shop Page</h1>
        <div className='shop-items'>
            { items.map((item, index) => <ShopItem key={index} item={item} addToCart={addToCart}/>) }
        </div>
    </div>
}

export default Shop;