nspangler:auto-edit-modal
=========================

Auto-Edit-Modal was built as a simple solution for editing key value pairs in a collection. A deployed example: [auto-edit-modal](http://auto-edit-modal.meteor.com) .

## Add the Package

```bash
$ meteor add nspangler:auto-edit-modal
```

## Usage

You must first define schema for your collection using `aldeed:collection2`, which is NOT included in this package

```js
People = new Mongo.Collection("people");
People.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
}));
```


Where ever you want the ability to edit a collection key value pair use:

```html
{{> autoedit mongoName ="people" collectionName = "People" updateId=this._id key="name" value=this.name}}
```

All the fields above are required. However addition variables can be defined:

```html
{{ ... displayName = }}
{{ ... editValue = }}
```
These might be important for a displaying or manipulating the values before displaying/editing the values. The `displayName` is what appears before edit. If a `displayName` is not defined, `value` will be displayed. The `editValue` is what appears in the modal. If a `editVale` is not defined, `value` will be displayed.


## Important Note

As of right now this package is a work in progress. It works great for `Strings, Numbers  and Bolleans displayed as a checkbox`. Any help forward and input is much appreciated.

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.
