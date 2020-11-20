import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { useQuery, gql } from '@apollo/client'

const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(getPhotos)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} id={photo.id} likes={photo.likes} src={photo.src} />)}
    </ul>
  )
}
