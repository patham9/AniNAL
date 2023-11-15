git clone https://github.com/opennars/OpenNARS-for-Applications
cd ./OpenNARS-for-Applications/
git checkout portability
cp ../NAL.h ./src/
sh build_browser.sh
sh build.sh
