import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: 1,
    question: 'How do I enroll in a course on EduNest?',
    answer: 'To enroll in a course, simply browse our selection of courses, choose the one that interests you, and click on the "Enroll Now" button. Follow the prompts to complete the enrollment process.'
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept payments via credit/debit cards, PayPal, and other secure online payment methods. Rest assured, your payment information is encrypted and safe with us.'
  },
  {
    id: 3,
    question: 'Can I access my course on any device?',
    answer: 'Yes, you can access your course on any device with internet connectivity, including desktop computers, laptops, tablets, and smartphones. Our platform is optimized for mobile viewing for your convenience.'
  },
  {
    id: 4,
    question: 'Are there any prerequisites for enrolling in a course?',
    answer: 'Prerequisites vary depending on the course. Some courses may require basic knowledge of certain subjects, while others are suitable for beginners. Please check the course description for specific requirements.'
  },
  {
    id: 5,
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a refund policy within a specified period after enrollment. The refund period and conditions vary depending on the course. Please refer to our Terms and Conditions or contact our support team for more information.'
  },
  {
    id: 6,
    question: 'Can I interact with the instructors or other students?',
    answer: 'Yes, many of our courses offer opportunities for interaction with instructors and fellow students. This may include discussion forums, live Q&A sessions, and assignment feedback. Check the course details for specific features.'
  },
  {
    id: 7,
    question: 'How long do I have access to a course after enrollment?',
    answer: 'You will have unlimited access to the course materials for the duration of your enrollment. You can study at your own pace and revisit the content as often as you like during this time.'
  },
  {
    id: 8,
    question: 'Do you offer certificates upon course completion?',
    answer: 'Yes, we provide certificates of completion for many of our courses. These certificates are a testament to your newly acquired skills and can be a valuable addition to your resume or LinkedIn profile.'
  },
  {
    id: 9,
    question: 'How can I contact customer support if I have questions or issues?',
    answer: 'You can reach our customer support team via email at support@edunest.com or through the contact form on our website. We strive to respond to all inquiries promptly and provide assistance whenever needed.'
  },
]

export default function FAQ() {
  return (
    <section>
      <div className="text-center">
        <p className="tiny-head">FAQ&apos;s</p>
        <h2>Common Questions you might have</h2>
        <p className="mx-auto mt-6 w-full md:w-2/3 text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi distinctio suscipit adipisci sapiente excepturi facere? Quisquam facilis fugiat cumque nihil in officiis?</p>
      </div>

      <div className="mx-auto py-12 w-full md:w-2/3">
        <Accordion type="single" collapsible>
          {
            faqs.map(item => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg">{item.answer}</AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
    </section>
  )
}
