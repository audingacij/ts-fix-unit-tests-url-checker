import { calculatePasswordStrength } from '../src/password-strength';

describe('Calculate password strength', () => {
    test('Very weak for short password', () => {
        expect(calculatePasswordStrength('abc')).toBe('Very Weak');
    });

    test('Weak for password with numbers but short', () => {
        expect(calculatePasswordStrength('Abc123')).toBe('Weak');
    });

    test('Moderate for longer password with letters', () => {
        expect(calculatePasswordStrength('abcdefGh1')).toBe('Moderate');
    });

    test('Strong for complex password', () => {
        expect(calculatePasswordStrength('Abcdef1!23')).toBe('Strong');
    });


});
