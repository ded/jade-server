# Contributing

If you're crazy enough to voluntarily contribute to this, help yourself:

Fork, then clone the repo:

    git clone git@github.com:implose/pug-server.git

You'll need node and npm (or yarn), when both installed:

    npm install

And finally, to ensure the safety of the rest of humanity:

    git checkout develop

Do your magic, but please respect a clean [git flow][gflow], here are the settings I use:
[gflow]: https://github.com/implose/pug-server/blob/master/GFLOW.md
- branch for production: master (so don't use that)
- branch for development: develop (please use that)
- feature branch prefix: feature/
- bugfix branch prefix: bugfix/
- release branch prefix: release/
- hotfix branch prefix: hotfix/
- support branch prefix: support/
- version tag prefix: N/A

Push to your fork and [submit a pull request][pr].

[pr]: https://github.com/implose/pug-server/compare/

At this point you're waiting on me. And 2 possibilities: Cthulhu awakes and I'll never review your PR, or I do someday and accept it / request changes / curse it during a black ritual.

Some things that will increase the chance that your pull request is accepted:

* Write tests.
* Offer sacrifices.
* Write a [good commit message][commit].

[commit]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
