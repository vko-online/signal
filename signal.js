function Signal(opts) {
    var self = this;
    var _internals = {};
    var _options = Object.assign({}, {
        btnStyle: {
            backgroundColor: '#0E639C',
            color: '#EEEEEE',
            paddingLeft: '10px',
            paddingRight: '10px',
            display: 'inline-block',
            textDecoration: 'none',
            cursor: 'pointer',
            border: 'none',
            height: '100%',
            outline: 'none'
        },
        btnHoverStyle: {
            backgroundColor: '#007acc'
        },
        btnContainerStyle: {
            float: 'right'
        },
        containerStyle: {
            backgroundColor: '#333',
            color: '#EEEEEE',
            display: 'flex',
            boxShadow: '0 2px 8px #000',
            transition: 'top .2s linear',
            fontSize: '12px',
            position: 'absolute',
            zIndex: 12,
            lineHeight: '35px',
            margin: 0,
            padding: 0,
            width: '70%',
            left: '15%',
            height: '35px',
            visibility: 'hidden',
            fontFamily: 'Avenir, Helvetica Nueue, san-serif'
        },
        badgeStyle: {
            color: '#eee',
            float: 'left',
            padding: '0px 5px',
            margin: '5px 3px',
            fontWeight: 700,
            height: '25px',
            fontSize: '11px',
            backgroundColor: 'rgb(0, 122, 204)',
            lineHeight: '28px'
        },
        msgStyle: {
            color: '#EEEEEE',
            flex: 1,
            lineHeight: '36px'
        },
        text: 'This is sample notification text',
        badgeString: 'info',
        btns: [{
            text: 'Show',
            action: void(0)
        }, {
            text: 'Close',
            action: void(0)
        }]
    }, opts);

    self.createElement = function (tagName, styles, text, onClickAction) {
        var elem = document.createElement(tagName);
        for (key in styles) {
            elem.style[key] = styles[key];
        }
        text ? elem.textContent = text : void(0);
        onClickAction ? elem.onclick = onClickAction : void(0);
        return elem;
    };

    self.applyHover = function (elem, oldStyle, newStyle) {
        elem.onmouseenter = function () {
            elem.style.backgroundColor = newStyle;
        };
        elem.onmouseleave = function () {
            elem.style.backgroundColor = oldStyle;
        };
        return elem;
    };
    self.buildElements = function () {
        //build buttons
        _options.buildedBtnContainer = self.createElement('div', _options.btnContainerStyle);
        _options.btns.forEach(function (btn) {
            var btn = self.createElement('button', _options.btnStyle, btn.text, btn.action)
            self.applyHover(btn, _options.btnStyle.backgroundColor, _options.btnHoverStyle.backgroundColor);
            _options.buildedBtnContainer.appendChild(btn);
        });
        //build container
        _options.buildedContainer = self.createElement('div', _options.containerStyle);
        //build badge
        _options.buildedBadge = self.createElement('span', _options.badgeStyle, _options.badgeString);
        //build text message
        _options.buildedMessage = self.createElement('span', _options.msgStyle, _options.text);
        _options.buildedContainer.appendChild(_options.buildedBadge);
        _options.buildedContainer.appendChild(_options.buildedMessage);
        _options.buildedContainer.appendChild(_options.buildedBtnContainer);
        document.body.appendChild(_options.buildedContainer);
    };

    self.show = function () {
        _options.buildedContainer.style.visibility = 'visible';
    };
    self.hide = function () {
        _options.buildedContainer.style.visibility = 'hidden';
    };

    self.buildElements();
}