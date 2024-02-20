import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { IoIosArrowDown } from 'react-icons/io';

const Faq = () => {
    const faqData = [
        {
          id: 1,
          question: 'What types of animals do you sell?',
          answer: 'We offer a diverse range of animals including poultry, snails, pigs, and fishes. Each breed is meticulously raised and cared for at Chizik Farm.',
        },
        {
          id: 2,
          question: 'How can I purchase animals from Chizik Farm?',
          answer: 'To purchase animals from Chizik Farm, you can explore our available breeds on our website and contact us through the provided channels. Our team will assist you with the purchasing process.',
        },
        {
            id: 3,
            question: 'Do you provide delivery services for purchased animals?',
            answer: 'Yes, we offer delivery services for purchased animals. Our team ensures safe and timely delivery to your specified location.',
          },
          {
            id: 4,
            question: 'What vaccinations are given to your animals?',
            answer: 'Our animals undergo comprehensive vaccination programs to ensure their health and prevent diseases. Feel free to inquire about specific vaccinations for each animal type.',
          },
          {
            id: 5,
            question: 'Can I visit Chizik Farm to see the animals in person?',
            answer: 'Yes, you are welcome to visit Chizik Farm to see our animals in person. Contact us to schedule a visit, and our team will be happy to assist you.',
          },
          {
            id: 6,
            question: 'Are your animals suitable for both small and large-scale farming?',
            answer: 'Absolutely! Our animals are suitable for various farming scales. Whether you are a small-scale farmer or managing a large-scale operation, Chizik Farm breeds are adaptable to different farming environments.',
          },
          {
            id: 7,
            question: 'What sets Chizik Farm animals apart from others in the market?',
            answer: 'Chizik Farm animals stand out due to our commitment to excellence. We prioritize quality breeding, care, and health, ensuring that our animals contribute to the success of your farming venture.',
          },
      ];
  return (
    <div className="lg:px-28 px-10 bg-gray-300 py-10 dark:bg-gray-900" id='faq'>
       <div className="flex items-center gap-2  pb-3">
            <div className="w-[50px] h-[0.28rem] bg-green-950 dark:bg-green-500"/>
            <h4 className="font-bold text-green-950 dark:text-green-500 text-2xl">FAQ</h4>
        </div> 
        <div>
          <p className="dark:text-gray-200">Explore common inquiries about Chizik Farm and our offerings in our FAQ section. From purchasing procedures to vaccination details, find quick answers to ensure a seamless experience with our premium livestock and services.
          </p> 

        <Accordion className='py-7'>
        {
                faqData.map(faq => (
                    <AccordionItem key={faq.id} className='mb-2'> 
                        <AccordionItemHeading>
                            <AccordionItemButton className="bg-green-700 text-green-100 flex dark:bg-gray-200 dark:text-gray-900 md:text-xl font-semibold text-sm items-center justify-between px-2 py-3 rounded-t-md">
                                {faq.question}
                                <IoIosArrowDown/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='text-sm px-2 py-2 dark:text-green-500 lg:text-md font-semibold border-2'>
                            <p>
                               {faq.answer}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))
            }
        </Accordion>
    </div>
    </div>);
};

export default Faq;
