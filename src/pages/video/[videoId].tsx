import {useRouter} from 'next/router'
import {video_data, Video_data, video_data_blank} from "@/data/video-data"
import VideoDetails from "@/components/video-details"
import VideoData from "@/components/video-details/video-data/video-data"
import React from "react"

function VideoComponent() {
  const router = useRouter();
  const { videoId } = router.query;

  const videoData: Video_data = videoId ? video_data[Number((videoId as string).substring(2))] : video_data_blank
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

  return {
    paths,
    fallback: false
    // If the page with the videoId is not found, returns 404 page
  };
};

export async function getStaticProps({ params }: Params) {
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

type Params = {
  params: {
    videoId: string;
  };
};

export default VideoComponent