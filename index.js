const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleString(string){
  let newString = '';
  for (const i in string){
    if (i == 0){
      newString += string[i].toUpperCase();
    }
    else if (string[i-1] == ' '){
      newString += string[i].toUpperCase()
    }
    else{
      newString += string[i];
    }
  }
  return newString
}

const titleCased = () => {
  return tutorials.map(function (element){
    return titleString(element);
  })
}
