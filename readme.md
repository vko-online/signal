## What's this
> Simple implementation of visual studio code alike notification bar

customizable, responsive, no dependency, tiny

![notif bar](https://pbs.twimg.com/media/Ckw7_B6XIAAsT-s.jpg)

## Demo
http://codepen.io/vko-online/pen/bepEva?editors=1010

## Usage

    // initialize
    var signal = new Signal({
      // custom text
      text: 'my super notification',
      // custom buttons
      btns: [{
        // custom button text
        text: 'say hello',
        // custom button action
        action: function() {
          alert('hello!');
        }
      }, {
        text: 'close',
        action: function() {
          signal.hide();
        }
      }],
      // custom button css
      btnStyle: {
        color: 'red'
      }
    });
    // show notif bar
    signal.show();
  
## API
- __text__ - text message _String_: `some text`
- __badgeString__ - badge test _String_: `info`
- __btns__ - action buttons _Array_: `[{text: 'Button1': action: fn}]`
- __btnStyle__ - button style _Object_: `{backgroundColor: '#eee', color: 'white', /*etc.*/ }`
- __btnHoverStyle__ - button hover style _Object_: `{backgroundColor: '#eee', /*etc.*/ }`
- __containerStyle__ - container style _Object_: `{display: 'flex', boxShadow: '0 2px 8px #000', /*etc.*/ }`
- __badgeStyle__ - badge style _Object_: `{padding: '0px 5px', margin: '5px 3px', /*etc.*/ }`
- __msgStyle__ - mid text style _Object_: `{flex: 1, /*etc.*/ }`



## Status
Under development

## License
MIT as always
