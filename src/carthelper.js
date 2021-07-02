export const increaseQuantity = (productId) => {
    let products =[];
    if(typeof window != undefined){
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
        }
        products.map((prod, i)=>{
            
                if(prod.id === productId){
                    prod.quantity += 1;
                }
            
        })
        localStorage.setItem('products', JSON.stringify(products));
        
    }

    return products;
}

export const decreaseQuantity = (productId) => {
    let products =[];
    if(typeof window != undefined){
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
        }
        products.map((prod, i)=>{
            
                if(prod.id === productId){
                    if(prod.quantity > 0){
                    prod.quantity -= 1;}
                }
            
        })
        localStorage.setItem('products', JSON.stringify(products));
        
    }

    return products;
}

export const cartDiscountPrice = () => {
    let products =[];
    let cartObject = {
        totalprice:0,
        totaldiscount:0,
        amount:0,
    }

    if(typeof window != undefined){
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
        }
        products.map((prod, i)=>{

            
				prod.dp = prod.price * prod.quantity -
					(prod.discount / 100) * (prod.price * prod.quantity);
			cartObject.totalprice += prod.price * prod.quantity;
            cartObject.totaldiscount += prod.dp;

            
        })
        cartObject.amount = cartObject.totalprice - cartObject.totaldiscount;
        localStorage.setItem('products', JSON.stringify(products));
        
    }

    return cartObject;
}



export const removeFromCart = (productId) => {
    let products =[];
    if(typeof window != undefined){
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
        }
        products.map((prod, i)=>{
            
                if(prod.id === productId){
                    products = products.filter(prod => prod.id !== productId);
                }
            
        })
        localStorage.setItem('products', JSON.stringify(products));
        
    }

    return products;
}

