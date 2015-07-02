Package.describe({
  name: 'nspangler:auto-edit-modal',
  version: '0.0.7',
  // Brief, one-line summary of the package.
  summary: 'Modal Edit Ability For Any Collection Key Value Pairs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nspangler/auto-edit-modal.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use("templating", "client");
    api.use('dburles:mongo-collection-instances@0.3.3');
    api.use('aldeed:autoform@5.3.0');
    api.use('aldeed:collection2@2.3.1');
    api.use('pahans:reactive-modal@1.0.2');
    api.use('twbs:bootstrap@3.3.5');
    api.addFiles("autoedit.html", "client");
    api.addFiles('autoedit.js', "client");
    api.addFiles("editmodal.html", "client");
    api.addFiles('editmodal.js', "client");
    api.addFiles('auto-edit-modal-style.css', "client");
});

