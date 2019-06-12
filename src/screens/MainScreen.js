import React from 'react';
import { Grid } from 'semantic-ui-react'
import DropZone from '../components/DropZone';
import FAQ from '../components/FAQ/FAQ';


export default function MainScreen({ onFileUploaded }) {
  return (
    <Grid columns={1}>

      <Grid.Column>
        <DropZone onComplete={onFileUploaded}/>
      </Grid.Column>

      <Grid.Column textAlign='left'>
        <FAQ> </FAQ> 
      </Grid.Column>

    </Grid>
  );
};
