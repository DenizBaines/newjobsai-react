import React from 'react';
import './Training.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const locations = [
  {
    city: 'Safdarjung Enclave',
    address: 'AB-6, First Floor, Safdarjung Enclave, New Delhi - 110029',
    color: 'blue'
  },
  {
    city: 'Lucknow',
    address: 'C-1759, 2nd Floor, Above Bank Of India, Sect C, Sector 18, Indira Nagar, Lucknow, Uttar Pradesh - 226016, +91-522-4108930',
    color: 'red'
  },
  {
    city: 'Kamla Nagar Centre',
    address: 'A-11, Second Floor, Main GT Rd, Above Sardar Di Hatti, Kamla Nagar, New Delhi, Delhi - 110007, +91-11-42481242',
    color: 'green'
  },
  {
    city: 'Jaipur',
    address: 'Near Torawati School, Amai Road, Kothputli, District Jaipur (Rural), Rajasthan - 303108',
    color: 'blue'
  },
  {
    city: 'Jodhpur',
    address: 'Jassi Tower, Plot No.3, Kh No.22, Village Nandri, On Main Banar Road, District Jodhpur, Rajasthan - 342015',
    color: 'red'
  },
  {
    city: 'Sirohi',
    address: 'Ajmer Tower, Abu Road, Akra Bhatta Mount Abu Road, Near BS Petrol Pump Opp Housing Board Colony, District Sirohi, Rajasthan - 307026',
    color: 'green'
  },
  {
    city: 'Barmer',
    address: 'Jivraj Mali, Ward No. 3, Behind Agarwal Colony, Balotra, District Barmer, Rajasthan - 344022',
    color: 'blue'
  },
  {
    city: 'Telangana',
    address: '15 - 167/20/A, Post Office Achampet, District Nagarkurnool, Telangana - 509375',
    color: 'red'
  },
  {
    city: 'Dehradun',
    address: 'Khasra No. 957, Central Hope Town, Meelu Complex, Chakrata Road, Selaqui, Vikasnagar, Dehradun, Uttarakhand - 248197',
    color: 'green'
  },
  {
    city: 'Haridwar',
    address: 'Khasra No. 49, Raipur Tehsil Bhagwanpur, Roorkee, District Haridwar, Uttarakhand - 247661',
    color: 'blue'
  },
  {
    city: 'Uttarkashi',
    address: 'Gangotri Highway, Near Petrol Pump, Matli, District Uttarkashi, Uttarakhand - 249193',
    color: 'red'
  },
  {
    city: 'Karawal Nagar',
    address: '141A, Kh. No. 37 & 40, Chandu Nagar, Main Karawal Nagar Road, Delhi - 110094',
    color: 'green'
  },
];

const Training = () => {
  return (
    <div>  <Navbar />
    <div className="training-page">
      <section className="training-header">
        <h1>Our Training Academy</h1>
        <hr />
      </section>

      <section className="training-grid">
        {locations.map((location, index) => (
          <div key={index} className={`training-card ${location.color}`}>
            <h3>{location.city}</h3>
            <p>{location.address}</p>
          </div>
        ))}
      </section>
    </div>
    <Footer /></div>
  );
};

export default Training;
