import React from 'react'
import FacebookLogo from "../images/facebook.png"
import Container from '../components/Container'


function Login() {
    return (
        <Container>
            <div className="bg-gray-100 h-full flex flex-col place-items-center place-content-center">
                <h1 className="text-6xl font-bold text-center w-1/2 mb-8 bg-yellow-800" >Welcome Back!</h1>
                <div className="flex flex-col justify-center items-center z-40" >
                    {/* onSubmit={handleLogin} */}
                    <form action="" className="flex flex-col justify-center">
                        <div className="flex flex-row place-items-center place-content-center mb-4 px-4 py-2 rounded-lg text-lg text-gray-500 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="focus:bg-white" style={{ width: '280px' }} type="email" name="email" id="" placeholder="Email Address" />
                        </div>
                        <div className="flex flex-row place-items-center place-content-center mb-4 px-4 py-2 rounded-md text-lg text-gray-500 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input className="focus:bg-white" style={{ width: '280px' }} type="password" name="password" id="" placeholder="Password" />
                        </div>
                        <p className="text-lg text-yellow-800 mb-4 text-center" style={{ color: '#rgba(48, 66, 158, 0.9)' }}>Forgot password?</p>
                        <button type="submit" className="bg-yellow-700 text-2xl text-white rounded-xl p-4 w-full">Sign in</button>
                    </form>
                    <div className="mb-8 flex flex-col rounded-md justify-center items-center" style={{ fontSize: '18px' }}>
                        <p className="text-xl text-yellow-800 mt-8"> Sign in with </p>
                        <div className="flex flex-row justify-between items-center mt-4">
                            <button><img src={FacebookLogo} alt="sign in with facebook" className="w-12 h-12" /></button>
                            <button> <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="sign in with google" className="w-12 h-12 ml-6" /></button>
                        </div>
                    </div>
                    <a href="/signup" className="text-xl text-yellow-800">Don't have an account? <span className="font-base text-yellow-800 underline">Sign up</span></a>
                </div>
            </div>
        </Container >
    )
}

export default Login
