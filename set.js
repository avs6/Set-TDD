const unique = (values) =>
    values.filter((value, index, self) => self.indexOf(value) === index)

class CustomSet {
    constructor(values = []) {
        this._values = unique(values)
    }

    get values() {
        return this._values
    }

    get size() {
        return this.values.length
    }

    add(values) {
        return this._values = unique(this.values.concat(values))
    }

    delete(value) {
        const index = this.values.indexOf(value)
        if (index !== -1) {
            this.values.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    deleteAll(values) {
        values.forEach(value => {
            this.delete(value)
        })
        return this.values
    }

    has(value) {
        return this.values.includes(value)
    }

    hasAll(values) {
        let truthy = true
        values.forEach(value => {
            if (!this.has(value)) {
                truthy = false
            }
        })
        return truthy
    }

    clear() {
        this._values = []
    }

    forEach(callbackFunction) {
        this.values.forEach(value => callbackFunction(value))
    }

    union(set) {
        return this.add(set.values)
    }

    intersect(set) {
        return this.values.filter(value => set.has(value))
    }

    difference(set) {
        return this.deleteAll(this.intersect(set))
    }
}

export default CustomSet
