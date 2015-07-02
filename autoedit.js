/**
 * Created by natespangler on 6/30/15.
 */
// Auto Edit Bring Up Modal Event
Template.autoedit.helpers({
    test : function () {
//        console.log(this);
    }
})

Template.autoedit.events({
    'click .modalEdit': function () {
        buildModal(this);
    }
});