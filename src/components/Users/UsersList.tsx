import AddMemberButton from "./AddMemberButton"

interface UserListProps {
  users: any[],
  workspaceId: string
}

export default function UsersList({ users, workspaceId }: UserListProps) {
  return (
    <ul>
      {
        users.length > 0 &&
        users.map((user) => {
          return (
            <li className="flex justify-between" key={user.id}>
              {user.name}
              <AddMemberButton workspaceId={workspaceId} userId={user.id}/>
            </li>
          )
        })
      
      }
    </ul>
  )
}