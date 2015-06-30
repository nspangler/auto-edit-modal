/**
 * Created by natespangler on 6/30/15.
 */
// On Enter Call The Same On Click Method
Template.editmodal.events({
    'keypress .editValue': function (e, template) {
        if (e.which === 13) {
            e.preventDefault();
            saveEdit(template.data);
            $('.close').click();
        }
    }
});


buildModal = function (context) {
    var editModal = {
        template: Template.editmodal,
        title: "Edit Value",
        modalDialogClass: "share-modal-dialog", //optional
        modalBodyClass: "share-modal-body", //optional
        modalFooterClass: "share-modal-footer",//optional
        removeOnHide: true, //optional. If this is true, modal will be removed from DOM upon hiding
        buttons: {
            "cancel": {
                class: 'btn-danger',
                label: 'Cancel'
            },
            "save": {
                closeModalOnClick: true,
                class: 'btn-info',
                label: 'Save'
            }

        },
        doc: context
    };

    var em = ReactiveModal.initDialog(editModal);

    em.buttons.save.on('click', function(button){
        saveEdit(context);
    });

    em.show();

};

// Save Edit Function
var saveEdit = function (context) {
    // Value On Save
    var newValue = $(".editValue").val();
    // Filter For Types Other Then Type Text
    // TODO Other Types As Well
    var inputType = $(".editValue")[0].type;
    if (inputType === "checkbox") {
        newValue =  $(".editValue").is(':checked');
    }
    var obj = {};
    obj[context.key] = newValue;
    Mongo.Collection.get(context.mongoName).update(context.updateId , {$set : obj});
};