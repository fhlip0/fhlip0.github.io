I followed this run down which got me up and running on a personal gitlab instance easiest  

https://colab.pages.oit.duke.edu/-/external-docs/-/jobs/31499/artifacts/_book/guides/ci.html

Basically ended up being:

ubuntu server as runner:
```

npm install -g gitbook
sudo apt-get install apache2
```  
install the runner  
https://docs.gitlab.com/runner/install/   
```
sudo rm /var/www/html/*
sudo chown root:gitlab-runner /var/www/html
sudo chmod 775 /var/www/html
sudo gitlab-ci-multi-runner register


```




new project on gitlab
clone repo down
gitbook init
setup gitlab yaml
<details>
<summary>example yaml</summary>
<br>
```
image: node:6

build:
    stage: build
    artifacts:
        paths:
         - _book
    script: 
     - npm install gitbook-cli && node node_modules/gitbook-cli/bin/gitbook.js build
    tags:
     - build-capable

test:
    stage: test
    script: 
     - echo "no tests."
    tags:
     - test-capable

deploy:
    stage: deploy
    script:
     - rm -rf /var/www/html/*
     - cd _book
     - cp -rf . /var/www/html
     - echo "this is where it'll distribute itself wherever is necessary!"
    tags:
     - deploy-capable
    only: 
     - master
```
</details>


To work locally with this project, you'll have to follow the steps below:

```  
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 9
npm install gitbook-cli -g  
```  
clone this repo and cd into it  
```  
gitbook build  
gitbook serve  
```

## To edit or add pages
create a new folder per post
add readme or just content

images should use an img src tag to avoid issues
```
<img src="relative_path" alt="img"/>
```




https://gitlab.com/pages/gitbook   
https://docs.gitlab.com/runner/install/