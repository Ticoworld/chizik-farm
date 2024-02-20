// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer);
  //     toast.addEventListener('mouseleave', Swal.resumeTimer);
  //   }
  // });


  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_loyl4k9',
  //       'template_6wm5cfg',
  //       form.current, {
  //       publicKey: 'yfGEXTBtwGJ5adI5E',
  //     })
  //     .then(
  //       () => {
  //         Toast.fire({
  //           icon: 'success',
  //           title: 'Message Sent Successfully'
  //         });
  //         e.target.reset();
  //       },
  //       (error) => {
  //         Toast.fire({
  //           icon: 'success',
  //           title: `'FAILED...', ${error.text}`
  //         });
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Showcase */}
      <div className="h-[60vh] relative">
        <img src="\pigs.jpg" alt="" className="w-full h-full object-cover" />
        <div className="overlay background">
          <h1 className="text-3xl font-bold dark:text-white py-3 lg:w-[500px] text-green-600 px-3">CONTACT</h1>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
