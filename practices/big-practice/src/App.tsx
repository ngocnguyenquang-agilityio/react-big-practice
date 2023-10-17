import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1>
      <div className='bg-black'>
        <Button variant='secondary' disabled>Click me</Button>
      </div>
      <Button>Click me</Button>
      <Button size='lg' disabled>Click me</Button>
      <Button size='xl'>Click me</Button>
    </>
  )
}

export default App
