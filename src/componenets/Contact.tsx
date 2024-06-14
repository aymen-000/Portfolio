import { Button, Label, TextInput, Select, Textarea, Alert, Spinner } from "flowbite-react";
import data from '../data/data.json'
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FormEvent } from 'react';

export function Contact() {
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const public_key = import.meta.env.VITE_PUBLIC_KEY
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [service, setService] = useState('')
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const [loading, setLoading] = useState(false)

    const sentEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const obj = {
            from_name: name,
            to_name: "Aimen",
            message: "service: " + service + "\n" + message,
            from_email: email
        }
        emailjs.send(serviceId, templateId, obj, public_key).then(() => {
            setSuccess(true)
            setLoading(false)
            setFailure(false)
        }).catch(() => {
            setLoading(false)
            setFailure(true)
            setSuccess(false)
        })
    }

    return (
        <div className="w-full" id="contact">
            <div className="text-center my-4">
                <h1 className="font-inter text-3xl font-bold text-white">Contact Me</h1>
                <h2 className="font-poppins font-semibold text-[15px] gradient-text">Get In Touch</h2>
            </div>
            <div className="flex justify-center w-full items-center justify-items-center ">
                <form className="w-[50%] max-sm:w-[80%]" onSubmit={sentEmail}>
                    <div className="w-full mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" className="text-white" />
                        </div>
                        <TextInput value={email} onChange={(e) => { setEmail(e.target.value) }} className="border-[#D6DDED] bg-[#8987A1] rounded-lg " type="email" placeholder="name@domain.com" required shadow />
                    </div>
                    <div className="w-full mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" className="text-white" />
                        </div>
                        <TextInput value={name} onChange={(e) => { setName(e.target.value) }} className="border-[#D6DDED] bg-[#8987A1] rounded-lg" type="text" placeholder="name" required shadow />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block w-full">
                            <Label htmlFor="Service" className="text-white" value="Select your service" />
                        </div>
                        <Select onChange={(e) => { setService(e.target.value) }} className="w-full" required>
                            {data.fields.map((item) => {
                                return <option key={item}>{item}</option>
                            })}
                        </Select>
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" className="text-white" value="Your message" />
                        </div>
                        <Textarea value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Leave a you message..." required rows={4} />
                    </div>
                    <div className="w-full">
                        <Button type="submit" className="w-full my-2 ">
                            <div className="mx-2">
                                {loading && <Spinner />}
                            </div>
                            Get In Touch
                        </Button>
                    </div>
                    {
                        success && <div className="text-center my-2"> <Alert color="success">Email sent to Aimen Wail. He will reply to you shortly. </Alert></div>
                    }
                    {
                        failure && <div className="text-center my-2" > <Alert icon={HiInformationCircle} color="failure">Oops something happened, try again ... </Alert></div>
                    }
                </form>
            </div>
        </div>
    );
}

export default Contact

