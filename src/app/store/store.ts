import { configureStore } from '@reduxjs/toolkit'
import {videoReducer} from "@/data/video-data/video-data.slice"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {girlsReducer} from "@/data/girls_data/girls-data.slice"
import {competitionsReducer} from "@/data/competitions/competitions.slice"

export const store = configureStore({
    reducer: {
      videos: videoReducer,
      girls: girlsReducer,
      competitions: competitionsReducer,
    },
  })


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
