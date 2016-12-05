'use strict';

let hook = require('../commit-msg');

describe('commit-msg tests', () => {

  it('shouldn\'t accept commit messages with more than 72 characters in title', () => {
    let message = 'Commit message'.repeat(10);

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages starting with lowercase character', () => {
    let message = 'commit message';

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages title which ends with a period', () => {
    let message = 'Commit message.';

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages without empty line between title and body', () => {
    let message = [
      'Commit message title',
      'Commit message body'
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('shouldn\'t accept commit messages with more than 72 characters in any body line', () => {
    let message = [
      'Commit message title',
      '',
      'Commit message body'.repeat(5)
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(1);
  });

  it('should ignore commit message comments', () => {
    let message = [
      'Commit message title',
      '',
      'Commit message body',
      '#' + 'Commit message comment'.repeat(5)
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(0);
  });

  it('should allow empty commit message', () => {
    expect(hook.validateCommitMessage('')).toBe(0);
  });

  it('should accept valid commit message', () => {
    let message = [
      'Commit message title',
      '',
      'Commit message body'
    ].join('\n');

    expect(hook.validateCommitMessage(message)).toBe(0);
  });
});
