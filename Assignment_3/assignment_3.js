
// part_1 // question_1

/*
    const fs = require("node:fs");

    function read_in_chuncks(file_path)
    {
        const read_stream = fs.createReadStream(file_path , {encoding:"utf-8"});
        read_stream.on("data" , (chunck)=>{
            console.log(chunck);
        } );
    }

    read_in_chuncks("./big.txt");

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_1 // question_2


/*

    const fs = require("node:fs");

    function copy_file_content(source_path , dest_path)
    {

        const read_stream = fs.createReadStream(source_path , {encoding:'utf-8' , highWaterMark:64});
        const write_stream = fs.createWriteStream(dest_path);

        read_stream.on("data",(chunck)=>{
        write_stream.write(chunck); });

        read_stream.on("end" , ()=>{
        console.log("File copied using streams"); });
    }

    copy_file_content("./source.txt" , "./dest.txt");

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_1 // question_3


/*
    const fs = require("node:fs");
    const zlib = require ("node:zlib");

    function compresses_file(source_path , comp_path)
    {
        const read_stream = fs.createReadStream(source_path);
        const write_stream = fs.createWriteStream(comp_path);
        
        const gzip = zlib.createGzip();
        read_stream.pipe(gzip).pipe(write_stream);
    }

    compresses_file("./data.txt" , "./data.txt.gz");
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// part_2:


/*
    const fs = require('fs');
    const http = require('http');
    const server = http.createServer((req,res)=>{

        /// in case of get-all-users ///
        if(req.method=='GET' && req.url=='/get-all-users'){
            res.write(fs.readFileSync('./users.json','utf-8'));
            res.end();
        } /// end of if

        /// in case of add-user ///
        else if(req.method=='POST' && req.url=='/add-user'){
            // extract the input of the request in body 
            let body='';
            req.on("data",(chunck)=>{
                body+=chunck;
            });

            req.on("end",()=>{
                // extract all_users from user.json file
                let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

                // put body in inputed_user
                const inputed_user = JSON.parse(body);
                // extract email of inputed_user
                const inputed_user_email = inputed_user.email;

                // check if inputed_user_email is exist in all_users
                let is_email_exist = false;
                for(let key1 in all_users){
                    if(all_users[key1].email == inputed_user_email){
                        is_email_exist = true;
                        break;
                    }
                }
                // in case of inputed_user_email is exist
                if(is_email_exist == true){
                    // update values of users in users.json file
                    fs.writeFileSync('./users.json', JSON.stringify(all_users));

                    // response msg
                    const msg = {message: "Email Already Exists"};
                    res.write(JSON.stringify(msg));
                    res.end();
                }
                // in case of inputed_user_email is not exist
                else if(is_email_exist == false){
                    // adding value of inputed_user to all_users
                    const new_user_key = Object.keys(all_users).length+1;
                    all_users[new_user_key] = inputed_user;

                    // update values of users in users.json file
                    fs.writeFileSync('./users.json',JSON.stringify(all_users));

                    // response msg
                    const msg = {message: "User Added Successfully"};
                    res.writeHead(201,{'content-type':'application/json'});
                    res.write(JSON.stringify(msg));
                    res.end();
                }
            });
        } /// end of if

        /// in case of update-user ///
        else if(req.method=='PATCH' && req.url.startsWith('/update-user/')){

            let body='';
            
            // extract data of request in body
            req.on("data",(chunck)=>{
                body+=chunck;
            });

            req.on("end",()=>{
                // extract inputed_id from url
                let url = req.url;                          // "/user/6"
                let parts = url.split('/');                 // ["", "user", "6"]
                let string_id = parts[2];                   // "6"
                const inputed_id = parseInt(string_id);     // 6

                // put body into inputed_data
                const inputed_data = JSON.parse(body);

                // extract all_users from users.json file
                let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

                // check if inputed_id exist in all_users or not
                let is_id_exist=false;
                let wanted_user;
                for(let key1 in all_users){
                    if(all_users[key1].id == inputed_id){
                        is_id_exist = true;
                        wanted_user = all_users[key1]; // extract value of wanted_user , when inputed_id is exist in all_users
                        break;
                    }else{
                        is_id_exist = false;
                    }
                }
                // in case of inputed_id is not exist in all_users
                if(is_id_exist==false){
                    res.write(JSON.stringify({message : "User ID Not Found"}));
                    res.end();
                }
                // in case of inputed_id is exist in all_users
                else if(is_id_exist==true){
                    // update value of wanted_user using inputed_data
                    const allowed_keys = ['id','name','age','email'];
                    for(let a=0; a<Object.keys(inputed_data).length; a++){
                        for(let b=0; b<allowed_keys.length; b++){
                            if(Object.keys(inputed_data)[a] == allowed_keys[b]){
                                wanted_user[Object.keys(inputed_data)[a]] = inputed_data[Object.keys(inputed_data)[a]];
                                break;
                            }
                        }
                    }
                    // response message of updating user
                    let msg={};
                    for(let i=0; i<Object.keys(inputed_data).length; i++){
                        msg.message = "User " + Object.keys(inputed_data)[i] + " Updated Successfully";
                        res.write(JSON.stringify(msg));
                    }

                    // update value of all_users in users.json file
                    fs.writeFileSync('./users.json',JSON.stringify(all_users));

                    res.end();
                }
            });
        } /// end of if

        /// in case of delete-user-by-id ///
        else if(req.method=='DELETE' && req.url.startsWith('/delete-user/')){
            
            // extract inputed_id from url
            let url = req.url;                          // "/user/6"
            let parts = url.split('/');                 // ["", "user", "6"]
            let string_id = parts[2];                   // "6"
            const inputed_id = parseInt(string_id);     // 6

            // extract all_users from users.json file
            let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

            // check if inputed_id exist in all_users or not
            let is_id_exist=false;
            for(let key1 in all_users){
                if(all_users[key1].id == inputed_id){
                    is_id_exist = true;
                    break;
                }else{
                    is_id_exist = false;
                }
            }
            // in case of inputed_id is not exist in all_users
            if(is_id_exist==false){
                res.write(JSON.stringify({message : "User ID Not Found"}));
                res.end();
            }
            // in case of inputed_id is exist in all_users:
            else if(is_id_exist==true){
                // delete the value of inputed_id from all_users
                delete all_users[inputed_id];

                // update value of all_users in users.json file
                fs.writeFileSync('./users.json',JSON.stringify(all_users));

                // response message of updating user
                res.write(JSON.stringify({message:"User Deleted Successfully"}));

                res.end();
            }
        } /// end of if

        /// in case of get-user-by-id ///
        
        else if(req.method=='GET' && req.url.startsWith('/get-user/')){
            // extract inputed_id from url
            let url = req.url;                          // "/user/6"
            let parts = url.split('/');                 // ["", "user", "6"]
            let string_id = parts[2];                   // "6"
            const inputed_id = parseInt(string_id);     // 6

            // extract all_users from users.json file
            let all_users = JSON.parse(fs.readFileSync('./users.json','utf-8'));

            // check if inputed_id exist in all_users or not
            let is_id_exist=false;
            let wanted_user;
            for(let key1 in all_users){
                if(all_users[key1].id == inputed_id){
                    is_id_exist = true;
                    wanted_user = all_users[key1]; // extract value of wanted_user , when inputed_id is exist in all_users
                    break;
                }else{
                    is_id_exist = false;
                }
            }

            // in case of inputed_id is not exist in all_users
            if(is_id_exist==false){
                // response this message
                res.write(JSON.stringify({message : "User ID Not Found"}));
                res.end();
            }

            // in case of inputed_id is exist in all_users
            else if(is_id_exist==true){
                // response wanted_user
                res.write(JSON.stringify(wanted_user));
                res.end();
            }
        } /// end of if

}); /////// end of req


server.listen(3000,()=>{
    console.log('server is running on port 3000');
});

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// part_3 // question_1:

/*
    // Event Loop:
    - The Event Loop is the core mechanism in Node.js that allows it to handle asynchronous operations using a single thread.
    - It continuously checks if the Call Stack is empty, and if so, it takes callbacks from the Event Queue and pushes them to the Call Stack for execution.
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// part_3 // question_2:


/*
    - libuv is a C library used by Node.js to handle asynchronous operations.
    - handle asynchronous operations (file system, networking) 
    - implements Event loop
    - Provides a Thread pool for heavy tasks
    - it connects Node.js with the Operating System (OS) to perform background tasks.
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// part_3 // question_3:

/*
    1- JS code is executed by V8 Engine
    2- Async operation is sent to libuv or the OS
    3- The main thread continues executing other code
    4- Once the operation is complete, its callback is placed in the Event Queue
    5- libuv delegates tasks to: OS , Thread Pool
    6- When the task finishes --> callback goes to Event Queue --> Event Loop moves it to Call Stack when it is empty --> Callback gets executed

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// part_3 // question_4:

/*
    # Call Stack:
    Executes synchronous code
    Works in LIFO order

    # Event Queue:
    Stores callbacks from completed async operations

    # Event Loop:
    Checks if Call Stack is empty
    Moves callbacks from Event Queue to Call Stack
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// part_3 // question_5:

/*
    # The Thread Pool is a set of worker threads managed by libuv used for handling heavy or blocking operations like:
    File system (FS)
    Crypto
    Compression

    # Node.js is single thread , But some operations use multi-thread (Thread Pool)

    # Default size: 4 threads , change it using:
    UV_THREADPOOL_SIZE=8
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// part_3 // question_6:

/*
    # Blocking (Synchronous):
    - Code executes line by line
    - Stops the program until the operation finishes
    - EX: 
    var result = db.query("select x from table_Y");
    doSomethingWith(result); // wait


    # Non-Blocking (Asynchronous):
    Tasks are delegated to libuv or the OS
    The main thread continues execution
    Results are handled later via callbacks, promises, or async/await
    - EX:
    db.query("select x from table_Y", function(result){
    doSomethingWith(result);
    });
    doSomethingWithOutResult(); // runs immediately


    # Node.js is designed to use non-blocking I/O to handle multiple requests efficiently.
*/




