import { connectDatabase } from "../../../../utils/db";
import protectWith from "../../../middleware/protectWith";
import roleChecker from "../../../middleware/roleChecker";

connectDatabase();

const handler = async (req, res) => {
  res
    .status(200)
    .json({ name: "testing with protectter and user with role teamX" });
};

export default protectWith(roleChecker(handler, "user"));
