// import Image from "next/image"
// import image from "./image.png"

const IntroductionText = () => {
    return (
        <div className="text-4xl text-white">
            I am Shah Faisal, a <strong className="font-bold">Mechatronics Engineer</strong><br /> with expertise in <strong className="font-bold">C/C++</strong>, and I am<br /> learning <strong className="font-bold">NextJS</strong>.
        </div>
    );
}

const IntroductionImage = () => {
    {/* <div ><Image src={image} alt="Introduction Image"></Image></div> */ }
    return (
        <div>
            <img src="/image.png" alt="Introduction Image" />
        </div>
    );
};

// export { IntroductionText, IntroductionImage, Introduction };
export default function Introduction () {
    return (
        <>
            <div className="text-white text-6xl text-center">About me</div>
            <div className="flex items-center justify-between m-6">
                <IntroductionText />
                <IntroductionImage />
            </div>
        </>

    );
}