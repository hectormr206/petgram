import { gql, useQuery } from '@apollo/client'

export function useGetPhotos (categoryId) {
  const GET_PHOTOS = gql`
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
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

  return { loading, error, data }
}
