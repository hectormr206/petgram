import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'

export const Detail = ({ detailId }) => {
  console.log(detailId)
  const { data, loading, error } = useGetSinglePhoto(detailId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
