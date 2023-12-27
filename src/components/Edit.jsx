import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Edit = ({task, setTask}) => {
  let navigate = useNavigate()
  let param = useParams()

 const findIndex = (id) => { //index finder
     for(let i = 0; i< task.length; i++){
        if(id === task[i].id){
           return i
        }
     }
  };

  let id = Number(param.id)
  let index = findIndex(id)

  let [name, setName] = useState("");
  let [description, setDescription] = useState("")
  let [isCompletion, setIsCompletion] = useState(task[index].isCompletion)

  const handleEdit = ()=>{
    // let id = Number(param.id)
    // let index = findIndex(id)
    let newArray = [...task] //deep copy Achieve Immutability

    newArray.splice(index, 1,{
      id,
      name,
      description,
      isCompletion,
    })
    setTask(newArray)
    navigate('/home/all')
  }
  

  const getData = () => {
    setName(task[index].name)
    setDescription(task[index].description)
    setIsCompletion(task[index].isCompletion)
  }
  useEffect(()=>{
    getData()
  },[])


  return (
   <>
    <h1 className="text-center HeaderColor">Edit Todo</h1>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-sm-1 g-1">
            <div className="col col-md-6 mt-3">
              <div className="">
                <input placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
              </div>
            </div>
            <div className="col col-lg-6 mt-3">
              <div className="">
                <input placeholder="Todo Description" value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" />
              </div>
            </div>
            <div className="col col-lg-12 col-md-12 col-sm-12 mt-3">
              <div className="">
                <button type="button" onClick={()=> handleEdit()} className="btn btn-info mt-3">
                  Save Todo
                </button> &nbsp;
                <button type="button" onClick={()=> handleDerection()} className="btn btn-warning mt-3">
                  <Link to={'all'}>Cancel Todo</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Edit