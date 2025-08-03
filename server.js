const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/flipkartclone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

const product = mongoose.model('product', productSchema);

product.insertMany([
    { name: "Samsung Galaxy", price: 14999, image: "https://via.placeholder.com/100" },
    { name: "Realme Narzo", price: 11999, image: "https://via.placeholder.com/100" },
    { name: "iPhone 13", price: 59999, image: "https://via.placeholder.com/100" },
    { name: "Boat Headphones", price: 1999, image: "https://via.placeholder.com/100" }
])

app.use(express.static('public'));

app.get('/api/products', async (req, res) => {
    const search = req.query.search || '';
    const products = await Product.find({ name: { $regex: search, $options: 'i' } });
    res.json(products);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));