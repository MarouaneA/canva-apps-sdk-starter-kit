import { DoorController } from "../controllers/doorController";
import { WindowController } from "../controllers/windowController";
import { WallController } from "../controllers/wallController";
import { DiverseController } from "../controllers/diverseController";

export const elementTypes = [
    { label: "Wall", value: WallController },
    { label: "Door", value: DoorController},
    { label: "Window", value: WindowController },
    { label: "Other", value: DiverseController },
];
