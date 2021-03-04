#do not call this script directly, will be called on npm publish
if (Test-Path ./testDir) {
    Remove-Item -Recurse -Force ./testDir
    echo "test path deleted"
    echo ""
}
else {
    echo "test path is clear"
}
git add .
git commit -m 'patch'
git push origin master
npm version patch