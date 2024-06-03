import { Button, Rows, Title, SegmentedControl, NumberInput, Columns, Column, Box, Select, } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import { elementTypes } from './notjustplan/elements/elementTypes'

import * as React from "react";
import styles from "styles/components.css";
import { ProjectController } from "./notjustplan/controllers/projectController";
import { ElementController } from "./notjustplan/controllers/elementController";

export const App = () => {

  const [elementToAdd, setElementToAdd] = React.useState<any | null>()
  const [elementData, setElementData] =  React.useState<any | null>()

  const handleElementData = (data: any) => {
    console.log(data)
    setElementData(data)
  }

  const addElement = () => {
    addNativeElement({
      type: "TEXT",
      children: [elementData.type],
    });
  };



  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Title
          alignment="start"
          capitalization="default"
          size="small">
          About your project
        </Title>
     
        <Box
          alignItems="center"
          background="tabdock"
          border="standard"
          borderRadius="large"
          display="block"
          flexDirection="column"
          flexWrap="noWrap"
          justifyContent="center"
          padding="1.5u"
          paddingTop="1.5u"
        >
               <ProjectController />
        </Box>
    
       

        <Title
          alignment="start"
          capitalization="default"
          size="small">
          Add Element to plan
        </Title>

        <Select id="element" options={elementTypes} onChange={setElementToAdd} stretch />

        <Title
          alignment="start"
          capitalization="default"
          size="xsmall">
          Properties
        </Title>

        <Box
          alignItems="center"
          background="tabdock"
          border="standard"
          borderRadius="large"
          display="block"
          flexDirection="column"
          flexWrap="noWrap"
          justifyContent="center"
          padding="1.5u"
          paddingTop="1.5u"
        >
          {elementToAdd ? 
          <ElementController chosenType={elementToAdd}  onDataChange={handleElementData}/>
          : 'Chose an element to add'}
             
        </Box>
    


        <Button variant="primary" onClick={addElement} stretch>
          Add element
        </Button>
      </Rows>
    </div>
  );
};
