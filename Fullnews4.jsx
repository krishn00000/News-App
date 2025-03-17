import React from 'react';
import { useParams } from 'react-router-dom';
import Highcourt from '../src/assets/High Court.jpeg'

const Fullnews2 = ({ newsList }) => {
  const { id } = useParams(); // Get the news ID from the route parameter
  const newsItem = newsList.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container mt-5">
        <h1>Chandrababu speaks on High Court Bench in Kurnool, says ready to develop state</h1>
        <img
            src={Highcourt}
            className="d-block w-250"
            alt=""
            style={{ height: '300px', objectFit: 'cover' }}
          />
        <p>
        Chief Minister Chandrababu Naidu announced that a High Court bench will soon be established in Kurnool, alongside the setting up of the Lokayukta and the Andhra Pradesh Human Rights Commission (AP HIRC) in the district. The announcement was made during a legislative assembly session where the CM spoke on a resolution for the establishment of the High Court bench.  He recalled that prior to the elections, they made promises regarding Amaravati serving as the capital in Kurnool and Visakhapatnam. “Comprehensive development of the state is possible only under the leadership of the Telugu Desam Party (TDP). We have successfully done it in the past and are committed to delivering it once again,” stated Naidu. He highlighted past projects initiated under the TDP government, including the Telugu Ganga, Handrineeva, and Galeru-Nagari schemes, asserting that these projects are now being completed by the National Democratic Alliance (NDA) government.  Our government is working towards making Rayalaseema free from drinking and irrigation water challenges through river linkages.” Naidu further disclosed an allocation of Rs. 5,000 crore for the Kopparthi and Orvakal clusters, reinforcing his administration's commitment to regional development.

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
