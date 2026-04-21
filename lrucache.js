class Node{
    constructor(key,value){
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
    removeNode(node){
        if(!node) return -1

        const next = node.next
        const prev = node.prev
        prev.next = next 
        next.prev = prev
    }
    addToFront(node){
        const first = this.head.next 
        this.head.next = node
        first.prev = node 
        node.prev = this.head
        node.next = first
    }
}

class LRU{
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()
        this.list = new DLL()
    }
    set(key,value){
        
        if (this.map.has(key)){
            const node = this.map.get(key)
            node.value = value
            this.list.removeNode(node)
            this.list.addToFront(node)
        }else{

            if(this.map.size === this.capacity){
            const lru = this.list.tail.prev
            this.list.removeNode(lru)
            this.map.delete(lru.key)
         }

            const node = new Node(key, value)
            this.map.set(key,node)
            this.list.addToFront(node)
        }
    }
    get(key){
        if(!this.map.has(key)) return -1

        const node = this.map.get(key)
        this.list.removeNode(node)
        this.list.addToFront(node)

        const value = node.value
        
        return value 
    }
}