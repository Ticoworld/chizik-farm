import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-6">
      <div className="lg:px-28 px-10 flex justify-between items-center">
        <div>
          <h4 className="text-2xl font-bold mb-2">Chizik Farm</h4>
          <p className="text-gray-400">Your Partner in Quality Livestock</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="mailto:info@chizikfarm.com">
            <FaEnvelope className="text-2xl" />
          </a>
          <a href="#whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl text-green-500" />
          </a>
        </div>
      </div>

      <div className="bg-gray-800 mt-4 py-2 text-center">
        <p className="text-gray-400">&copy; 2024 Chizik Farm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
