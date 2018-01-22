function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  // This is it! Recursion!!
  return n * factorial(n - 1);
}

factorial(10)


function factorial(n) {
  if (n < 0) {
    // Termination condition to prevent infinite recursion
    console.log("negative number is not allowed")
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // Recursive case
  return n * factorial(n -1);
}

factorial(-1);
factorial(5);

function growBeanstalk(years) {
  if (years <= 0) {
    return 0;
  }
  else if (years <= 2) {
    return 1;
  }
  return growBeanstalk(years - 1) + growBeanstalk(years - 2);
}

growBeanstalk(5);