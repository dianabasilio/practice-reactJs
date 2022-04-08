import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { FactorialDisplay } from "./components/factorial/component";
import { FibonacciDisplay } from "./components/fibonacci/component";
import { HideShow } from "./components/hideShow/component";
import { Pokedex } from "./components/pokedex/component";
import { Fibonacci } from "./problems";
import { getPokemonByID, sleep } from "./services/pokemon/service";

export const App: FC = () => {
    const [fiboNumber, setFiboNumber] = useState<number>(0);
    const [factorialNumber, setFactorialNumber] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);

    // const [clicks, setClicks]=useState<number>(0);
    // const makeClick = () => {
    //     setClicks(clicks+1);
    // }

    const getFiboNumber = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value != "") {
            setFiboNumber(parseInt(event.target.value));
        }
        else setFiboNumber(0)
    };


    const getFactorialPosition = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value != "") {
            setFactorialNumber(parseInt(event.target.value));
        }
        else setFactorialNumber(0)
    };

    const changeShow = async (event: ChangeEvent<HTMLInputElement>) => {
        
        
        // const response = sleep(1000);
        // response
        //     .then((result) => {
        //         console.log(result);
        //         setShow(!show);
        //     })
        //     .catch(() => {
        //         console.log("tronó");
        //     });
        try {
            const response = await sleep(1000);
            setShow(!show);
            await sleep(1000);
            console.log(response);
        } catch (error) {
            console.log("tronó la promesa");
            console.log(error);
        }
    };

    localStorage.setItem("nombre", "Luis Barrón");

    return (
        <>
            <h1>Luis Barrón</h1>
            <FactorialDisplay
                onChange={getFactorialPosition}
                position={factorialNumber}
            />
            <FibonacciDisplay onChange={getFiboNumber} position={fiboNumber} />
            <input type="checkbox" onChange={changeShow} checked={show} />
            {show ? <HideShow /> : null}
            <Pokedex/>
        </>
    );
};