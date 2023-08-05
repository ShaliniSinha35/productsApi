const express = require("express");
const cors = require("cors");
const app = express();
const path=require("path");

app.use(cors());
const products=require("./products.json");
const logo=require("./logo.json")
const port = process.env.PORT || 5000;
app.use(express.static('public'));


// products
app.use('/public/images/product', express.static('public/images/product'));
app.get('/', (req, res) => {
  const newData = products.map(item =>{
    return {
      ...item,
      img: `${req.protocol}://${req.get('host')}${item.images[0]}` //  full image URL
 };
  });
  return res.status(200).json(newData);
 


});

// logo
// app.use('/public/images/logo', express.static(path.resolve(__dirname,'public/images/logo')));
// app.get('/logo', (req, res) => {
//   const newData = logo.map(item =>{
//     return {
//       ...item,
//       img: `${req.protocol}://${req.get('host')}${item.img}` //  full image URL
//  };
//   });
//   return res.status(200).json(newData);
 


// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



