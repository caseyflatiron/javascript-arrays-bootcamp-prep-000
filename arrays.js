var chocolateBars = ['snickers', 'hundred grand', 'kitkay', 'skittles'];

var n = 'hersheys';

function addElementToBeginningOfArray(chocolateBars, n){
  return [n,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, n){
  // chocolateBars = [n,...chocolateBars]
  chocolateBars.unshift(n);
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, n){
  return [...chocolateBars, n]
}

function destructivelyAddElementToEndOfArray(chocolateBars, n){
  // chocolateBars = [...chocolateBars, n]
  chocolateBars.push(n);
  return chocolateBars
}

function accessElementInArray(chocolateBars, i){
  return chocolateBars[i]
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1)
}