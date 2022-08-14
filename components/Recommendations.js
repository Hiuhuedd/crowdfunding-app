import Image from 'next/image'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineComment } from 'react-icons/ai'
import { FaDonate } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'
import { MdMarkEmailUnread } from 'react-icons/md'


const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-md hover:text-red-700 transition-all font-poppins shadow-md cursor-pointer`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-md`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem] flex space-x-10`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878] text-xs`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  actionButton: `bg-red-700 text-white rounded-md px-[.6rem] py-[.2rem] text-xs`,
  actionButton1: `bg-black text-white rounded-md px-[.6rem] py-[.4rem] text-xs flex items-center space-x-1`,
  recommendationContainer: ``,
  title: `my-[1rem] text-sm font-poppins `,
  articlesContainer: ``,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
}

const Recommendations = ({ post,author }) => {
  const { allPosts } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <>
        <div className={styles.accentedButton}>Get unlimited access</div>
        <div className={styles.searchBar}>
          <AiOutlineSearch />
          <input
            className={styles.searchInput}
            placeholder='Search'
            type='text'
          />
        </div>

        {author.length > 0 ? (
          <div className={styles.authorContainer}>
            <div>
            <div className={styles.authorProfileImageContainer}>
              <img
                // src={`https://res.cloudinary.com/demo/image/fetch/${author[0].data.imageUrl}`}
                src={author[0]?.data.imageUrl}
                alt='author'
                width={100}
                height={100}
              />
            </div>
            <div className={styles.authorName}>{author[0].data.name}</div>

            </div>
            <div>

            <div className={styles.authorFollowing}>
              {author[0].data.followerCount} followers
            </div>
            <div className={styles.authorActions}>
              <button className={styles.actionButton}>Follow</button>
              <button className={styles.actionButton}>
                <MdMarkEmailUnread />
              </button>
            </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
          )}

          <div className={styles.authorName}>{post[0]?.data.title}</div>
          <div className={styles.authorActions}>

          <button className={styles.actionButton1}><AiOutlineComment/> <span>Comment</span> </button>
          <button className={styles.actionButton1}><BiAddToQueue/> <span>Add to collections</span> </button>
          <button className={styles.actionButton1}><FaDonate/> <span>Donate</span> </button>
          </div>
           
        <div className={styles.recommendationContainer}>
          <div className={styles.title}>More from Funder</div>
          <div className={styles.articlesContainer}>
            {recommendedPosts.map(post => (
              <div key={post.id} className={styles.articleContentWrapper}>
                <div className={styles.articleContent}>
                  <div className={styles.recommendationAuthorContainer}>
                    <div
                      className={
                        styles.recommendationAuthorProfileImageContainer
                      }
                    >
                      <img
                        src={post.author.image}
                        alt='author'
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={styles.recommendationAuthorName}>
                      {post.author.name}
                    </div>
                  </div>
                  <div className={styles.recommendationTitle}>{post.title}</div>
                </div>
                <div className={styles.recommendationThumbnailContainer}>
                  <img
                    className={styles.recommendationThumbnail}
                    src={post.image}
                    alt='thumbnail'
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  )
}

export default Recommendations

const recommendedPosts = [
  {
    title: 'What can you do with Neurolinks?',
    image: "/neuralink.png",
    author: {
      name: 'Elon Musk',
      image: "/elon.jpeg",
    },
  },
  {
    title: 'The Ultimate Writers solution: WritersCube',
    image: "/edd.jpeg",
    author: {
      name: 'Hiuhu Edd',
      image: "/edd.jpeg",
    },
  },
  {
    title: "Let's build together: Funder",
    image: "/cp.png",
    author: {
      name: 'Mae Maria',
      image: "/cp.png",
    },
  },
]
