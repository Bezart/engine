'use strict';

const t = require('@jsengine/i18n');

t.requirePhrase('markit', 'demo');

module.exports = function(md) {

  md.renderer.rules.blocktag_demo = function(tokens, idx, options, env, slf) {

    let src = tokens[idx].blockTagAttrs.src;

    if (src) {
      let href = (src[0] == '/') ? src : options.staticHost + options.resourceWebRoot + '/' + src;
      href += '/';

      return `<a href="${href}" target="blank">${t('markit.demo.window')}</a>`;
    }

    return `<a href="#" onclick="event.preventDefault(); runDemo(this)">${t('markit.demo.run')}</a>`;

  };

};
