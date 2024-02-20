import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Loader from "../components/Loader";

const AdminDashboard = () => {
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();
  const form = useRef();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to login if the token doesn't exist
      navigate('/admin/login');
    } else {
      const fetchEmails = async () => {
        try {
          const response = await fetch('http://localhost:1337/api/subscribers', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch subscribers email');
          } else {
            const data = await response.json();
            setEmails(data.emails);
            setIsLoading(false);
          }
        } catch (error) {
          setError(true);
          setErrorMessages(['Error fetching subscribers email:', error.message]);
          console.error('Error fetching subscribers email:', error.message);
        }
      };

      fetchEmails();
    }
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hld45lb', 'template_60m0qpp', form.current, {
        publicKey: 'gJyyxgcynyimy9mTj',
      })
      .then(
        () => {
          Toast.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
          e.target.reset();
        },
        (error) => {
          Toast.fire({
            icon: 'error',
            title: `Failed to send email: ${error.text}`,
          });
          setErrorMessages([`FAILED... ${error.text}`]);
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="flex justify-center items-center h-[100vh] p-10">
      <div className="mx-auto p-6 bg-white shadow-md rounded-md w-full">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error && (
              <div className="mb-4 text-red-500">
                {errorMessages.map((errorMsg, index) => (
                  <p key={index}>{errorMsg}</p>
                ))}
              </div>
            )}

            <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>

            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Send Email to Subscribers:</h2>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                {emails.map((email, index) => (
                  <input
                    key={index}
                    type="email"
                    value={email.email}
                    placeholder={`Subscriber email ${index + 1}`}
                    name= 'to_email'
                    className="my-0 border p-2 w-full"
                  />
                ))}
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="my-6 border p-2 w-full"
                  required
                />
                <textarea
                  className="border p-2 w-full mb-4"
                  placeholder="Enter your message"
                  name='message'
                  required
                />
                <button className="bg-green-500 text-white py-2 px-4 rounded">Send Emails</button>
              </form>
            </div>

            <div className="mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
