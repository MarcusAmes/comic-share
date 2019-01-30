import Login from '../components/Login'
import { login } from '../actions/userActions';
import { connect } from 'react-redux';

const mapStateToProps = ({user}) => {
  return {
    user: user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch(
        login(user)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
