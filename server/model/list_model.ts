import Item from "../../common/types/Item";

export default class ItemList {

    getList(): Item[] {
        let arr: Item[] = [];
        arr.push({ title: "typescript1", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" })
        arr.push({ title: "typescript2", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" })
        arr.push({ title: "typescript3", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" })
        arr.push({ title: "typescript4", intro: "wonderful typescript tutorial site", url: "https://github.com/happygrammer" })
        return arr;
    }
}