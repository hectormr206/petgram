import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PhotoCard } from './components/PhotoCard'
import { useGetSinglePhoto } from './hooks/useGetSinglePhoto'

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
          : <><ListOfCategories /><ListOfPhotoCards categoryId={1} /></>
      }
    </>
  )
}
