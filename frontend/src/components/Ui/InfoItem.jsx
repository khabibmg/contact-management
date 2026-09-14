export default function InfoItem({ label, value, icon }) {
  return (
    <div className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70">
      <div className="flex items-center mb-2 ">
        <i className={`${icon} text-blue-400 mr-2`} />
        <h3 className="text-gray-300 text-sm font-medium">{label}</h3>
      </div>
      <p className="text-white text-lg ml-6">{value || '-'}</p>
    </div>
  )
}
