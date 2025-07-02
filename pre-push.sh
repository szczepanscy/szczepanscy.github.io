#!/bin/bash
set -e

SOURCE_DIR="./dist"
DEST_DIR="./docs"

yarn install
yarn build

echo "Kopiowanie $SOURCE_DIR do $DEST_DIR ..."

rm -rf "$DEST_DIR"
cp -r "$SOURCE_DIR" "$DEST_DIR"

echo "Gotowe! Folder 'docs' został zaktualizowany."

git add docs

git commit -m "Update docs catalog"

echo "Zmiany docs wrzucone do commita"