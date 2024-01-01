import React from 'react';
import './ContactCard.css';


export default function ContactCard({name,mobile,email,deleteContact,index,enableEditMode}) {
  return (
    <div className='contact-card'>
    <p className='contact-name '>Name : {name}</p>
    <p className='contact-mobile '>Contact : {mobile}</p>
    <p className='contact-email '>Email : {email}</p>
    <span className='delete-btn'
    onClick={() => {
      deleteContact(mobile)
    }}
    >🗑️</span>
     <span className='edit-btn'
    onClick={() => {
      enableEditMode(index)
    }}
    >🖋️</span>
</div>
  )
}

