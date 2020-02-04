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

yarn workspaces run version $ARGLIST --no-git-tag-version --no-commit-hooks
git add -A
yarn version $ARGLIST
