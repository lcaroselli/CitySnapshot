import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchData } from '../actions';

const mapStateToProps = store => {
  return {
    isLoading: store.isLoading,
    hasErred: store.hasErred
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url))
  }
}

export default connect (mapStateToProps, mapDispatchToProps);
