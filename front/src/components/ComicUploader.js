import React, { Component } from 'react'
class ComicUploader extends Component {

  state = {
    file: null
  }

  _onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append( "file" , this.state.file, this.state.file.name);
    console.log(formData.get('file'))
    this.props.upload(formData, this.props.user.token)
  }

  _onChange = ({target}) => {
    this.setState({file: target.files[0]})
  }


  render() {
    //NOTE temp s3 uploader 
    return (
      <form onSubmit={this._onSubmit}>
        <input type="file" name="pdf" onChange={this._onChange} />
        <button>Upload</button>
      </form>
    )
  }
}

export default ComicUploader