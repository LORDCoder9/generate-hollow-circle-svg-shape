function generatePath(centerX, centerY, outerRadius, innerRadius) {
  return `<path d="
M ${centerX} ${centerY - outerRadius}
A ${outerRadius} ${outerRadius} 0 1 0 ${centerX} ${centerY + outerRadius}
A ${outerRadius} ${outerRadius} 0 1 0 ${centerX} ${centerY - outerRadius}
Z
M ${centerX} ${centerY - innerRadius}
A ${innerRadius} ${innerRadius} 0 1 1 ${centerX} ${centerY + innerRadius}
A ${innerRadius} ${innerRadius} 0 1 1 ${centerX} ${centerY - innerRadius}
Z
"/>`;
}

function renderPath() {
  const centerX = parseFloat(document.getElementById("centerX").value);
  const centerY = parseFloat(document.getElementById("centerY").value);
  const outerRadius = parseFloat(document.getElementById("outerRadius").value);
  const innerRadius = parseFloat(document.getElementById("innerRadius").value);

  const path = generatePath(centerX, centerY, outerRadius, innerRadius);

  document.getElementById("result").innerHTML = path;
    document.getElementById("text").innerText = path.replace(/\s+/g, ' ');
}

renderPath();

for (let input of document.getElementsByTagName('input')) {
  input.addEventListener('change', renderPath);
}