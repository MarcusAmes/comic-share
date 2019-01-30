import { connect } from 'react-redux';
import TopNav from '../components/TopNav';
import { logout } from '../actions/userActions';

const mapStateToProps = ({user}) => {
  return {
    user: user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(
        logout()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)