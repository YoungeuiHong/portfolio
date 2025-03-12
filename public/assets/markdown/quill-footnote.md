## 👀 개요
> 💡 Quill 에디터에서 각주 기능을 사용할 수 있도록 모듈을 제공하는 오픈소스 라이브러리입니다.

## 🛠️ 기술 스택
- Quill, Rollup, TypeScript

## 🔗 관련 링크
- [__GitHub__](https://github.com/YoungeuiHong/quill-footnote)
- [__NPM__](https://www.npmjs.com/package/quill-footnote)
- [__CodeSandbox Demo__](https://codesandbox.io/p/github/YoungeuiHong/quill-footnote-demo/main)

## 📄 설치 방법
```bash
npm install quill-footnote
# or
yarn add quill-footnote
```

## 🚀 핵심 기능 & 기술적 구현
### 🔢 자동 넘버링
- 각주 추가 및 삭제 시 본문과 하단 각주 목록의 번호가 자동으로 재정렬되도록 구현함

### 🔄 편집 히스토리 지원
- Undo 및 Redo 시에도 각주 번호와 내용이 정확한 위치와 형태로 복구되도록 Blot 구조 및 Delta 처리 방식을 세밀하게 설계함

### 🖱️ 각주 간 스크롤 이동 지원
- 본문에서 각주 번호 클릭 시 하단의 각주 내용으로, 각주 목록에서 번호 클릭 시 본문의 해당 번호 위치로 이동하는 양방향 스크롤 기능 구현

### 📦 라이브러리 배포
- Rollup을 활용하여 ESM 및 CommonJS 번들로 라이브러리 제공
- 기본 CSS를 함께 배포하여, 별도의 스타일 작업 없이 바로 사용할 수 있도록 함 
