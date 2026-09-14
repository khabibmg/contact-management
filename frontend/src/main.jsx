import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router'
import Layout from './components/Layout'

import DashboardLayout from './components/DashboarLayout'
import ProtectedRoute from './components/ProtectedRoute'
import { AddressCreate, AddressEdit, ContactCreate, ContactDetail, ContactEdit, ContactList, UserLogin, UserLogout, UserProfile, UserRegister } from './components'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard/contacts" replace />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="users">
              <Route path="profile" element={<UserProfile />} />
              <Route path="logout" element={<UserLogout />} />
            </Route>
            <Route path="contacts">
              <Route index element={<ContactList />} />
              <Route path="create" element={<ContactCreate />} />
              <Route path=":id">
                <Route index element={<ContactDetail />} />
                <Route path="edit" element={<ContactEdit />} />
                <Route path="addresses">
                  <Route path="create" element={<AddressCreate />} />
                  <Route path=":addressId/edit" element={<AddressEdit />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
