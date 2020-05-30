import React from "react";
import { randomGenerator } from "../utils/data";

export const SvgLandscape = (props: any) => {
    const { aspectRatio, ...svgProps } = props;
    let image;
    if (aspectRatio > 1.6)
        image = <image href={props.image} x="12" y="17" width={170} />;
    else if (aspectRatio > 1.5)
        image = <image href={props.image} x="12" y="12" width={170} />;
    else if (aspectRatio < 1.4)
        image = <image href={props.image} x="21" y="12" width={150} />;
    else
        image = <image href={props.image} x="12" y="12" width={170} />;

    return (
        <svg viewBox="0 0 204 137.6" id="prefix__svg2" {...svgProps}>
            <g transform="matrix(.94718 0 0 1.00022 9.886 9.987)" id="prefix__g10">
                <path
                    d="M-1.953-1.803C61.401.189 124.045-.453 183.949 1.293M.343.956C49.554.17 99.643.228 183.781.938m-1.123.784c1.201 33.565-.348 63.527-.334 116.814M184.689-.552c-1.29 30.13-.365 59.466-1.431 117.273m-.62-1.025c-52.025-1.146-104.35-.686-180.858 1.674m182.776.36c-57.346 1.486-112.377.74-184.944-.502m-1.52-.966C-1.113 81.602-.643 44.104-.583-.423m.461 118.262C1.813 90.056.94 61.175.686.568"
                    id="prefix__path12"
                    fill="none"
                    stroke="#000"
                    strokeWidth={1}
                />
            </g>
            {image}
        </svg>
    );
};


const SvgPortrait = (props: any) =>
    (
        <svg
            viewBox="0 0 190 200"
            id="prefix__svg2"
            {...props}
        >
            <g transform="matrix(.91893 0 0 1.04677 10.273 11.06)" id="prefix__g3363">
                <path
                    d="M-.224-.455c34.493-.553 69.903-.982 125.23.214M-.856-.475C43.083.464 84.265 1.684 127.406.933m1.116-.792c-3.027 49.325-3.927 99.629-.384 172.611M125.595.798c2.976 61.31 1.973 121.95.429 172.085m2.212-.755c-34.557.683-71.567-.865-126.337 1.748m124.063-1.19c-34.185-1.599-66.653-1.273-124.995-.345m-2.817.18C-1.605 136.707.025 97.674 1.715.395M.761 172.304C.91 115.25-.064 60.144-.272.95"
                    id="prefix__path3365"
                    fill="none"
                    stroke="#000"
                    strokeWidth={1}
                />
            </g>
            <image href={props.image} x="12" y="25" width={113} />
        </svg>
    );


export default (props: { pageContext: any; }) => {
    const { pageContext } = props;
    const { images } = pageContext;
    const randomPosition = randomGenerator(0, images.length - 1);
    const randomImage = images[randomPosition].node;
    const { aspectRatio } = randomImage.fluid;
    const randomSvg = aspectRatio >= 1 ? <SvgLandscape image={randomImage.fluid.src} aspectRatio={aspectRatio} /> : <SvgPortrait image={randomImage.fluid.src} />;
    return randomSvg;
};