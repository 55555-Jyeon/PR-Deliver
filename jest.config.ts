import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
    // Jest가 테스트 환경에서 사용할 설정 파일
    setupFileAfterEnv: ["<rootDir>/jest.setup.ts"],
    // 테스트 환경을 jsdom으로 지정하여 브라우저 환경을 시뮬레이션
    testEnvironment: "jest-environment-jsdom",
    // 모듈 경로 별칭 설정 (Next.js의 `tsconfig.json`의 paths 설정과 일치하게 맞춘다.)
    moduleNameMapper: {
        "^@components/(.*)$": "<rootDir>/components/$1",
        "^@app/(.*)$": "<rootDir>/app/$1",
    },
    // ts-jest를 사용하여 TypeScript를 트랜스파일
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    // 필요시 확장자 처리 방식 지정 (Next.js와 호환성 유지)
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default createJestConfig(customJestConfig);
