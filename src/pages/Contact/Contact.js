import {useState} from 'react'

function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:''
  })

  const handleChange = (event) => {
      setFormData({
         ...formData,
         [event.target.name]: event.target.value
      });
  }

  const handleSubmit = (event) => {
     event.preventDefault();
     console.log('submitted');
  };
    return (
        <>
          <h1 id='contactMe'> Contact Me</h1>
          <p> {formData.email}</p>

          <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} type='text' placeholder="Enter your name" />
            <input name='email' onChange={handleChange} type='text' placeholder="Enter your email address" />
            <textarea name='message'onChange={handleChange} placeholder="Enter your message" cols='30' rows='10'> </textarea>
            <button id='submit'> Submit </button>
          </form>
        
        
        
        </>
    );
}

export default Contact;