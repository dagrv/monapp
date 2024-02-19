import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl dark:bg-[#1C1C1C]">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image src="/notion.png" fill alt="Heroes Cover B" className="object-contain dark:hidden" />
                    <Image src="/notion-dark.png" fill alt="Heroes Cover W" className="object-contain hidden dark:block" />
                </div>
            </div>

            <div className="relative h-[400px] w-[400px]">

            </div>
        </div>
    );
};