import { useState } from "react";
//onChange: input a her değişiklik olduğunda çağrılır.

function InputExample(){
    // const [name, setName] = useState("Gönül");
    // const [surname, setSurname] = useState("Kurt");


    // const onChangeSurname = (event) => setSurname(event.target.value);


    //Tek State olarak yazalım
    
    const [form, setForm] = useState({name: "", surname: ""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    
    return(
        <div>
         {/* Please enter a name 
         <br/>
         <input value={name} onChange={(event) => setName(event.target.value)}/>
         <br/>
         <br/>
          Please enter a Surname 
         <br/>
         <input value={surname} onChange={onChangeSurname}/>
         <br/>
         <br/>
         <br/>
         {name} {surname} */}


                  Please enter a name 
         <br/>
         <input name="name" value={form.name} onChange={onChangeInput}/>
         <br/>
         <br/>
          Please enter a Surname 
         <br/>
         <input name="surname" value={form.surname} onChange={onChangeInput}/>
         <br/>
         <br/>
         <br/>
         {form.name} {form.surname}
        </div>
    )
}

export default InputExample;