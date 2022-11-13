// different kind of for loops
let emp=[
    {
        "name":"Ameer",
        "email":"ameer@mail.com",
        "address":"india",
        "age":25
    },
    {
        "name":"Abbas",
        "email":"abbas@mail.com",
        "address":"india",
        "age":25
    },
    {
        "name":"Ameer Abbas",
        "email":"ameerabbas@mail.com",
        "address":"india",
        "age":40
    },
]
//for loop normal
console.log("for loop normal")

for(let i=0;i<emp.length;i++){
    console.log(` 
    name:${emp[i].name}
    email:${emp[i].email}
    address:${emp[i].address}
    age:${emp[i].age}
    `)
}

// //for each loop
console.log("for each loop")


emp.forEach((x)=>{
    console.log(` 
    name:${x.name}
    email:${x.email}
    address:${x.address}
    age:${x.age}
    `)
})


// //for in loop
console.log("for in loop")
for(let index in emp){
    console.log(` 
    name:${emp[index].name}
    email:${emp[index].email}
    address:${emp[index].address}
    age:${emp[index].age}
    `)
}


// //for of loop
console.log("for of loop")
 for(let lan of emp){
console.log(` 
name:${lan.name}
email:${lan.email}
address:${lan.address}
age:${lan.age}
`)
 }
