import { gql, useQuery } from '@apollo/client'

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const useGetSinglePhoto = id => {
  const { loading, data, error } = useQuery(getSinglePhoto, { variables: { id } })
  return { loading, data, error }
}
