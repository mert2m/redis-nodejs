const e = require("express");
const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
    console.error(error);
});
//set et
client.set("user_name","mert", (error, message) => {
    if(error){
        console.error(error);
    }
    console.log("Message", message);
});

//get
client.get("user_name","mert", (error, message) => {
    if(error){
        console.error(error);
    }
    console.log("Message", message);
});

//delete
client.get("user_name","mert", (error, message) => {
    if(error){
        console.error(error);
    }
    console.log("Delete?", message);
});



//exists
client.exists("user_name","mert", (error, message) => {
    if(error){
        console.error(error);
    }
    console.log("Exists", message);
});


//append
client.append("last_name","polat", (error, message) => {
    if(error){
        console.error(error);
    }
    console.log("Append", message);
    client.get("last_name", (e, m) => {
        console.log("Okunan",m);
    });
});


client.on("message", (channel, message) => {
    console.log(`${channel} isimli kanala(kişiye) ${message} geldi..`);
  });
  
  client.subscribe("mertpolat");