# Pre-commit hooks v1.1.2

[![Build Status](https://travis-ci.org/stuntcoders/stunt_mage_pre_commit_hooks.svg?branch=master)](https://travis-ci.org/stuntcoders/stunt_mage_pre_commit_hooks)

* Pre-commit Git hooks for Magento projects which check if:
  * Changes have been made to Magento core files. (PHP)
  * The code follows the default coding standard. (PHP)
  * There are debugging functions in JavaScript or PHP files. (PHP & JS)

* Commit message git hook which checks if:
  * Commit message title has more than 50 characters.
  * Commit message body lines have more than 72 characters.
  * Message title and message body are not separated by empty line.

## Install
```sh
cd ~/Magento/project/repo/

ln -sf ~/Sites/stunt_mage_pre_commit_hooks/pre-commit .git/hooks/pre-commit
ln -sf ~/Sites/stunt_mage_pre_commit_hooks/pre-commit.d .git/hooks/pre-commit.d
ln -sf ~/Sites/stunt_mage_pre_commit_hooks/commit-msg .git/hooks/commit-msg

chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/commit-msg
```

## Update
```sh
cd ~/Sites/stunt_mage_pre_commit_hooks

git pull origin master
```

## Tests
To run tests, install [jasmine-node](https://github.com/mhevery/jasmine-node) and run `jasmine-node spec/`

## Todo
* Separate Magento & WordPress code and check against the appropriate coding standard.
* Add jshit/jscs pre-commit hook.
* Add pre-commit hook which checks if css files are minified.
