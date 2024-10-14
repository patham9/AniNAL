git clone https://github.com/opennars/OpenNARS-for-Applications
cd ./OpenNARS-for-Applications/
git checkout portability
git stash
git pull
cp ../Config.h ./src/
sh build.sh
echo "Now building optional browser demos:"
sh build_browser.sh
cp NAR.wasm ../
cp NAR.js ../
