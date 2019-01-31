import { connect } from 'react-redux'
import ComicUploader from '../components/ComicUploader';

const mapStateToProps = ({user}) => {
  return {
    user: user
  }
}

export default connect(mapStateToProps)(ComicUploader)