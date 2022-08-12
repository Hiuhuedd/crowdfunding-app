import Head from 'next/head'
import { useContext, useEffect,useState } from 'react'
import { MediumContext } from '../context/MediumContext'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'
import loader from '../static/loading.gif'
import Image from 'next/image'
const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container: `max-w-7xl flex-1 px-10 `,
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
}

export default function Home() {
  const { allPosts } = useContext(MediumContext)
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    if (allPosts.length === 0) {
      setLoading(true)
    }else{
      setLoading(false)
    }
  }, [allPosts])
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Funder | Crowd Funding</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.postsList}>
            <h3 className='text-3xl font-bold p-0'>
            Top Projects  
          </h3>

           {Loading? <img src={loader} alt='medium small logo' height={40}
          width={40} />:''}
              {allPosts.map(post => (
                <PostCard post={post} key={post.id} className="hover:shadow-md" />
              ))}
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}
