@echo off
setlocal enabledelayedexpansion

REM Go into photos folder
cd /d "%~dp0photos"

echo =====================================
echo Counting photo files
echo =====================================

set total=0

for %%f in (p*.jpg) do (
    set /a total+=1
)

echo Found !total! photos.
echo.

echo =====================================
echo STEP 1 - Temporary rename
echo =====================================

set tempIndex=0

REM Preserve original numeric order
for /L %%i in (1,1,!total!) do (

    if exist "p%%i.jpg" (

        set /a tempIndex+=1

        echo p%%i.jpg ^> __temp_!tempIndex!.jpg

        ren "p%%i.jpg" "__temp_!tempIndex!.jpg"
    )
)

echo.
echo =====================================
echo STEP 2 - Sequential rename
echo =====================================

for /L %%i in (1,1,!tempIndex!) do (

    echo __temp_%%i.jpg ^> p%%i.jpg

    ren "__temp_%%i.jpg" "p%%i.jpg"
)

echo.
echo =====================================
echo COMPLETE
echo =====================================

echo Final total photos = !tempIndex!
echo.
echo Update React file:
echo const TOTAL_PHOTOS = !tempIndex!;
echo.

pause