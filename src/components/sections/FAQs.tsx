import { useState } from "react";

import Accordion from "../ui/Accordion";
import BlurCircle from "../ui/BlurCircle";

const faqs: { title: string; content: string }[] = [
  {
    title: "What is Prizeet?",
    content:
      "Prizeet is a smart shopping platform that helps users make informed purchasing decisions by comparing gadgets, features, and prices from multiple trusted vendors. It simplifies the process of finding the best deals by gathering up-to-date product and price information in one place.",
  },
  {
    title: "How do I track my order after purchase?",
    content:
      "Once your order has shipped, you will receive an email with your order ID. You can use this ID to view your order status and tracking information on your account page on Prizeet. Additionally, you can send and receive messages related to your order there.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "While we are working on integrating a secure and reliable payment system into the platform, all payments should currently be initiated via WhatsApp after you receive an official Prizeet invoice. For added security, you will also receive a two-factor authentication code from team.prizeet@gmail.com to confirm that the invoice was legitimately issued by Prizeet. Please ensure the email is indeed from team.prizeet@gmail.com before proceeding with any payment.",
  },
  {
    title: "How can I contact customer support for assistance?",
    content:
      "You can reach our customer support team via live chat on our website, by emailing support@prizeet.com, or by calling our support line on +2349114202172. Our team is available 24/7 to assist you with any inquiries.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <section className="overflow-x-hidden px-6 lg:px-12 py-24 leading-loose bg-black text-white">
        <BlurCircle top="0" right="0" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <h2
            data-aos="fade-right"
            data-aos-delay="150"
            className="text-3xl mb-4 font-semibold"
          >
            Frequently Asked Questions
          </h2>

          {/* faqs container */}
          <div data-aos="fade-up" data-aos-delay="150" className="">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
