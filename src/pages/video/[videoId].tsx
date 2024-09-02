import {useRouter} from 'next/router'
import {video_data, Video_data, video_data_blank} from "@/data/video-data/video-data"
import ElementDetails from "@/common/element-details/element-details"
import VideoData from "@/components/video-details/video-data/video-data"
import React from "react"
import {formatNumber, unformatNumberStr} from "@/common/helpers"

function VideoComponent() {
  const router = useRouter()
  const {videoId} = router.query

  const unformattedVideoId = videoId ? unformatNumberStr(videoId as string) : undefined;

  const videoData: Video_data | undefined = unformattedVideoId ? video_data.find((item) => item.id === Number(unformattedVideoId?.substring(2))) : video_data_blank
  const youtubeID = videoData?.youtubeID
  const youtubeID2 = videoData?.youtubeID2


  return (
    <ElementDetails variant={'video'}>
      <VideoData videoData={videoData} youtubeID={youtubeID} youtubeID2={youtubeID2}/>
    </ElementDetails>
  )
}

export const getStaticPaths = async () => {
  const paths = video_data.map(video => ({
    params: {videoId: 'nc' + formatNumber(video.id).toString()}
  }))

  return {
    paths,
    fallback: false
    // If the page with the videoId is not found, returns 404 page
  }
}

export async function getStaticProps({params}: Params) {
  const {videoId} = params
  
  const Video = {
    id: videoId,
  }

  return {
    props: {
      Video,
    },
  }
}

type Params = {
  params: {
    videoId: string;
  };
};

export default VideoComponent