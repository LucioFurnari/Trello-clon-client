
export default function AccessDenied() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-gray-200 text-6xl my-2">Access denied, this workspace is private</h1>
      <p className="text-gray-200 text-2xl text-center">You are not allowed to access this workspace, you must be a member of it</p>
    </div>
  )
}