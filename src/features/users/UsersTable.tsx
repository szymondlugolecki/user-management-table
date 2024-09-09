import { useEffect } from "react"
import type React from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  fetchUsers,
  selectUsers,
  selectUserStatus,
  selectUserError,
  selectFilters,
  setFilter,
} from "./usersSlice"

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  const status = useAppSelector(selectUserStatus)
  const error = useAppSelector(selectUserError)
  const filters = useAppSelector(selectFilters)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    dispatch(setFilter({ field, value }))
  }

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase()),
  )

  if (status === "loading") {
    return <div className="text-center py-4">Loading...</div>
  }

  if (status === "failed") {
    return <div className="text-center py-4 text-red-600">Error: {error}</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Filter by name"
          value={filters.name}
          onChange={e => handleFilterChange("name", e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Filter by username"
          value={filters.username}
          onChange={e => handleFilterChange("username", e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Filter by email"
          value={filters.email}
          onChange={e => handleFilterChange("email", e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Filter by phone"
          value={filters.phone}
          onChange={e => handleFilterChange("phone", e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable
