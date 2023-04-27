# Solidarity Software JS Monorepo

To encourage consistency in tooling and encourage sharing of code Solidarity Software is using a [monorepo](https://en.wikipedia.org/wiki/Monorepo). Also everything in this repository is covered under the Apache License, v2 license. This means anyone, including the original authors, can use the code in any way they see fit with only minor restrictions. Read the full [license](./LICENSE) for details.

In addition we use the Developer Certification of Ownership 1.1 and require all commits are signed off using the developers real name and email. See the [Contributing](./CONTRIBUTING.md) document.

## Layout of projects

The packages in this project are layed out in sub directories of the packages directory. A recommended way to lay out packages might be:

`packages/{product}/{package1, package2}`

Where `{project}` is a grouping of related packages to realize a particular product. 
