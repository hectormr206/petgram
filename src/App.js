import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { PhotoCard } from './components/PhotoCard'
import { useGetSinglePhoto } from './hooks/useGetSinglePhoto'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  const { data, loading, error } = useGetSinglePhoto(detailId)

  const renderSinglePhoto = (data, loading, error) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    const { photo = {} } = data
    return <PhotoCard {...photo} />
  }

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? renderSinglePhoto(data, loading, error)
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
            )
      }
    </>
  )
}
