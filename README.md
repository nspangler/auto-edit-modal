nspangler:auto-edit-modal
=========================

AutoReconnect is a simple Meteor package for reconnecting a client to the server. Primary useful for Meteor-Cordova / Web apps that may experience some offline behavior.

## Add the Package

```bash
$ meteor add nspangler:auto-edit-modal
```

## Usage

Where ever you want the ability to edit a collection key value pair use:

```html
{{> autoedit mongoName ="people" collectionName = "People" updateId=this._id key="name" value=this.name}}
```

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.