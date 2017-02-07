export let state;

let defaultState = {pets: []}

export function managePets(state = defaultState, action){
	// needs to have a sensible default state
	if (action.type === "ADD_PET") {
    return Object.assign({}, state, state.pets.push(action.payload))
  } else if (action.type === "REMOVE_PET") {
  	let newPets = state.pets.filter((pet) => {
      return pet.id !== action.payload
    })
    return Object.assign({}, state, {pets: newPets})
  } else {
  	return state
  }
}

export function dispatch(action){
	// should pass an action to the reducer and use that return value to update the state, a globally accessible variable
	state = managePets(state, action)
	render()
}

export function render(){
	let container = document.getElementById("container")
	let petList = state.pets.map((pet) => {
		return `<li>${pet.name}</li>`
	})
	let joinedList = petList.join(" ")
	container.innerHtml = `<ul>${joinedList}</ul>`
}




// Since our users want to see their pets on a webpage we want to have a render method that inserts a <ul> to the DOM with each pet's name wrapped in an <li>. The <ul> should be a child of an element with the id of container. There's no need to load jQuery into our app for such a small task. We can make use of built-in JavaScript methods like document.getElementById.