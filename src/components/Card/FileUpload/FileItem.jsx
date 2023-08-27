/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



// eslint-disable-next-line react/prop-types
const FileItem = ({ file, deleteFile }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.name}>
                <p>{file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                  
                </div>
            </li>
        </>
    )
}

export default FileItem;