class Node{
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL{
    constructor(){
        this.head = new Node(0,0)
        this.tail = new Node(0,0)

        this.head.next = this.tail
        this.tail.prev = this.head
    }
    removeNode(node){
        if(!node || !node.prev || !node.next) return -1

        node.prev.next = node.next
        node.next.prev = node.prev
    }
    addNodeToFront(node){

        const first = this.head.next
        first.prev = node
        this.head.next = node
        node.prev = this.head 
        node.next = first

    }
}

class LRU{
    constructor(capacity){
        this.map = new Map()
        this.list = new DLL()
        this.capacity = capacity
    }
    set(key,value){
        if (this.map.has(key)){

            node.value = value
            const node = this.map.get(key)
            this.list.removeNode(node)
            this.list.addNodeToFront(node)

        }else{

            if (this.map.size === this.capacity){
                const lru = this.list.tail.prev
                this.list.removeNode(lru)
            }
            const node = new Node(key, value)
            this.map.set(key, node)
            this.list.addToFront(node)

        }
    }

    get(key){
        if (!this.map.has(key)) return -1
        const node = this.map.get(key)
        const value = node.value
        
        this.list.removeNode(node)
        this.list.addNodeToFront(node)

        return value
    }
}