import React,{useState} from 'react';
import './Home.css';
import ContactCard from '../../Component/ContactCard/ContactCard';
// import showToast from 'crunchy-toast';//
import showToast from 'crunchy-toast';


export default function Home() {
     
    const [contacts , setContacts] = useState([
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
            name:'Swara Gaikwad',
            mobile: '9122608934',
            email:'gaikwadswara@gmail.com'
        },
    ]);
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [mobile , setMobile] = useState('')
    
    const addContacts = () => {
    if(!name){
        showToast('Please enter name','error',3000)
        return;
    }
    if(!email){
        showToast('please enter email','error',3000)
        return;
    }
    if(!mobile){
        showToast('Please enter mobile number','error',3000)
        return;
    }

        
       const obj = {
        name: name,
        email:email,
        mobile: mobile
       }
       setContacts([...contacts,obj]);

       setName('');
       setEmail('');
       setMobile('');
    }
    showToast('Contact Added Sucessfully','success',3000)
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
    <h2 className='sub-heading'>Add Contacts</h2>
    <form>
        <input type="text" placeholder='name' className='user-input' 
        onChange={(e)=>{
            setName(e.target.value);
        }}
        value={name}
        ></input>

        <input type="email" placeholder='Email' className='user-input' 
         onChange={(e)=>{
            setEmail(e.target.value);
        }}
        value={email}
        ></input>

        <input type="tel" placeholder='Contact' className='user-input' 
         onChange={(e)=>{
            setMobile(e.target.value);
        }}
        value={mobile}
        ></input>

        <button type="button" className='btn-add-contacts' onClick={addContacts}>Add Contact</button>
    </form>
    </div>
   </div>
   
   
   </>
  )
}