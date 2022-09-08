import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
// import { axiosQuery } from '@ui-services/api'
import HomeFeaturedPost from '@ui-components/HomeFeaturedPost'
import HomeNews from '@ui-components/HomeNews'
import { axiosQuery } from 'services/api'
import { IPostEntity } from '@ui-interfaces/Post'
import BaseLayout from 'layouts/BaseLayout'

type HomeProps = {
  posts: IPostEntity[]
}

export default function Home({ posts }: HomeProps) {
  // const [posts, setPosts] = React.useState<any[]>([])


  const fetchPosts = async () => {

  }
  return (
    <div>
      <HomeFeaturedPost posts={posts!} />
      <HomeNews posts={posts} />

    </div>
  );
}

Home.getLayout = (page: React.ReactElement) => (
  <BaseLayout title="Loans homepage">{page}</BaseLayout>
);

export async function getServerSideProps(context: any) {
  const response = await axiosQuery.get('/')
  const posts: IPostEntity[] = response.data
  return {
    props: { posts }, // will be passed to the page component as props
  }
}
