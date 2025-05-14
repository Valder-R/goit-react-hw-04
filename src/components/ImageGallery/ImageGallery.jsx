import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery({ pictureList, onImageClick}) {
    return (
        <ul className={css.myList}>
            {pictureList.map(picture => {
                return (
                    <li key={picture.id} onClick={() => {
                        onImageClick(picture);
                    }}>
                        <ImageCard picture={picture} />
                    </li>
                )
            })}
        </ul>
    )
}