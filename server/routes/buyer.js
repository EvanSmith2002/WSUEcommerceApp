const SECRET_KEY = 'sk_test_51P38GFP79apvj9gn7ok8QcBblRTZkJxeBmRtrCbFdO7VVok5QpQtAdPZ9DvG4PnytfqO8NXbZBBoaRTj3Id62Yo000iUYIKU6B'
const stripe = require('stripe')(SECRET_KEY);
var express = require('express');
const router = express.Router()



router.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

module.exports = router