# Abstract Data Types written in TypeScript

### Queue
```typescript
class Queue<T> {
    constructor();
    private _queue;
    readonly size: number;
    enqueue(item: T): boolean;
    dequeue(): T | undefined;
    reset(): void;
}
```

### Stack
```typescript
class Stack<T> {
    constructor();
    private _stack;
    readonly size: number;
    push(item: T): boolean;
    pop(): T | undefined;
}
```

### Linked List
```typescript
class ListNode<T> {
    private _data;
    private _next?;
    private _previous?;
    constructor(_data: T, _next?: ListNode<T> | undefined, _previous?: ListNode<T> | undefined);
    private _id;
    readonly id: Symbol;
    readonly data: T;
    next: ListNode<T>;
    previous: ListNode<T>;
}
class LinkedList<T> {
    constructor();
    private _head;
    private _length;
    readonly length: number;
    readonly head: ListNode<T> | undefined;
    append(data: T): Symbol;
    prepend(data: T): Symbol;
    deleteNode(id: Symbol): boolean;
    [Symbol.iterator](): IterableIterator<ListNode<T>>;
}
```