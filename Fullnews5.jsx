import React from 'react';
import { useParams } from 'react-router-dom';
import Pawan from '../src/assets/pavan.jpeg'

const Fullnews2 = ({ newsList }) => {
  const { id } = useParams(); // Get the news ID from the route parameter
  const newsItem = newsList.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container mt-5">
        <h1>Pawan Kalyan Pledges Action To Combat Pollution in Visakhapatnam</h1>
        <img
            src={Pawan}
            className="d-block w-250"
            alt=""
            style={{ height: '300px', objectFit: 'cover' }}
          />
        <p>
        Andhra Pradesh Deputy Chief Minister Pawan Kalyan announced a comprehensive plan to combat pollution in Visakhapatnam, a city that has grappled with deteriorating air quality due to industrial expansion over the past few decades. Addressing concerns raised by assembly members, Kalyan emphasized the importance of engaging with industry managers to implement pollution prevention strategies using advanced technologies. Kalyan highlighted the significant pollution generated by various industrial activities, including the cashew nut processing sector. He noted that while the burning of cashew nuts contributes to air pollution, efforts are being made to extract oil from these nuts, generating income and minimizing environmental impact. Additionally, he mentioned initiatives aimed at reducing coal usage in industries, which is a major contributor to pollution. Expressing his concern about the prevailing pollution levels in Visakhapatnam, Kalyan stated, "Our goal is to ensure that Visakhapatnam remains a clean and healthy place for its residents. Through a special plan, we will take decisive steps towards achieving pollution-free development." He criticized the previous government's lack of action regarding pollution control and reaffirmed his administration's commitment to improving air quality. Kalyan concluded by asserting that pollution hampers development, and his government will prioritize sustainable development practices that align with environmental protection.
</p>
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
