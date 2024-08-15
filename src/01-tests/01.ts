export function towerBuilder(nFloors: number) {
    let floors = [];
    for (let i = 0, n = nFloors - 1; i < nFloors; ++i, --n) {
        floors.push(Array(n + 1).join(" ") + Array(i * 2 + 2).join("*") + Array(n + 1).join(" "));
    }
    return floors;
}