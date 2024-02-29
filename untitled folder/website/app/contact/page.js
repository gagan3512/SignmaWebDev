import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
        <Script>
            {`alert("Welcome to contact page");`}
        </Script>
      Contact
    </div>
  )
}

export default contact

export const metadata = {
    title: 'Contact - facebook.com connect with the world',
    description: 'This is a page where you can contact facebook and we can connect with the world using facebook',
}
