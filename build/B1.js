"use strict";
class LRUCache {
    constructor(ttl) {
        this.ttl = ttl;
        this.cache = {};
    }
    // O(k) - where K is the length of the cache
    getOrInserValue(key, func, ...args) {
        if (this.cache.hasOwnProperty(key)) {
            this.updateCount(key);
            return this.cache[key].value;
        }
        const result = func(...args);
        this.cache[key] = { recency: 0, value: result };
        this.updateCount(key);
        return result;
    }
    // O(k) - where K is the length of the cache
    updateCount(key) {
        for (const cacheKey in this.cache) {
            if (cacheKey !== key) {
                this.cache[cacheKey].recency++;
            }
            this.cache[key].recency = 0;
        }
        this.cleanupCache();
    }
    // O(k) - where K is the length of the cache
    cleanupCache() {
        for (const key in this.cache) {
            if (this.cache[key].recency > this.ttl) {
                delete this.cache[key];
            }
        }
    }
}
function test(...args) {
    return `${args}`;
}
const lru = new LRUCache(2);
console.log(lru.getOrInserValue("a", test, "value a"));
console.log(lru.getOrInserValue("b", test, "Value b"));
console.log(lru.getOrInserValue("c", test, "Value b"));
console.log(lru.getOrInserValue("d", test, `Value d`));
console.log(lru.getOrInserValue("a", test, `Value a`));
console.log(lru.getOrInserValue("d", test, "Value d"));
