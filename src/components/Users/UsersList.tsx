
interface UserListProps {
  users: any[],
}

export default function UsersList({ users }: UserListProps) {
  return (
    <ul>
      {
        users.length > 0 &&
        users.map((user) => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })
      
      }
    </ul>
  )
}