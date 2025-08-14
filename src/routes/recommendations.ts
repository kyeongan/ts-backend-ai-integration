import { Request, Response } from 'express';
import { getUserProfile } from '../services/userService.js';
import { getMealRecommendations } from '../services/mlService.js';

export async function getRecommendations(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId, 10);
    const profile = await getUserProfile(userId);

    if (!profile) {
      return res.status(404).json({ error: 'User not found' });
    }

    const recommendations = await getMealRecommendations(profile);
    res.json({ userId, recommendations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
