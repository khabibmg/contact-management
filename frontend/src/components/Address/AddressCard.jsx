import { Link } from 'react-router'
import { Button } from '../Ui'

export default function AddressCard({ address, contactId, onDelete }) {
  return (
    <div className="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border">
      <div>
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
            <i className="fas fa-home text-white" />
          </div>
          <h4 className="text-lg font-semibold text-white">Home Address</h4>
        </div>
        <div className="space-y-3 text-gray-300 ml-2 mb-4">
          <p className="flex items-center">
            <i className="fas fa-road text-gray-500 w-6" />
            <span className="font-medium w-24">Street:</span>
            <span>{address.street}</span>
          </p>
          <p className="flex items-center">
            <i className="fas fa-city text-gray-500 w-6" />
            <span className="font-medium w-24">City:</span>
            <span>{address.city}</span>
          </p>
          <p className="flex items-center">
            <i className="fas fa-map text-gray-500 w-6" />
            <span className="font-medium w-24">Province:</span>
            <span>{address.province}</span>
          </p>
          <p className="flex items-center">
            <i className="fas fa-flag text-gray-500 w-6" />
            <span className="font-medium w-24">Country:</span>
            <span>{address.country}</span>
          </p>
          <p className="flex items-center">
            <i className="fas fa-mail-bulk text-gray-500 w-6" />
            <span className="font-medium w-24">Postal Code:</span>
            <span>{address.postal_code}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-end space-x-3">
        <Link to={`/dashboard/contacts/${contactId}/addresses/${address.id}/edit`}>
          <Button variant="gradient" icon="fas fa-edit" size="md">
            Edit
          </Button>
        </Link>
        <Button variant="danger" icon="fas fa-trash-alt" size="md" onClick={() => onDelete(address.id)}>
          Delete
        </Button>
      </div>
    </div>
  )
}
