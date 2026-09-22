function add(first, second) {
  return first + second;
}

function health() {
  return {
    status: "healthy",
    service: "deep-heal-demo-app",
  };
}

module.exports = { add, health };

if (require.main === module) {
  console.log(health());
}
