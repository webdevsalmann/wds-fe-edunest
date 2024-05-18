import { Info, PencilRuler, Target } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about">
            <div className="my-12 grid gap-8 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="p-3 w-fit h-fit rounded-full bg-muted text-primary">
                        <Info />
                    </div>
                    <h2>About EduNest</h2>
                    <p className="text-muted-foreground text-lg">At EduNest, we believe that learning should be accessible, engaging, and transformative. Our platform is designed to empower individuals to unlock their full potential and achieve their goals through quality education.</p>
                </div>
                <div className="flex justify-center">
                    <Image
                        className="w-4/6 md:pt-20 lg:pt-10 xl:w-3/5"
                        src='/images/common/info.png'
                        width={500}
                        height={500}
                        alt="info"
                    />
                </div>
            </div>

            <div className="my-12 grid gap-8 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="p-3 w-fit h-fit rounded-full bg-muted text-primary">
                        <Target />
                    </div>
                    <h2>Our Mission</h2>
                    <p className="text-muted-foreground text-lg">Our mission is to democratize education by providing a platform where learners of all backgrounds can access high-quality courses taught by industry experts. We aim to foster a culture of lifelong learning and skill development to help individuals thrive in an ever-evolving world.</p>
                </div>
                <div className="flex justify-center md:order-first">
                    <Image
                        className="w-4/6 md:pt-20 lg:pt-10 xl:w-3/5"
                        src='/images/common/target.png'
                        width={500}
                        height={500}
                        alt="target"
                    />
                </div>
            </div>

            <div className="my-12 grid gap-8 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="p-3 w-fit h-fit rounded-full bg-muted text-primary">
                        <PencilRuler />
                    </div>
                    <h2>What Sets Us Apart</h2>
                    <ul className="text-muted-foreground text-lg list-disc list-inside">
                        <li className="mt-4">
                            <span className="font-bold text-foreground">Expert Instructors:</span> Our courses are taught by industry professionals, academics, and subject matter experts who bring real-world experience and expertise to the classroom.
                        </li>
                        <li className="mt-4">
                            <span className="font-bold text-foreground">Interactive Learning:</span> We believe in active learning, which is why our courses feature interactive elements such as quizzes, assignments, and discussion forums to enhance engagement and retention.
                        </li>
                        <li className="mt-4">
                            <span className="font-bold text-foreground">Flexibility:</span> We understand that life can be busy, which is why our platform offers flexible learning options. You can access your courses anytime, anywhere, and study at your own pace.
                        </li>
                        <li className="mt-4">
                            <span className="font-bold text-foreground">Continuous Improvement:</span> We are continuously updating and expanding our course offerings to ensure that they remain relevant and aligned with the latest industry trends and advancements.
                        </li>
                    </ul>
                </div>
                <div className="w-full h-full flex-center aspect-square overflow-hidden">
                    <Image
                        className="w-full h-full aspect-square object-cover"
                        src='/images/common/study.png'
                        width={500}
                        height={500}
                        alt="study"
                    />
                </div>
            </div>
        </section>
    )
}
