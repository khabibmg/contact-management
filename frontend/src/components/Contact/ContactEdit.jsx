import { useState } from 'react'

import { Link, useParams } from 'react-router'
import { contactDetail, contactEdit } from '../../lib/api/ContactApi'
import { useEffectOnce, useLocalStorage } from 'react-use'
import { alertError, alertSucces } from '../../lib/alert'
import { Button, Input } from '../Ui'

export default function ContactEdit() {
  const { id } = useParams()
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [token, setToken] = useLocalStorage('token', '')

  async function fetchContacts() {
    const response = await contactDetail(token, id)
    const responseBody = await response.json()
    console.log(responseBody)

    if (response.status === 200) {
      setFirstName(responseBody.data.first_name)
      setLastName(responseBody.data.last_name)
      setEmail(responseBody.data.email)
      setPhone(responseBody.data.phone)
    } else {
      await alertError(responseBody.errors)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await contactEdit(token, { id, first_name, last_name, email, phone })
    const responseBody = await response.json()
    console.log(responseBody)

    if (response.status === 200) {
      await alertSucces('Contact updated succesfully')
    } else {
      await alertError(responseBody.errors)
    }
  }
  useEffectOnce(() => {
    fetchContacts().then(() => console.log('Contact detail fetched succesfully'))
  })
  return (
    <>
      <div>
        <div className="flex items-center mb-6">
          <Link to="/dashboard/contacts" className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
            <i className="fas fa-arrow-left mr-2" /> Back to Contacts
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-user-edit text-blue-400 mr-3" /> Edit Contact
          </h1>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <Input label="First Name" icon="fas fa-user-tag" type="text" id="first_name" name="first_name" placeholder="Enter first name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
                <Input label="Last Name" icon="fas fa-user-tag" type="text" id="last_name" name="last_name" placeholder="Enter last name" value={last_name} onChange={(e) => setLastName(e.target.valu)} required />
              </div>
              <Input label="Email" icon="fas fa-envelope" type="email" id="email" name="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />

              <div className="mb-6">
                <Input label="Phone" icon="fas fa-phone " type="tel" id="phone" name="phone" placeholder="Enter phone number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

              <div className="flex justify-end space-x-4">
                <Link to="/dashboard/contacts">
                  <Button type="submit" variant="gray" icon="fas fa-times" size="lg">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" size="md1" icon="fas fa-save" variant="gradient">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

{
  /* <div>
                  <label htmlFor="last_name" className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user-tag text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter last name"
                      required
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div> */
}

{
  /* <div className="mb-5">
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div> */
}

{
  /* <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-phone text-gray-500" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter phone number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div> */
}
{
  /* <button
                  type="submit"
                  className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center"
                >
                  <i className="fas fa-save mr-2" /> Save Changes
                </button> */
}
