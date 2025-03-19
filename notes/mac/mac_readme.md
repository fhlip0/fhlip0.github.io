##### General Mac

listening ports  
```
lsof -i -P | grep LISTEN | grep :$PORT
```

stop vnc from locking on disconnect - using this to keep Conways game of life running on an old mac mini sparking new "life" everytime port 3389 is hit  
```
sudo defaults write /Library/Preferences/com.apple.RemoteManagement RestoreMachineState -bool NO
```

enable vnc from terminal  
```
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -on -users admin -privs -all -restart -agent -menu
```  

fix go: cannot find GOROOT directory: /usr/local/opt/go/libexec    

```
export GOROOT="$(brew --prefix golang)/libexec"
```

stupid DS store files...   
```
find . -name ".DS_Store" -type f -delete
```

headless resolution change without HDMI dongle   
```
brew install Caskroom/cask/cscreen
cscreen -d 32 -x 1920 -y 1080 -r 60
```  

Mac VM Customizations   
```
### Path bar in finder
defaults write com.apple.finder ShowPathbar -bool true
### Status bar in finder
defaults write com.apple.finder ShowStatusBar -bool true
### ScrollBars bar in finder
defaults write -g AppleShowScrollBars -string “Always”
### Always list style in windows
defaults write com.apple.finder FXPreferredViewStyle -string “Nlsv”
### Clear ALL dock icons
defaults write com.apple.dock persistent-apps -array

```


### Sources
### https://github.com/kevinmcox/outset-scripts
### https://github.com/jcarm010/osx-dock-remover/blob/master/dock-icon-remove.py
### https://apple.stackexchange.com/questions/340348/remove-macos-dock-icon-with-a-command-in-terminal
### https://github.com/sickcodes/osx-optimizer
