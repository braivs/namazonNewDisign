import {video_data, Video_data} from "@/data/video-data/video-data"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Category} from "@/common/types"

const initialState: VideoState = {
  videos: video_data,
  filtered_videos: video_data,
  selected_category: 'ALL'
}

const videosSlice = createSlice ({
  initialState,
  name: 'videos',
  reducers: {
    filterVideos(state, action: PayloadAction<Category>) {
      state.filtered_videos = state.videos.filter(value => value.category === action.payload)
      state.selected_category = action.payload
    },
    allVideos(state) {
      state.filtered_videos = state.videos
      state.selected_category = 'ALL'
    }
  },
  selectors: {
    videosSelector: state => state.filtered_videos,
    selected_categorySelector: state => state.selected_category
  }
})

export const videoActions = videosSlice.actions
export const videoReducer = videosSlice.reducer
export const { videosSelector, selected_categorySelector } = videosSlice.selectors

type VideoState = {
  videos: Array<Video_data>
  filtered_videos: Array<Video_data>
  selected_category: Category
}
