const { getTotal, addEmail } = require("../queries");

exports.getAllUsers = async (req, res) => {
  try {
    const data = await getTotal();
    res.status(200).send({ totalUsers: data });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

exports.registerUser = async (req, res) => {
  try {
    await addEmail(req.body.email);
    res.status(201).send({ message: "Successfully signed up to the Newsletter" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};
