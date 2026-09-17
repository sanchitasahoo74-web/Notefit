import express from 'express';
import authRoutes from './routes/auth.routes.js';
const app = express();
app.use(express.json());
// we will use the authRoutes in the app.js file to create a route for the register button
// we use the app.use() method to use the authRoutes in the app.js file
// we create better api design with versioning using the api/v1/auth route
app.use('/api/v1/auth',authRoutes)
app.get('/', (req, res) => {
  res.json({
    message: "Hello World!",
    status: "success"
  })
});

export default app;