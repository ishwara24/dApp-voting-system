// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "@remix-run/react";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <img src="/images/logo.png" alt="logo" className="w-32" />
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <Link to="/market" className="text-white text-base text-center mx-2 cursor-pointer">Market</Link>
                <Link to="/exchange" className="text-white text-base text-center mx-2 cursor-pointer">Exchange</Link>
                <Link to="/tutorials" className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</Link>
                <Link to="/wallets" className="text-white text-base text-center mx-2 cursor-pointer">Wallets</Link>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
            <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">@kryptomastery2022</p>
            <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
    </div>
);

export default Footer;
