// importazione file

import Button from "./ButtonComics"
import Card from "./Card"

// dichiarazione variabile

export default function Main(props) {

    const comics = props.comics
    return (
        <main>
            <div className="jumbotron"></div>
            <div className="container">
                <div className="row">
                    <Card comics={comics} />
                </div>
                <Button />
            </div>
        </main>
    )
}