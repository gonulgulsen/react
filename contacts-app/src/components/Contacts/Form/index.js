import {useState, useEffect} from 'react'
import Contacts from '..'

const initialFormValues = {fullname: "", phone_number: ""};

function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues)

// contacts değiştiğinde formun içini boşaltcak yani kayıt eklendiğinde
  useEffect(()=>{
    setForm(initialFormValues)
  },[contacts])


  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

// Bir HTML formunda bir butona tıklayınca veya Enter'a basınca,
// varsayılan olarak form sayfayı yeniler ve bilgileri gönderir.

// React/JavaScript ile kendi işlemini yapmak istediğinde bu otomatik davranışı istemezsin.
// İşte burada e.preventDefault() kullanırsın.



  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullname === "" || form.phone_number === ""){
        return false;
    }

    addContact([...contacts, form])
    
  }

  return (
    <form onSubmit={onSubmit}>
     <div>
       <input name="fullname" value={form.fullname} placeholder="Full Name" onChange={onChangeInput}/>
     </div>
     <div>
       <input name="phone_number" value={form.phone_number} placeholder="Phone Number" onChange={onChangeInput}/>
     </div>

     <div className='btn'>
        <button>Add</button>
     </div>
    </form>
  )
}

export default Form
