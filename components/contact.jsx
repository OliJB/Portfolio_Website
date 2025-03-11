'use client';
import EmailLink from "./emailLink";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Contact = () => {
    return (
    <>
        <div className="pb-20 lg:pb-60 items-center justify-center flex flex-col pt-20 bg-black text-white w-full 2xl:text-xl">
            <h1 className="mb-5">Contact</h1>
            <span className="flex flex-col justify-center items-center ">
            <EmailLink email="oliver.bradbury@icloud.com" />
            &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="https://github.com/OliJB" className="text-cyan-400" target="_blank">Github</Link>&nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="https://www.linkedin.com/in/oliver-bradbury-88623224a/" className="text-cyan-400" target="_blank">Linkedin</Link>
                <ToastContainer />
            </span>
        </div>

        <div className="mt-auto text-white font-montserrat text-xs bg-black pb-3 flex items-center justify-center flex-col sm:flex-row">
            <p>© 2025 Oliver Bradbury.&nbsp;</p>
            <p>Powered by caffeine and code.</p>
        </div>

    </>
    )
}

export default Contact