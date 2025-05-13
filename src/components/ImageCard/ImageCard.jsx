import css from "./ImageCard.module.css"

export default function ImageCard({ picture }) {
    return (
        <div className={css.myCard}>
            <img src={picture.urls.small} alt={picture.alt_description} className={css.myImage } />
        </div>
    )
}