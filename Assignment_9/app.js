const express=require("express");

require("./config/db");

const app=express();

app.use(express.json());

const bookRoutes=require("./routes/bookRoutes");

const collectionRoutes=require("./routes/collectionRoutes");

app.use("/books",bookRoutes);

app.use("/collection",collectionRoutes);

app.listen(3000,()=>{

console.log(
"server running"
);

});