import { connect } from 'react-redux';
import { fetchScoreData, fetchDetailData, fetchImageData, submitCity } from '../actions';

const mapStateToProps = store => {
  return {
    cityScoreData: store.fetchScoreSuccess,
    cityDetailData: store.fetchDetailSuccess,
    cityImageData: store.fetchImageSuccess,
    isLoading: store.isLoading,
    hasErred: store.hasErred,
    submittedCity: store.submitCitySuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchScoreData: url => dispatch(fetchScoreData(url)),
    fetchDetailData: url => dispatch(fetchDetailData(url)),
    fetchImageData: url => dispatch(fetchImageData(url)),
    submitCity: (city, name) => dispatch(submitCity(city, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
