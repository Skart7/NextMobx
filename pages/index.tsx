import type { NextPage } from 'next'
import TextField from '../components/pages/home/textfield'
import TodoWrapper from '../components/pages/home/wrapper'

const Home: NextPage = () => {

  return (
    <div className="container">
      <TextField/>
      <TodoWrapper/>
    </div>
  )
}

export default Home
