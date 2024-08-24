
function niceLogger(){
	console.log("Hello world!");
	return "Hello world!";
}

function messageRepeater(messageToRepeat){

	if (Array.isArray(messageToRepeat)){

		return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat];

	} else {
		let localMessageToRepeat = messageToRepeat.toString();

		return localMessageToRepeat + localMessageToRepeat + localMessageToRepeat;
	}

	
}

module.exports = {
	niceLogger,
	messageRepeater
}

