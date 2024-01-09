import MondatSelect from "../view/MondatSelect.js";
export default function Valaszto() {
    return (<div className="App">
        <header>
            <h1>Aktív és passzív/szenvedő szerkezet egyszerű jelenben és múltban (write/wrote, is written/was written)</h1>
        </header>
        <article>
            <p>Válaszd ki a megfelelő alakot!</p>
            <div>
                <section>
                    <MondatSelect></MondatSelect>
                </section>
            </div>


        </article>
    </div>)
}