import { diverseTypes } from './diverseTypes';
import { doorTypes } from './doorTypes';
import { wallTypes } from './wallTypes';
import { windowTypes } from './windowTypes';

export const elementTypes = [
    { label: "Wall", value:"wall" , element: wallTypes },
    { label: "Door", value:"door" , element: doorTypes},
    { label: "Window", value:"window" , element: windowTypes},
    { label: "Other", value:"other" ,element: diverseTypes },
];
