import { gql, useMutation } from '@apollo/client'

const REGISTER_MUTATION = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const useRegisterMutation = () => {
  const [register, loading, error] = useMutation(REGISTER_MUTATION)
  return { register, loading, error }
}
