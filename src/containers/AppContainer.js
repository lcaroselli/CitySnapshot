import { connect } from 'react-redux';
import App from '../components/App/App';
import CityCard from '../components/CityCard/CityCard';
import CityPage from '../components/CityPage/CityPage';
import { fetchScoreData, fetchDetailData, fetchImageData } from '../actions';

const mapStateToProps = store => {
  return {
    cityScoreData: store.fetchScoreSuccess,
    cityDetailData: store.fetchDetailSuccess,
    cityImageData: store.fetchImageSuccess,
    isLoading: store.isLoading,
    hasErred: store.hasErred
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchScoreData: url => dispatch(fetchScoreData(url)),
    fetchDetailData: url => dispatch(fetchDetailData(url)),
    fetchImageData: url => dispatch(fetchImageData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
