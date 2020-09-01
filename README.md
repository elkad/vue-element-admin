## Getting started

npm install
npm run dev

This will automatically open http://localhost:9527


## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```


## Online Demo

[Preview](https://panjiachen.github.io/vue-element-admin)


## 화면 추가 방법 (아래 사이트 참고)

https://tech-cci.io/archives/4532
https://panjiachen.github.io/vue-element-admin-site/guide/essentials/new-page.html#create-component


## 배포 준비 인스톨

1. https://aws.amazon.com/ko/cli/ -> aws cli 설치
2. https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-configure-files.html -> aws configure 설정 (Access key ID,Secret access key)
https://webruden.tistory.com/115 -> 참고 블로그


## 배포 

샌박 배포 -> npm run deploy:stage
리얼 배포 -> npm run deploy:prod