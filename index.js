const express = require("express");
const cors = require("cors");
const app = express();
const path=require("path")
app.use(cors());

const products=require("./product.json")

const port = process.env.PORT || 5000;


// products
app.use('/public/images/product', express.static(path.resolve(__dirname,'public/images/product')));
app.get('/', (req, res) => {
  const newData = products.map(item => {
    return {
      ...item,
      img: `${req.protocol}://${req.get('host')}${item.img}` //  full image URL

    };
  });
  return res.status(200).json(newData);

});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

