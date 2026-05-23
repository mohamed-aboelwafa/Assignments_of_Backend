const Book=require("../models/Book");

// insert one

const insertBook=async(req,res)=>{

const book=await Book.create(req.body);

res.json(book);

};

// insert many

const insertManyBooks=async(req,res)=>{

const books=await Book.insertMany(req.body);

res.json(books);

};

// update

const updateBook=async(req,res)=>{

await Book.updateOne(

{title:req.params.title},

{$set:{year:2022}}

);

res.json("updated");

};

// find by title

const findBook=async(req,res)=>{

const book=await Book.find({

title:req.query.title

});

res.json(book);

};

// year range

const findYearRange=async(req,res)=>{

const books=await Book.find({

year:{

$gte:req.query.from,
$lte:req.query.to

}

});

res.json(books);

};

// genre

const findGenre=async(req,res)=>{

const books=await Book.find({

genres:req.query.genre

});

res.json(books);

};

// skip limit

const skipLimit=async(req,res)=>{

const books=await Book.find()

.sort({year:-1})

.skip(2)

.limit(3);

res.json(books);

};

// integer year

const yearInteger=async(req,res)=>{

const books=await Book.find({

year:{$type:"int"}

});

res.json(books);

};

// exclude genres

const excludeGenres=async(req,res)=>{

const books=await Book.find({

genres:{

$nin:[
"Horror",
"Science Fiction"
]

}

});

res.json(books);

};

// delete

const deleteBeforeYear=async(req,res)=>{

await Book.deleteMany({

year:{

$lt:req.query.year

}

});

res.json("deleted");

};

// aggregate1

const aggregate1=async(req,res)=>{

const books=await Book.aggregate([

{$match:{year:{$gt:2000}}},
{$sort:{year:-1}}

]);

res.json(books);

};

// aggregate2

const aggregate2=async(req,res)=>{

const books=await Book.aggregate([

{$match:{year:{$gt:2000}}},

{$project:{

title:1,
author:1,
year:1

}}

]);

res.json(books);

};

// aggregate3

const aggregate3=async(req,res)=>{

const books=await Book.aggregate([

{$unwind:"$genres"}

]);

res.json(books);

};

// aggregate4

const aggregate4=async(req,res)=>{

const books=await Book.aggregate([

{

$lookup:{

from:"logs",
localField:"title",
foreignField:"title",
as:"logs"

}

}

]);

res.json(books);

};

module.exports={

insertBook,
insertManyBooks,
updateBook,
findBook,
findYearRange,
findGenre,
skipLimit,
yearInteger,
excludeGenres,
deleteBeforeYear,
aggregate1,
aggregate2,
aggregate3,
aggregate4

};