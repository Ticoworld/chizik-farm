import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const [email, setEmail] = useState('')
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  async function handleSubscribe(e) {
    e.preventDefault();
    const req = await fetch('http://localhost:1337/api/emails',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email})
    })
    const data = await req.json()
    console.log(data);
      if(data.status === 'ok') {
          Toast.fire({
              icon: 'success',
              title: 'Subscription succesfull'
          })
          setEmail(''); 
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Subscription Failed'
      })
      }
      
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_loyl4k9', 
      'template_6wm5cfg',
       form.current, {
        publicKey: 'gJyyxgcynyimy9mTj',
      })
      .then(
        () => {
          Toast.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
        })
          e.target.reset()
        },
        (error) => {
          Toast.fire({
            icon: 'success',
            title: `'FAILED...', ${error.text}`
        })
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="lg:px-28 px-10 bg-gray-300 py-10 dark:bg-gray-900" id='contact-us'>
      <div className="flex items-center gap-2 pb-3">
        <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500" />
        <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">CONTACT US</h4>
      </div>
      <div>
        <p className="dark:text-gray-200">
          Questions or ready to explore? Contact Chizik Farm for premium livestock and expert advice. Your farming success begins with us. Reach out now!
        </p>

        <div className="flex items-center gap-4 mt-6">
          <a href="#facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-blue-600" />
          </a>
          <a href="#twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-400" />
          </a>
          <a href="#instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-pink-600" />
          </a>
          <a href="#linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-800" />
          </a>
          <a href="mailto:info@chizikfarm.com">
            <FaEnvelope className="text-2xl text-gray-600 dark:text-red-500" />
          </a>
          <a href="#whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl text-green-500" />
          </a>
        </div>

        <div className="mt-8">
          <h4 className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">Subscribe to Our Newsletter</h4>
          <form onSubmit={handleSubscribe} className="flex items-center gap-4">
            <input type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="border p-2 w-48 dark:bg-gray-800 dark:border-gray-600" required />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Subscribe</button>
          </form>
        </div>
        <div className="mt-8">
          <h4 className="font-bold text-gray-800 dark:text-gray-300 text-xl mb-4">Send Us a Message</h4>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <textarea placeholder="Your message" name='message' rows="4" className="border p-2 dark:bg-gray-800 dark:border-gray-600" required/>
            <input type="text" placeholder="Your Name" name='user_name' className="border p-2 w-48 dark:bg-gray-800 dark:border-gray-600" required />
            <input type="email" placeholder="Your Email" name='user_email' className="border p-2 w-48 dark:bg-gray-800 dark:border-gray-600" required />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
