const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ metal: "silver" })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:product", async (req, res) => {
  try {
    const products = await Product.find({ product: "silvertackor" })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:product/:weight", async (req, res) => {
  try {
    const products = await Product.find({
      product: req.params.product,
      weight: req.params.weight,
    })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

// router.get("/silvermynt", async (req, res) => {
//   try {
//     const products = await Product.find({ product: "silvermynt" })
//       .sort({ date: -1 })
//       .limit(200);
//     res.json(products);
//   } catch (err) {
//     res.json(err);
//   }
// });

// router.get("/silvermynt/:weight", async (req, res) => {
//   try {
//     const products = await Product.find({
//       product: "silvermynt",
//       weight: req.params.weight,
//     })
//       .sort({ date: -1 })
//       .limit(200);
//     res.json(products);
//   } catch (err) {
//     res.json(err);
//   }
// });

// SUBMITS PRODUCT
// router.post("/", async (req, res) => {
//   const product = new Product({
//     price: req.body.price,
//     name: req.body.name,
//     collection: "guldrush",
//   });
//   try {
//     const savedProduct = await product.save();
//     res.json(savedProduct);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// //GETS ALL PRODUCTS
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.json(err);
//   }
// });

// router.get("/guld", async (req, res) => {
//   try {
//     const products = await Product.find({ metal: "guld" })
//       .sort({ date: -1 })
//       .limit(200);
//     res.json(products);
//   } catch (err) {
//     res.json(err);
//   }
// });

// router.get("/latest300", async (req, res) => {
//   try {
//     const products = await Product.find().sort({ date: -1 }).limit(200);
//     res.json(products);
//   } catch (err) {
//     res.json(err);
//   }
// });

module.exports = router;
