import express from 'express';
import { getRecommendations } from './routes/recommendations.js'; // 👈 note .js

const app = express();
app.use(express.json());

app.get('/recommendations/:userId', getRecommendations);

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
