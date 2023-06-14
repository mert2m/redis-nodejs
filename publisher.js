const redis = require("redis");

const client = redis.createClient();

client.on("error", (error) => {
  console.error(error);
});

client.publish("mertpolat", "app üzerinden gönderilen", (error, number) => {
  if (error) {
    console.error(error);
  }
  console.log(`Mesaj ${number} kişiye gönderildi`);
});
