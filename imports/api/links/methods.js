// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
<<<<<<< HEAD
import Links from './links.js';
=======
import { Links } from './links.js';
>>>>>>> 4f829a725b729b389875cf27e5202252c3c61920

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
