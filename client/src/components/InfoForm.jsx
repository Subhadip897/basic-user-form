import { useForm } from "react-hook-form";

import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";

import userInfo from "../APIs/userAPI";
import { useState } from "react";
import Alert from "./Alert";

export default function InfoForm() {
    const { register, handleSubmit, reset, formState: { errors} } = useForm();

    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const onSubmit = async (data) => {
        const response = await userInfo(data);

        reset();
        if(response){
            setMessage(response);
            setOpen(true);
        }
    }


    return (
        <>
            <div>
                <h1 className="text-center mb-5 text-xl font-bold text-slate-600 ">User Info</h1>
            </div>
            <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit((data) => onSubmit(data))}
            >
                <div className="bg-red-600">
                    {message && open && 
                        <Alert key={message} message={message} setOpen={setOpen} />
                    }
                </div>
                <div>
                    <div className="relative h-10 flex">
                        <span htmlFor="name" className="bg-red-400 px-3 h-full flex items-center rounded-s-md"><IoPersonSharp /></span>
                        <input
                            {...register("name", {
                                required: "Data required.",
                                pattern: {
                                    value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                                    message: "Invalid Name"
                                },
                                minLength: 4,
                            })}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter name"
                            className="py-1.5 outline-none pl-2 font-semibold w-auto sm:w-full rounded-e-md"
                        />
                    </div>
                    {errors.name && (
                        <p className="text-red-500 pt-1 text-sm sm:text-base">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <div className="relative h-10 flex">
                        <label htmlFor="email" className="bg-red-400 px-3 h-full flex items-center rounded-s-md"> <MdEmail /> </label>
                        <input
                            {...register("email", {
                                required: "Data required.",
                                pattern: {
                                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                    message: "Email not valid",
                                }
                            })}
                            // type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email Id"
                            className="py-1.5 outline-none pl-2 font-semibold w-auto sm:w-full rounded-e-md"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 pt-1 text-sm sm:text-base">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <div className="relative h-10 flex">
                        <label htmlFor="phone" className="bg-red-400 px-3 h-full flex items-center rounded-s-md"> <CgPhone /> </label>
                        <input
                            {...register("phone", {
                                required: "Data required.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Invalid phone number."
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Invalid phone number",
                                }
                            })}
                            name="phone"
                            id="phone"
                            placeholder="Enter phone number"
                            className="py-1.5 outline-none pl-2 font-semibold w-auto sm:w-full rounded-e-md"
                        />
                    </div>
                    {errors.phone && (
                        <p className="text-red-500 pt-1 text-sm sm:text-base">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <button className="mt-2 bg-blue-500 px-5 py-2 rounded-md font-semibold hover:bg-gray-900 hover:text-white">Submit</button>
                </div>
            </form>
        </>
    )
}