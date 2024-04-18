var express = require('express');
const router = express.Router()
const Product = require('../models/product');
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
router.post('/approveProduct/', async (req, res) => {
  try {
    const {_id, user, title, price, imageLink } = req.body.request; // Extract other necessary fields from the request body
    // Add product to Stripe 
    // await addProductToStripe(req);
    const priceID= "temp"
    const productID= _id
    // Add product to database
    await Product.create({
      user,
      productID,
      priceID,
      title,
      price,
      imageLink,
    });

    // // Delete from approvals collection using the ID parameter
    await deleteItem(_id);

    res.json({ message: 'Product approved and added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// decline request, call delete function
router.delete('/deleteProduct/:id', async (req, res) => {
    try{
      const { id } = req.params; // Extract the ID from the URL parameters
      console.log(id)

      await deleteItem(id);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// delete item from collection approvals
async function deleteItem(id) {
  try {
    await Approval.findByIdAndDelete(id);
    console.log(`Deleted product with ID ${id} from approvals collection`);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete product from approvals collection');
  }
}

module.exports = router