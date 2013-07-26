/*
 * grunt-contrib-symlink
 * https://github.com/gruntjs/grunt-contrib-symlink
 *
 * Copyright (c) 2013 Grunt Team
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    symlink: {
      explicit: {
        src: 'test/fixtures/baz.txt',
        dest: 'tmp/baz.txt'
      },
      dirs: {
        files: [
          {
            expand: true,
            src: 'test/fixtures/*',
            dest: 'tmp/dirs',
            filter: 'isDirectory',
          }
        ],
      },
      files: {
        files: [
          {
            expand: true,
            src: 'test/fixtures/*.txt',
            dest: 'tmp/files',
          }
        ],
      },
      cwd: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures',
            src: '*',
            dest: 'tmp/cwd',
          }
        ],
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'symlink', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};
