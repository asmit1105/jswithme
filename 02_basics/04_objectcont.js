const hypeXuser = {};

hypeXuser.id = "60475abc";
hypeXuser.name = "Govind";
hypeXuser.isLoggedIn = false;

console.log(hypeXuser);

const randomuser = {
    fullName: {
        firstname: "asmit", 
            lastname: "sharma"
        }
    }

    console.log(randomuser.fullName.firstname);
    

    const obj1 = {1:"a" , 2:"b"}
     const obj2 = {5:"v" , 0:"b" , 4:"n"};

     const obj3 = {...obj1, ...obj2};
     console.log(obj3);

     console.log(Object.keys(hypeXuser));
        console.log(Object.values(hypeXuser));
        console.log(Object.entries(hypeXuser));

            console.log(hypeXuser.hasOwnProperty("isLoggedIn"));
        
     

