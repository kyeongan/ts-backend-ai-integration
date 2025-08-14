import { UserProfile } from '../types/index.js';

const mockUsers: UserProfile[] = [
  { id: 1, age: 30, dietary_preferences: ['vegan'], allergies: ['peanuts'] },
  { id: 2, age: 45, dietary_preferences: ['low-carb'], allergies: [] },
];

export async function getUserProfile(
  userId: number
): Promise<UserProfile | null> {
  return mockUsers.find((user) => user.id === userId) || null;
}
