const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport-config");
const { swaggerUi, specs } = require("./swagger");

const Course = require("./models/courseModel");
const RegistrationForm = require("./models/registrationForm");
const User = require("./models/user");
const authRoutes = require("./routes/auth");
const coursesRoutes = require("./routes/courses");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  session({ secret: "MY-SECRET-KEY", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect(
//   // "mongodb+srv://sailingProjectAdmin:baCjwqyiimBLoA2y@sailingproject.ibuzldl.mongodb.net/?retryWrites=true&w=majority",
//   "mongodb+srv://mateuszlangowski:DOPA7iTIemmyzXvy@cluster0.u197q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mateuszlangowski:<db_password>@cluster0.u197q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use("/auth", authRoutes);
app.use("/courses", coursesRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running properly.");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
