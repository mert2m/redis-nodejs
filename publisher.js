const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
    console.error(error);
});

client.publish("mertpolat", "app üzerinden gönderilen", (e, number) => {
    console.log(`Mesaj ${number} kişiye gonderildi`);
})