'use strict';

let hook = require('../pre-commit.d/codestyle');

describe('pre-commit code style tests', () => {

  it('should test all *.php files', () => {
    let editedFiles = [
      'test1.php',
      'test2.php',
      'test3.php',
    ];

    expect(hook.getPhpFiles(editedFiles).length).toBe(3);
  });

  it('shouldn\'t accept any non *.php files', () => {
    let editedFiles = [
      'test1.php',
      'test2.php',
      'test3.js',
      'test3.css',
      'test3.html',
    ];

    expect(hook.getPhpFiles(editedFiles).length).toBe(2);
  });
});
