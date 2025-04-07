export default function Card(props) {
    const comics = props.comics
    console.log(props.comics)
    return (
        <>
        {comics.map((comic, index) => (
            <div className="col">
                <article>
                    <div className="card-img">
                        <a href="#"><img src={comic.thumb} alt={comic.title} /></a>
                    </div>
                    <a href="#"><p className="card-text">{comic.series}</p></a>
                </article>
            </div>
                
            ))}
        </>
        

    )
}

