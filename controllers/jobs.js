const getAllJobs = async (req, res) => {
  res.send("getting all jobs");
};

const getJob = async (req, res) => {
  res.send("get job");
};

const createJob = async (req, res) => {
  res.send("Creating job");
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

module.exports = {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
};
