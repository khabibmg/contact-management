import { Link } from 'react-router'

export default function CreateContactCard() {
  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom overflow-hidden border-2 border-dashed border-gray-700 card-hover animate-fade-in">
      <Link to="/dashboard/contacts/create" className="block p-6 h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110">
            <i className="fas fa-user-plus text-3xl text-white" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-3">Create New Contact</h2>
          <p className="text-gray-300">Add a new contact to your list</p>
        </div>
      </Link>
    </div>
  )
}
