const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

client.on("error", (error) => {
  console.error(error);
});

// Set
client.set("user_name", "mert", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// Get
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

// Delete
client.del("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Delete?", message);
});

// Exists
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Exists", message);
});

// Append
client.append("last_name", "polat", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Append", message);
  client.get("last_name", (err, value) => {
    console.log("Okunan", value);
  });
});

client.on("message", (channel, message) => {
  console.log(`Kanal: ${channel}, Mesaj: ${message}`);
});

client.subscribe("mertpolat");

// Express uygulamasını dinle
app.listen(3000, () => {
  console.log("Sunucu çalışıyor...");
});
