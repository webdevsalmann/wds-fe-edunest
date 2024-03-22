import Image from "next/image";

export default function FeatureCard({ imgurl, title, description, price, tags }) {
    return (
        <div className="relative overflow-hidden rounded-md border">
            <div className="flex-ceter aspect-video overflow-hidden">
                <Image
                className="w-full h-full"
                    src={imgurl ? imgurl : '/images/common/error-image.png'}
                    width={1600}
                    height={900}
                    alt={title ? title : 'image'}
                />
            </div>
            <div className="p-4">
                <div className="text-lg font-bold">Title</div>
                <p className="text-muted-foreground line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti accusantium adipisci inventore? Odio quasi eius, adipisci quia suscipit dicta perferendis optio commodi!</p>
                <div className="mt-2 text-primary font-bold">$ 30</div>
            </div>
        </div>
    )
}
