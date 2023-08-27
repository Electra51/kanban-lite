/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios'
import FileItem from './FileItem';

const FileList = ({ files, removeFile }) => {
    // console.log(files)
    const deleteFileHandler = (_name) => {
        axios.delete(`https://kanban-lite-server.vercel.app/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files && files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </ul>
    )
}

export default FileList