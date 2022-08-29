import Footer from '../components/Footer'
import styles from '../styles/Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.highlight}>Profile</div>
  )
}

export default Profile

Profile.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}