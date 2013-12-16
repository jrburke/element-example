define({
  _model: null,
  get model() {
    return this._model;
  },
  set model(model) {
    var node,
        firstTime = !this._model,
        hasTemplate = typeof this.template === 'function';

    this._model = model;

    if ((firstTime && hasTemplate) ||
       (!firstTime && !this.modelChangedCallback)) {
      // Clear out old template. On first call,
      // createdCallback should have consumed
      // any children set from outside.
      if (!firstTime) {
        this.innerHTML = '';
      }

      node = this.template(this);
      this.appendChild(node);

      if (this.templateInsertedCallback) {
        this.templateInsertedCallback();
      }
    }

    // A multiplexed callback mixin. If it exists,
    // it means element has custom update logic,
    // does not want to generate the template
    // each time.
    if (this.modelChangedCallback) {
      this.modelChangedCallback(firstTime);
    }
  }
});
