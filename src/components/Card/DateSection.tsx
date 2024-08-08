

export default function DateSection({ dueDate }: { dueDate: Date | null }) {
  const isOverdue = dueDate ? new Date(dueDate) < new Date() : false;
  
  const daysLeft = dueDate
    ? Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000))
    : null;
  
  const isDueSoon = daysLeft !== null && daysLeft < 2 && daysLeft >= 0;

  return (
    <div>
      {dueDate && (
        <p
          className={`mt-2 ${
            isOverdue
              ? 'text-red-600'
              : isDueSoon
              ? 'text-yellow-500'
              : 'text-gray-500'
          }`}
        >
          {isOverdue
            ? `The date is over.`
            : isDueSoon
            ? `The date expires in ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'}.`
            : `Due in ${daysLeft} days.`}
          <br />
          Due: {new Date(dueDate).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}