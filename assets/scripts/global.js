import EventListener from "./event_listener"
const global = global || [];
global.event = EventListener([]);
export default global;