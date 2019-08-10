class Queue<T> {

    constructor() {
    }

    private _queue: T[] = [];

    get size(): number {
        return this._queue.length;
    }

    public enqueue(item: T): boolean {
        this._queue.push(item);
        return true;
    }

    public dequeue(): T | undefined {
        if (this._queue && this._queue.length) {
            return this._queue.shift()
        } else {
            return undefined;
        }
    }

    public reset(): void {
        this._queue.length = 0;
    }
}

const q = new Queue<string>();

q.enqueue('a');
console.log(q.size);

q.enqueue('b');

console.log(q.dequeue())
console.log(q.size)
console.log(q.dequeue())