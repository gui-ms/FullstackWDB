import saveUser from "./saveUser"
import getAll from "./getAll"
import removeUser from "./removeUser"

//Facade pattern: through here we can access all our backend functions

export default class Backend {
    static readonly users = {
        saveUser,
        getAll,
        removeUser,

    }
}