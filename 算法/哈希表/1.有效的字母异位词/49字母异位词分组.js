function groupAnagrams(strs) {
    const m = new Map();
    for (const s of strs) {
        // 排序字符并生成键
        const sortedS = s.split('').sort().join('');
        // 确保键对应的值是数组
        if (!m.has(sortedS)) {
            m.set(sortedS, []);
        }
        // 将 s 添加到对应的数组中
        m.get(sortedS).push(s);
    }
    return [...m.values()];
}