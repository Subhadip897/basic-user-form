import { useState } from "react";


import { IoClose } from "react-icons/io5";

export default function Alert({ message, setOpen }) {

    return (
        <>
            <div className="px-3 py-2 text-white font-bold relative flex items-center rounded-sm">
                <p> {message} </p>

                <div
                    className="absolute bottom-0 right-2 -translate-y-[50%] cursor-pointer text-xl"
                    onClick={() => setOpen(false)}
                >
                    <IoClose />
                </div>
            </div>
        </>
    )
}