import { Check } from "lucide-react";
import { buttonVariants } from "../button";
import Link from "next/link";

export default function IndividualPricingCard({ course }) {
    const price = course?.pricing.free ? "Free" : course?.pricing.discoutn_price ? course?.pricing.discoutn_price : course?.pricing.price
    return (
        <div className="relative p-4 sm:p-8 rounded-xl border overflow-hidden">
            {/* Heading */}
            <div className="my-8 text-center">
                <div className="font-bold text-2xl tracking-wider">
                    $<span className="text-4xl text-primary">{price}</span>/m
                </div>
                <div className="tracking-wider font-semibold uppercase text-sm">ALL COURSES</div>
            </div>

            {/* Benefits */}
            <ul className="my-8 space-y-4">
                {course?.pricing?.includes?.map((item, i) => (
                    <li className="flex gap-4 font-semibold text-lg"> <Check />{item}</li>
                ))}
            </ul>

            {/* Subscription */}
            <div className="flex-center">
                <Link className={buttonVariants()} href="/">Subscribe</Link>
            </div>
        </div>
    )
}
