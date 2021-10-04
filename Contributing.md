# Contributing

All changes should take place in a separate branch submitted to the main in the form of a _pull request_.

## Steps:

1. Create a new Branch.

```sh
# substitute branchName with whatever suits you
git checkout -b branchName
```

2. After commiting your changes, rebase to make sure you have the latest changes from the main.

```sh
git rebase main
```

3. Push your branch to the origin. Git will output a link for creating a _pull request_

```sh
git push -u origin branchName
```

4. After creating a pull request and your changes had been successfully merged into the main branch, your branch will be deleted at the origin (Online) but not locally, so make sure you clean up your local.

```sh
git branch -D branchName
```

Useful commit messages that describe what you have been working on are greatly appreciated, [here](https://www.conventionalcommits.org/en/v1.0.0/#summary) is a really great guide for writting a helpful commit message.
