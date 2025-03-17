const container = document.getElementById("container");

function Node(i, j, row, size) {
  const node = document.createElement("div");

  node.classList.add("nodes");
  node.id = `${i}-${j}`;
  const nodeSize =
    Math.floor(Math.min(window.innerWidth, window.innerHeight) / size) - 2;
  // Adjust for borders
  node.style.width = `${nodeSize}px`;
  node.style.height = `${nodeSize}px`;
  row.appendChild(node);
}

function sketchpad(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      Node(i, j, row, size);
    }
    container.appendChild(row);
  }
}

function removes() {
  container.innerHTML = "";
}

const clear = document.querySelector("#clear");

clear.onclick = () => {
  const usednodes = document.getElementsByClassName("used-node");
  Array.from(usednodes).forEach((used) => {
    used.classList.remove("used-node");
  });
};

const start = document.querySelector("#start");

start.onclick = () => {
  const size = prompt("enter size");
  removes();
  sketchpad(size);
  const draw = document.querySelectorAll(".nodes");

  draw.forEach((node) => {
    node.addEventListener("mouseover", () => {
      node.style.backgroundColor = getRandomColor();
    });
  });
};

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
