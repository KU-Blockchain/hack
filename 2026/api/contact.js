const JSON_HEADERS = { 'Content-Type': 'application/json' }

function send(res, statusCode, body) {
  res.writeHead(statusCode, JSON_HEADERS)
  res.end(typeof body === 'string' ? body : JSON.stringify(body))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    send(res, 405, { error: 'Method not allowed' })
    return
  }

  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EMAILJS_PRIVATE_KEY

    if (!serviceId || !templateId || !publicKey) {
      send(res, 500, { error: 'Email configuration is missing. Please check environment variables.' })
      return
    }

    const payload = typeof req.body === 'object' && req.body !== null
      ? req.body
      : await readJsonBody(req)

    const { user_name, email, company, message } = payload
    // Format the time to be in the format of MM/DD/YYYY HH:MM:SS
    const time = new Date().toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })

    if (!user_name?.trim() || !email?.trim() || !company?.trim() || !message?.trim()) {
      send(res, 400, { error: 'Name, email, company, and message are required' })
      return
    }

    const emailJsBody = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: { user_name, email, company, message, time },
      accessToken: privateKey,
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailJsBody),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('EmailJS error:', response.status, text)
      send(res, 502, { error: 'Failed to send email' })
      return
    }

    send(res, 200, { success: true, message: 'Message received' })
  } catch (err) {
    console.error('Contact API error:', err)
    send(res, 500, { error: 'Failed to process request' })
  }
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => { body += chunk })
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch (e) {
        reject(e)
      }
    })
    req.on('error', reject)
  })
}
