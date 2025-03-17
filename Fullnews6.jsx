import React from 'react';
import { useParams } from 'react-router-dom';
import Lokesh from '../src/assets/Lokesh.jpeg'

const Fullnews2 = ({ newsList }) => {
  const { id } = useParams(); // Get the news ID from the route parameter
  const newsItem = newsList.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container mt-5">
        <h1>TCS will soon set up campus in AP, says IT Minister Nara Lokesh</h1>
        <img
            src={Lokesh}
            className="d-block w-250"
            alt=""
            style={{ height: '300px', objectFit: 'cover' }}
          />
        <p>IT Minister Nara Lokesh on Thursday announced that the TCS Company would set up its campus in Andhra Pradesh as it has already given its commitment. “TSC will certainly set up its campus in AP and there is no doubt in it,” he said, while replying to a question during Question hour in the State Assembly. He said a meeting was convened with the representatives of IT companies to discuss the measures to be taken for attracting more IT companies to AP Stating that the previous YSRCP government ignored the sector, he said the Ministers demanded share from the companies for establishing in the State. As a result, the companies failed to set up their campuses in the State. The State government was committed to provide five lakh IT jobs in the next five years, he said, adding that the previous government failed to organize IT conclave during its tenure.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{newsItem.title}</h1>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="img-fluid mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <p>{newsItem.content}</p>
    </div>
  );
};

export default Fullnews2;
