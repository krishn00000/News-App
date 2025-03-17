import React from 'react';
import { useParams } from 'react-router-dom';
import Tirupati from '../src/assets/Tirupati.jpeg '

const Fullnews2 = ({ newsList }) => {
  const { id } = useParams(); // Extract the 'id' parameter from the route
  const newsItem = newsList?.find((news) => news.id === parseInt(id, 10)); // Ensure 'id' is parsed correctly

  if (!newsItem) {
    // Render fallback content when no news item matches the ID
    return (
      <div className="container mt-5">
        <h1>Tirumala: TTD increases SRIVANI ticket quota</h1>
        <img
          src={Tirupati}
          className="d-block w-100 mb-4"
          alt="Tirupati Temple"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <p>
          The daily quota of SRIVANI (Sri Venkateswara Alaya Nirmanam) trust darshan tickets issued at Renigunta Airport has 
          been increased from 100 to 200 by the Tirumala Tirupati Devasthanams (TTD) authorities. TTD officials stated that 
          this adjustment, effective Friday, was made by reducing the offline ticket quota at Tirumala. Presently, TTD issues 
          900 SRIVANI tickets offline through counters located behind Gokulam Rest House in Tirumala. Starting Friday, this 
          quota will be reduced to 800 tickets in Tirumala, with 200 tickets allocated to Renigunta Airport. These tickets 
          will be available on a first-come, first-served basis.
        </p>
        <p>
          In other developments, TTD released the February 2025 quota of Arjita Seva tickets online on Thursday. This includes 
          tickets for services such as Kalyanotsavam, Unjal Seva, Arjitha Brahmotsavam, and Sahasra Deepalankara Seva. 
          Additionally, Anga Pradakshinam tokens will be released at 10 am, SRIVANI tickets at 11 am, and tokens for physically 
          challenged devotees and senior citizens at 3 pm on February 23. The Rs 300 Special Entry Darshan tickets will be 
          available online at 10 am on November 25, while accommodation bookings for Tirumala and Tirupati will open at 3 pm 
          the same day.
        </p>
      </div>
    );
  }

  // Render the selected news item
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
