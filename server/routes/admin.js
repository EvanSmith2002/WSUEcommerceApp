var express = require('express');
const router = express.Router()
const { Product } = require('../models/product');
const Approval = require('../models/approval');

//Get all approve Requests from approvals collection
router.get('/products', async (req,res) =>{
  try {
    // Query the collection to get all items
    const approvals = await Approval.find({});
    // Send the items as a response
    res.json(approvals); 
  } catch (err) {
    console.error('Error retrieving items:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
);

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
  }
);
  


// decline request, call delete function

// delete item from collection approvals
function deleteItem(item){

}

module.exports = router