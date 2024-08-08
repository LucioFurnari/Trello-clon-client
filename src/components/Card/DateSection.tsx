

export default function DateSection({ dueDate }: { dueDate: Date | null}) {
  const isOverdue = dueDate ? new Date(dueDate) < new Date() : false;
  const isDueSoon = dueDate
    ? new Date(dueDate).getTime() - new Date().getTime() < 2 * 24 * 60 * 60 * 1000
    : false; // 2 days before due

  return (
    <div>
      {dueDate && (
          <p className={`mt-2  ${isOverdue ? 'text-red-600': 'text-gray-500'} ${isDueSoon ? 'text-yellow-500' : 'text-gray-500'}`}>
            {isDueSoon && '2 days before due date'}
            {isOverdue && 'The date is over'}
            Due: {new Date(dueDate).toLocaleDateString()}
          </p>
      )}
    </div>
  )
}