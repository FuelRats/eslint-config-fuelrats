#! /usr/bin/bash

ARGLIST=""
CANARY=false

for opt in "$@";
do
  if [[ "$opt" == "--canary" || "$opt" == "-c" ]]; then
    CANARY=true
  else
    ARGLIST="$ARGLIST $opt"
  fi
done

yarn workspaces foreach version $ARGLIST --deferred
yarn version $ARGLIST --deferred

if [[ "$CANARY" == true ]]; then
  yarn version apply --all --prerelease="canary.%n"
else
  yarn version apply --all
fi
