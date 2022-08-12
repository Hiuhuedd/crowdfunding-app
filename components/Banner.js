import Image from 'next/image'
import { useContext, useEffect,useState } from 'react'
import { MediumContext } from '../context/MediumContext'
import Logo from './../static/banner.png'
import BackgroundAnimation from './backgroundAnimation'
const styles = {
  wrapper: `h-max-[10rem] flex items-center justify-center  bg-neutral-600 bg-red-700 px-8`,
  content: `max-w-7xl grid grid-cols-2 items-center justify-around`,
  accentedButton: `bg-black text-sm font-poppins shadow-xl text-white py-2 px-4 rounded-md hover:text-red-700 transition-all `,
}

const Banner = () => {
  const { user, handleUserAuth } = useContext(MediumContext)
  const [Loading, setLoading] = useState(false)
  const handleSetUserAuth=()=>{
    handleUserAuth()
    setLoading(true)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 px-5  '>
     
          <h1 className=' text-[4rem] text-stone-100 font-poppins '>
            Let us
            <br/>
            Build together
          </h1>
          <h3 className='text-2xl  font-roboto'>
            Discover revolutionary projects in engineering and technology that you could be part of.
          </h3>
          {user ? (
            <button className={styles.accentedButton}>
              Get unlimited access
            </button>
          ) : (
            <button onClick={()=> handleSetUserAuth()} className={styles.accentedButton}>
            {Loading?"please wait...": " Start Reading"}
            </button>
          )}
          </div>
          <div  className='w-[30rem]  '>
        <BackgroundAnimation/>
          </div>
      </div>
    </div>
  )
}

export default Banner
