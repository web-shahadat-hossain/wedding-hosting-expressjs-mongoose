const Service = require("../Model/Service.model");

module.exports.getService = async (req, res) => {
  try {
    const service = new Service(req.body);

    const result = await service.save();

    res.send({
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      error: err.message,
    });
  }
};
