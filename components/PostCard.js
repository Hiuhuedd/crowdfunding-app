import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { FiBookmark } from 'react-icons/fi'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'
import { useRouter } from 'next/router'
const styles = {
  wrapper: `max-w-[46rem] h-[10rem] flex items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorName: `font-semibold`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  bookmarkContainer: `cursor-pointer`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  thumbnailContainer: `flex-1`,
}

const PostCard = ({ post }) => {
  const router = useRouter()
  const [authorData, setAuthorData] = useState(null)
console.log(authorData);
  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData(
        (await getDoc(doc(db, 'users', post.data.author))).data(),
      )
    }

    getAuthorData()
  }, [post])
  const { user, handleUserAuth } = useContext(MediumContext)
  const handleCheckUserAuth=()=>{
 
    if(user){
      router.push(`/post/${post.id}`)
    }else{
      alert("sign in to proceed with this project post")
    }
  }
  return (
    
      <div className={styles.wrapper} onClick={()=>handleCheckUserAuth()}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              {authorData && (
                <img
                  // src={`https://res.cloudinary.com/demo/image/fetch/${authorData.imageUrl}`}
                  src={authorData?.imageUrl}
                  alt='author'
                  className={styles.authorImage}
                  height={40}
                  width={40}
                />
              )}
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}>{post.data.title}</h1>
          <div className={styles.briefing}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
              })}
              • {post.data.postLength} min read •{' '}
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className='h-5 w-5' />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <img
            // src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            src={post?.data?.bannerImage}
            alt='thumbnail'
            height={100}
            width={150}
          />
        </div>
      </div>
   
  )
}

export default PostCard
