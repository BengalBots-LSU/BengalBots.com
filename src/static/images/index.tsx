import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import Logo from "./BengalBots_Logo.png";

import HeroSlider1 from "./hero-slider-01.webp";
import HeroSlider2 from "./hero-slider-02.webp";
import HeroSlider3 from "./hero-slider-03.webp";
import LogoPoster from "./poster13.png";
import PFTImage from "./PFTImage.png";
import PFT from "./PFTBySophie.png";
import B3_24 from "./B3_24.jpg";
import Ocean from "./Ocean_MattHardy.jpg";
import VexU from "./VexULogo.png";
import PFTHallway from "./PFT_Hallway.jpg";

import Adrian from "./Adrian.jpg";
import Drew from "./Drew.jpg";
import Jacques from "./Jacques.png";
import Jai from "./Jai.jpg";
import John from "./John.jpg";
import JP from "./JP.jpg";
import Karma from "./Karma.png";
import Davis from "./Kyle_Davis.jpg";
import Stack from "./Kyle_Stack.jpg";
import Maureen from "./Maureen.jpg";
import Marc from "./Marc.jpg";
import Tia from "./Tia.jpg";



import InfiniteImg1 from "./infinite-img-1.webp";
import InfiniteImg2 from "./infinite-img-2.webp";

export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    InfiniteImg1,
    InfiniteImg2,
    LogoPoster,
    PFTImage,
    PFT,
    B3_24,
    Ocean,
    VexU,
    PFTHallway,
    Adrian,
    Drew,
    Jacques,
    Jai,
    John,
    JP,
    Karma,
    Davis,
    Stack,
    Marc,
    Maureen,
    Tia,

};
