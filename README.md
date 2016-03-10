# Pre-commit hooks v0.1.3

* Pre-commit Git hooks for Magento projects which check if:
  * Changes have been made to Magento core files. (PHP)
  * The code follows the platform (Magento) coding standard. (PHP)
  * There are debugging functions in JavaScript or PHP files. (PHP & JS)

* Commit message git hook which checks if:
  * Commit message title has more than 50 chanracters.
  * Commit message body lines have more than 72 characters.
  * Message title and messsage body are not separated by empty line.

## Install
```sh
git clone --depth 1 https://github.com/stuntcoders/stunt_mage_pre_commit_hooks.git git_hooks
cd git_hooks && ./install
cd ../ && rm -rf git_hooks
```

## Tests
To run tests, install [jasmine-node](https://github.com/mhevery/jasmine-node) and run `jasmine-node spec/`

## Todo
* Separate Magento & WordPress code and check against the appropriate coding standard.
* Add jshit/jscs pre-commit hook.
* Add pre-commit hook which checks if css files are minified.
