import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery({ pictureList, setModal, openModal }) {
    return (
        <ul className={css.myList}>
            {pictureList.map(picture => {
                return (
                    <li key={picture.id} onClick={() => {
                        setModal(picture);
                        openModal();
                    }}>
                        <ImageCard picture={picture} />
                    </li>
                )
            })}
        </ul>
    )
}