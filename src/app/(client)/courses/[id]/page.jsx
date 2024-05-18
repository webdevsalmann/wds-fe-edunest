import CourseDetail from "./CourseDetail";
import SanityService from "@/lib/sanityConfig";
import IndividualPricingCard from "@/components/ui/pricing-cards/IndividualPricingCard";
import { courses } from "@/lib/const";

export default function page({ params }) {
    return (
        <section className="grid gap-12 grid-cols-1 xl:grid-cols-3 divide-x">
            <CourseDetail course={courses[0]} />

            <div className="px-4 xl:col-span-1">
                <IndividualPricingCard course={courses[0]} />
            </div>
        </section>
    )
}
