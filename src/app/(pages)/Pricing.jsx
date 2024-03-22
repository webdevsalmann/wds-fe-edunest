import { buttonVariants } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
    return (
        <section>
            <div className="text-center">
                <p className="tiny-head">Pricing</p>
                <h2>You are just getting started</h2>
            </div>

            <div className="mt-12 flex-center">
                <div className="relative p-4 sm:p-8 rounded-xl border overflow-hidden">
                    <div className="my-8 text-center">
                        <div className="text-4xl font-bold text-primary tracking-wide">$39/m</div>
                        <div className="tracking-wider font-semibold uppercase text-sm">ALL COURSES</div>
                    </div>
                    <ul className="my-8 space-y-4">
                        <li className="flex gap-4 font-semibold text-lg"> <Check />Include all courses</li>
                        <li className="flex gap-4 font-semibold text-lg"> <Check />HD quality video</li>
                        <li className="flex gap-4 font-semibold text-lg"> <Check />English caption</li>
                        <li className="flex gap-4 font-semibold text-lg"> <Check />Downloadable content</li>
                        <li className="flex gap-4 font-semibold text-lg"> <Check />Certificate on completion</li>
                        <li className="flex gap-4 font-semibold text-lg"> <Check />Accessable on subscribed</li>
                        <li className="flex gap-4 font-semibold text-lg"> <Check />Cancle at any time</li>
                    </ul>
                    <div className="flex-center">
                        <Link className={buttonVariants()} href="/">Subscribe</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
