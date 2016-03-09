'use strict';

var hook = require('../commit-msg');

describe('commit-msg tests', function() {

  it('shouldn\'t accept commit messages with more than 50 characters in title', function() {
    var message = 'Commit message'.repeat(5);

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages starting with lowercase character', function() {
    var message = 'commit message';

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages title which ends with a period', function() {
    var message = 'Commit message.';

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages without empty line between title and body', function() {
    var message = [
      'Commit message title',
      'Commit message body'
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages with more than 72 characters in any body line', function() {
    var message = [
      'Commit message title',
      '',
      'Commit message body'.repeat(5)
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('should ignore commit message comments', function() {
    var message = [
      'Commit message title',
      '',
      'Commit message body',
      '#' + 'Commit message comment'.repeat(5)
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(0);
  });

  it('should allow empty commit message', function() {
    expect(hook.validateCommitMessage('')).toBe(0);
  });

  it('should accept valid commit message', function() {
    var message = [
      'Commit message title',
      '',
      'Commit message body'
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(0);
  });
});
