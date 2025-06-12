import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./resolvers";

async function startServer() {
  try {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    const httpServer = http.createServer(app);

    const PORT = 4000;
    httpServer.listen(PORT, () => {
      console.log(`🚀 Сервер запущен на http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Неизвестная ошибка";
    console.error("❌ Ошибка при запуске сервера:", errorMessage);
  }
}

startServer();
