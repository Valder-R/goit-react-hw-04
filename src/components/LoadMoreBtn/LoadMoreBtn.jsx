import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({clickHandle}) {
    return (
        <>
            <button type="button" onClick={clickHandle} className={css.btn}>Load more</button>
        </>
    )
}