import React from 'react'
import Lightbox, {Callback, Slide} from "yet-another-react-lightbox"
import PhotoAlbum, {LayoutType, Photo} from "react-photo-album"
import s from './ModdedComponents.module.scss'

export const LightboxMy = (props: LightboxPropsType) => {
    return (
        <Lightbox
            styles={{container: {backgroundColor: "rgba(0, 0, 0, .5)"}}}
            slides={props.slides}
            open={props.index >= 0}
            index={props.index}
            close={() => props.closeCallback(-1)}
        />
    )
}

export const PhotoAlbumMy = (props: PhotoAlbumPropsType) => {
    return (
        <div className={s.photoAlbum}>
            <PhotoAlbum layout={props.layout ? props.layout : 'masonry'}
                        photos={props.photos}
                        onClick={({index}) => props.openCallback(index)}/>
        </div>

    )
}

type LightboxPropsType = {
    layout?: 'masonry' | 'rows' | 'columns'
    slides: Slide[]
    index: number
    closeCallback: (value: -1) => void
}

type PhotoAlbumPropsType = {
    layout?: LayoutType
    photos: Photo[]
    openCallback: (value: number) => void
}

