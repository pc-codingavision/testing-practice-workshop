function factorial(num) {

if ( arguments.length != 1 || num < 0) {return null}

var result = 1;

for (i=num;i>1;i--) {
  result = result * i;
}

return result;

}

module.exports = factorial;

