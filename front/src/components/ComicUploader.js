import React, { Component } from 'react'
// import ReactS3Uploader from 'react-s3-uploader';
class ComicUploader extends Component {
  _onSubmit = (e) => {
    e.preventDefault()
  }

  makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  render() {
    //NOTE temp s3 uploader haven't set up s3
    return (
      <form onSubmit={this._onSubmit}>
        {/* //NOTE Testing a way to upload files to s3
        <ReactS3Uploader 
        signingUrl = "http://back-dev.us-west-1.elasticbeanstalk.com/upload"
        accept = ".pdf"
        signingUrlHeaders = {
          {
            "token": this.props.user.token
          }
        }
        scrubFilename = {
          (filename) => filename.replace(filename, this.makeid() + ".pdf")
        }
        /> */}
        <button>Upload</button>
      </form>
    )
  }
}

export default ComicUploader