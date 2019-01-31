import { connect } from 'react-redux'
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MainPage)