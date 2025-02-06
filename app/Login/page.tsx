"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import {useSearchParams} from "next/navigation";

export default function LoginPage() {
    const searchParams = useSearchParams();
    const isRegister = searchParams.get("register") !== null;
    const isForgot = searchParams.get("forgot") !== null;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header at the top */}
            <Header/>

            {/* Main content */}
            <div className="flex-grow flex flex-col items-center justify-center">
                {/* Centered Logo */}
                {/*<Image*/}
                {/*  src="/aranest-cut.png"*/}
                {/*  alt="Aranest Logo" */}
                {/*  height={200} */}
                {/*  width={200} */}
                {/*  className="mb-8 mt-4"*/}
                {/*/>*/}

                {/* Login, Register, or Forgot Password Form */}
                <div className="flex justify-center items-center w-full mb-20 pr-6 pl-6 rounded">
                    {isForgot ? (
                        <ForgetPassword/>
                    ) : isRegister ? (
                        <Register/>
                    ) : (
                        <Login/>
                    )}
                </div>
            </div>

            {/* Footer at the bottom */}
            <Footer/>
        </div>
    );
}
