const sdk = require("node-appwrite");

let client = new sdk.Client();

let API_KEY = process.env.APPWRITE_API_KEY;

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
  .setKey(API_KEY); // Your secret API key
