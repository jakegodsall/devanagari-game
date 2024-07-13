async function loadJSON() {
  const response = await fetch("./data/alphabet.json");
  if (!response.ok) {
    throw new Error(`${response.status}:`);
  }
  const data = await response.json();
  return data;
}

async function initGame() {
  const data = await loadJSON();
  console.log(data);
}

initGame();
