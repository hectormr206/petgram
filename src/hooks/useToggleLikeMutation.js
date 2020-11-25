import { gql, useMutation } from '@apollo/client'

const TOGGLE_LIKE = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const useToggleLikeMutation = () => {
  const [toggleLikeMutation, loading, error] = useMutation(TOGGLE_LIKE)
  return { toggleLikeMutation, loading, error }
}
