import { Button, Title,  NumberInput, Columns, Column, Select, Rows} from "@canva/app-ui-kit";
import { elementTypes} from '../elements/elementTypes'

import * as React from "react";

interface ElementControllerProps {
  chosenType: any;
  onDataChange: (data:any) => void;
}

//     <Select options={chosenType} stretch/> 
export const ElementController = ({ chosenType, onDataChange }) => {
  
  const handleDataChange = () => {
    const data ={
    type :"test"
  };
  onDataChange(data);
};

  return (
    <Rows spacing="1u">
    <Title
        alignment="start"
        capitalization="default"
        size="xsmall">
        Type
      </Title>
      <Select options={chosenType} onChange={handleDataChange} stretch/>


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
              min={0}
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
            />
          </Column>
    </Columns>
    </Rows>

      
  );
};
