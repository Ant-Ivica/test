function clearScreen(): void {
    (document.getElementById("result") as HTMLInputElement).value = "";
}
function display(value: string): void {
    (document.getElementById("result") as HTMLInputElement).value += value;
}
function calculate(): void {
    let p: string = (document.getElementById("result") as HTMLInputElement).value;
    let q: number = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q.toString();
}