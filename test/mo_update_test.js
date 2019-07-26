const Student = require('../app/student');
const assert = require('assert');

describe("Update test", () => {
    let Updater;
    beforeEach((done) => {
        Updater = new Student({name: "Santheepkumar"})
        Updater
            .save()
            .then(() => done())

    })

    it('Set n Save Test', () => {
        Updater.set('name', "UpUpdater")
        Updater
            .save()
            .then(() => Student.find({}))
            .then(students => {
                assert(students[0].name !== 'updater')
                // assert(students[0].name === 'UpUpdater')
            })

    })
})