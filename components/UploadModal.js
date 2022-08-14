import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { MediumContext } from '../context/MediumContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig'

const styles = {
  wrapper: `w-[50rem] h-[30rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
  title: `my-[2rem] font-bold text-3xl font-poppins`,
  smallField: `w-[80%] flex justify-between flex-col`,
  largeField: ``,
  fieldTitle: `flex-1 text-sm font-poppins`,
  inputContainer: `flex-[5] h-min `,
  inputField: `font-roboto mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500`,
  accentedButton: `bg-black text-sm font-poppins shadow-xl text-white py-2 px-4 rounded-md hover:text-red-700 transition-all `,
}

const UploadModal = () => {
  const router = useRouter()
  const { user } = useContext(MediumContext)

  const [title, setTitle] = useState('')
  const [brief, setBrief] = useState('')
  const [category, setCategory] = useState('')
  const [postLength, setPostLength] = useState('')
  const [bannerImage, setBannerImage] = useState('')
  const [body, setBody] = useState('')

  const uploadPost = async event => {
    event.preventDefault()

    await addDoc(collection(db, 'articles'), {
      bannerImage: bannerImage,
      body: body,
      category: category,
      brief: brief,
      postedOn: serverTimestamp(),
      postLength: Number(postLength),
      title: title,
      author: user.email,
    })

    router.push('/')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Upload a Project Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type='text'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type='text'
            value={brief}
            onChange={event => setBrief(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type='text'
            value={bannerImage}
            onChange={event => setBannerImage(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type='text'
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Read Length (in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type='number'
            value={postLength}
            onChange={event => setPostLength(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            value={body}
            rows={12}
            onChange={event => setBody(event.target.value)}
          />
        </span>
      </div>

      <button onClick={uploadPost} className={styles.accentedButton}>
        Submit
      </button>
    </div>
  )
}

export default UploadModal
