const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Order Schema
const orderSchema = new mongoose.Schema({
  customerName: String,
  date: { type: Date, default: Date.now },
  totalAmount: Number,
  status: { type: String, default: 'Pending' }
});

const Order = mongoose.model('Order', orderSchema);

// Get All Orders
app.get('/api/orders', async (req, res) => {
  const orders = await Order.find().sort({ date: -1 });
  res.json(orders);
});

// Update Order Status
app.put('/api/orders/:id', async (req, res) => {
 const { status } = req.body;
  await Order.findByIdAndUpdate(req.params.id, { status });
  res.json({ message: 'Order status updated' });
});

// Start Server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
