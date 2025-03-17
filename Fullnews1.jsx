import React from 'react';
import { useParams } from 'react-router-dom';
import image from '../src/assets/images.jpeg'

const Fullnews1 = ({ newsList }) => {
  const { id } = useParams();
  const newsItem = newsList.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container mt-5">
        <h1>Chandrababu Naidu should continue as Andhra Pradesh chief minister for another decade: Pawan Kalyan</h1>
        <img
            src={image}
            className="d-block w-250"
            alt=""
            style={{ height: '300px', objectFit: 'cover' }}
          />
        <p>
        Andhra Pradesh Deputy Chief Minister Pawan Kalyan on Wednesday wished for TDP supremo N Chandrababu Naidu to continue as the chief minister of the state for another decade, considering his experience, guidance and visionary foresight for achieving USD 1 trillion GSDP.

Asserting that he has 'complete' faith in Naidu, especially after seeing his governance over the first 150 days of the new NDA regime, the deputy CM highlighted that the southern state will become a USD 1 trillion economy 'soon'.



"I am telling the chief minister (Naidu), not just five years, you have to continue as the CM of this state for a decade. You have to continue this spirit," said Kalyan while addressing the assembly and added that USD 1 trillion amounts to Rs 7.65 lakh crore.

Followers of Sanatan Dharma will respond to those disrespecting it: AP deputy CM Pawan Kalyan
test
At a time when the erstwhile YSRCP government had allegedly devastated Andhra Pradesh and 'took back the state government in all fields', the actor-politician said that Naidu is needed for the state to 'race' towards achieving the USD 1 trillion economy.


Calling on his Cabinet colleagues to work towards fulfilling the CM's vision and dreams in their respective portfolios, Kalyan appealed to Naidu to issue orders as to what they should do at all times.

Further, he thanked the CM wholeheartedly for his speech on the first 150 days of the government and noted that it instilled immense encouragement and faith in him for the future.

  
</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{newsItem.title} (Fullnews1)</h1>
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

export default Fullnews1;
