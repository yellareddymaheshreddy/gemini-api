import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [prompt, setprompt] = useState('')
  const [response, setresponse] = useState('')
  const submit=async()=>{
    setresponse('Loading...')
    const response=await axios({
      url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API}`,
      method:'post',
      data:{"contents":[{"parts":[{"text":`${prompt} `}]}]}
    })
    setresponse(response.data.candidates[0].content.parts[0].text)
    console.log(response.data.candidates[0].content.parts[0].text)
  }

  return (
    <div class="relative w-full">
      
      <div class="relative isolate z-0 bg-white px-6 lg:px-8">
        <div class="relative mx-auto max-w-2xl py-4">
          <div class="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              ></path>
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Letter Generator !
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Powered by Gemini AI.
            </p>
            <div class="w-full ">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Give the Prompt here
              </label>
              <textarea name="" rows='5' value={prompt} onChange={(e)=>setprompt(e.target.value)} id="" className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-y'>

              </textarea>


            </div>
            <button onClick={submit} className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-3'>Generate letter</button>



          </div>
          <div className='w-full '>
            <pre className='text-left w-full text-wrap'>

            {response?(response):('')}
            </pre>
          </div>

        </div>
      </div>
    </div>

  )
}

export default App
