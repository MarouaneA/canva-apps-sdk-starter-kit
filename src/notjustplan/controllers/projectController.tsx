import { Button, Rows, Title, NumberInput, Columns, Column, SegmentedControl, Select} from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import { planTypes } from "../elements/planTypes"
import * as React from "react";


export const ProjectController = ({onDataChange}) => {
    interface ProjectControllerProps {
      onDataChange: (type:string ,data:any) => void;
    }


    const createChangeHandler = (type, handler) => (value) => {
      handler(type, value) ;
  };
 

  return (
    <Rows spacing="1u">

      <Title
        alignment="start"
        capitalization="default"
        size="xsmall">
        Unit
      </Title>
      <SegmentedControl
        options={[
          {
            label: 'Meters',
            value: 'meters'
          },
          {
            label: 'Feet',
            value: 'feet'
          }
        ]}
        onChange={createChangeHandler("unit",onDataChange)}
      />
      <Title
        alignment="start"
        capitalization="default"
        size="xsmall">
        Project type
      </Title>
      
      <Select options={planTypes} onChange={createChangeHandler("type",onDataChange)} stretch /> 

      <Columns
        align="start"
        alignY="start"
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
            onChange={createChangeHandler("length",onDataChange)}
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
