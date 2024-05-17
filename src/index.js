import fastify from "fastify";
import mongoose from "mongoose";
import fastifyFormbody from "@fastify/formbody";

export const app = fastify();
app.register(fastifyFormbody);
app.register(import("./routes/product.route.js"));

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@backenddb.akyvcip.mongodb.net/Node-CRUD?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to database");

    app.listen({ port: 3000 }, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
