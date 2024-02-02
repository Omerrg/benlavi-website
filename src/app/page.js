import styles from './page.module.css'
import Header from './Header'
import LandingImage from '@/app/LandingImage'
import ProfileDescription from '@/app/ProfileDescription'
import Interview from '@/app/Interview'
import ChosenEpisodes from '@/app/ChosenEpisodes'
import ContactUs from '@/app/ContactUs'
import Footer from '@/app/Footer'


export default function Home() {
  return (<>
    <main className={styles.main}>
      <Header/>
      <div className={styles.content}>
        <LandingImage />
        <ProfileDescription />
        <Interview />
        <ChosenEpisodes />
        <ContactUs />
        <Footer />
      </div>
    </main>
  </>
  )
}
