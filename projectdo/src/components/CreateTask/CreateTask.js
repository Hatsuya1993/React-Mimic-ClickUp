import React, {useState, useEffect, useRef, useReducer} from 'react'

import "./CreateTask.css"

import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";

import Flag from "../Flag/Flag"
import Tag from "../Tag/Tag"
import Wand from "../Wand/Wand"


function CreateTask({handleCreateTaskDepend, setTask, remove}) {

    const [flag, setFlag] = useState(false)
    const [tag, setTag] = useState(false)
    const [wand, setWand] = useState(false)
    const [title, setTitle] = useState('')
    const [titleContent, setTitleContent] = useState('')


    useEffect(() => {
    dispatch({type:'delete', payload: {remove}})
    }, [remove])

    function reducer(state, action) {
    switch(action.type) {
        case 'add':
        return [...state, newData(action.payload)]
        case 'delete':
        return state.filter(items => items.content != action.payload.remove)
    }
    }

    const newData = (data) => {
        return {name: data.title, content: data.titleContent}
    }

  const [state, dispatch] = useReducer(reducer, [])

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch({type:'add', payload: {title, titleContent}})
    setTitle('')
    setTitleContent('')
  }

  useEffect(() => {
      setTask(state)
  }, [state])

    const handleFlagClick = () => {
        setFlag(!flag)
    }

    const handleTagClick = () => {
        setTag(!tag)
    }

    const handleWandClick = () => {
        setWand(!wand)
    }

    let flagRef = useRef()
    let tagRef = useRef()
    let wandRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(!flagRef.current.contains(event.target)){
            setFlag(false)}
        })
    },)

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(!tagRef.current.contains(event.target)){
            setTag(false)}
        })
    },)

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(!wandRef.current.contains(event.target)){
            setWand(false)}
        })
    },)

    return (
        <div className="CreateTask">
            <form onSubmit={handleSubmitForm}>
            <div className="CreatTask-container">
            <div className="CreatTask-container-task">
            <p><RiIcons.RiCheckboxBlankFill /> <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="" id="" placeholder="Task name or type '/' for commands"/></p>
            <p><AiIcons.AiOutlineCloudDownload /> <AiIcons.AiOutlineClose /></p>
            </div>
            <div className="CreatTask-container-list">
            <div className="CreatTask-container-list-left">
            <div className="CreatTask-container-list-left-list">
            <p>In <input type="text" placeholder="List" name="" id=""/></p>
            </div>
            <div className="CreatTask-container-list-left-profile">
            <p>For</p> <p className="CreatTask-container-list-left-profile-MdSupervisorAccount"><RiIcons.RiAccountCircleLine /></p>
            </div>
            </div>
            <p className="CreatTask-container-list-right">2/2 <IoIcons.IoMdArrowDropdown /></p>
            </div>
            <div className='description-box'>
            <textarea value={titleContent} onChange={e => setTitleContent(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
            <p ><BsIcons.BsSlash className='BsSlash'/></p>
            </div>
            <div className="CreatTask-container-add">
            <p><AiIcons.AiFillPlusSquare /> Add subtask</p>
            <p><AiIcons.AiFillPlusCircle /> Add checklist</p>
            </div>
            <div className="CreatTask-container-attachments">
            <p>Attachments</p>
            <p className="CreatTask-container-attachments-IoMdArrowDropdown">Add <IoIcons.IoMdArrowDropdown /></p>
            </div>
            <div className="CreatTask-container-dragDrop">
            <p><AiIcons.AiOutlinePaperClip /> Drag & Drop files to attach or <span>Browse</span></p>
            </div>
            <div className="CreatTask-container-createTask">
            <div className="CreatTask-container-createTask-icons">
            <div ref={flagRef} className="CreatTask-container-createTask-icons-flag">
            <AiIcons.AiOutlineFlag onClick={handleFlagClick} />
            {flag ? <Flag className="CreatTask-container-createTask-icons-flag-icon"/> : ""}
            </div>
            <div >
            <AiIcons.AiOutlineCalendar />
            </div>
            <div ref={tagRef}className="CreatTask-container-createTask-icons-tag" >
            <AiIcons.AiOutlineTags onClick={handleTagClick}/>
            {tag ? <Tag className="CreatTask-container-createTask-icons-tag-icon"/> : ""}
            </div>
            <div className="CreatTask-container-createTask-icons-wand" ref={wandRef}>
            <ImIcons.ImMagicWand onClick={handleWandClick}/>
            {wand ? <Wand className="CreatTask-container-createTask-icons-wand-icon"/> : ""}
            </div>
            <div>
            <BsIcons.BsViewStacked onClick={handleCreateTaskDepend}/>
            </div>
            <div>
            <AiIcons.AiOutlineEye />
            </div>
            </div>
            <div className="CreatTask-container-createTask-right">
            <button type='submit'><p>Create Task <MdIcons.MdArrowDropUp /></p></button>
            </div>
            </div>
            </div>
            </form>
        </div>
    )
}

export default CreateTask
