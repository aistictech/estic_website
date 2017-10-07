import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.info.helpers({
  links() {
    return Links.find({});
  },
});

Template.info.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const { target } = event;
    const { title, url } = target;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        const alert = error.error;
        alert();
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
