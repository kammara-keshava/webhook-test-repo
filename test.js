function calculateAverage(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

function getUserName(user) {
 return user.name.toLowerCase();
}

module.exports = {
  calculateAverage,
  getUserName
};
