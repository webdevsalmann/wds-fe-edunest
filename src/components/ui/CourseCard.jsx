import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ imgurl, title, id, description, price, tags }) {
    return (
        <Link className="relative overflow-hidden rounded-md border group hover:scale-105 transition-all" href={`/courses/${id}` || '/courses'}>
            <div className="flex-ceter aspect-video overflow-hidden">
                <Image
                    className="w-full h-full"
                    src={imgurl ? imgurl : '/images/common/error-image.png'}
                    width={1600}
                    height={900}
                    alt={title || 'image'}
                />
            </div>
            <div className="p-4">
                <div className="text-lg font-bold group-hover:text-primary">{title || "Title"}</div>
                <p className="text-muted-foreground line-clamp-3">{description || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti accusantium adipisci inventore? Odio quasi eius, adipisci quia suscipit dicta perferendis optio commodi!'}</p>
                <div className="mt-2 text-xl text-primary font-bold">$ {price || "price"}</div>
            </div>
        </Link>
    )
}
