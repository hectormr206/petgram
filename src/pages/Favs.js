import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title='Tus favorito' subtitle='Aquí puedes encontrar tus favoritos'>
    <ListOfFavs />
  </Layout>
)
