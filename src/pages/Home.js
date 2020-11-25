import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomeComponent = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomeComponent, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
