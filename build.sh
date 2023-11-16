git clone https://github.com/opennars/OpenNARS-for-Applications
cd ./OpenNARS-for-Applications/
git checkout portability
cp ../Config.h ./src/
sh build_browser.sh
sh build.sh
cp NAR.wasm ../
cp NAR.js ../
