# grunt-contrib-symlink

> Create symbolic links.



## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-symlink --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-symlink');
```




## Symlink task
_Run this task with the `grunt symlink` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide. Pay special attention to the [Building the files object dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) section, which explains how to create many src-dest file mappings all at once.

Note that the symlink mode (file, dir) is determined automatically based on the src file type.


### Usage Examples

```js
symlink: {
  // The "build/target.txt" symlink will be created and linked to
  // "source/target.txt". It should appear like this in a file listing:
  // build/target.txt -> ../source/target.txt
  explicit: {
    src: 'source/target.txt',
    dest: 'build/target.txt'
  },
  // These examples using "expand" to generate src-dest file mappings:
  // http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
  expanded: {
    files: [
      // All child files and directories in "source", starting with "foo-" will
      // be symlinked into the "build" directory, with the leading "source"
      // stripped off.
      {
        expand: true,
        cwd: 'source',
        src: ['foo-*'],
        dest: 'build'
      },
      // All child directories in "source" will be symlinked into the "build"
      // directory, with the leading "source" stripped off.
      {
        expand: true,
        cwd: 'source',
        src: ['*'],
        dest: 'build',
        filter: 'isDirectory'
      }
    ]
  },
}
```


## Release History

 * 2013-07-26   v0.2.0   Initial release as rewritten, officially-maintained, contrib plugin.
 * 2012-12-21   v0.1.1   Unofficial release.
 * 2012-12-20   v0.1.0   Unofficial release.

---

Task submitted by ["Cowboy" Ben Alman](http://benalman.com/)

*This file was generated on Mon Jul 29 2013 12:12:23.*
