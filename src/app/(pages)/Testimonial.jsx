import TestimonialCard from "@/components/ui/TestimonialCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: 't1',
    description: 'EduNest has been a game-changer for me! The courses are engaging, well-structured, and taught by industry experts. I\'ve gained valuable skills that have helped me advance in my career.',
    person: 'Sarah M.',
    imgUrl: '/images/persons/1.jpg'
  },
  {
    id: 't2',
    description: 'I can\'t recommend EduNest enough! The platform is user-friendly, and the courses are top-notch. I\'ve taken multiple courses here and have seen a significant improvement in my knowledge and abilities.',
    person: 'John P.',
    imgUrl: '/images/persons/2.jpg'
  },
  {
    id: 't3',
    description: 'EduNest offers a wide range of courses to suit every interest and skill level. The instructors are knowledgeable, and the content is up-to-date. It\'s been a fantastic learning experience for me.',
    person: 'Emily H.',
    imgUrl: '/images/persons/3.jpg'
  },
  {
    id: 't4',
    description: 'As a busy professional, I appreciate the flexibility EduNest provides. I can access my courses anytime, anywhere, and the self-paced learning approach works perfectly for my schedule.',
    person: 'David L.',
    imgUrl: '/images/persons/4.jpg'
  },
  {
    id: 't5',
    description: 'EduNest exceeded my expectations! The courses are not only educational but also practical. I\'ve been able to apply what I\'ve learned immediately in my job, making a noticeable impact.',
    person: 'Maria R.',
    imgUrl: '/images/persons/5.jpg'
  },
  {
    id: 't6',
    description: 'The instructors on EduNest are passionate about their subjects and genuinely want to see their students succeed. I\'ve felt supported every step of the way and have grown both personally and professionally.',
    person: 'Michael G.',
    imgUrl: '/images/persons/6.jpg'
  },
  {
    id: 't7',
    description: 'EduNest\'s customer service is exceptional! They\'re responsive, helpful, and genuinely care about their students\' success. I\'ve had a positive experience from enrollment to completion.',
    person: 'Kevin W.',
    imgUrl: '/images/persons/7.jpg'
  },
]

export default function Testimonial() {
  return (
    <section>
      <div className="text-center">
        <p className="tiny-head">Testimonial</p>
        <h2>How Our Product User Describe us</h2>
        <p className="mx-auto mt-6 w-full md:w-2/3 text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi distinctio suscipit adipisci sapiente excepturi facere? Quisquam facilis fugiat cumque nihil in officiis?</p>
      </div>

      <div className="mx-auto py-12 w-3/4">
        <Carousel opts={{
          align: "start",
          loop: true
        }}
          className="w-full">
          <CarouselContent>
            {
              testimonials.map(item => (
                <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3" key={item.id}>
                  <TestimonialCard description={item.description} person={item.person} imgurl={item.imgUrl}/>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}
