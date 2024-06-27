import {useExtractVideoID} from "../../../hooks/extractVideo"
import React from "react"
import VideoDetails from "@/components/video-details"
import video_data, {Video_data} from "@/data/video-data"
import VideoData from "@/components/video-details/video-data"
import {useGallery} from "../../../hooks/use-gallery"
import {DIR_NC47} from "@/common/ImageContexts"
import {ButtonGallery} from "@/common/ButtonGallery/ButtonGallery"


const Nc47 = () => {
  const videoNumber = +useExtractVideoID()
  const videoData: Video_data | undefined = video_data.find((item) => item.id === videoNumber )
  const youtubeID = videoData?.youtubeID
  console.log(DIR_NC47)
  const gallery1 = useGallery(DIR_NC47)

  return (
    <VideoDetails>
      <VideoData videoData={videoData} youtubeID={youtubeID} />
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={'Screenshots'}
      />
    </VideoDetails>
  )
}

export default Nc47

