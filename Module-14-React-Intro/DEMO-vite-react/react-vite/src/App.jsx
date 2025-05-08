
import { StaticDataComponent } from './components/Fetch/1-StaticDataComponent'
import { FetchDataComponent } from './components/Fetch/2-FetchDataComponent'


import { StaticTodo } from './components/Todos/1-Static-Todo'
import { ClassTodos } from './components/Todos/2-Class-Todo'
import { HooksToDo } from './components/Todos/3-Hooks-Todo'


import './App.css'

function App() {

  return (
    <>
      <h1>React Vite</h1>

      <ClassTodos />
      <HooksToDo />
     
    </>
  )
}

export default App
