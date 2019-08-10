class ListNode<T> {
    constructor(
        private _data: T, 
        private _next?: ListNode<T>,
        private _previous?: ListNode<T>
    ) {
        this._id = Symbol('ListNode')
    }

    private _id: Symbol;
    get id() {
        return this._id;
    }
    get data() {
        return this._data;
    }
    get next() {
        return this._next as ListNode<T>;
    }
    set next(next: ListNode<T>) {
        this._next = next;
    }
    get previous() {
        return this._previous as ListNode<T>;
    }
    set previous(previous: ListNode<T>) {
        this._previous = previous;
    }
}



class LinkedList<T> {

    constructor() {
        this._length = 0;
    }

    private _head: ListNode<T> | undefined;

    private _length: number;
    get length() {
        return this._length;
    }
    get head() {
        return this._head;
    }

    public append(data: T): Symbol {
        if (!this._head) {
            return this.prepend(data);
        }
        let current = this._head;
        while (current.next) {
            current = current.next;
        }
        current.next = new ListNode(data, undefined, current);
        this._length += 1;

        return current.next.id;
    }

    public prepend(data: T): Symbol {
        const newHead = new ListNode(data, this._head as ListNode<T>);
        this._head = newHead;
        this._length += 1;
        return this._head.id;
    }

    public deleteNode(id: Symbol): boolean {
        if (!this._head) return false;
        if (this._head.id === id) {
            this._head = this._head.next;
            this._length -= 1;
            return true;
        }
        let current = this._head;
        while (current.id !== id) {
            current = current.next;
        }
        if (current.previous) {
            current.previous.next = current.next;
        }
        if (current.next) {
            current.next.previous = current.previous
        }
        this._length -= 1;
        return true;
    }

    *[Symbol.iterator]() {
        let current = this._head;
        while (current) {
            yield current;
            current = current.next;
        }
    }
}

