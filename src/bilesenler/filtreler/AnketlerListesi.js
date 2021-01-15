import React,{useCallback, memo} from "react";
import Select from "react-select";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {siraliAnketler} from "../store/selectors";
import {seciliAnketState} from "../store";
import {FiltreGosterge} from "./CografiDuzeyListesi";

function AnketlerListesi() {
    const anketler = useRecoilValue(siraliAnketler)
    const setSeciliAnket = useSetRecoilState(seciliAnketState)


    const anketlerOption = anketler.map(anket => ({label:anket.adi, value:anket.id}))
    const handleChange = useCallback((selectedOption) => {
        setSeciliAnket(selectedOption)
    }, [setSeciliAnket])
    return(
        <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder={(<div>Anketler <FiltreGosterge>{anketler && anketler.length}</FiltreGosterge></div>)}
            options={anketlerOption}
            onChange={handleChange}
        />
        // <Select
        //     closeMenuOnSelect={false}
        //     placeholder={(<div>Anketler {anketler && anketler.length}</div>)}
        //     options={anketlerOption}
        //     onChange={handleChange}
        // />
    )
}
export default memo(AnketlerListesi)