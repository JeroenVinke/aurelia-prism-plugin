System.register(['aurelia-framework', 'prism', 'prism/themes/prism.css!'], function (_export) {
  'use strict';

  var inject, bindable, noView, customElement, processContent, TargetInstruction, prism, AuCode;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function parseCode(element, resources, instruction) {
    instruction.html = dedent(decodeHtml(element.innerHTML));
  }

  function decodeHtml(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  function dedent(str) {
    var match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) return str;

    var indent = Math.min.apply(Math, match.map(function (el) {
      return el.length;
    }));

    var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
    return indent > 0 ? str.replace(re, '') : str;
  }
  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      noView = _aureliaFramework.noView;
      customElement = _aureliaFramework.customElement;
      processContent = _aureliaFramework.processContent;
      TargetInstruction = _aureliaFramework.TargetInstruction;
    }, function (_prism) {
      prism = _prism['default'];
    }, function (_prismThemesPrismCss) {}],
    execute: function () {
      AuCode = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AuCode, [{
          key: 'language',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function AuCode(element, targetInstruction) {
          _classCallCheck(this, _AuCode);

          _defineDecoratedPropertyDescriptor(this, 'language', _instanceInitializers);

          this.element = element;
          this.html = targetInstruction.behaviorInstructions[0].html;
        }

        _createDecoratedClass(AuCode, [{
          key: 'attached',
          value: function attached() {
            var pre = document.createElement('pre');
            this.element.appendChild(pre);
            pre.innerHTML = prism.highlight(this.html, Prism.languages[this.language]);
          }
        }], null, _instanceInitializers);

        var _AuCode = AuCode;
        AuCode = inject(Element, TargetInstruction)(AuCode) || AuCode;
        AuCode = noView(AuCode) || AuCode;
        AuCode = customElement('au-code')(AuCode) || AuCode;
        AuCode = processContent(function (compiler, resources, element, instruction) {
          parseCode(element, resources, instruction);
          return true;
        })(AuCode) || AuCode;
        return AuCode;
      })();

      _export('AuCode', AuCode);
    }
  };
});