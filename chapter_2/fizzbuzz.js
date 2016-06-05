function fizzbuzz(limit) {
  for (var i = 1; i <= limit; i++) {
    var output = '';
    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }

    if (output.length === 0) {
      output = i.toString();
    }

    console.log(output);
  }
}

fizzbuzz(100);
