import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './lib/queryClient'
import GuestList from './components/GuestList'
import AddGuestForm from './components/AddGuestForm'
import GuestDetail from './components/GuestDetail'
import Layout from './components/Layout'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/guests" element={<GuestList />} />
            <Route path="/guests/new" element={<AddGuestForm />} />
            <Route path="/guests/:id" element={<GuestDetail />} />
            <Route path="/" element={<GuestList />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </Layout>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App