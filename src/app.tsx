import { Button, Rows, Title, SegmentedControl, NumberInput, Columns, Column, Box, Select, } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import { DoorController } from "./notjustplan/controllers/doorController";
import { WindowController } from "./notjustplan/controllers/windowController";
import { WallController } from "./notjustplan/controllers/wallController";
import { DiverseController } from "./notjustplan/controllers/diverseController";
import { elementTypes } from './notjustplan/elements/elementTypes'

import * as React from "react";
import styles from "styles/components.css";

export const App = () => {

  const [elementToAdd, setElementToAdd] = React.useState<any | null>()

  const onClick = () => {
    addNativeElement({
      type: "TEXT",
      children: ["UN PLAN"],
    });
  };


  const addElement = () => {
    addNativeElement({
      type: "TEXT",
      children: ["UN PLAN"],
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
        <Title
          alignment="start"
          capitalization="default"
          size="xsmall">
          Number of floors
        </Title>
        <NumberInput defaultValue={1} />

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
              label: 'Yard',
              value: 'yard'
            }
          ]}
        />
        <Button variant="primary" onClick={onClick} stretch>
          Initialize blueprint
        </Button>
        <Title
          alignment="start"
          capitalization="default"
          size="small">
          Add Element to plan
        </Title>

        <Select id="element" options={elementTypes} onChange={setElementToAdd} stretch />
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
              {elementToAdd}
        </Box>
    


        <Button variant="primary" onClick={addElement} stretch>
          Add element
        </Button>
      </Rows>
    </div>
  );
};
