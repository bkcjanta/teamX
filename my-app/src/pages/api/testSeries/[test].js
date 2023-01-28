import Exam from "@/models/test.model";
import User from "@/models/users.model";
import { connectDatabase } from "../../../../utils/db";
import protectWith from "../../../middleware/protectWith";
import roleChecker from "../../../middleware/roleChecker";

connectDatabase();

const handler = async (req, res) => {
  let { test } = req.query;
  test = "63d5332c371a6af8b531c68c";

  //give test series Data according to user
  const testSreies = await User.find({ _id: req.user._id, test_series: {} });

  if (!testSreies) {
    return res.status(400).json({
      success: false,
      data: "You don't have test series in your account first buy test series",
    });
  }

  res.status(201).json({
    success: true,
    data: testSreies.test_series,
  });
};

export default protectWith(roleChecker(handler, "user"));
