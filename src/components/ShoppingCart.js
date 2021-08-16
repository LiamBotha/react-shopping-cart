function ShoppingCart(props) {
    let { setIsHidden, cartItems, setCartItems } = props;
    return <div id='overlay'>
            <div className='darken' onClick={() => setIsHidden(true)}></div>
            <div id='cart-panel'>
            <button className='btn-exit' onClick={() => setIsHidden(true)}>X</button>
            <h1>Your Shopping Cart</h1>
            { cartItems.map((item, index) => <div className='cart-item' key={index}>
                    <img src={item.img} alt=''/>
                    <h2>{item.title}</h2>
                    <h2 className='cart-amount'>Amount: {item.amount}</h2>
                </div>
            )}
            <button id='btn-clear' onClick={() => setCartItems([])}>Clear All</button>
            <button id='btn-checkout'>Checkout</button>
        </div>
    </div>
}

export default ShoppingCart;