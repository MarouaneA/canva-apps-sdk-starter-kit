import { Button, Title,  NumberInput, Columns, Column, Select } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import { doorTypes } from '../elements/doorTypes';

import * as React from "react";


export const DoorController = () => {

  const addDoor = () => {
    addNativeElement({
      type: "TEXT",
      children: ["Door"],
    });
  };

 
  return (


        <Columns
          align="start"
          alignY="end"
          spacing="1u"
        >
          <Column width="1/3">
            <Title
              alignment="start"
              capitalization="default"
              size="xsmall">
              Type
            </Title>
          <Select options={doorTypes} /> 
          </Column>
          <Column width="1/3">
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
          <Column width="1/3">
            <Button variant="primary" onClick={addDoor} stretch>
              Add
            </Button>
          </Column>
        </Columns>

      
  );
};
