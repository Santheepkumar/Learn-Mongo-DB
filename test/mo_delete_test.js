const Student = require('../app/student');
const assert = require('assert');

describe("Delete tests", () => {
    let Deleter;

    beforeEach((done) => {
        deleter = new Student({name: "Deleter"});
        deleter
            .save()
            .then(() => done());
    });
    it("A delete test for deleter", (done) => {
        Student
            .findOneAndDelete(deleter._id)
            .then(() => Student.findOne({name: "Deleter"}))
            .then((student) => {
                assert(student == null);
                done();
            });
    });
});