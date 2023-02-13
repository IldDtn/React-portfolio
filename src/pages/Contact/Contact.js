import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: '3722bfae-a9b8-4b93-9788-5bbfa4a90d90'
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const json = JSON.stringify(formData);


    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1 id='contactMe'> Contact Me</h1>
      <p> {formData.email}</p>

      <form onSubmit={handleSubmit}>
        <input name='name' onChange={handleChange} type='text' placeholder="Enter your name" />
        <input name='email' onChange={handleChange} type='text' placeholder="Enter your email address" />
        <textarea name='message' onChange={handleChange} placeholder="Enter your message" cols='30' rows='10'> </textarea>
        <button id='submit'> Submit </button>
      </form>



    </>
  );
}

export default Contact;