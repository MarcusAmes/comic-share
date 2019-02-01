import {connect} from 'react-redux'
import Viewer from '../components/Viewer';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    comment: state.comment
  }
}

export default connect(mapStateToProps)(Viewer)