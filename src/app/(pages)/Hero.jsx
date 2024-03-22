import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section>
            <div className="relative w-full flex-center text-center">
                <div className="w-full md:w-2/3 lg:w-3/4">
                    <h1>Unlock Your Potential with EduNest: Your Gateway to Personal Growth</h1>
                    <p className="mt-8 text-muted-foreground text-2xl">
                        Discover Expert-Led Courses Tailored to Ignite Your Passion and Propel Your Success
                    </p>
                    <div className="mt-6 flex-center gap-4">
                        <Link className={`${buttonVariants()} text-lg`} href="/login">Login Now</Link>
                        <Link className={`${buttonVariants({ variant: "outline" })} text-lg`} href="/">Browse Courses</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
