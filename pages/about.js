import styles from '../styles/About.module.css'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        {/* <title>About Codevolution</title> */}
        <meta name='description' content='Free tutorials on web development' />
      </Head>
      <div className={styles.highlight}>About</div>
    </>
  )
}

export default About