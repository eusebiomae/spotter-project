
import { LogoMain } from "@/assets/img";
import Image from "next/image";

const Index = () => {
    return (
        <section className="h-[100vh] w-full">
            <div className="flex justify-center items-center h-full">
                <div>
                    <Image
                        className=""
                        src={LogoMain}
                        alt="Image Logo Main"
                        width={375}
                        height={97}
                    />
                </div>
            </div>
        </section>
    );
};

export default Index;