import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../redux/actions/categoryActions';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage = ({ categories, fetchCategories }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container fluid>
      <h1 className="my-3 text-center heading m-2">Welcome to our Website!</h1>
      <div className="area my-2 rounded m-2">
        <h4 className="text-center p-3">Its all about <span className="blink">cryptocurrency</span></h4>
        <p className="m-3">crypto financial metrics</p>
        <p className="sig  ">significant financial milestones</p>
        <ul className=" gr ">
          <li>growth</li>
          <li>profitability</li>
          <li>cash flow generation</li>
        </ul>
      </div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Search CryptoCurrency</InputGroup.Text>
        <Form.Control
          type="text"
          value={filter}
          onChange={handleFilterChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Row className="m-1">
        {filteredCategories.map((category) => (
          <Col key={category.id} xs={6} md={4} lg={2} className="no-gutter">
            <div className="div p-5 text-center fw-bold">
              <Link className="details-link" to={`/details/${category.id}`}>
                <img src={category.icon} alt={category.name} /> <br />
                {category.name} <br />
                {category.symbol}
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
Homepage.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  fetchCategories,
};

const ConnectedHomepage = connect(mapStateToProps, mapDispatchToProps)(Homepage);
export default ConnectedHomepage;
