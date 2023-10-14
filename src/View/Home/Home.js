import React,{useState} from 'react';
import './Home.css';
import ContactCard from '../../Component/ContactCard/ContactCard';

export default function Home() {
     
    const [contacts , setSontacts] = useState([
        {
            name:'Anjali Tikkal',
            mobile: '9158689272',
            email:'anjalitikkal@gmail.com'
        },
        {
            name:'Rutuja Gaikwad',
        mobile: '9158569290',
        email:'gaikwadrutu@gmail.com'
        },
        {
            name:'Sakshi Bodakhe',
            mobile: '9023601272',
            email:'sakshi83@gmail.com'
        },
        {
            name:'Pallavi Kale',
            mobile: '9158608934',
            email:'kalepallavi@gmail.com'
        },
        {
            name:'Swara Gaikwad',
            mobile: '9122608934',
            email:'gaikwadswara@gmail.com'
        },
        {
            name:'Mrunal Jadhav',
            mobile: '9150108934',
            email:'mrunaljadhav@gmail.com'
        }
    ]);


  return (
   <>
   <h1 className='app-title'>📞Contact App</h1>

   <div className='app-body'>

    <div className='contact-container'>
    <h2 className='sub-heading'>Show contacts</h2>
    {
        contacts.map((contacts,index)=>{
           return(
            <>
            <ContactCard key={index} 
            name={contacts.name} 
            mobile={contacts.mobile} 
            email={contacts.email} />
            </>
           )
        })
    }
    </div>

    <div  className='add-contact-container'>
    <h2 className='sub-heading'>Hide Contacts</h2>
    </div>
   </div>
   
   
   </>
  )
}