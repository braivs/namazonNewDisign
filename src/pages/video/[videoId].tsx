import {useRouter} from 'next/router'
import {video_data, Video_data} from "@/data/video-data"
import VideoDetails from "@/components/video-details"
import VideoData from "@/components/video-details/video-data"
import React from "react"

function VideoComponent({ Video }) {
  const router = useRouter();
  const { videoId } = router.query;

  const videoData: Video_data | undefined = video_data[Number(videoId.substring(2))];
  const youtubeID = videoData?.youtubeID

  return (
    <VideoDetails>
      <VideoData videoData={videoData} youtubeID={youtubeID} />
    </VideoDetails>
  )
}

export const getStaticPaths = async () => {
  const paths = Object.keys(video_data).map(id => ({
    params: { videoId: 'nc' + id }
  }));

  const staticPaths = [
    { params: { videoId: 'nc51' } },
    { params: { videoId: 'nc48' } },
    { params: { videoId: 'nc47' } },
    { params: { videoId: 'nc46' } }
  ]

  return {
    paths,
    fallback: false
    // If the page with the videoId is not found, returns 404 page
  };
};

export async function getStaticProps({ params }) {
  const { videoId } = params;

  const Video = {
    id: videoId,
  };

  return {
    props: {
      Video,
    },
  };
}

export default VideoComponent