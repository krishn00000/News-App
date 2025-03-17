import React from 'react';
import { useParams } from 'react-router-dom';
import Narayana from '../src/assets/Narayana.jpeg'

const Fullnews2 = ({ newsList }) => {
  const { id } = useParams(); // Get the news ID from the route parameter
  const newsItem = newsList.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container mt-5">
        <h1>Roads in Amaravati will be completed in a year, core capital buildings by 2028, says Minister Narayana</h1>
        <img
            src={Narayana}
            className="d-block w-250"
            alt=""
            style={{ height: '300px', objectFit: 'cover' }}
          />
        <p>The 33,000-acre Amaravati capital region assumed a renewed vigour with the government initiating all measures to complete the construction of the core capital at the earliest. The Andhra Pradesh (A.P.) Minister for Municipal Administration and Urban Development (MAUD) Ponguru Narayana says all the connecting roads will be completed in a year and the core capital buildings will be constructed in three years.


Mr. Narayana is serving as the MAUD Minister for the second term ever since the bifurcated A.P. came into existence and played a key role in land acquisition and planning of the proposed capital.

The arrangements for the much needed finances have been taken care of, according to the Minister.

In an exclusive interaction with The Hindu at the Secretariat, Mr. Narayana says, “There are five towers with 45 to 50 floors planned for the Secretariat and Assembly. And the total administration will be at one place. Ministers, Secretaries, all heads of departments and staff will be placed in the same building to facilitate faster pace of administration. This apart, the High Court building and road network are the priority. All the roads are scheduled to be completed in a year and the construction of core capital buildings will take two and a half to three years,” he says.

Chief Minister N. Chandrababu Naidu and Mr. Narayana performed the ceremonial puja on the premises of the proposed ₹160 crore seven-storied Capital Region Development Authority (CRDA) office building in Amaravati a couple of days ago.

The old contractors, who began the work during 2014-19, are not in a position to continue the works due to escalation of cost. A technical committee has been appointed to close the contracts and the report is expected by the end of October. The estimation process will be completed in November, the tender process in December and the works will begin from January 2025, according to the Minister.


During 2014-2019, the then Telugu Desam Party government had acquired over 33,000 acres for the construction of the capital.

Finances
Apart from the ₹15,000 crore loan to be facilitated by the Centre, the State government is pursuing loans from HUDCO, World Bank, AIIB, JICA and other agencies. “During the 2014-2019 period, the government had spent ₹5,000 crore in the overall tendered works worth ₹48,000 crore. There could be another 10% escalation in the estimates and we need about ₹50,000 crore for the core capital,” Mr. Narayana says.

For the record, HUDCO has already committed ₹11,000 crore financial assistance for the development of Amaravati greenfield capital city. The government is also planning to tap the potential of the Central government’s Atal Mission for Rejuvenation and Urban Transformation (AMRUT) schemes to aid developmental activities in Amaravati.


Water management
The government is also focused on water management in the region and engaged a firm from the Netherlands to study the aspect. “We’ve taken the data of 200 years related to water in Amaravati and got the water management designs by a company from the Netherlands. The country is located below sea level and they are experts in water management. Earlier, they studied the region and gave a design. Now, we wanted another partner to look at the recent flood in which over 11 lakh cusecs of water flow was witnessed at Prakasam Barrage,” says the Minister.

Three canals — Kondaveeti Vaagu, Palavaagu and a gravitational canal — and six reservoirs were part of the earlier design to manage heavy flow of water in the region and contain it. In addition to that, there is a system planned to pump out 25,000 cusecs of water out of the system in case of an emergency. The designs are in the final stages of vetting, according to the Minister.</p>
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
