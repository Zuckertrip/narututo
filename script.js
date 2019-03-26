function combineChakra(chakras) {
	if (
		has(chakras, "doton") &&
		has(chakras, "fûton") &&
		has(chakras, "katon")
	){
		return "Jinton"
	} else if (
		has(chakras, "fûton") &&
		has(chakras, "suiton")
	){
        return "Hyoton";
	} else if (
		has(chakras, "doton") &&
		has(chakras, "suiton")
	){
        return "Mokuton";
	} else if (
		has(chakras, "raiton") &&
		has(chakras, "suiton")
	){
        return "Ranton";
	} else if (
		has(chakras, "doton") &&
		has(chakras, "katon")
	){
        return "Yoton";
	} else if (
		has(chakras, "katon") &&
		has(chakras, "suiton")
	){
        return "Futton";
	} else if (
		has(chakras, "doton") &&
		has(chakras, "raiton")
	){
        return "Bakuton";
	} else if (
		has(chakras, "fûton") &&
		has(chakras, "katon")
	){
        return "Shakuton";
	} else if (
		has(chakras, "fûton") &&
		has(chakras, "doton")
	){
	return "Jiton";
	} else 
	{
		return "default"
	}
		
}

function has(list, key) {
	return -1 != list.indexOf(key);
}

function clearAside () {
	document.querySelectorAll("aside div").forEach(function (element) {
		element.classList.add("hidden");
	});
}

document.querySelector("#basechakras").onclick = function(){
	clearAside();
	document.querySelector("#basechakrasimg").classList.remove("hidden");
};

document.querySelector("#allchakras").onclick = function(){
	clearAside();
	document.querySelector("#allchakrasimg").classList.remove("hidden");
};

document.querySelector("#combine").onclick = function(){
	clearAside();
	var chakra1 = document.querySelector("#chakra1").value.toLowerCase();
	var chakra2 = document.querySelector("#chakra2").value.toLowerCase();
	var chakra3 = document.querySelector("#chakra3").value.toLowerCase();
	var combinedChakra = combineChakra([chakra1,chakra2,chakra3]);
	document.querySelector("#combinedChakra").innerHTML = combinedChakra;
	document.querySelector("#"+combinedChakra).classList.remove("hidden");
};

document.querySelector("#sharingan-button").onclick = function(){
	clearAside();
	document.querySelector("#sharingan-img").classList.remove("hidden");
};
document.querySelector("#mangekyousharingan-button").onclick = function(){
	clearAside();
	document.querySelector("#mangekyousharingan-img").classList.remove("hidden");
};
document.querySelector("#byakugan-button").onclick = function(){
	clearAside();
	document.querySelector("#byakugan-img").classList.remove("hidden");
};
document.querySelector("#rinnegan-button").onclick = function(){
	clearAside();
	document.querySelector("#rinnegan-img").classList.remove("hidden");
};

