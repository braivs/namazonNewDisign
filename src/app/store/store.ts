import { configureStore } from '@reduxjs/toolkit'
import {videoReducer} from "@/data/video-data/video-data.slice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: videoReducer,
    },
  })
}

type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

