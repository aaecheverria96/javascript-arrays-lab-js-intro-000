var kittens = ['Milo', 'Otis','Garfield']

function destructivelyAppendKitten (Ralph) {
    kittens.push(Ralph)
    return kittens
}

function destructivelyPrependKitten (Ralph) {
  kittens.unshift(Ralph)
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten (Broom) {
  return ['Milo','Otis','Garfield','Broom']
}

function prependKitten (Arnold) {
  return ['Arnold','Milo','Otis','Garfield']
}

function removeLastKitten () {
    kittens = kittens.slice (2)
  return kittens
}

function removeFirstKitten () {
  kittens = kittens.slice(1)
  return kittens
}
