import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [productsArray,setProductsArray]= useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:4000/seller/products'); // Replace with your actual API endpoint
            const fetchedProducts = response.data;
            setProductsArray(fetchedProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts(); // Call the function on component mount
      }, []);
    
    
    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

    function getProductQuantity(productID) {
        const quantity = cartProducts.find(product => product.productID === productID)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(productID) {
        const quantity = getProductQuantity(productID);
        
        const products = productsArray.filter((product) => product.productID === productID)
        const product = products[0]

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        productID: productID,
                        priceID: product.priceID,
                        price:product.price,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.productID === productID                                // if condition
                    ? { ...product, quantity: quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(productID) {
        const quantity = getProductQuantity(productID);

        if(quantity == 1) {
            deleteFromCart(productID);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.productID === productID                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(productID) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.productID != productID;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            totalCost += (cartItem.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context