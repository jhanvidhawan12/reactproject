import React, { useState } from 'react';
import ReactDom from 'react-dom';
import img1 from './images/img1.jpeg';
import './form.css';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (


    <form onSubmit={handleSubmit}>
      
      <center>
      <p><img alt='edu' src={img1}/></p>
      <fieldset>
        <h1 style={{color:"white"}}><u>Personal Details</u></h1>

        <label style={{color:"white"}}>First Name:<br></br>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange} />
          <br></br><br></br><br></br>
        </label>

        <label style={{color:"white"}}>Last Name:<br></br>
          <input
            type="text"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange} />
          <br></br><br></br><br></br>
        </label>

        <label style={{color:"white"}}>E-mail:<br></br>
          <input
            type="text"
            name="mail"
            value={inputs.mail || ""}
            onChange={handleChange} />
          <br></br><br></br><br></br>
        </label>

        <label style={{color:"white"}}>Age:<br></br>
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange} />
          <br></br><br></br><br></br>
        </label>

        <label style={{color:"white"}}>Contact:<br></br>
          <input
            type="number"
            name="contact"
            value={inputs.contact || ""}
            onChange={handleChange} />
          <br></br>
        </label>

        <h3 style={{color:"white"}}>Gender:</h3>
        <input type="radio" name="gender" value="male"></input>
        <label style={{color:"white"}} for="gender">Male</label>

        <input type="radio" name="gender" value="female"></input>
        <label style={{color:"white"}} for="gender">Female</label>

        <input type="radio" name="gender" value="other"></input>
        <label style={{color:"white"}} for="gender">Other</label>
        </fieldset>

        <br></br><br></br><br></br>
        <fieldset>
        <h1 style={{color:"white"}}><u>Educational Details</u></h1>
        <h3 style={{color:"white"}}>Choose Your Course:</h3>
        <select>
          <option value="select">Select Course</option>
          <option value="cse">Computer Science Engineering</option>
          <option value="arch">Architecture Engineering</option>
          <option value="Mech">Mechanical Engineering</option>
          <option value="chem">Chemical Engineering</option>
          <option value="civil">Civil Engineering</option>
          <option value="elec">Electrical Engineering</option>
        </select>

        <br></br><br></br><br></br>

        <h3 style={{color:"white"}}>Qualifications:</h3>
        <input type="radio" value="10"></input>
        <label style={{color:"white"}} for="class">Class 10</label><br></br>

        <input type="radio" value="12"></input>
        <label style={{color:"white"}} for="class">Class 12</label><br></br>

        <input type="radio" value="diploma"></input>
        <label style={{color:"white"}} for="class">Any Other Diploma</label><br></br>

        <label style={{color:"white"}}>(Specify:)<br></br>
          <input
            type="text"
            name="specify"
            value={inputs.specify || ""}
            onChange={handleChange} />
          <br></br><br></br><br></br>
        </label>
        
        

        <h3 style={{color:"white"}}>Languages known::</h3>
        <input type="radio" value="c"></input>
        <label style={{color:"white"}} for="class">C</label><br></br>

        <input type="radio" value="r"></input>
        <label style={{color:"white"}} for="class">R</label><br></br>

        <input type="radio" value="c++"></input>
        <label style={{color:"white"}} for="class">C++</label><br></br>

        <input type="radio" value="javas"></input>
        <label style={{color:"white"}} for="class">Javascript</label><br></br>

        <input type="radio" value="python"></input>
        <label style={{color:"white"}} for="class">Python</label>

        <br></br><br></br><br></br><br></br>
        <input  class="button button1" type="submit" />
        </fieldset>
      </center>

    </form>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default MyForm;