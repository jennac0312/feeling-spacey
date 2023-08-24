import React from 'react'

const Picture = ( { photo } ) => {
  return (
    <div>
      <img src={photo.url}/>
    </div>
  )
}

export default Picture
