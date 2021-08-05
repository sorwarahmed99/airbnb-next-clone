import Image from "next/image";

function MediumCard({img, title}) {
    return (
        <div >
            <div className="relative h-80 w-80">
                <Image src={img} layout="fill" className="rounded-xl" />
            </div>
            <p className="text-2xl mt-3">{ title }</p>
        </div>
    )
}

export default MediumCard;
