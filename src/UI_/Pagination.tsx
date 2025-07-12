export default function Pagination() {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <button
          key={n}
          className="px-3 py-1 border rounded hover:bg-blue-100 text-sm"
        >
          {n}
        </button>
      ))}
    </div>
  );
}
