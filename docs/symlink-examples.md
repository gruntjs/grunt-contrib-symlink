# Usage Examples

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
