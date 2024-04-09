const SECRET_KEY = 'sk_test_51P38GFP79apvj9gn7ok8QcBblRTZkJxeBmRtrCbFdO7VVok5QpQtAdPZ9DvG4PnytfqO8NXbZBBoaRTj3Id62Yo000iUYIKU6B'
const stripe = require('stripe')(SECRET_KEY);
var express = require('express');
const router = express.Router()

// Product price is in cents
const addProductToStripe = async (req) => {
    const {productName, productDescription, productPrice} = req.body

    const product = await stripe.products.create({
        name: productName,
        description: productDescription
    });

    const price = await stripe.prices.create({
        currency: 'usd',
        unit_amount: productPrice,
        product: product.id
      });
}

router.post("/addItem", async (req, res) => {
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

router.delete("/deleteItem", async (req, res) => {
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
router.put("/updateItem", async (req, res) => {
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

module.exports = router;