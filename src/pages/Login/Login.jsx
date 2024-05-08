import React, { useEffect, useState } from 'react'
import './login.css'
import { auth, login, signUp } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import netflix_spinner from '../../assets/netflix_spinner.gif'


function Login() {

  const [signState, setSignState] = useState('Sign In')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const userAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (signState === 'Sign In') {
      await login(email, password)
    } else {
      await signUp(name, email, password)
    }
    setLoading(false)
  }


  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('Logged In')
        navigate('/')
      } else {
        console.log('Logged Out')
        navigate('/login')
      }
    })
  }, [])

  return (
    loading ?
      <div className='w-ful h-[100vh] flex items-center justify-center'>
        <img className=' w-16' src={netflix_spinner} alt="" />
      </div>
      :
      <div className=' h-[100vh] background py-[15px] md:py-5 px-[5%] md:px-[8%]'>
        <h1 className=' text-center md:text-left text-2xl text-red-600 font-bold'>
          NETI
        </h1>
        <div className=' w-full max-w-[450px] backgroundrgba rounded p-16 mt-8 md:mt-0  m-auto'>
          <h1 className=' text-2xl font-medium mb-7'>{signState}</h1>
          <form>
            {signState === 'Sign Up' ? (
              <input
                className=' bg-[#333] w-full h-14 text-white my-3 mx-0 outline-none rounded py-4 px-5 text-xs font-medium'
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )
              : <></>
            }
            <input
              className=' bg-[#333] w-full h-14 text-white my-3 mx-0 outline-none rounded py-4 px-5 text-xs font-medium'
              type="text"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className=' bg-[#333] w-full h-14 text-white my-3 mx-0 outline-none rounded py-4 px-5 text-xs font-medium'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className=' w-full border-0 outline-0 p-4 mt-4 bg-red-700 font-medium rounded cursor-pointer ' onClick={userAuth}>{signState}</button>
            <div className=' flex items-center justify-between text-[#b3b3b3] text-[14px] mt-6'>
              <div className='flex items-center gap-3'>
                <input type="checkbox" className=' h-4 w-4' />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className=' mt-10 text-[#737373]'>
            {signState === 'Sign In' ? <p>New To Netflix? <span className=' ml-2 text-white font-medium cursor-pointer' onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p> :
              <p>Already have an Account? <span className=' ml-2 text-white font-medium cursor-pointer' onClick={() => setSignState('Sign In')}>Sign In Now</span></p>
            }
          </div>
        </div>
      </div>
  )
}

export default Login
