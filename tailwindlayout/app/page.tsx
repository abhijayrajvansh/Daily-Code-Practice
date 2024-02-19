export default function page () {
  return (
    <div className="grid gap-4 m-4 sm:grid-cols-12">
      <div className="min-h-32 bg-red-500 shadow-xl rounded hidden sm:block sm:col-span-2"></div>
      <div className="min-h-32 bg-green-500 shadow-xl rounded sm:col-span-8"></div>
      <div className="min-h-32 bg-blue-500 shadow-xl rounded hidden sm:block sm:col-span-2"></div>
    </div>
  )
}