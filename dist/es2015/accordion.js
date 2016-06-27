var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { bindable, customAttribute } from 'aurelia-framework';

export let Accordion = (_class = class Accordion {
  constructor() {
    _initDefineProp(this, "panels", _descriptor, this);

    _initDefineProp(this, "allowExpendMultiple", _descriptor2, this);

    _initDefineProp(this, "vm", _descriptor3, this);
  }

  bind() {
    if (this.panels) {
      this.panels.forEach(panel => {
        panel.active = false;
      });
    } else {
      throw new Error("Panels are not bound!");
    }
  }

  toggle(index) {
    this.panels[index].active = !this.panels[index].active;
    if (!this.allowExpendMultiple) {
      for (let counter = 0; counter < this.panels.length; counter++) {
        if (counter !== index) {
          this.panels[counter].active = false;
        }
      }
    }
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "panels", [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "allowExpendMultiple", [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "vm", [bindable], {
  enumerable: true,
  initializer: null
})), _class);