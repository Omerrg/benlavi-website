'use client'
import React, { useState, useEffect } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import axios from 'axios';
import styles from './chosenEpisodes.module.css';
import LinesEllipsis from 'react-lines-ellipsis';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, DialogContent, IconButton, } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';import { Alef } from 'next/font/google'
import classNames from 'classnames';

const alef = Alef({ weight: '400', subsets: ['hebrew'] })

const YOUTUBE_KEY = 'AIzaSyBAO0RfEQ8olFB2PIxCdzP0bno71qusyOg';

function parseISO8601Duration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = (parseInt(match[1]) || 0);
  const minutes = (parseInt(match[2]) || 0);
  const seconds = (parseInt(match[3]) || 0);

  return { hours, minutes, seconds };
}

const YouTubeCard = ({ videoId }) => {
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    length: '',
    thumbnail: '',
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_KEY}&part=snippet,contentDetails`
      );
      const videoDetails = response.data.items[0];
      const duration = videoDetails.contentDetails.duration;

      setVideoData({
        title: videoDetails.snippet.title,
        description: videoDetails.snippet.description,
        length: parseISO8601Duration(duration),
        thumbnail: videoDetails.snippet.thumbnails.maxres.url,
      });
    };

    fetchVideoData();
  }, [videoId]);
  return (
    <>
    <Card sx={{maxWidth: 250, fontFamily: 'inherit '}} elevation={0} onClick={() => handleClickOpen()} >
      <CardActionArea>
        <CardMedia
        component="img"
        height="140"
        image={videoData.thumbnail}
        />
        <div className={classNames(styles.cardContent, alef.className)}>
          <span className={styles.cardTitle}>
          {videoData.title}
          </span>
          <LinesEllipsis
              text={videoData.description}
              maxLine={15}
              ellipsis="..."
              trimRight
              basedOn='words'
            />
            <span className={styles.end}>
              {videoData.length.hours > 1 ? `${videoData.length.hours} שעות` : 'שעה'},
              {videoData.length.minutes > 1 ? `${videoData.length.minutes} דקות` : 'דקה'}
                <PlayCircle />
            </span>
        </div>
      </CardActionArea>
    </Card>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent style={{ position: 'relative' }}>
        <LiteYouTubeEmbed id={videoId} title={videoData.title} style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}/>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default YouTubeCard;
