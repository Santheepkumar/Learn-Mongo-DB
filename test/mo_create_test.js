const Student = require('../app/student');
const assert = require('assert');
describe('Create records', () => {
    it('create a user in DB', () => {
        // assert(false);

        const sam = new Student({name: "Sam"});
        sam
            .save()
            .then(() => {
                assert(!sam.isNew);

            })
            .catch(() => {
                console.log("error");
            });

    });
});

// describe("Read Test", ()=> {     let reader;     beforeEach( (done) =>{
// reader = Student({name: "Reader"});      reader.save()      .then(()=>{
// done();      })     })     it("Read a user :Reader", done =>{
// Student.find({name: "Reader"})         .then((students)=>{
// assert(reader._id.toString() === students[0]._id.toString());
// done();         });     }); });