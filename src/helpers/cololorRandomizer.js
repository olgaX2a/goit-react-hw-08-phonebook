const palette = [
  '#123248',
  '#3a4a6e',
  '#7d6ea3',
  '#cb96d8',
  '#f8c1ed',
  '#127907',
  '#759e0a',
]
function colorRandomizer() {
  const colorIndex = Math.round(Math.random() * (palette.length - 1))
  return palette[colorIndex]
}

export default colorRandomizer
