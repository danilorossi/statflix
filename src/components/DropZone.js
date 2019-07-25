import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CUSTOM_RED } from '../globals/colors';
import HorizontalDivider from './HorizontalDivider';

export default function MyDropzone({ onComplete }) {

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const binaryStr = reader.result
      onComplete(binaryStr)
    }

    acceptedFiles.forEach(file => reader.readAsText(file))
  }, [ onComplete ])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="dropzone" style={styles.dropZone} {...getRootProps()}>
      <input { ...getInputProps() } />
      <p>Drop Netflix viewing history CSV file</p>
      <HorizontalDivider text="OR" />
      <p>click to select the file</p>
    </div>
  )
};

const styles = {
  dropZone: {
    padding: '5%',
    margin: '10% 10% 0',
    color: 'lightgrey',
    fontSize: '1em',
    border: '5px solid rgb(222, 59, 48)',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};
