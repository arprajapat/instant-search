const trie =  require('../Trie');

// todo: add more test cases;
describe('Search results when ', () => {
    trie.insert('PhotoFeed', 1, 1);
    trie.insert('photobug', 2,1);
    trie.insert('photojam', 2,2);
    trie.insert('photospace', 3,1);
    trie.insert('photofile', 4,1);

    test('word does not match at all or length is too small to search', () => {
        expect(trie.startsWith('ale').length).toEqual(0);
        expect(trie.startsWith('ph').length).toEqual(0);
    });
    test('word does match partially or full', () => {
        expect(trie.startsWith('photo').length).toEqual(4);
        expect(trie.startsWith('photof').length).toEqual(2);
        expect(trie.startsWith('photofeed').length).toEqual(1);
    });
}) 

