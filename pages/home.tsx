import Metadata from '@/components/Head/metadata'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Metadata title='Homepage' />
      <Header />
    </>
  )
}
