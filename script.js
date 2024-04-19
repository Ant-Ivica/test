function clearScreen(): void {
    document.getElementById("result").value = "";
}
function display(value: string): void {
    document.getElementById("result").value += value;
}
function calculate(): void {
    let p: string = document.getElementById("result").value;
    let q: number = eval(p);
    document.getElementById("result").value = q.toString();
}