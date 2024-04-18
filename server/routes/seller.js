var express = require('express');
const router = express.Router()
const Product  = require('../models/product');
const Approval = require('../models/approval');
const {archiveInStripe} =require('../api/api')

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

router.post('/addProduct/:sellerID', async (req, res) => {
  try {
    const user = req.params.sellerID;
    const {title, price, imageLink } = req.body; // Extract other necessary fields from the request body
    
    await Approval.create({
      user,
      title,
      price,
      imageLink,
    });

    res.json({ message: 'Product approved and added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/products/:sellerID', async (req, res) => {
  try {
    // Get the seller ID from the request parameter
    const sellerID = req.params.sellerID;
    // Query the collection to find products with matching seller ID
    const products = await Product.find({ user:sellerID });
    // Check if any products found
    if (!products) {
      return res.status(404).json({ message: 'No products found for this seller' });
    }

    // Send the products as a response
    res.json(products);
  } catch (err) {
    console.error('Error retrieving items:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/item/:productID', async (req, res) => {
  try {
    // Get the seller ID from the request parameter
    const productID = req.params.productID;
    // Query the collection to find products with matching seller ID
    const products = await Product.find({ productID: productID });
    // Check if any products found
    if (!products) {
      return res.status(404).json({ message: 'No products found for this seller' });
    }

    // Send the products as a response
    res.json(products);
  } catch (err) {
    console.error('Error retrieving items:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params; // Extract product ID from URL parameter
    const { price } = req.body; // Extract new price from request body

    // Validate price (optional)
    if (!price || typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ error: 'Invalid price value' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { price },
      { new: true } // Return the updated product document
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// decline request, call delete function
router.delete('/deleteProduct/:id', async (req, res) => {
  try{
    const { id } = req.params; // Extract the ID from the URL parameters
    const { productID } = req.body;
    await deleteItem(id,productID);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

// delete item from collection approvals
async function deleteItem(id,productID) {
  try {
    await archiveInStripe(productID)
    await Product.findByIdAndDelete(id);
    
    console.log(`Deleted product with ID ${id} from approvals collection`);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete product from approvals collection');
  }
}


module.exports = router