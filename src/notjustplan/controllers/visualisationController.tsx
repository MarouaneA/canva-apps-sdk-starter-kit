import { addNativeElement } from "@canva/design";

export let visualisationController = () => {}
  
export const addElement = (data) => {

      addNativeElement({
        type: "TEXT",
        children: [JSON.stringify(data)],
      })

      addNativeElement({    
        type: "SHAPE",
        paths: [
          {
            d: "M 0 0 H 100 V 2 H 0 L 0 0",
            fill: {
              color: "#000000",
            },
          },
          {
            d: "M 0 0 H 2 V 10 H 0 L 0 0",
            fill: {
              color: "#000000",
            },
          },
          {
            d: "M 98 0 H 100 V 10 H 98 L 98 0",
            fill: {
              color: "#000000",
            },
          },
          {
            d: "M 0 8 H 100 V 10 H 0 L 0 8",
            fill: {
              color: "#000000",
            },
          },
        ],
        viewBox: {
          height: 10,
          width: 100,
          left: 0,
          top: 0,
        },
    })}
