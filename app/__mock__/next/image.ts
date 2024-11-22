import React from "react";

interface NextImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export const NextImage = ({ src, alt, ...props }: NextImageProps) => {
    return <img src={src} />;
};
