import React, { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'
import { Link } from 'react-router-dom'

const Home = () => {

    // titles
    let { photos } = useContext(AppContext)

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      <h1>Cure Your Spacey</h1>
      <h2>Visit a planet</h2>
      <h2>HOME PAGE</h2>

      <ul>
        { 
            photos.map(( photo, index ) => {
                return (
                    <Link to={`/${photo.title.replaceAll(' ', '')}`}>
                        <li key={index}> {photo.title}</li>
                    </Link>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Home
