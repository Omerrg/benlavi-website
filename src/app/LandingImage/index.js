'use client'
import React from "react";
import styles from './landingImage.module.css';
import Image from "next/image";


const handleClick = (e, id) => {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block:'center' });
};

const LandingImage = () => (
  <div className={styles.fadedImage} id="main">
    <span className={styles.description}>
      <Image src='/hakolBigLogo.png' height={345} width={345} />
      <h1>הפודקאסט שבו נדבר על הכל</h1>
      <p>ברוכים הבאים להקול, הפודקאסט שבו נדבר על הכל. <br/>
        בכל שבוע אני מארח את המוחות הכי חריפים בישראל, ואני דואג שהם יספקו ידע מספיק פרקטי כדי <br/>
         להשאיר את האורות פה דולקים. שבו בנוח, שימו אוזניות, וצאו למסע הזה יחד איתי.<br/>
        בעצם, אל תשבו בנוח.לא טוב נוח. צאו להתאמן. <br/>
        יש פה כבר ספרייה ענקית שאתם יכולים לצלול אליה, ואני מבטיח שזאת <br/>
        רק הההתחלה :)
      </p>
      <button onClick={(e) => handleClick(e, 'episodes')}>הקשיבו עכשיו</button>
      <span className={styles.listen}>
      <img src='whiteRadio.svg' />
        <img src='whiteYoutube.svg' />
        
        <img src='whiteSpotify.svg' />
      </span>
    </span>
    <Image className={styles.benBg} src='/benBackground1.png' layout='fill' objectFit='cover' />
    <div className={styles.gradiantOverlay} />
  </div>
);

export default LandingImage;
