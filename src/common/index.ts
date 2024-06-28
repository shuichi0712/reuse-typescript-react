type Parent = {
    id: number
    name: string
    children: Child[]
}
type Child = {
    id: number
    name: string
    children: Child[]
}
export class Sample {
	// オブジェクトの中にある子要素の配列を再帰処理したい時の基本的な形
	reboot(item: Parent) {
    item.children.forEach((child)=>{
        this.reboot(child)
    })
 }

}