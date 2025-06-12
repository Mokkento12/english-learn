// lib/apolloClient.ts

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Для дебага в dev-среде
  loadDevMessages();
  loadErrorMessages();
}

export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
