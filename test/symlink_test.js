'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.symlink = {
  explicit: function(test) {
    test.expect(1);

    test.equal(grunt.file.read('tmp/baz.txt'), 'baz!', 'should be the fixture file.');

    test.done();
  },
  dirs: function(test) {
    test.expect(2);

    test.equal(grunt.file.read('tmp/dirs/test/fixtures/foo/file.txt'), 'foo!', 'should be the fixture file.');
    test.equal(grunt.file.read('tmp/dirs/test/fixtures/bar/file.txt'), 'bar!', 'should be the fixture file.');

    test.done();
  },
  files: function(test) {
    test.expect(2);

    test.equal(grunt.file.read('tmp/files/test/fixtures/baz.txt'), 'baz!', 'should be the fixture file.');
    test.equal(grunt.file.read('tmp/files/test/fixtures/qux.txt'), 'qux!', 'should be the fixture file.');

    test.done();
  },
  cwd: function(test) {
    test.expect(4);

    test.equal(grunt.file.read('tmp/cwd/foo/file.txt'), 'foo!', 'should be the fixture file.');
    test.equal(grunt.file.read('tmp/cwd/bar/file.txt'), 'bar!', 'should be the fixture file.');
    test.equal(grunt.file.read('tmp/cwd/baz.txt'), 'baz!', 'should be the fixture file.');
    test.equal(grunt.file.read('tmp/cwd/qux.txt'), 'qux!', 'should be the fixture file.');

    test.done();
  },
};
