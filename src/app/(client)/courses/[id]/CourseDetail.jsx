"use client"
import { PortableText } from "@portabletext/react";
import { Lock, LockOpen, User } from "lucide-react";

export default function CourseDetail({ course }) {
  console.log(course);
  return (
    <div className="xl:col-span-2">
      {/* Thumbnail  */}
      <div className="w-full aspect-video bg-muted rounded">
        <iframe
          className="w-full h-full"
          src="https://player.vimeo.com/video/926546873"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Title, description & tags  */}
      <div className="my-12 mt-6">
        <div className="text-xl font-bold">{course?.title}</div>
        <p className="text-muted-foreground">{course?.description}</p>
        <div className="flex gap-2 flex-wrap">
          {course?.tags.map((item, i) => (
            <div className="mt-2 px-1 bg-rose-100 text-rose-950 dark:bg-rose-950 dark:text-rose-100 font-medium rounded tracking-wide uppercase" key={item + i}>{item}</div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="my-12 bg-muted flex justify-between divide-x divide-background rounded">
        <div className="py-4 px-2 flex-center flex-col w-full">
          <div className="text-base">Duration</div>
          <div className="mt-1 text-muted-foreground text-">{course?.duration}</div>
        </div>
        <div className="py-4 px-2 flex-center flex-col w-full">
          <div className="text-base">Total Enrolled</div>
          <div className="mt-1 text-muted-foreground text- inline-block">
            33 (<User className="size-4 inline-block" />)
          </div>
        </div>
        <div className="py-4 px-2 flex-center flex-col w-full">
          <div className="text-base">Last Updated</div>
          <div className="mt-1 text-muted-foreground text-">{course?._updatedAt}</div>
        </div>
      </div>

      {/* About */}
      <div className="my-12">
        <div className="tiny-head">About this course</div>
        <PortableText className="my-12" value={course?.about} />
      </div>

      {/* Chapters */}
      <div className="my-12">
        <div className="tiny-head">CHAPTERS</div>
        <div className="divide-y">
          {course?.chapters.map((item, i) => (
            <div className="py-4 flex gap-4">
              {item.free_preview ? <LockOpen /> : <Lock />}
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
