// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    return cats.push(name)
}

const destructivelyPrependCat = function (name){
    return cats.unshift(name)
}

const destructivelyRemoveLastCat = function (){
    return cats.pop()
}
const destructivelyRemoveFirstCat = function(){
    return cats.shift()
}
function appendCat(name){
    return [...cats, name]
}
function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    return cats.slice(0,-1)
}

function removeFirstCat(){
    return cats.slice(1)
}

 

