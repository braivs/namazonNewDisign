import {useExtractVideoID} from "../../../hooks/extractVideo"
import React from "react"
import VideoDetails from "@/components/video-details"
import video_data, {Video_data} from "@/data/video-data"
import VideoData from "@/components/video-details/video-data"


const Nc48 = () => {
  const videoNumber = +useExtractVideoID()
  const videoData: Video_data | undefined = video_data.find((item) => item.id === videoNumber )
  const youtubeID = videoData?.youtubeID

  return (
    <VideoDetails>
      <VideoData videoData={videoData} youtubeID={youtubeID} />
    </VideoDetails>
  )
}

export default Nc48

