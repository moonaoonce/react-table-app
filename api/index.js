const { ApolloServer, gql } = require('apollo-server');
const neo4j = require("neo4j-driver");
const { Neo4jGraphQL } = require("@neo4j/graphql");

const typeDefs = gql`
type Movie {
    movieId: ID!
    title: String
    plot: String
}

type Genre {
    name: String!
}
`;

const driver = neo4j.driver(
    "bolt://3.238.91.35:7687",
    neo4j.auth.basic("neo4j", "miles-bud-girl")
);

const neoSchema = new Neo4jGraphQL({typeDefs, driver});

neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema,
    });
    server.listen().then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });
});