class Stack<T> {
    constructor() {}

    private _stack: T[] = [];

    get size() {
        return this._stack.length;
    }

    public push(item: T): boolean {
        this._stack.push(item);
        return true;
    }

    public pop(): T | undefined{
        if (this._stack && this._stack.length) {
            return this._stack.pop();
        } else {
            return undefined;
        }
    }
}