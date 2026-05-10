export const StatusBadge = ({ status }: { status: string }) => {
  const colors: unknown = {
    Active: "bg-green-100 text-green-700 border-green-200",
    Expired: "bg-red-100 text-red-700 border-red-200",
    Suspended: "bg-amber-100 text-amber-700 border-amber-200",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
};