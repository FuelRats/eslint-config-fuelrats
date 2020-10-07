#! /usr/bin/bash

ARGLIST=""
CANARY=false

for opt in "$@";
do
  if [[ "$opt" == "--canary" || "$opt" == "-c" ]]; then
    ARGLIST="$ARGLIST --preid canary"
    CANARY=true
  else
    ARGLIST="$ARGLIST $opt"
  fi
done

if [[ "$CANARY" == true ]]; then
  ARGLIST="${ARGLIST//--major/--premajor}"
  ARGLIST="${ARGLIST//--minor/--preminor}"
  ARGLIST="${ARGLIST//--patch/--prepatch}"
  ARGLIST="${ARGLIST//--release/-prerelease}"
fi

if ! [[ $ARGLIST =~ --((pre)?(major|minor|patch)|prerelease) ]]; then
  if [[ "$CANARY" == true ]]; then
    ARGLIST="$ARGLIST --prerelease"
  else
    ARGLIST="$ARGLIST --patch"
  fi
fi

for dir in `find ./packages -mindepth 1 -maxdepth 1 -type d`
do
  yarn version $ARGLIST --cwd=$dir --no-git-tag-version --no-commit-hooks
done
git add -A
# yarn version $ARGLIST
