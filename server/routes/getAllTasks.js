const Product = require('../models/schemaModel');

//Fetches all the tasks in the database
const getAllTasks = async (req, res) => {
    try {
      const allProducts = await Product.find({})
      res.status(200).json(allProducts);
      console.log("Fetched all the products");
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: error.message });
    }
  };

module.exports = getAllTasks;