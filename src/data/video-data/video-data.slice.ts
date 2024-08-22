import {video_data, Video_data} from "@/data/video-data/video-data"
import {createSlice} from "@reduxjs/toolkit"

const initialState: VideoState = {
  videos: video_data
}

const videosSlice = createSlice ({
  initialState,
  name: 'videos',
  reducers: {
    filterVideos(state) {
      alert('filterVideos')
    }
  }
})

export const videoActions = videosSlice.actions
export const videoReducer = videosSlice.reducer

type VideoState = {
  videos: Array<Video_data>
}
