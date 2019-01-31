//ACTIONS
  export const COMIC_UPLOAD_SUCCESS = "COMIC_UPLOAD_SUCCESS"
  const comicUploadSuccess = (comic) => ({ type: COMIC_UPLOAD_SUCCESS, payload: comic })

  export const COMIC_UPLOAD_ERROR = "COMIC_UPLOAD_ERROR"
  const comicUploadError = () => ({ type: COMIC_UPLOAD_ERROR })

  export const COMIC_UPLOAD_LOADING = "COMIC_UPLOAD_LOADING"
  const comicUploadLoading = () => ({ type: COMIC_UPLOAD_LOADING })

//THUNKS

export const comicUpload = (comic, token) => dispatch => {
  dispatch(
    comicUploadLoading()
  )
  fetch('http://localhost:8000/upload', {
    method: "POST",
    body: comic,
    headers: {
      "token": token,
    }
  })
  .then(res => res.json())
  .then(msg => console.log(msg))
}