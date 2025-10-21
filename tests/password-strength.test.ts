import { calculatePasswordStrength } from '../src/password-strength';

describe('Calculate password strength', () => {
    test('Very weak for short password', () => {
        expect(calculatePasswordStrength('abc')).toBe('Very Weak');
    });

    test('Very weak for only lowercase letters', () => {
        expect(calculatePasswordStrength('abcdefgh')).toBe('Very Weak');
    });

    test('Weak for password with numbers but short', () => {
        expect(calculatePasswordStrength('Abc123')).toBe('Weak');
    });

    test('Weak for password with numbers but lowercase', () => {
        expect(calculatePasswordStrength('abc12356')).toBe('Weak');
    });

    test('Moderate for longer password with letters, numbers and uppercase', () => {
        expect(calculatePasswordStrength('abcdefGh1')).toBe('Moderate');
    });

    test('Moderate for 13 characters but lowercase', () => {
        expect(calculatePasswordStrength('abcdef1234567')).toBe('Moderate');
    });

    test('Strong for complex password', () => {
        expect(calculatePasswordStrength('Abcdef1!23')).toBe('Strong');
    });

    test('Strong for 13 characters with all types', () => {
        expect(calculatePasswordStrength('Abcd12345!@#$')).toBe('Strong');
    });

    test('Strong for 10 characters with all types', () => {
        expect(calculatePasswordStrength('Abcdef1!23')).toBe('Strong');
    });
});
