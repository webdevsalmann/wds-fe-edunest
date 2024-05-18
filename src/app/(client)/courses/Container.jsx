"use client"
import CourseCard from "@/components/ui/CourseCard";
import SanityService, { client } from "@/lib/sanityConfig";
import { useEffect, useState } from "react";
import { courses } from "@/lib/const";

export default function Container() {

    return (
        <div className="py-12 grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* {courses?.map((item, i) => (
                <CourseCard
                    imgurl={SanityService.getImageUrl(item.thumbnail).width(800).url()}
                    id={item._id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    key={i}
                />
            ))} */}
        </div>
    )
}
