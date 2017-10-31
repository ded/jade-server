# Git Flow

## Main branches

  - `master`
  - `develop`

`origin/master` is the main branch where the source code of HEAD always reflects a production-ready state.
`origin/develop` is the main branch where the source code of HEAD always reflects a state with the latest delivered development changes.

When the source code in the `develop` branch reaches a stable point and is ready to be released, it should be merged back into `master`  and tagged with a release number.

## Supporting branches

Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

  - `feature` branches
  - `release` branches
  - `bugfix` branches
  - `hotfix` branches
  - `support` branches

Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets.

### Feature branches

May branch off from: `develop`
Must merge back into: `develop`
Naming convention: `feature/*`

These branches are used to develop new features for a future release. The essence of a feature branch is that it exists as long as the feature is in development, but it will be eventually be merged back into `develop` or discarded.

Feature branches typically exist in developer repos only, not in `origin`.

To start a new feature branch:

    git checkout -b feature/myfeature develop

Finished features may be merged into the develop branch to definitely add them to the upcoming release:

    git checkout develop
    git merge --no-ff myfeature
    git branch -d myfeature
    git push origin develop

The --no-ff flag causes the merge to always create a new commit object, even if the merge could be performed with a fast-forward. This avoids losing information about the historical existence of a feature branch and groups together all commits that together added the feature.

### Release branches

May branch off from: `develop`
Must merge back into: `develop` and `master`
Naming convention: `release/*`

Release branches support preparation of a new production release. They allow for last-minute modifications. Furthermore, they allow for minor bug fixes and preparing meta-data for a release (version number, build dates, etc.). By doing all of this work on a release branch, the `develop` branch is cleared to receive features for the next release.

The key moment to branch off a new release branch from `develop` is when develop (almost) reflects the desired state of the new release. At least all features that are targeted for the release-to-be-built must be merged in to develop at this point in time. All features targeted at future releases may not—they must wait until after the `release` branch is branched off.

It is exactly at the start of a release branch that the upcoming release gets assigned a version number—not any earlier. Up until that moment, the `develop` branch reflected changes for the "next release", but it is unclear whether that "next release" will eventually become 0.3 or 1.0, until the release branch is started. That decision is made on the start of the release branch and is carried out by the project's rules on version number bumping.

To start a new release branch:

    git checkout -b release/version develop

This new branch may exist there for a while, until the release may be rolled out definitely. During that time, bug fixes may be applied in this branch (rather than on the `develop` branch). Adding new features here is strictly prohibited. They must be merged into develop, and therefore, wait for the next release.

When the state of the release branch is ready to become a real release, some actions need to be carried out. First, the release branch is merged into `master` (since every commit on master is a new release by definition, remember). Next, that commit on `master` must be tagged for easy future reference to this historical version. Finally, the changes made on the release branch need to be merged back into `develop`, so that future releases also contain these bug fixes.

To finish a release branch:

    git checkout master
    git merge --no-ff release/version
    git tag -a version

This step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit.

And delete the release branch:

    git branch -d release/version

### Bugfix branches

May branch off from: `develop`
Must merge back into: `develop`
Naming convention: `bugfix/*`

Bugfix branches are used to fix undectected features bug before making it to a release branch.

The essence is that work of team members (on the `develop` branch) can continue, while another person is fixing the features already merged.

To start a new bugfix branch:

    git checkout -b bugfix/mypatch master

Correct the fix in one or several commits:

    git commit -m "fix problem"

To finish a bugfix branch:

    git checkout develop
    git merge --no-ff bugfix/mypatch

And delete the bugfix branch:

    git branch -d bugfix/mypatch

### Hotfix branches

May branch off from: `master`
Must merge back into: `develop` and `master`
Naming convention: `hotfix/*`

Hotfix branches are very much like release branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version. When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the `master` branch that marks the production version.

The essence is that work of team members (on the `develop` branch) can continue, while another person is preparing a quick production fix.

To start a new hotfix branch:

    git checkout -b hotfix/mypatch master

Correct the fix in one or several commits:

    git commit -m "fix severe production problem"

To finish a hotfix branch:

    git checkout master
    git merge --no-ff hotfix/mypatch
    git tag -a version
    git checkout develop
    git merge --no-ff hotfix/mypatch

The one exception to the rule here is that, when a release branch currently exists, the hotfix changes need to be merged into that release branch, instead of `develop`. Back-merging the bugfix into the release branch will eventually result in the bugfix being merged into `develop` too, when the release branch is finished. (If work in develop immediately requires this bugfix and cannot wait for the release branch to be finished, you may safely merge the bugfix into `develop` now already as well.)

And delete the hotfix branch:

    git branch -d hotfix/mypatch

### Support branches

May branch off from: a specific tag on `master`
Must not specifically be merged back
Naming convention: `support/*`

Support branches are used when for some reasons, people didn't upgrade to the latest release and still need some bugfix. It is somehow a LTS version of an elder release.

To start a new support branch:

    git checkout -b support/version tag

Then you might want to create a hotfix branch based on this support branch but merge back to it when finished:

    git checkout -b hotfix/mypatch support/version
    git commit -m "fix severe production problem"
    git checkout support/version
    git merge --no-ff hotfix/mypatch
    git branch -d hotfix/mypatch
    git tag -a version

I didn't wrote all from myself, the internets helped me a lot. So thank you, you. If you recognize yourself.