const unique = (values) =>
    values.filter((value, index, self) => self.indexOf(value) === index)

class CustomSet {
    constructor(values = []) {
        this.values = unique(values)
    }

    add(values) {
        this.values = unique(this.values.concat(values))
    }

    remove(values) {
        values.forEach(value => {
            const index = this.values.indexOf(value)
            if (index !== -1) {
                this.values.splice(this.values.indexOf(value), 1)
            }
        })
    }

    get size() {
        return this.values.length
    }
}

export default CustomSet
