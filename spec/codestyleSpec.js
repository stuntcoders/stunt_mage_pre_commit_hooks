'use strict';

let hook = require('../pre-commit.d/codestyle');

describe('pre-commit code style tests', () => {

  it('should test all *.php/*.phtml files', () => {
    let editedFiles = [
      'test1.php',
      'test2.php',
      'test3.phtml',
      'test3.phtml',
    ];

    expect(hook.getPhpFiles(editedFiles).length).toBe(4);
  });

  it('shouldn\'t accept any non *.php/*.phtml files', () => {
    let editedFiles = [
      'test1.php',
      'test2.php',
      'test3.js',
      'test4.css',
      'test5.html',
      'test6.phtml',
    ];

    expect(hook.getPhpFiles(editedFiles).length).toBe(3);
  });
});
