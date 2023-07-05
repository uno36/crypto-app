import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Details = () => {
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.coinstats.app/public/v1/coins');
        const categories = response.data.coins;
        setAllCategories(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const selectedCategory = allCategories.find((category) => category.id === id);
    setCategoryDetails(selectedCategory);
  }, [allCategories, id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!categoryDetails) {
    return <div>Loading...</div>;
  }

  const {
    icon,
    name,
    symbol,
    rank,
    price,
    priceBtc,
    volume,
    marketCap,
    availableSupply,
    totalSupply,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    websiteUrl,
    twitterUrl,
    exp,
  } = categoryDetails;

  return (
    <Container fluid className="card" style={{ maxWidth: '25rem', margin: '10px auto', backgroundColor: '#360e1b', color: 'white' }}>
      <div>
        <button className="btn btn-danger my-2" onClick={handleGoBack}>&lt; Back</button>
      </div>
      <div className="text-center">
        <img src={icon} alt="Category Icon" />
        <h2>{name}</h2>
        <p>Symbol: {symbol}</p>
        <p>Rank: {rank}</p>
        <p>Price: {price}</p>
        <p>Price in BTC: {priceBtc}</p>
        <p>Volume: {volume}</p>
        <p>Market Cap: {marketCap}</p>
        <p>Available Supply: {availableSupply}</p>
        <p>Total Supply: {totalSupply}</p>
        <p>Price Change in 1h: {priceChange1h}</p>
        <p>Price Change in 1d: {priceChange1d}</p>
        <p>Price Change in 1w: {priceChange1w}</p>
        <p>
          <a href={websiteUrl} className="text-decoration-none" target="_blank" rel="noopener noreferrer">Website</a>
        </p>
        <p>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">Twitter</a>
        </p>
        <p>Explorer Links:</p>
        <ul>
          {exp.map((link, index) => (
            <li key={index} className="list-unstyled ">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Details;
