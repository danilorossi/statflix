import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'

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
    <div  style={{
      padding: '10%',
      margin: '10%',
      color: 'white',
      border: '5px solid rgba(222, 59, 48, 0.5)',
      borderRadius: '10px',
      cursor: 'pointer',
    }} {...getRootProps()}>
      <input {...getInputProps()} />
      <p style={{ fontSize: '1.5em', color: '#555' }}>Drop Netflix viewing history CSV file, or click to select files</p>
    </div>
  )
}
