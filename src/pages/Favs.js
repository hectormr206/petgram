import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus favorito' subtitle='Aquí puedes encontrar tus favoritos'>
    <ListOfFavs />
  </Layout>
)
