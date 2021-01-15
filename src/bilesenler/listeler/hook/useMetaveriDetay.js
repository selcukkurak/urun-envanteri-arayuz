
import {useState} from "react";


export default function useMetaveriDetay () {
    const [selectedMetaveri, setSelectedMetaveri] = useState(null)
    const [open, setOpen] = useState(false)
    const handleClickOpen = () =>{
        setOpen(true)
    }
    const handleClikClose = () =>{
        setOpen(false)
        setSelectedMetaveri(null)
    }
    const handleClickMetaveriItem = (index) => {
        setSelectedMetaveri(index)
    }

    return [
        open,
        handleClickMetaveriItem,
        selectedMetaveri,
        handleClickOpen,
        handleClikClose
    ]

}