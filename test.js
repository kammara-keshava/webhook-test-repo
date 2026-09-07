function calculateAverage(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

function getUserName(user) {
  return user.name.toUpperCase();
}

module.exports = {
  calculateAverage,
  getUserName
};
