'use client'
import React from "react";
import styles from './interview.module.css';
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Interview = () => (
  <div className={styles.interview} id="interview">
          <h3>כתבה על הפודקאסט</h3>
          <LiteYouTubeEmbed aspectHeight={9}
            aspectWidth={16}
            id="i7_qypmoMZY"
            title="כתבה על הפודקאסט" />
        </div>
);

export default Interview;
