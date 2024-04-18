const SECRET_KEY = require('../config').StripeURL;
const stripe = require('stripe')(SECRET_KEY);
var express = require('express');
const stripeRouter = express.Router()

// Product price is in cents
const addProductToStripe = async (productName, productDescription, productPrice) => {
    const product = await stripe.products.create({
        name: productName,
        description: productDescription
    });

    const price = await stripe.prices.create({
        currency: 'usd',
        unit_amount: productPrice,
        product: product.id
    });
    return [price, product];
}


stripeRouter.post("/addItem", async (req, res) => {
    try {
    await addProductToStripe(req)
    // Add product to database as well
    // Need to store product id and price id
    res.json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Parameters: object
// Ex: {active: false}
const updateProduct = async (productID, parameters) => {
    const product = await stripe.products.update(
        productID,
        parameters
    );

    return product
}

const archiveInStripe = async (productID) => {
     // Archive all prices associated with product
     const prices = await stripe.prices.list({
        product: productID,
    });
    
    await Promise.all(prices.data.map(async price => {
        const priceArchived = await stripe.prices.update(price.id, {
            active: false,
        });
    }));

    const product = await updateProduct(
        productID,
        {
            active: false
        }
    );

    console.log(product)
}

stripeRouter.delete("/deleteItem", async (req, res) => {
    try {
        const {productID} = req.body
        await archiveInStripe(productID)
        // Delete in database
        res.status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// https://docs.stripe.com/api/products/update
stripeRouter.put("/updateItem", async (req, res) => {
    try {
        const {productID, parameters} = req.body
        updateProduct(productID, parameters)
        // Update in db
    res.json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = {
    stripeRouter,
    addProductToStripe,
    archiveInStripe
};