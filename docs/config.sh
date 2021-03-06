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
date=`date`
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
read in_name
name=`./json-wrap.js "name" "${in_name}"`
echo "--"
echo "Your module version x.y.z?"
echo ""
read in_version
version=`./json-wrap.js "version" "${in_version}"`
echo "--"
echo "Your module description "
echo "(multi-line use CTRL+D to stop after last description line)?"
echo ""
in_description=$(</dev/stdin)
description=`./json-wrap.js "description" "${in_description}"`
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
  sed -i "/  \"name\": /c\\$name," "$toppwd/package.json"
  sed -i "/  \"version\": /c\\$version," "$toppwd/package.json"
  sed -i "/  \"description\": /c\\$description," "$toppwd/package.json"
  echo "DONE! (results below from grep)"
  echo ""
  cat "$toppwd/package.json" | grep "  \"name\": "
  cat "$toppwd/package.json" | grep "  \"version\": "
  cat "$toppwd/package.json" | grep "  \"description\": "
  echo ""
  echo "Processing [README.md] file..."
  sed -i "s/{npm_module}/$in_name/g" "$toppwd/README.md"
  description_mline=`echo ${in_description} | tr '\n' "\\n"`
  sed -i "s/{npm_module_description}/$description_mline/g" "$toppwd/README.md"
  sed -i "s/{date}/$date/g" "$toppwd/README.md"
else
  echo ""
  echo "The [package] file was NOT changed."
  exit 1
echo ""
fi
exit 0
