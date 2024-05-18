import CourseCard from "@/components/ui/CourseCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Featured() {
    return (
        <section>
            <div className="text-center">
                <p className="tiny-head">Top-sellers</p>
                <h2>Featured Courses</h2>
                <p className="mx-auto w-full md:w-2/3 text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi distinctio suscipit adipisci sapiente excepturi facere? Quisquam facilis fugiat cumque nihil in officiis?</p>
            </div>
            <div className="py-12 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3">
                <CourseCard imgurl="/images/common/html-css-js.png" />
                <CourseCard imgurl="/images/common/react.png" />
                <CourseCard imgurl="/images/common/git-github.png" />
            </div>
            <div className="flex-center">
                <Link className={buttonVariants({variant:"secondary"})} href="/courses">
                    View More
                </Link>
            </div>
        </section>
    )
}
