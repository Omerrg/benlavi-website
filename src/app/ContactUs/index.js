import React from 'react';
import styles from './contactUs.module.css'

const contactDetials = [
  {
    title: "תפיקו לי פודקאסט",
    description: <>בניתי בהרצליה את אולפן הפודקאסטים האיכותי בישראל.<br /><br/>אנחנו מפיקים תכניות ללמעלה מעשרים יזמים וחברות, ויודעים להשאיר לך את החלק הכייפי של לפתוח מיקרופון עם אנשים מעניינים מבלי להתעסק בלוגיסטיקות, עריכות, ואופרציה.<br/> <br/> אה, וזה משרת מטרות עסקיות פגז.</>,
    cta: "לקביעת פגישה"
  },
  {
    title: "אני רוצה להיות אורח בפודקאסט.",
    description: <>חושב שיש לך סיפור פגז שאנשים יפיקו ממנו ערך פרקטי?<br /><br/>מוכן לחשוף אותו ולדבר פתוח מול עשרים אלף איש?<br /><br/>אני אשמח שנבדוק את זה ביחד.</>,
    cta: "למילוי טופס התאמה"
  }, 
  {
    title: "פרסום בפודקאסט",
    description: <>לפודקאסט יש עשרות אלפי מאזינים, קהילת וואטסאפ אדוקה, ולמעלה ממיליון חשיפות בסושיאל.<br /><br/> קהל היעד בגילאי 17-30, מתעניין בהתפתחות אישית, עסקים, שיווק, יזמות, ואפילו בעולמות כמו העולם הרוחני או מיניות.<br /><br/> גילוי נאות, לא הכל יהיה רלוונטי, אבל אם יש לכם שירות/מוצר פגז שיכול להעניק להם ערך, אני אשמח שנדבר על זה.</>,
    cta: "לקביעת פגישה"
}
]

const ContactCard = ({title, description, cta, color}) => (
  <span className={color ? styles.reverseCard : styles.card}>
    <h1>{title}</h1>
    <p>{description}</p>
    <button>{cta}</button>
  </span>
)

const ContactUs = () => (
  <div className={styles.cards} id="contact">
    {contactDetials.reverse().map((details, index) => <ContactCard {...details} color={index % 2 !== 0}/>)}
  </div>
)

export default ContactUs;
