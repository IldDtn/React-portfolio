import { useState } from 'react'

function Contact() {
  const [success, setSuccess] = useState(false);
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

    const data = JSON.stringify(formData);


    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: '',
          email: '',
          message: ''
        })

        setTimeout(() => {
          setSuccess(false);

        }, 3000)
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1 id='contactMe'> Contact Me</h1>
      

      <form onSubmit={handleSubmit}>
        <input
          name='name'
          value={formData.name}
          onChange={handleChange}
          type='text'
          placeholder="Enter your name"
        />
        <input
          name='email'
          value={formData.email}
          onChange={handleChange}
          type='text'
          placeholder="Enter your email address"
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          cols='30'
          rows='10'>
        </textarea>
        <button id='submit'> Submit </button>
      </form>

     {success && <p id='success'> Form submitted successfully </p> }



    </>
  );
}

export default Contact;