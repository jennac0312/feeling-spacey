import React from 'react'

const SpaceItem = ( { item } ) => {
  return (
    <div>
      <h1>ENTER SPACE</h1>
      <h2>insert title</h2>
      <h2>insert image</h2>
      <h2>insert description</h2>

        <p>{item.explanation}</p>


    </div>
  )
}

export default SpaceItem
