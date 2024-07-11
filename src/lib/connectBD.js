import React from 'react';
const { MongoClient, ServerApiVersion } = require('mongodb');

let db
export const connectBD =async () => {
    if(db)return db
    
// const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_USER}:${NEXT_PUBLIC_MONGO_PASSWORD}@cluster0.4mwwnz0.mongodb.net/?appName=Cluster0`;
const uri = `mongodb+srv://codeBlogs:JW7QA2J65S43d2IY@cluster0.4mwwnz0.mongodb.net/?appName=Cluster0`;

try {
    const client = await new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      db=await client.db("my-code-blogs")
      
      const collections = await db.listCollections().toArray();
      
      console.log("Database connection successful!");



      return db
} catch (error) {
    console.log(error);
}





};

