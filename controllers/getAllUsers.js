import getLogger from "../lib/log";
import usersService from "../services/usersSvc";

const logger = getLogger(module);
const log = logger.debug;
const getAllUsers = usersService.getAllUsers;

async function getUsers() {
  const allUsers = await getAllUsers();

  log("getUsers", allUsers);
  this.body = allUsers;
}

export default getUsers;
