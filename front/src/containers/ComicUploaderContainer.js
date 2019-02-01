import { connect } from 'react-redux'
import ComicUploader from '../components/ComicUploader';
import { comicUpload } from '../actions/comicActions';

const mapStateToProps = ({user}) => {
  return {
    user: user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upload: (comic, token) => {
      dispatch(
        comicUpload(comic, token)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicUploader)