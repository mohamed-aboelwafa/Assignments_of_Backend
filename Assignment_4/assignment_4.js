

// Part1:

/* 

    const fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.json()); // parsing all received data

    //// 1_ Add New User ////
    app.post("/add-user",(req,res)=>{
        // etract inputed_data from body
        const inputed_data = req.body;
        const inputed_email = inputed_data.email;

        // extract all_users from json file
        let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

        // check if inputed_email exist in all_users or not
        is_email_exist = false;
        for(let key in all_users){
            if(all_users[key].email == inputed_email){
                is_email_exist = true;
                break;
            }
        }

        if(is_email_exist){
            res.json({message:"Email Already Exists."});
        }else{
            // add inputed_data in all_users
            all_users[Object.keys(all_users).length+1]=inputed_data;

            // update json file
            fs.writeFileSync('./users.json',JSON.stringify(all_users, null, 2));

            res.json({message:"User Added Successfully."});
        }

    });

    //// 2_ Update Existing User ////
    app.patch("/update-user/:id" , (req,res)=>{
        // extract inputed_id from param
        const inputed_id = req.params.id;

        // etract inputed_data from body
        const inputed_data = req.body;

        // extract all_users from json file
        let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

        // check if inputed_id exists in all_users or not
        let is_id_exist = false;
        let wanted_key;
        for(let key in all_users){
            if(all_users[key].id == inputed_id){
                is_id_exist = true;
                wanted_key = key;
                break;
            }
        }

        if(is_id_exist){
            // update value of all_users[wanted_key]
            const key_name_of_inputed_data = Object.keys(inputed_data)[0];
            all_users[wanted_key][key_name_of_inputed_data] = inputed_data[key_name_of_inputed_data];

            // update value of json file
            fs.writeFileSync('./users.json',JSON.stringify(all_users, null, 2));

            // response message
            let msg = "User " + key_name_of_inputed_data + " Updated Successfully";
            res.json({message:msg});
        }else{
            res.json({message:"User ID Not Found"});
        }

    });

    //// 3_ Deletes User By ID ////
    app.delete("/delete-user/:id" , (req,res)=>{
        // extract inputed_id from param
        const inputed_id = req.params.id;

        // extract all_users from json file
        let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

        // check if inputed_id exists in all_users or not
        let is_id_exist = false;
        let wanted_key;
        for(let key in all_users){
            if(all_users[key].id == inputed_id){
                is_id_exist = true;
                wanted_key = key;
                break;
            }
        }

        // if inputed_id exists in all_users
        if(is_id_exist){

            // delete wanted_key from all_users
            delete all_users[wanted_key];

            // update value of users.json file
            fs.writeFileSync('./users.json',JSON.stringify(all_users, null, 2));

            res.json({message:"User deleted successfully"});
        }
        // if inputed_id not exists in all_users
        else{
            res.json({message:"User ID Not Found"});
        }
    });


    //// 4_ Get User By Nmae ////
    app.get("/user/getByName",(req,res)=>{
        // extract name from query
        const inputed_name = req.query.name;

        // read all users
        let all_users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
        let wanted_user;
        let is_name_exist = false;

        // check if inputed_name exist in all_users or not
        for (let key in all_users) {
            if (all_users[key].name == inputed_name) {
                wanted_user = all_users[key];
                is_name_exist = true;
                break;
            }
        }

        if(is_name_exist){
            res.json(wanted_user);
        }else{
            res.json({message:"User name not found"});
        }
    });


    //// 5_ Get All Users ////
    app.get("/get-all-users",(req,res)=>{
        const all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));
        res.send(all_users);
    });


    //// 6_ filter users by minimum age ////
    app.get("/user/filter",(req,res)=>{

        // extract wanted_min_age from query parameter
        const wanted_min_age = Number(req.query.minAge);

        // read all users
        let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

        // check ages of all_users
        let wanted_users = [];
        let is_found = false;
        for (let key in all_users){
            if((all_users[key].age) >= wanted_min_age){
                is_found = true;
                wanted_users.push(all_users[key]);
            }
        }

        if(is_found){
            res.json(wanted_users);
        }else{
            res.json({message:"no user found"});
        }
        
    });



    //// 7_ Get User By ID ////
    app.get("/user/:id",(req,res)=>{
        // extract inputed_id from param
        const inputed_id = req.params.id;

        // extract all_users from json file
        let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

        // check if inputed_id exists in all_users or not
        let is_id_exist = false;
        let wanted_key;
        for(let key in all_users){
            if(all_users[key].id == inputed_id){
                is_id_exist = true;
                wanted_key = key;
                break;
            }
        }

        if(is_id_exist){
            res.json(all_users[wanted_key]);
        }else{
            res.json({message:"User not found."});
        }

    });

    app.listen(3001,()=>{
        console.log('server is running on port 3001');
    });

*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 


