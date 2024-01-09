import  MondatokModel  from "../model/MondatokModel.js";
import MondatSelect from "../view/MondatSelect.js";
export default function Gepel(){
    return(<div className="App">
    <header>
        <h1>Aktív és passzív/szenvedő szerkezet egyszerű jelenben és múltban (write/wrote, is written/was written)</h1>
    </header>
    <article>
        <p>Válaszd ki a megfelelő alakot!</p>
        <div>
            <section className="mondat">
                <MondatSelect mondatObj={mondat} kovetkezo = {kovetkezo}></MondatSelect>
            </section>
        </div>


    </article>
    </div>)
}