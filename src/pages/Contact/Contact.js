function Contact () {
  const handleSubmit = (event) => {
     event.preventDefault();
     console.log('submitted');
  };
    return (
        <>
          <h1 id='contactMe'> Contact Me</h1>

          <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Enter your name" />
            <input type='text' placeholder="Enter your email address" />
            <textarea placeholder="Enter your message" cols='30' rows='10'> </textarea>
            <button id='submit'> Submit </button>
          </form>
        
        
        
        </>
    );
}

export default Contact;