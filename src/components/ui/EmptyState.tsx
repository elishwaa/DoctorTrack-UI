export const EmptyState = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg bg-gray-50">
    <p className="text-gray-500">{message}</p>
  </div>
);