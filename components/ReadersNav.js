import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'

const styles = {
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  logoContainer: `cursor-pointer`,
  iconsContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-md text-[#787878] `,
  divider: `border-b`,
  profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden grid place-items-center `,
  profileImage: `object-cover`,
}

const ReadersNav = ({user}) => {

  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <img src="/smallLogo.png" alt='medium small logo'   height={40}
            width={80} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome className='hover:text-red-700 transition-ease cursor-pointer' />
        <FiBell className='hover:text-red-700 transition-ease cursor-pointer'/>
        <BiBookmarks className='hover:text-red-700 transition-ease cursor-pointer'/>
        <RiArticleLine className='hover:text-red-700 transition-ease cursor-pointer'/>
        <div className={styles.divider} />
        <Link href={'/?addNew=1'}>
        <BsPencilSquare className='hover:text-red-700 transition-ease cursor-pointer'/>
         </Link>
      </div>
      <div className={styles.profileImageContainer}>
        <img
          className={styles.profileImage}
          // src={`https://res.cloudinary.com/demo/image/fetch/${user?.photoURL}`}
          src={user?.photoURL}
          alt='profile image icons'
          height={40}
          width={40}
        />
        {/* <h2 className='text-xs'>
        {user.displayName}
        </h2> */}
      </div>
    </div>
  )
}

export default ReadersNav
