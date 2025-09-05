class LRUCache {
    constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    }
}

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) { // 存在
    const temp = this.map.get(key);
    this.map.delete(key); // 删除旧的
    this.map.set(key, temp); // 新增到末尾
    return temp;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) { // 存在
        this.map.delete(key);
    }
    this.map.set(key, value); // 新增
    if (this.map.size > this.capacity) { // 超过容量
        this.map.delete(this.map.keys().next().value); // map.keys() 得到的是一个迭代器对象
    }
};