import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'
import { Divider } from 'semantic-ui-react'

export default function MyDropzone({ onComplete }) {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      onComplete(binaryStr)

    }

    acceptedFiles.forEach(file => reader.readAsText(file))
  }, [])
  const { getRootProps, getInputProps } = useDropzone({onDrop})

  return (
    <div className="dropzone" style={{
      padding: '10%',
      margin: '10% 10% 0',
      color: 'grey',
      fontSize: '1em',

      border: '5px solid rgb(222, 59, 48)',
      borderRadius: '10px',
      cursor: 'pointer',
    }} {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drop <span style={{ }}>NETFLIX VIEWING HISTORY CSV</span> file</p>
      <Divider style={{color:'#de3b30'}} horizontal>Or</Divider>
      <p>click to select the file</p>
    </div>
  )
}
