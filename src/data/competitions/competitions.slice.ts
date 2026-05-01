import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  competitions_data,
  type CompetitionsVariant,
} from '@/data/competitions/competitions-data'

const initialState: CompetitionsState = {
  competitions: competitions_data,
  filtered_competitions: competitions_data,
  selectedVariant: 'all',
}

const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    setCompetitionsVariant(state, action: PayloadAction<CompetitionsVariant>) {
      const v = action.payload
      state.selectedVariant = v
      if (v === 'all') {
        state.filtered_competitions = state.competitions
      } else {
        state.filtered_competitions = state.competitions.filter((c) => c.period === v)
      }
    },
  },
  selectors: {
    competitionsFilteredSelector: (state) => state.filtered_competitions,
    competitionsVariantSelector: (state) => state.selectedVariant,
  },
})

export const competitionsActions = competitionsSlice.actions
export const competitionsReducer = competitionsSlice.reducer
export const {competitionsFilteredSelector, competitionsVariantSelector} =
  competitionsSlice.selectors

type CompetitionsState = {
  competitions: typeof competitions_data
  filtered_competitions: typeof competitions_data
  selectedVariant: CompetitionsVariant
}
