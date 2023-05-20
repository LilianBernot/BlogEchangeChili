import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "../steps"
import Santiago_1 from "../steps/santiago_1"
import HolydaysBeforeClasses from "../steps/holidays_before_classes"
import Santiago_2 from "../steps/santiago_2"
import Argentina from "../steps/argentina"

export default function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Index />}/>
                <Route path={'/Santiago_1'} element={<Santiago_1 />}/>
                <Route path={'/HolydaysBeforeClasses'} element={<HolydaysBeforeClasses />}/>
                <Route path={'/Santiago_2'} element={<Santiago_2 />}/>
                <Route path={'/Argentina'} element={<Argentina />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}