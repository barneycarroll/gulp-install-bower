gulp-install-bower
==================

Reduced test case for gulp-install failing to initialize bower - unless bower is installed globally.

According to node idioms, I should be able to `npm install` and make use of bower but instead we get the log message:

```cmd
Can't install! `bower` doesn't seem to be installed. Run `bower install --config.interactive=false` manually
```
