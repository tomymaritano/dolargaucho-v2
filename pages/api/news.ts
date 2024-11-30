// pages/api/news.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Article {
  title: string;
  description: string;
  url: string;
}

interface NewsApiResponse {
  data: Article[];
  status: string;
  message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Article[] | { message: string }>) {
  const apiToken = 'KiFOxgILeyN7VFbdXjHYOJtwy3ehexqk4VjiF9GG';
  const url = `https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=${apiToken}`;

  try {
    const newsResponse = await fetch(url);
    const newsData: NewsApiResponse = await newsResponse.json();
    if (newsResponse.ok) {
      res.status(200).json(newsData.data);
    } else {
      throw new Error(`API error: ${newsData.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Failed to fetch news:', error);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
}