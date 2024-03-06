module.exports = class CarStorage {
    #storage;
    constructor(dataStorage) {
        if (!dataStorage) throw new Error('data storage missing');
        this.#storage = dataStorage;
    }
    getCarOptions(searchKey) {
        if (arguments.length < 1) {
            return [];
        }
        for (const car of this.#storage) {
            if (car.number === searchKey) {
                return car.options || [];
            }
        }
        return [];
    }
    getExtras(searchKey) {
        if (arguments.length < 1) {
            return null;
        }
        for (const car of this.#storage) {
            if (car.number === searchKey) {
                return car.extras || null;
            }
        }
        return null;
    }
    getAllCarsByModel(searchValue) {
        if (arguments.length < 1) {
            throw new Error('missing parameter')
        }
        let carsArray = [];
        for (const car of this.#storage) {
            if (car.model === searchValue) {
                carsArray.push(car);
            }
        }
        return carsArray;
    }
    getACarMatchingNumber(searchKey) {
        if (arguments.length < 1) {
            throw new Error('missing parameter')
        }
        for (const car of this.#storage) {
            if (car.number === searchKey) {
                return car
            }
        }
        return null
    }
    hasExtras(searchKey) {
        if (arguments.length < 1) {
            return false;
        }
        for (const car of this.#storage) {
            if (car.number === searchKey) {
                if (car.extras && Object.keys(car.extras).length > 0) {
                    return true
                }
                return false
            }
        }
        return false;
    }
}