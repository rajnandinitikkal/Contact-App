import React,{useState , useEffect} from 'react';
import './Home.css';
import ContactCard from '../../Component/ContactCard/ContactCard';
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
    const [editIndex , setEditIndex] = useState('-1')
    const [isEditMode , setIsEditMode] = useState(false)
    
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

       const newContacts = [...contacts,obj];
       setContacts([newContacts]);
       saveToLocalStorage(newContacts);

       showToast('Contact Added Sucessfully','success',3000)

       setName('');
       setEmail('');
       setMobile('');
    };

    const deleteContact = (mobileNumber)=>{
        let indexToDelete = -1;

        contacts.forEach((contactDetail,index) =>{
            if(contactDetail.mobile === mobileNumber){
                indexToDelete = index;
            }
        })

        contacts.splice(indexToDelete,1);

        saveToLocalStorage(contacts);

        setContacts([...contacts])

        showToast('Contact Deleted Sucessfully','success',3000)
    }

    const saveToLocalStorage = (contactsData) => {
        localStorage.setItem('contacts',JSON.stringify(contactsData))
    }

    const loadFromLocalStorage = () =>{
        const contactsData = JSON.parse(localStorage.getItem('contacts'));

        if(contactsData){
            setContacts(contactsData);
        }
    }

    const enableEditMode = (index)=>{
       const contactsData = contacts[index];

       setName(contactsData.name);
       setEmail(contactsData.email);
       setMobile(contactsData.mobile);

       setEditIndex(index);
       setIsEditMode(true);
    }

    const editContact = ()=>{
       const obj = {
        name : name,
        email : email,
        mobile : mobile
       }

       contacts[editIndex] = obj;
        
       setContacts([...contacts]);

       saveToLocalStorage(contacts);

       showToast('Contact edited successfully','success',3000)

       setName('');
       setEmail('');
       setMobile('');

       setIsEditMode(false);
    }

    useEffect(()=>{
        loadFromLocalStorage()
    })
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
            email={contacts.email}
            deleteContact={deleteContact}
            enableEditMode={enableEditMode}
            index={index}/>
            </>
           )
        })
    }
    </div>

    <div  className='add-contact-container'>
    <h2 className='sub-heading'>
        { isEditMode ? 'Edit Contact' : 'Add Contact'}</h2>
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

        <button type="button" className='btn-add-contacts' onClick={()=>{
            isEditMode ? editContact():addContacts()
        }
        }> { isEditMode ? 'Edit Contact' : 'Add Contact'}</button>
    </form>
    </div>
   </div>
   
   
   </>
  )
}