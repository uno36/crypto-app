import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../redux/actions/categoryActions';
import { Container, Row, Col } from 'react-bootstrap'

const Homepage = ({ categories, fetchCategories }) => {
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.date.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <Container fluid>
      <h1 className="my-3 text-center heading">STOCK</h1>
      <div className="area my-2 rounded ">
      <p className="text-center p-3">company financial stats</p>
      <p className="m-3">Apple  financial metrics</p>
      <p className="m-3">significant financial milestones</p>
      <ul className="m-3">
      <li>growth</li>
      <li>profitability</li>
      <li>cash flow generation</li></ul>
      </div>
      <input className="my-2" type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by date" />
      <Row >
        {filteredCategories.map((category) => (
          <Col key={category.id} xs={6} md={6} className="no-gutter">
            <div className=" div p-5 text-center fw-bold">
              {category.date} {category.symbol}
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
