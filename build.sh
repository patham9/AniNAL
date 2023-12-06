git clone https://github.com/opennars/OpenNARS-for-Applications
cd ./OpenNARS-for-Applications/
git checkout portability
git stash
git pull
cp ../Config.h ./src/
cp ../NAL.h ./src/
sh build_browser.sh
sh build.sh
cp NAR.wasm ../
cp NAR.js ../
