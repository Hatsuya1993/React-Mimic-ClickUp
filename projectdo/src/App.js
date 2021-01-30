import React, {useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading/Heading'
import Options from './components/Options/Options'
import Filter from './components/Filter/Filter'
import MainContent from './components/MainContent/MainContent'
import './App.css'
import * as AiIcons from "react-icons/ai";
import SideBarRightNavContent from './components/SideBarRightNavContent/SideBarRightNavContent'
import CreateTask from "./components/CreateTask/CreateTask"
import CreateTaskDepend from "./components/CreateTaskDepend/CreateTaskDepend"

function App() {

  const [addDetails, setAddDetails] = useState(false)
  const [darkenPopUp, setDarkenPopUp] = useState(false)
  const [createTask, setCreateTask] = useState(false)
  const [createTaskDepend, setCreateTaskDepend] = useState(false)
  const [task, setTask] = useState()
  const [remove, setRemove] = useState('')

  const showAddDetails = () => {
      setAddDetails(!addDetails)
  }

  const showCreateTask = () => {
    setCreateTask(!createTask)
  }

  const handleCreateTaskDepend = () => {
    setCreateTaskDepend(!createTaskDepend)
  }

  let createTaskDependRef = useRef()

  useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(!createTaskDependRef.current.contains(event.target)){
            setCreateTaskDepend(false)}
        })
  },)

  return <>
  <main className={darkenPopUp ? "darkenPopUp" : ""}>
  <div className={createTaskDepend ? "popUp" : ""}>
  <nav className={addDetails ? 'nav-showAddDetails-active' : 'nav-showAddDetails'}>
  <SideBarRightNavContent setDarkenPopUp={setDarkenPopUp}/>
  <AiIcons.AiFillCloseCircle className='AiOutlineCloseCircle' onClick={showAddDetails}/>
  </nav>
  <Heading />
  <Options showAddDetails={showAddDetails} showCreateTask={showCreateTask}/>
  <Filter />
  <MainContent setRemove={setRemove} taskData={task}/>
  <div className={createTask ? "createTask-active" : "createTask-not-active"}>
  <CreateTask remove={remove}  setTask={setTask} handleCreateTaskDepend={handleCreateTaskDepend}/>
  </div>
  </div>
  <div ref={createTaskDependRef} className="hide" className={createTaskDepend ? "createTaskDepend-active" : "createTaskDepend-not-active"}>
  <CreateTaskDepend />
  </div>
  </main>


  </>
}

export default App;
