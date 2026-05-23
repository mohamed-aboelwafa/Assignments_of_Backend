const mongoose=require("mongoose");

const createBooksCollection=async(req,res)=>{

await mongoose.connection.createCollection(
"books",
{

validator:{

$jsonSchema:{

required:["title"]

}

}

}

);

res.json("books collection created");

};

const createAuthorsCollection=async(req,res)=>{

await mongoose.connection.collection(
"authors"
).insertOne({

name:"Ahmed"

});

res.json("authors created");

};

const createLogsCollection=async(req,res)=>{

await mongoose.connection.createCollection(

"logs",

{

capped:true,
size:1048576

}

);

res.json("logs created");

};

const createIndex=async(req,res)=>{

await mongoose.connection.collection(
"books"
).createIndex({

title:1

});

res.json("index created");

};

module.exports={

createBooksCollection,
createAuthorsCollection,
createLogsCollection,
createIndex

};