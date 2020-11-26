import React from 'react'
import PropTypes from 'prop-types'
import { useGetFavorites } from '../../hooks/useGetFavorites'
import { Grid, Image, Link } from './styles'

export const ListOfFavs = () => {
  const { loading, error, data } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Grid>
      {
      data.favs.map(fav =>
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>
      )
    }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
