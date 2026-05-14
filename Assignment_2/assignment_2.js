
// question_1:  

/* 
    const path = require('path');

    function print_current_path(){
        const current_path = {File:__filename, Dir:__dirname};
        return current_path;
    }

    console.log(print_current_path());

*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_2:

/*
    const path = require('path');

    function print_file_name(file_path){
        const file_name = path.basename(file_path);
        return file_name;
    }

    console.log(print_file_name('/user/files/report.pdf'));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_3:

/*
    const path = require('path');

    function build_path(obj){
        const file = obj.name + obj.ext;
        const dir = obj.dir;

        const res = path.join(dir,file);

        return res;
    }

    console.log(build_path({dir: "/folder", name: "app", ext: ".js"}));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_4:

/*
    const path = require('path');

    function print_file_ext(file_path){
        file_ext = path.extname(file_path);

        return file_ext;
    }

    console.log(print_file_ext('/docs/readme.md'));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_5:

/*
    const path = require('path');

    function print_name_and_ext(file_path){
       
        const file_name = path.basename(file_path);
        const file_ext = path.extname(file_path);
        
        const res = {Name:file_name , Ext:file_ext};
        return res;
    }

    console.log(print_name_and_ext('/home/app/main.js'));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_6:

/*
    const path = require('path');

    function check_absolute(file_path){
        const res = path.isAbsolute(file_path);

        return res;
    }

    console.log(check_absolute('/home/user/file.txt'));
    console.log(check_absolute('./home/user/file.txt'));

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_7:


/*
    const path = require('path');

    function join_segments(segments){
        const res = path.join(segments[0],segments[1],segments[2]);

        return res;
    }

    console.log(join_segments(["src", "components", "App.js"]));

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_8:

/*
    const path = require('path');

    function resolve_path(relative_path){
        const res = path.resolve(relative_path);

        return res;
    }

    console.log(resolve_path('./index.js')); // D:\PR\BACKEND\Assignments\Assignments of JS with node\Assignment_2\index.js
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_9:

/*
    const path = require('path');

    function join_two_paths(path_1 , path_2){
        const res = path.join(path_1,path_2);

        return res;
    }

    console.log(join_two_paths('/folder1', 'folder2/file.txt'));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// question_10:

/*
    const fs = require("node:fs");
    const path = require("node:path");

    function del_file(file_path) {
    fs.unlink(file_path, (err) => {
        if (err) {
        console.log("Error:", err.message);
        } else {
        console.log("The", path.basename(file_path), "is deleted.");
        }
    });
    }

    del_file("./path/to/file.txt");
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// question_11:

/*
    const fs = require('fs');

    function make_directory(wanted_folder_path){
        fs.mkdirSync(wanted_folder_path);

        console.log('Success');
    }

    const wanted_folder_path = 'D:/PR/BACKEND/Assignments/Assignments of JS with node/Assignment_2/TestFolder';

    make_directory(wanted_folder_path);
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// question_12:

/*
    const {EventEmitter} = require('events');
    const event = new EventEmitter();

    function say_welcome(){
        event.on("start" , ()=>{
            console.log("Welcome event triggered!");
        });

        event.emit("start");
    }

    say_welcome();
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// question_13:

/*
    const {EventEmitter} = require('events');
    const event = new EventEmitter();

    function login_system(fun_name){

        event.on("login" , (ev_name)=>{
        console.log("User logged in:" ,ev_name);
        });

        event.emit("login",fun_name);
    }

    login_system("Ahmed");
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// question_14:

/*
    const fs = require('fs');

    function read_file(file_path){
        const file_content = fs.readFileSync(file_path,'utf-8');
        console.log(file_content);
    }

    read_file('./notes.txt');

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_14:

/*
    const fs = require('fs');

    fs.writeFile("./async.txt","Async save",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("file written");
        }
    });
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question_15:
// check the path [is exist or not ?]

/*
    const fs = require('fs');

    function check_is_exist(wanted_path){
        const res = fs.existsSync(wanted_path);

        return res;
    }

    console.log(check_is_exist("./notes.txt"));
    console.log(check_is_exist("./mmmmm.txt"));
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// question_15 [another solution]:
// check the path [is directory or not ?]

/*

const fs = require('fs');

function check_is_directory(wanted_folder_path){
    const res_1 = fs.existsSync(wanted_folder_path);
    const res_2 = fs.lstatSync(wanted_folder_path).isDirectory();

    if(res_1==true && res_2==true ){
       return true;
    }else{
        return false;
    }
}

console.log(check_is_directory("./notes.txt"));
console.log(check_is_directory("./path"));

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// question_17:

/*
    const os = require('os');

    function print_system_info(){
        const info = {Platform:os.platform(), Arch:os.arch()};

        return info;
    }

    console.log(print_system_info());

*/

