module.exports = {
  client: {
    includes: [__dirname + "/src/graphql/my_query/**"],
    service: {
      name: "my_name",
      localSchemaFile: ["./graphql-schema.json"],
    },
  },
};
