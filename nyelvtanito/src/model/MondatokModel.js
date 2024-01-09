import { szenvedoMondatok } from "./angol.js";
export default class MondatokModel{
    #list=[];
    #aktObj;
    #aktElem;
    #magyar;
    #mondat;
    #hossz;

    constructor(){
        this.#list = szenvedoMondatok;
        this.#aktElem = [...this.#list];
        this.#magyar = szenvedoMondatok[0];
        this.#mondat = szenvedoMondatok[1];
        this.#hossz = this.#list.length - 2;
    }

    aktMondatOsszeallit(index){
        let obj = this.#list[index];
        let kv = [...obj.valasztas];
        kv.sort((a,b) =>{
            return Math.random() - 0.5;
        });
        kv.unshift("Válassz!");
        let teljesmondat = obj.mondat.replace("_", obj.valasztas[0]);
        let tm = teljesmondat.split(" ");
        let km = [...obj.tm];
        km.sort((a,b) =>{
            return Math.random() - 0.5;
        });
        
        this.#aktObj = {
            magyar:obj.magyar,
            index:this.#aktElem,
            mondat: obj.mondat,
            alap: obj.alap,
            helyes: obj.valasztas[0],
            kevertValasztas: kv,
            teljesMondat: tm,
            kevertMondat: km,
        };

        return this.#aktObj;
    }

    get magyar(){
        return this.#list[0];
    }

    get mondat(){
        return this.#list[1];
    }

    get hossz(){
        return this.#list.length - 2;
    }
}