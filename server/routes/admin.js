var express = require('express');
const router = express.Router()
const { Product } = require('../models/product');

const adminRoute = express.Router();
// approve request, add item into collection products, call delete function to delete from approvals, and create a product with stripe api
router.post('/approveProduct', async (req, res) => {
    try {
      const { productID } = req.body;
  
      // Add product to Stripe 
      await addProductToStripe(req);
  
      // Add product to database
      await Product.create({
        id: req.body.id, 
        title: req.body.title, 
        price: req.body.price,
        imageLink: req.body.imageLink, 
      });
  
      // Delete from approvals collection 
      await deleteItemFromApprovals(productID);
  
      res.json({ message: 'Product approved and added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


// decline request, call delete function

// delete item from collection approvals
function deleteItem(item){

}

module.exports = router