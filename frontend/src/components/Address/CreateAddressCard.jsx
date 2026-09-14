import { Link } from 'react-router'

export default function CreateAddressCard({ contactId }) {
  return (
    <div className="bg-gray-700 bg-opacity-50 p-5 rounded-lg border-2 border-dashed border-gray-600 shadow-md card-hover">
      <Link to={`/dashboard/contacts/${contactId}/addresses/create`} className="block h-full">
        <div className="flex flex-col items-center justify-center h-full text-center py-4">
          <div className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 hover:scale-110">
            <i className="fas fa-plus text-2xl text-white" />
          </div>
          <h4 className="text-lg font-semibold text-white">Add Address</h4>
        </div>
      </Link>
    </div>
  )
}
