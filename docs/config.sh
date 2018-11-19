#!/usr/bin/env bash
# ---------------------------------------------
# Inputs...
#
clear
echo "+----------------------------------------+"
echo "|  Module configuration helper...        |"
echo "+----------------------------------------+"
echo ""
toppwd=`cd ..; pwd`
NODEVER=`node --version`
if [[ -z "${NODEVER// }" ]]
then
  echo "node is not installed..."
  echo ""
  exit 1
else
  echo "Using node ${NODEVER}..."
  echo ""
fi;
echo "--"
echo "Your module name?"
echo ""
read name
name=`./json-wrap.js "name" "${name}"`
echo "--"
echo "Your module version x.y.z?"
echo ""
read version
version=`./json-wrap.js "version" "${version}"`
echo "--"
echo "Your module description "
echo "(multi-line use CTRL+D to stop after last description line)?"
echo ""
description=$(</dev/stdin)
description=`./json-wrap.js "description" "${description}"`
echo ""
echo "*************************************"
echo "Following are to be added to the "
echo "[package] file of your module..."
echo "  file: package.json"
echo "  path: ${toppwd}"
echo "*************************************"
echo ""
echo "${name}"
echo "${version}"
echo "${description}"
echo ""
echo "--"
echo "Is this correct (Y|N)?"
read yesno
yesno=`echo "$yesno" | tr '[:upper:]' '[:lower:]'`
if [ $yesno = "y" ]; then
  echo ""
  echo "Processing [package] file..."
  echo "DONE!"
  echo ""
else
  echo ""
  echo "The [package] file was NOT changed."
echo ""
fi
exit 0
