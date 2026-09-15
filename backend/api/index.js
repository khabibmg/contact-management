import { web } from '../src/application/web.js'

export default function handler(req, res) {
  // Tangani preflight OPTIONS secara langsung untuk mencegah Vercel redirect / blokir CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    return res.status(200).end()
  }

  return web(req, res)
}
