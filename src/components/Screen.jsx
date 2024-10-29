import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'


function clickfn() { console.log(text) }
const Screen = () => {
    const [display, setdisplay] = useState('')


    const clickfn = (text) => {
        setdisplay((prev) => prev + text);
        console.log(text)
    };

    const calculation=()=>{
        const result =eval(display);
        setdisplay(result)
        console.log(result)
    }

    return (
        <div className=' w-96 h-auto   border-2 border-red-900'>
                <Display value={display}/>
            <div className='  grid grid-cols-3 '>

                <Button text={1} onclick={() => clickfn("1")} />
                <Button text={2} onclick={() => clickfn("2")} />
                <Button text={3} onclick={() => clickfn("3")} />
                <Button text={4} onclick={() => clickfn("4")} />
                <Button text={5} onclick={() => clickfn("5")} />
                <Button text={6} onclick={() => clickfn("6")} />
                <Button text={7} onclick={() => clickfn("7")} />
                <Button text={8} onclick={() => clickfn("8")} />
                <Button text={9} onclick={() => clickfn("9")} />
                <Button text={0} onclick={() => clickfn("0")} />
                <Button text={"+"} onclick={() => clickfn("+")} />
                <Button text={"-"} onclick={() => clickfn("-")} />
                <Button text={"*"} onclick={() => clickfn("*")} />
                <Button text={"/"} onclick={() => clickfn("/")} />
                <Button text={"="} onclick={() => calculation()} />
            </div>
        </div>
    )
}

export default Screen