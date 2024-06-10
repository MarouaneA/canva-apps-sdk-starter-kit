import { Button, Rows, Title, SegmentedControl, NumberInput, Columns, Column, Box, Select, } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import { elementTypes ,} from './notjustplan/elements/elementTypes'
import { addElement} from './notjustplan/controllers/visualisationController'

import * as React from "react";
import styles from "styles/components.css";
import { ProjectController } from "./notjustplan/controllers/projectController";
import { ElementController } from "./notjustplan/controllers/elementController";



export const App = () => {

  const [projectSetup , setProjectSetup] = React.useState<any | null>({
    "unit" : "",
    "type" : "",
    "length" : 1,
    "width" : 1
  })
  const [elementToAdd, setElementToAdd] = React.useState<any | null>()
  const [elementData, setElementData] =  React.useState<any | null>({
    "generic" : "",
    "type" : "",
    "length" : 1,
    "width" : 1
  })


  const handleElementData = (type:string, data: string) => {
        setElementData({...elementData, [type]: data})
  }

  const handleProjectData = (type:string, data: string) => {
    setProjectSetup({...projectSetup, [type]: data})
}

  const choseGeneric = (value)  => {
    setElementToAdd(value)
    handleElementData ("generic", value)
  }


  const initProject = () => {
    addNativeElement({
      type: "TEXT",
      children: [JSON.stringify(projectSetup)],
    });
  };

  const onclickElement = () => {
    addElement(elementData)
  }

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
               <ProjectController onDataChange={handleProjectData} />
        </Box>
        <Button variant="primary" onClick={initProject} stretch>
        Initialize blueprint
        </Button>
        <Title
          alignment="start"
          capitalization="default"
          size="small">
          Add Element to plan
        </Title>

        <Select options={elementTypes}  onChange={choseGeneric} stretch />

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
          {elementToAdd ?  <ElementController chosenType={elementToAdd}  onDataChange={handleElementData}/>
          : 'Chose an element to add'}
             
        </Box>
        <Button variant="primary" onClick={onclickElement} stretch>
          Add element
        </Button>
      </Rows>
    </div>
  );
};
