# Usage Examples

```js
symlink: {
  // Enable overwrite to delete symlinks before recreating them
  options: {
    overwrite: false
  },
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
        overwrite: false,
        cwd: 'source',
        src: ['foo-*'],
        dest: 'build'
      },
      // All child directories in "source" will be symlinked into the "build"
      // directory, with the leading "source" stripped off.
      {
        expand: true,
        overwrite: false,
        cwd: 'source',
        src: ['*'],
        dest: 'build',
        filter: 'isDirectory'
      }
    ]
  },
}
```

## CLI overwrite option

To override the overwrite option via the CLI pass it as an option

```shell
  grunt symlink --overwrite
```

## Usage tips on Microsoft Windows

Make sure your command prompt has administrative privileges, otherwise
the task will not work.
