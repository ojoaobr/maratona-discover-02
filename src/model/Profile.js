let data = {
  name: "João Pedro",
  avatar: "https://github.com/ojoaobr.png",
  "monthly-budget": 5000,
  "hours-per-day": 8,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hour": 80,
};

module.exports = {
  get() {
    return data;
  },
  update(newData) {
    data = newData;
  },
};
