import './App.css';
import { Formik } from 'formik'; 

function App() {
  return (
    <div className="App">
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: 'Gönül',
        lastName: 'Kurt',
        email: 'gk@gk.com',
        gender: 'male',
        hobies: [],
        country: 'Turkey'
      }}
      onSubmit={(values) =>{ console.log(values)}}
    >
      {
        ({handleSubmit, handleChange, values})=> (
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" value={values.firstName}  onChange={handleChange} placeholder="Jane" />
        {/* Burada initialValues daki değerin ismi ile name aynı olmalı */}
          <br/>
          <br/>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" value={values.lastName} onChange={handleChange} placeholder="Doe" />
        <br/>
        <br/>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <span>Male</span>
        <input type="radio" name="gender" value="male"  onChange={handleChange} placeholder="john"  checked={values.gender === "male"}/>
        <span>Female</span>
        <input type="radio" name="gender" value="female" onChange={handleChange} placeholder="Mary" checked={values.gender === "female"} />
         <br/>
         <br/>
        <div>
         <input type='checkbox' name='hobies' value="Football" onChange={handleChange}/>
         Football
        </div>
        <div>
        <input type='checkbox' name='hobies' value="Cinema" onChange={handleChange}/>
          Cinema
        </div>
        <div>
        <input type='checkbox' name='hobies' value="Photography" onChange={handleChange}/>
          Photography
        </div>

         <br/>
         <br/>

         <select name="country" value={values.country} onChange={handleChange}>
           <option value="turkey">Turkey</option>
           <option value="england">England</option>
           <option value="usa">USA</option>
         </select>

         <br/>
         <br/>

        <button type="submit">Submit</button>
          <br/>
          <br/>
        <code>{JSON.stringify(values)}</code>
      </form>
        )
      }

    </Formik>
    </div>
  );
}

export default App;
