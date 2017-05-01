"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemList {
    getList() {
        let arr = [];
        arr.push({ title: "typescript1", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" });
        arr.push({ title: "typescript2", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" });
        arr.push({ title: "typescript3", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" });
        arr.push({ title: "typescript4", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" });
        return arr;
    }
}
exports.default = ItemList;
