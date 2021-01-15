
import {useState} from "react";


export default function MetaveriDetay () {
    const [selectedMetaveri, setSelectedMetaveri] = useState(null)
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
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
        handleClikClose,
        expanded,
        handleChange
    ]

}