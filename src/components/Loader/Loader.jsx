import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

export default function Loader({loading}) {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [color, setColor] = useState("#ffffff");

    return (
        <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
    
}