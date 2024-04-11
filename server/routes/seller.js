var express = require('express');
const router = express.Router()
const { Product } = require('../models/product');

//Get all approve Requests from approvals collection
router.get('/products', async (req,res) =>{
  try {
    // Query the collection to get all items
    const products = await Product.find({});
    // Send the items as a response
    res.json(products); 
  } catch (err) {
    console.error('Error retrieving items:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
);

module.exports = router