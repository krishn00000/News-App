import React from 'react';
import { useParams } from 'react-router-dom';
import Jagan from '../src/assets/Jagan.jpeg'

const Fullnews2 = ({ newsList }) => {
  const { id } = useParams(); // Get the news ID from the route parameter
  const newsItem = newsList.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container mt-5">
        <h1>Indictment of Adani: Former A.P. CM bribed with ₹1750 crore in a power deal, alleges U.S. SEC</h1>
        <img
            src={Jagan}
            className="d-block w-250"
            alt=""
            style={{ height: '300px', objectFit: 'cover' }}
          />
        <p>

The Power Supply Agreements (PSAs) by Andhra Pradesh’s electricity distribution companies are under scanner in the $265 million bribery case unearthed by the U.S. The indictment statement by the U.S. Securities and Exchange Commission (USSEC) has accused the Adani Group of bribing former Andhra Pradesh Chief Minister Y.S. Jagan Mohan Reddy among other officials.

The USSEC has alleged in its accusation that the power distribution companies in Odisha, Jammu and Kashmir, Tamil Nadu, Chhattisgarh and Andhra Pradesh have entered into PSAs with Solar Energy Corporation of India (SECI) under manufacturing project between July 2021 and February 2022. Then the A.P. State agreed to buy 7 gigawatts of solar power, the largest amount in any State in India.

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
