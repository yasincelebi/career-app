import { GetServerSideProps } from 'next'

import React from 'react'

export const Jobs = ({ name }: { name?: any }) => {
  console.log(name)

  return <div>{name}</div>
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const name = await 'yasin'
  return {
    props: {
      name,
    },
  }
}

export default Jobs
