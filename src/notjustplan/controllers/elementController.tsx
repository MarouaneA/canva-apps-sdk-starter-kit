import { Button, Title,  NumberInput, Columns, Column, Select, Rows} from "@canva/app-ui-kit";
import { elementTypes} from '../elements/elementTypes'

import * as React from "react";

interface ElementControllerProps {
  chosenType: any;
  onDataChange: (type:string ,data:any) => void;
}


export const ElementController = ({ chosenType, onDataChange }) => {

  const createChangeHandler = (type, handler) => (value) => {
    handler(type, value) ;
};
  

  const getElementTypes = (value) => {
    const found = elementTypes.find(item => item.value === value);
    return found ? found.element : null;
  }
 
  
  return (
    <Rows spacing="1u">
    <Title
        alignment="start"
        capitalization="default"
        size="xsmall">
        Type
      </Title>
      <Select options={getElementTypes(chosenType)} onChange={createChangeHandler("type",onDataChange)} stretch/>


    <Columns
      align="start"
      alignY="end"
      spacing="1u"
    >

<Column width="1/2">
            <Title
              alignment="start"
              capitalization="default"
              size="xsmall">
              Length
            </Title>
            <NumberInput 
              defaultValue={1}
              min={0} onChange={createChangeHandler("length",onDataChange)}
            />
          </Column>
          <Column width="1/2">
            <Title
              alignment="start"
              capitalization="default"
              size="xsmall">
              Width
            </Title>
            <NumberInput
              defaultValue={1}
              min={0}
              onChange={createChangeHandler("width",onDataChange)}
            />
          </Column>
    </Columns>
    </Rows>

      
  );
};
