const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const fs = require('fs');
const path = require('path');
const graphQLResolver = require('./dataResolver');

//创建一个 schema
const content = fs.readFileSync(path.join(__dirname, "schema.graphql"),"utf8");
const schema = buildSchema(content);

// 创建服务
const app = express();
app.use('/graphql',graphqlHTTP(async (request, response, graphQLParams) => ({
      schema: schema,
      rootValue: await graphQLResolver.resolve(request, graphQLParams),
      graphiql: true,
    })),
);
app.listen(4000);

