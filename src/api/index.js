const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const MahasiswaSchema = require("../schemas/mahasiswaSchema");
const MahasiswaResolver = require("../resolvers/mahasiswaResolver");
const PaymentSchema = require("../schemas/paymentSchema");
const PaymentResolver = require("../resolvers/paymentResolver");

const app = express();

const server = new ApolloServer({
  typeDefs: [MahasiswaSchema, PaymentSchema],
  resolvers: [MahasiswaResolver, PaymentResolver],
});

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3003;

  app.listen(PORT, () => {
    console.log(
      `Server running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
