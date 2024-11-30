// components/NewsComponent.tsx
import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

// components/NewsComponent.tsx
useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error(`Failed to fetch with status: ${response.status}`);
        }
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      setLoading(false);
    };
  
    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>News</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
}

export default NewsComponent;