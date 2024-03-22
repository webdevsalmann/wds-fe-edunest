import Image from "next/image";

export default function TestimonialCard({ imgurl, description, person }) {
    return (
        <div className="relative p-4 bg-muted rounded-md border overflow-hidden">
            <p>&ldquo;{description}&rdquo;</p>

            <div className="mt-6 flex items-center gap-4">
                <div className="flex-ceter aspect-square w-12 h-12 rounded-full overflow-hidden">
                    <Image
                        className="w-full h-full object-cover"
                        src={imgurl ? imgurl : '/images/common/error-image.png'}
                        width={1600}
                        height={900}
                        alt={person ? person : 'image'}
                    />
                </div>
                <div>
                    <div className="">~ {person}</div>
                    <div className="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
        </div>
    )
}
