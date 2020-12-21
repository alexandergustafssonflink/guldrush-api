const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// SUBMITS PRODUCT
router.post("/", async (req, res) => {
  const product = new Product({
    price: req.body.price,
    name: req.body.name,
    collection: "guldrush",
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/guldtackor", async (req, res) => {
  try {
    const products = await Product.find({ product: "guldtackor" })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/guldtackor/:weight", async (req, res) => {
  try {
    const products = await Product.find({
      product: "guldtackor",
      weight: req.params.weight,
    })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/guldmynt", async (req, res) => {
  try {
    const products = await Product.find({ product: "guldmynt" })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/guldmynt/:weight", async (req, res) => {
  try {
    const products = await Product.find({
      product: "guldmynt",
      weight: req.params.weight,
    })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

//GETS ALL PRODUCTS
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.json(err);
//   }
// });

// router.get("/silver", async (req, res) => {
//   try {
//     const products = await Product.find({ metal: "silver" })
//       .sort({ date: -1 })
//       .limit(200);
//     res.json(products);
//   } catch (err) {
//     res.json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ metal: "guld" })
      .sort({ date: -1 })
      .limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/latest300", async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 }).limit(200);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
