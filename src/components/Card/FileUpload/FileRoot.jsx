import { useState } from "react"
import FileUpload from "./FileUpload"
import FileList from "./FileList"

const FileRoot = () => {

    const [files, setFiles] = useState([{
        name:'myFile.pdf'}
    ])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }


  return (
    <div>
        <p className="title">Upload file</p>
      <FileUpload files={files} setFiles={setFiles} 
      removeFile={removeFile}
       />
      <FileList files={files} removeFile={removeFile} />
      </div>
  )
}

export default FileRoot