
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddButton(){

    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate("/addemployee")} >
                Add-Employee</button>
        </div>
    )
}
