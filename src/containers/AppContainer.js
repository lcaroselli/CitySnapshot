import { connect } from 'react-redux';
import { fetchScoreData, fetchScoreData2, fetchDetailData, fetchImageData, fetchImageData2, fetchSummaryData, submitCity, submitCity2 } from '../actions';

const mapStateToProps = store => {
  return {
    cityScoreData: store.fetchScoreSuccess,
    cityScoreData2: store.fetchScoreSuccess2,
    cityDetailData: store.fetchDetailSuccess,
    cityImageData: store.fetchImageSuccess,
    cityImageData2: store.fetchImageSuccess2,
    summaryData: store.fetchSummarySuccess,
    isLoading: store.isLoading,
    hasErred: store.hasErred,
    submittedCity: store.submitCitySuccess,
    submittedCity2: store.submitCitySuccess2
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchScoreData: url => dispatch(fetchScoreData(url)),
    fetchScoreData2: url => dispatch(fetchScoreData2(url)),

    fetchDetailData: url => dispatch(fetchDetailData(url)),

    fetchImageData: url => dispatch(fetchImageData(url)),
    fetchImageData2: url => dispatch(fetchImageData2(url)),

    fetchSummaryData: url => dispatch(fetchSummaryData(url)),

    submitCity: (city, name) => dispatch(submitCity(city, name)),
    submitCity2: (city, name) => dispatch(submitCity2(city, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
