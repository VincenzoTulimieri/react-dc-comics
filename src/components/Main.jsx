// importazione file

// dichiarazione variabile
const contentElement = '--> Content goes here <--'

export default function Main() {
    return <main>
        <div className="container">
            <div className="element">
                <strong>{contentElement}</strong>
            </div>
        </div>
    </main>
}