// importazione file

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
            </div>
        </main>
    )
}