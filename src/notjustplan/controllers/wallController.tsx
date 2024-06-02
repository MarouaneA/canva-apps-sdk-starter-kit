import { Button, Title,  NumberInput, Columns, Column, Select } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import { wallTypes } from '../elements/wallTypes';

import * as React from "react";


export const WallController = () => {

  const addWall = () => {
    addNativeElement({
      type: "TEXT",
      children: ["WALL"],
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
              Length
            </Title>
            <NumberInput
              defaultValue={1}
              min={0}
            />
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
            <Button variant="primary" onClick={addWall} stretch>
              Add
            </Button>
          </Column>
        </Columns>

      
  );
};
