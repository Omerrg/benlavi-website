import React from "react";
import styles from './profileDescription.module.css';
import Image from "next/image";

const ProfileDescription = () => (
  <div className={styles.profileDescription} id="about">
    <Image src='/benProfile.png' width={364} height={364} />
    <p>היי, אני בן. <br />
      אחד החלומות הכי גדולים שהיו לי הוא ללמוד מהטובים ביותר.<br />
      בגיל 21 מישהו ניצל את זה והכניס אותי לתרמית פירמידה.<br />
      קצת באשמת התמימות שלי, הרבה באשמת מישהו שניצל את זה שלא באמת הייתה לי גישה לאיך דברים אמורים להתנהל באמת.<br />
      בשנתיים האחרונות הפכתי את הסקרנות שלי למקצוע ובכל שבוע אני מביא תותח אחר לשיחת עומק.<br />
      עשיתי את הכל כדי שהחומרים שמעניינים אותי ואתכם יהיו בחוץ, בלי פילטרים, בחינם.<br />
      יש פה קילומטראז' לא קטן של פרקים, ואני מבטיח לכם שיש עוד הרבה הפתעות בדרך :)
    </p>
  </div>
);

export default ProfileDescription;
