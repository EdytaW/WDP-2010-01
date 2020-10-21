import { connect } from 'react-redux';
import { setCompare, getCount } from '../../../redux/compareRedux';
import { addToFavourite, getCategoryById, getAll } from '../../../redux/productsRedux';
import ProductListImages from './ProductListImages';

const mapStateToProps = (state, props) => {
  const category = getCategoryById(state, props.match.params.categoryId);
  return {
    ...category,
    count: getCount(state),
    compare: state.compare,
    products: getAll(state),
  };
};

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  addToFavourite: value => dispatch(addToFavourite(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListImages);