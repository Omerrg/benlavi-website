import React from 'react';
import YouTubeCard from '@/app/ChosenEpisodes/YoutubeCard';
import styles from './chosenEpisodes.module.css';

const chosenEpisodes = ['pnsifaXNCcA', 'AtjXkxzMySU', 'fCQFEMiyi7U']

const ChosenEpisodes = () => (
  <span className={styles.chosenEpisodes} id="episodes">
    <h4>פרקים נבחרים</h4>
    <span className={styles.episodes}>{chosenEpisodes.map(youtubeId => <YouTubeCard videoId={youtubeId} />)}</span>
  </span>
)

export default ChosenEpisodes;
