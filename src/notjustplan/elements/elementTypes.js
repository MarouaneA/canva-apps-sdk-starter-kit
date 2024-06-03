import { diverseTypes } from './diverseTypes';
import { doorTypes } from './doorTypes';
import { wallTypes } from './wallTypes';
import { windowTypes } from './windowTypes';

export const elementTypes = [
    { label: "Wall", value: wallTypes },
    { label: "Door", value: doorTypes},
    { label: "Window", value: windowTypes},
    { label: "Other", value: diverseTypes },
];
