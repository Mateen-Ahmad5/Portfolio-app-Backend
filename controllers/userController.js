import usermodels from "../models/usermodels.js";

const createUserController = async (req, res) => {
  try {
    const { company, startDate, endDate, description } = req.body;

    // checkvalidaton
    if (!company || !startDate || !endDate || !description) {
      return res
        .status(400)
        .send({ sucess: false, message: " All field is required" });
    }

    // adding user in database
    const experience = await usermodels.create({
      company,
      startDate,
      endDate,
      description,
    });

    res
      .status(201)
      .send({ sucess: true, message: "user create sucessfully", experience });
  } catch (error) {
    res
      .status(400)
      .send({
        sucess: false,
        message: "error in  createUserController",
        error,
      });
  }
};

const getAllUserController = async (req, res) => {
  try {
    // get all user in database
    const experience = await usermodels.find({});

    res
      .status(200)
      .send({ sucess: true, message: "all user fetch sucessfully", experience });
  } catch (error) {
    res
      .status(400)
      .send({
        sucess: false,
        message: "error in  getAllUserController",
        error,
      });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { experienceId } = req.params;

    // delete user data database
    const experience = await usermodels.findByIdAndDelete(experienceId);
    if (!experience) {
      return res
        .status(400)
        .send({ sucess: false, message: " user does not exit" });
    }

    res
      .status(200)
      .send({ sucess: true, message: "user deleted sucessfully", experience });
  } catch (error) {
    res
      .status(400)
      .send({
        sucess: false,
        message: "error in  deleteUserController",
        error,
      });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { experienceId } = req.params;
    const { company, startDate, endDate, description } = req.body;


    // user update  data database
    const experience = await usermodels.findById(experienceId);
    if (!experience) {
      return res
        .status(400)
        .send({ sucess: false, message: " user does not exit" });
    }
    if (company) experience.company = company;
    if (startDate) experience.startDate = startDate;
    if (endDate) experience.endDate = endDate;
    if (company) experience.description = description;

    await experience.save();

    res
      .status(200)
      .send({
        sucess: true,
        message: "user updated deatail sucessfully",
        experience,
      });
  } catch (error) {
    res
      .status(500)
      .send({
        sucess: false,
        message: "error in  updateUserController",
        error,
      });
  }
};

export {
  createUserController,
  getAllUserController,
  deleteUserController,
  updateUserController,
};
