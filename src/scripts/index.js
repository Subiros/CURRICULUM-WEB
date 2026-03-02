const button = document.getElementById('downloadTable');
const table = document.getElementById('tableCV');

button.addEventListener('click', () => {
    let csv = [];

    for (let fila of table.rows) {
        let dades = [];
        for (let casilla of fila.cells) {
            dades.push(`"${casilla.innerText}"`)
        }
        csv.push(dades.join(','));
    }

    const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TableCV.csv';
    a.click();
    URL.revokeObjectURL(url);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("downloadMyCV");

  btn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "/src/components/CV.pdf";
    link.download = "CV.pdf";
    link.click();
  });
});