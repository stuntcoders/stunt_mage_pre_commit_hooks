# Pre-commit hooks v0.1.3

Pre-commit Git hooks for Magento projects which check if:

1. Changes have been made to Magento core files. (PHP)
2. The code follows the platform (Magento) coding standard. (PHP)
3. There are debugging functions in JavaScript or PHP files. (PHP & JS)

## Install
```sh
git clone --depth 1 https://github.com/stuntcoders/stunt_mage_pre_commit_hooks.git git_hooks
cd git_hooks && ./install
cd ../ && rm -rf git_hooks
```

## Todo
* Separate Magento & WordPress code and check against the appropriate coding standard.
