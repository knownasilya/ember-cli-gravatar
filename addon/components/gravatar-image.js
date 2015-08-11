import Ember from 'ember';
import md5 from 'md5';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'alt', 'title'],
  classNames: ['gravatar-image'],
  size: 250,
  email: '',
  title: '',
  defaultImage: '',
  secure: true,
  retina: false,

  src: Ember.computed('email', 'imageSize', 'default', function() {
    var email = this.get('email');
    var imageSize = this.get('imageSize');
    var def = this.get('defaultImage');
    var secure = this.get('secure');
    var protocol = secure ? 'https' : 'http';

    return protocol + '://www.gravatar.com/avatar/' + md5(email) + '?s=' + imageSize + '&d=' + def;
  }),

  imageSize: Ember.computed('size', function() {
    var size = this.get('size');
    return this.get('retina') ? (size * 2) : size;
  })
});
