import {Photo} from "react-photo-album"
import {CardComponentType} from "@/shared/assets/types/types"

export const getGalleryPhotosFromRequire = (requreData: __WebpackModuleApi.RequireContext, width: number = 270, height: number = 152) => {
    const images: Array<ImageModule> = requreData.keys().map(image => requreData(image));
    return images.map(e => {
        return {
            src: e.default.src,
            width,
            height
        }
    })
}

export const getGalleryPhotosFromRequireFromArray = (photos: Array<string>) => {
    return photos.map(e => {
        return {
            src: e,
            width: 270,
            height: 152
        }
    })
}

export const getSlides = (photos: Photo[]) => photos.map(({src}) => ({src}))

export const toLink = (props: CardComponentType) => {
    return props.years === undefined
        ? `/${props.variant}/${props.id}`
        : `/${props.variant}/${props.years}/${props.id}`
};

export const yearsConverter = (years: string | undefined): string | undefined => {
    debugger
    if (!years) return undefined; // Return undefined if input is undefined

    const parts = years.split('_'); // Split the input string by underscore
    if (parts.length !== 2) return years; // Return undefined if the format is not correct

    const startYear = parts[0];
    const endYear = parts[1];

    return `${startYear} - ${endYear}`; // Return the formatted date range
};

export function formatNumber(num: number): string {
    const strNum = num.toString();
    if (strNum.includes('.')) {
        return strNum.replace('.', '_');
    }
    if (num < 10) {
        return `0${num}`;
    }
    return strNum;
}

export function unformatNumberStr(strNum: string): string {
    if (strNum.includes('_')) {
        return strNum.replace('_', '.');
    }
    return strNum;
}

interface ImageModule {
    default: {
        src: string;
    };
}
