import React from 'react'
import './ContactCard.css'


export default function ContactCard({name,mobile,email}) {
  return (
    <div className='contact-card'>
    <p className='contact-name '>Name : {name}</p>
    <p className='contact-mobile '>Cntact : {mobile}</p>
    <p className='contact-email '>Email : {email}</p>
</div>
  )
}

