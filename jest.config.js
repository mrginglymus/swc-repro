export default {
    cache: false,
    transform: {
        "^.+\\.m?(t|j)sx?$": "@swc/jest"
    },
    testPathIgnorePatterns: ["/node_modules/"],
}
