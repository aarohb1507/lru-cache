class Node{
    constructor(key, value){
        this.key = key 
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DLL{
    constructor(){

        this.head = new Node(0,0)
        this.tail = new Node(0,0)

        this.head.next = this.tail
        this.tail.prev = this.head

    }

    addToFront(node){

        const first = this.head.next

        node.prev = this.head
        node.next = first 
        this.head.next = node
        first.prev = node

    }
    removeNode(node){

        const prev = node.prev 
        const next = node.next
        prev.next = next
        next.prev = prev

    }
}

class LRU {
    constructor(capacity){
        this.map = new Map()
        this.capacity = capacity
        this.list = new DLL()
    }
    get(key){

        if (!this.map.has(key)) return -1
        this.list.removeNode(node)
        this.list.addToFront(node)

        const node = this.map.get(key)
        return node.value

    }
    set(key,value){

        if(this.map.has(key)){
            
            const node = this.map.get(key)
            node.value = value

        }else{

            if(this.map.size == this.capacity){

                const lru = this.list.tail.prev
                this.list.removeNode(lru)
                this.map.remove(lru.key)

            }

            const node = new Node(key, value)
            this.map.set(node.key, node.value)

        }

    }
}