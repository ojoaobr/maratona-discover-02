let data = [
  {
    id: 1,
    name: "Framework",
    "daily-hours": 6,
    "total-hours": "6000",
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: "Pizzaria",
    "daily-hours": 4,
    "total-hours": "20",
    createdAt: Date.now(),
  },
];

module.exports = {
  get() {
    return data;
  },
  update(newJob) {
    data = newJob;
  },
  delete(id) {
    data = data.filter((job) => Number(job.id) !== Number(id));
  },
};
