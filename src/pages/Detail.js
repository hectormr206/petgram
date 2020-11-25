import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import { Layout } from '../components/Layout'

export default ({ detailId }) => {
  const { data, loading, error } = useGetSinglePhoto(detailId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { photo = {} } = data
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCard {...photo} />
    </Layout>
  )
}
