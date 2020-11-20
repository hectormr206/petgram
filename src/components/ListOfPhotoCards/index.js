import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { PhotoCard } from '../PhotoCard'

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

  if (loading) return 'Loading...'
  if (error) return <p>Error</p>

  return (
    <ul>
      {data.photos.map((photoCard, id) => <PhotoCard key={id} {...photoCard} />)}
    </ul>
  )
}
