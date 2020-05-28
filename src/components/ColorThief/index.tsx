import React from "react";
import Color, { Palette } from 'color-thief-react';
import { SCDominant, SCInnerColor } from "./styles";

type ColorThiefProps = {
    IMAGE_URL: string
}

export const ColorThief: React.FC<ColorThiefProps> = ({ IMAGE_URL }) => (
    <Color src={IMAGE_URL} >
        {({ data, loading, error }: { data: string, loading: boolean, error: any }) => (
            <SCInnerColor style={{ color: data }}>
                <SCDominant color={data} />
            </SCInnerColor>
        )}
    </Color>)


export const ColorThiefPalette: React.FC<ColorThiefProps> = ({ IMAGE_URL }) => (
    <Palette src={IMAGE_URL} colorCount={2} >
        {({ data, loading, error }: { data: string[], loading: boolean, error: any }) => (
            data.map(palette => (
                <SCInnerColor style={{ color: palette }}>
                    <SCDominant color={palette} />
                </SCInnerColor>)
            ))}
    </Palette>)

