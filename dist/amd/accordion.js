define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Accordion = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

  var Accordion = exports.Accordion = (_class = function () {
    function Accordion() {
      _classCallCheck(this, Accordion);

      _initDefineProp(this, "panels", _descriptor, this);

      _initDefineProp(this, "allowExpendMultiple", _descriptor2, this);

      _initDefineProp(this, "vm", _descriptor3, this);
    }

    Accordion.prototype.bind = function bind() {
      if (this.panels) {
        this.panels.forEach(function (panel) {
          panel.active = false;
        });
      } else {
        throw new Error("Panels are not bound!");
      }
    };

    Accordion.prototype.toggle = function toggle(index) {
      this.panels[index].active = !this.panels[index].active;
      if (!this.allowExpendMultiple) {
        for (var counter = 0; counter < this.panels.length; counter++) {
          if (counter !== index) {
            this.panels[counter].active = false;
          }
        }
      }
    };

    return Accordion;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "panels", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "allowExpendMultiple", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "vm", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});