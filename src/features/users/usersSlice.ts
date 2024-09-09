import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import type { User, UsersState } from "../../types"

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  // Checking if the response is ok (2xx status code),
  // because fetch doesnt throw by default
  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }
  return response.json() as Promise<User[]>
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState["filters"]
        value: string
      }>,
    ) => {
      state.filters[action.payload.field] = action.payload.value
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch users"
      })
  },
})

export const { setFilter } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users.users
export const selectUserStatus = (state: RootState) => state.users.status
export const selectUserError = (state: RootState) => state.users.error
export const selectFilters = (state: RootState) => state.users.filters

export default usersSlice.reducer
