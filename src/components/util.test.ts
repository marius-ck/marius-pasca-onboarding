import { capitalizeLetter } from "./utils";

describe('capitalizeLetter function', () => {
    it('capitalizes the first letter of each word in a string', () => {
        const input = 'hello world';
        const output = capitalizeLetter(input);
        expect(output).toBe('Hello World');
    });

    it('handles multiple spaces between words correctly', () => {
        const input = 'hello    world';
        const output = capitalizeLetter(input);
        expect(output).toBe('Hello    World');
    });

    it('capitalizes a single word correctly', () => {
        const input = 'hello';
        const output = capitalizeLetter(input);
        expect(output).toBe('Hello');
    });

    it('returns an empty string when given an empty string', () => {
        const input = '';
        const output = capitalizeLetter(input);
        expect(output).toBe('');
    });

    it('handles strings with one space correctly', () => {
        const input = ' ';
        const output = capitalizeLetter(input);
        expect(output).toBe(' ');
    });

    it('does not modify already capitalized words', () => {
        const input = 'Hello World';
        const output = capitalizeLetter(input);
        expect(output).toBe('Hello World');
    });

    it('capitalizes words with mixed case correctly', () => {
        const input = 'hElLo wORld';
        const output = capitalizeLetter(input);
        expect(output).toBe('HElLo WORld');
    });
});
