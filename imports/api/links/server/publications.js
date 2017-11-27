// All links-related publications

import { Meteor } from 'meteor/meteor';
<<<<<<< HEAD
import Links from '../links.js';

Meteor.publish('links.all', function linksAll() {
=======
import { Links } from '../links.js';

Meteor.publish('links.all', function () {
>>>>>>> 4f829a725b729b389875cf27e5202252c3c61920
  return Links.find();
});
