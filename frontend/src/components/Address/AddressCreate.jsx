import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { useEffectOnce, useLocalStorage } from 'react-use'
import { contactDetail } from '../../lib/api/ContactApi'
import { addressCreate } from '../../lib/api/AddressApi'
import { alertError, alertSucces } from '../../lib/alert'
import { Button, Input } from '../Ui'

export default function AddressCreate() {
  const { id } = useParams()
  const [token, _] = useLocalStorage('token', '')
  const [contact, setContact] = useState({})
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [country, setCountry] = useState('')
  const [postal_code, setPostalCode] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await addressCreate(token, id, { street, city, province, country, postal_code })
    const responseBody = await response.json()
    console.log(responseBody)

    if (response.status === 200) {
      await alertSucces('Address created succesfully')
      await navigate({
        pathname: `/dashboard/contacts/${id}`
      })
    } else {
      await alertError(responseBody.errors)
    }
  }

  async function fetchContacts() {
    const response = await contactDetail(token, id)
    const responseBody = await response.json()
    console.log(responseBody)

    if (response.status === 200) {
      setContact(responseBody.data)
      console.log(`ini ketika berhasil `, responseBody.data)
    } else {
      await alertError(responseBody.errors)
    }
  }

  useEffectOnce(() => {
    fetchContacts().then(() => console.log('Contact fetched succesfully'))
  })
  return (
    <>
      <div>
        <div className="flex items-center mb-6">
          <Link to={`/dashboard/contacts/${id}`} className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200">
            <i className="fas fa-arrow-left mr-2" /> Back to Contact Details
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-plus-circle text-blue-400 mr-3" /> Add New Address
          </h1>
        </div>
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            {/* Contact Information */}
            <div className="mb-6 pb-6 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-user text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{contact.first_name}</h2>
                  <p className="text-gray-300 text-sm">
                    {contact.first_name} • {contact.email} • {contact.phone}
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <Input label="Street" icon="fas fa-road" type="text" id="street" name="street" placeholder="Enter street address" value={street} onChange={(e) => setStreet(e.target.value)} required />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 ">
                <div>
                  <Input label="City" icon="fas fa-city" type="text" id="city" name="city" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
                <div>
                  <Input label="Province/State" icon="fas fa-map" type="text" id="province" name="province" placeholder="Enter province or state" value={province} onChange={(e) => setProvince(e.target.value)} required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 ">
                <div>
                  <Input label="Country" icon="fas fa-flag" type="text" id="country" name="country" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                </div>
                <div>
                  <Input label="Postal Code" icon="fas fa-mail-bulk" type="text" id="postal_code" name="postal_code" placeholder="Enter postal code" value={postal_code} onChange={(e) => setPostalCode(e.target.value)} required />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <Link to={`/dashboard/contacts/${id}`}>
                  <Button icon="fas fa-times" variant="gray" size="md1">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" variant="gradient" icon="fas fa-plus-circle" size="md1">
                  Add Address
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
