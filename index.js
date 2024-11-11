const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const products = [
  { id: 1, name: "Phone A", price: 49900, rating: 4.5, ram: 8, rom: 64, brand: "Apple", os: "iOS" },
  { id: 2, name: "Phone B", price: 29900, rating: 3.8, ram: 4, rom: 32, brand: "Samsung", os: "Android" },
  { id: 3, name: "Phone C", price: 69900, rating: 4.9, ram: 8, rom: 128, brand: "OnePlus", os: "Android" },
  { id: 4, name: "Phone D", price: 39900, rating: 4.2, ram: 6, rom: 64, brand: "Xiaomi", os: "Android" },
  { id: 5, name: "Phone E", price: 19900, rating: 3.5, ram: 4, rom: 16, brand: "Nokia", os: "Android" }
];

app.get('/products/sort/popularity', (req, res) => {
  const sortedProducts = products.sort((a, b) => b.rating - a.rating);
  res.json({ products: sortedProducts });
});

app.get('/products/sort/price-high-to-low', (req, res) => {
  const sortedProducts = products.sort((a, b) => b.price - a.price);
  res.json({ products: sortedProducts });
});

app.get('/products/sort/price-low-to-high', (req, res) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  res.json({ products: sortedProducts });
});

app.get('/products/filter/ram', (req, res) => {
  const { ram } = req.query;
  const filteredProducts = products.filter(product => product.ram === parseInt(ram));
  res.json({ products: filteredProducts });
});

app.get('/products/filter/rom', (req, res) => {
  const { rom } = req.query;
  const filteredProducts = products.filter(product => product.rom === parseInt(rom));
  res.json({ products: filteredProducts });
});

app.get('/products/filter/brand', (req, res) => {
  const { brand } = req.query;
  const filteredProducts = products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
  res.json({ products: filteredProducts });
});

app.get('/products/filter/os', (req, res) => {
  const { os } = req.query;
  const filteredProducts = products.filter(product => product.os.toLowerCase() === os.toLowerCase());
  res.json({ products: filteredProducts });
});


app.get('/products/filter/price', (req, res) => {
  const { price } = req.query;
  const filteredProducts = products.filter(product => product.price <= parseInt(price));
  res.json({ products: filteredProducts });
});

app.get('/products', (req, res) => {
  res.json({ products });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
