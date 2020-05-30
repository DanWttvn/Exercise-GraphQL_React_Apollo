const express = require("express");
const cors = require("cors")
const graphqlHTTP = require("express-graphql")
const schema = require("./schema")

const app = express();

//it allows us to make request from a different domain (in dev, 3.000/5.000) -> Allow cross-origin
app.use(cors());

app.use("/graphql", graphqlHTTP({
	schema: schema,
	graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))