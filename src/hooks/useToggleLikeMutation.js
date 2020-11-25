import { gql, useMutation } from '@apollo/client'

const TOGGLE_LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
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
