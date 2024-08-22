import {video_data, Video_data} from "@/data/video-data/video-data"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Category} from "@/common/types"

const initialState: VideoState = {
  videos: video_data,
  filtered_videos: video_data
}

const videosSlice = createSlice ({
  initialState,
  name: 'videos',
  reducers: {
    filterVideos(state, action: PayloadAction<Category>) {
      state.filtered_videos = state.videos.filter(value => value.category === action.payload)
    },
    allVideos(state) {
      state.filtered_videos = state.videos
    }
  },
  selectors: {
    videosSelector: state => state.filtered_videos
  }
})

export const videoActions = videosSlice.actions
export const videoReducer = videosSlice.reducer
export const { videosSelector } = videosSlice.selectors

type VideoState = {
  videos: Array<Video_data>
  filtered_videos: Array<Video_data>
}
