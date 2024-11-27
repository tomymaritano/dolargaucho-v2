import React, { useEffect, useState } from 'react';

interface News {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const NewsSlider: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=ar&apiKey=ee447406883f43408ee0995583835851`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? news.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === news.length - 1 ? 0 : prevIndex + 1));
  };

  if (news.length === 0) {
    return <div className="text-gray-200 text-center py-8">Cargando noticias...</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      {/* Noticia actual */}
      <div className="p-6">
        <img
          src={news[currentIndex].urlToImage}
          alt={news[currentIndex].title}
          className="rounded-md w-full h-64 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold text-white mb-2">{news[currentIndex].title}</h2>
        <p className="text-gray-300 mb-4">{news[currentIndex].description}</p>
        <a
          href={news[currentIndex].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Leer más
        </a>
      </div>

      {/* Controles */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-gray-200 rounded-full p-2 hover:bg-gray-700 transition"
        aria-label="Previous News"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-gray-200 rounded-full p-2 hover:bg-gray-700 transition"
        aria-label="Next News"
      >
        &#8594;
      </button>
    </div>
  );
};

export default NewsSlider;