import Head from 'next/head'
import React from 'react'

interface Props {
  title: String;
}

export default function Metadata(props: Props) {
  return (
    <Head>
      <title>LabQI | {props.title}</title>
    </Head>
  )
}
